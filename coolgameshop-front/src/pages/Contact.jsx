import React from "react";


const Contact = () => {
    return (
        <div style={{padding: '70px'}}>
            <div className="contact-info">
                <h2>Мы всегда рады помочь вам!</h2>
                <p>Если у вас есть вопросы, предложения или вам нужна помощь, не стесняйтесь обращаться к нам. Наша
                    команда
                    готова ответить на ваши запросы и предоставить необходимую поддержку.</p>


                <h3>Телефон:</h3>
                <p>+7 (123) 456-78-90</p>

                <h3>Электронная почта:</h3>
                <p>info@coolgameshop.com</p>


                <h3>Социальные сети:</h3>
                <div className="social-links">
                    <ul>
                        <li><a href="https://facebook.com">Facebook</a></li>
                        <li><a href="https://instagram.com">Instagram</a></li>
                        <li><a href="https://twitter.com">Twitter</a></li>
                    </ul>
                </div>
                <h3>Форма обратной связи:</h3>
                <form action="" method="post">
                    <div style={{margin: '20px'}}>
                        <input type="text" name="name" placeholder="Ваше имя" required/>
                        </div>
                    <div style={{margin: '20px'}}>
                        <input type="email" name="email" placeholder="Ваша электронная почта" required/>
                        </div>
                    <textarea name="message" rows="5" placeholder="Ваше сообщение" style={{margin: '20px'}} required></textarea>
                    <button type="submit" >Отправить</button>
                </form>
            </div>
        </div>
    );
};

export {Contact};