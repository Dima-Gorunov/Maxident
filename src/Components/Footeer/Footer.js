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
                            <li>Телефон клиники <a href="tel:+79244737338" className="z phone"
                                                   data-ct-origin-href="tel:89244737338"
                                                   data-ct-origin-phone="7 (9244) 73-73-38">+7 (924) 473 73 38</a>
                            </li>
                            <li>Можно записаться на удобное для Вас время.</li>
                            <li>Адрес: Хилок, Советская ул., 26</li>
                            <li>Часы работы: с 9:00 до 20:00 пн-пт, в сб с 9:00 до 14:00</li>
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