import requests
from bs4 import BeautifulSoup
import re
import data_client


class Parser:
    CSV = 'game.csv'
    HOST = 'https://zaka-zaka.com/'
    URL = 'https://zaka-zaka.com/search/'
    HEADERS = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image'}

    data_client_imp = data_client.PostgresClient()

    @staticmethod
    def get_html(url, params=''):
        r = requests.get(url, headers=Parser.HEADERS, params=params)
        return r

    @staticmethod
    def parse_items(base_url, total_items, item_per_page=10):
        game = []
        for offset in range(0, total_items, item_per_page):
            url = f"{base_url}/offset/{offset}"
            response = requests.get(url)
            soup = BeautifulSoup(response.content, 'html.parser')
            items = soup.find_all('a', class_='game-block')
            for item in items:
                game.append((
                    item.find('div', class_='game-block-name').get_text(strip=True),  # Берёт имя
                    item.get('href'),  # Берёт ссылку
                    item.find('div', class_='game-block-prices').find('div', class_='game-block-price').get_text(),
                    # Берёт цену
                    item.find('div', class_='game-block-desc').get_text(strip=True),  # Берёт описание
                    item.find('div', class_='game-block-image')  # Берёт картинку
                ))
        extracted_games = []

        for g in game:
            # Используем регулярное выражение для извлечения URL из строки
            match = re.search(r'url\((.*?)\)', str(g[4]))
            if match:
                image_url = match.group(1).strip(" '\"")  # Убираем лишние кавычки если есть
                extracted_games.append((g[0], g[1], g[2].replace(' c', ''), g[3],
                                        Parser.HOST + image_url))  # Добавляем URL к оставшейся информации о игре

        return extracted_games

    def save_to_postgres(self, games_items):
        connection = self.data_client_imp.get_connection()
        self.data_client_imp.create_games_table(connection)  # Создаем таблицу, если она не существует
        for item in games_items:
            self.data_client_imp.insert(connection, item[0].replace("'s", "s"), item[1], item[2], item[3], item[4])

    def run(self):
        all_elements = self.parse_items(Parser.URL, total_items=10)
        self.save_to_postgres(all_elements)


Parser().run()
