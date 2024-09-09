from sqlite3 import Error
import psycopg2
from abc import ABC, abstractmethod


class DataClient(ABC):
    @abstractmethod
    def get_connection(self):
        pass

    @abstractmethod
    def create_games_table(self, conn):
        pass

    @abstractmethod
    def get_items(self, conn, price_from=0, price_to=100000):
        pass

    @abstractmethod
    def insert(self, conn, link, price, description):
        pass

    def run(self):
        conn = self.get_connection()
        self.create_games_table(conn)
        items = self.get_items(conn)
        for item in items:
            print(item)
        conn.close()


class PostgresClient(DataClient):
    USER = "postgres"
    PASSWORD = "postgres"
    HOST = "127.0.0.1"
    PORT = "5432"

    def get_connection(self):
        try:
            connection = psycopg2.connect(
                user="postgres",
                password="postgres",
                host="127.0.0.1",
                port="5432"
            )
            return connection
        except Error:
            print(Error)

    def create_games_table(self, conn):
        cursor_object = conn.cursor()
        cursor_object.execute(
            """
                CREATE TABLE IF NOT EXISTS game
                (
                    id serial PRIMARY KEY,
                    name text,
                    link text,
                    price integer, 
                    description text,
                    link_img text
                )
            """

        )
        conn.commit()

    def get_items(self, conn):
        cursor = conn.cursor()
        cursor.execute(f'SELECT * FROM game ')
        return cursor.fetchall()

    def insert(self, conn, name, link, price, description, link_img):
        cursor = conn.cursor()
        cursor.execute(
            f"INSERT INTO game (name, link, price, description, link_img) VALUES ('{name}', '{link}', '{price}', '{description}', '{link_img}')")
        conn.commit()
