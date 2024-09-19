document.getElementById('registerBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    document.getElementById('registrationForm').style.display = 'block'; // Показываем форму регистрации
});

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Здесь вы можете отправить данные на сервер или провести валидацию
    console.log('Имя пользователя:', username);
    console.log('Пароль:', password);

    alert('Регистрация прошла успешно!'); // Уведомление об успешной регистрации

    // После успешной регистрации можно скрыть форму
    document.getElementById('registrationForm').style.display = 'none';
});