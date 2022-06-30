import React from 'react';
import Map from "../../img/map.jpg"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div>
                    <div className="footer_info">
                        <ul>
                            <div className="content_text">
                                Контакты
                            </div>
                            <li>Отделение №1</li>
                            <li>Телефоны клиники: <a href="tel:+79242753407" className="z phone"
                                                     data-ct-origin-href="tel:89242753407"
                                                     data-ct-origin-phone="7 (9242) 75-34-07">+7 (924) 275 37 07</a>
                                <br/><a href="tel:+79144877300" className="z phone"
                                        data-ct-origin-href="tel:89144877300"
                                        data-ct-origin-phone="7 (9144) 87-73-00">+7 (914) 487 73 00</a>
                                <br/><a href="tel:+79242753169" className="z phone"
                                        data-ct-origin-href="tel:89242753169"
                                        data-ct-origin-phone="7 (9242) 75-31-69">+7 (924) 275 31 69</a>
                            </li>
                            <li>Можно записаться на удобное для Вас время.</li>
                            <li>Адрес: Хилок, Октябрьская ул., 1</li>
                            <li>Часы работы: с 9:30 до 16:00 пн-пт</li>
                        </ul>
                        <div className="map">
                            <a href="https://yandex.ru/maps/-/CCUN4RWEoB" target="_blank">
                                <img src={Map} alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer