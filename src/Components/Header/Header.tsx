import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="nav-container">
                    {/*<div className="address">*/}
                    {/*    Адрес: 673200, РФ, Забайкальский кр., г. Хилок, ул. Октябрьская, пом.2*/}
                    {/*</div>*/}
                    <nav className="navMenu">
                        <a href="#advantages">Преимущества</a>
                        <a href="#specialists">Специалисты</a>
                        <a href="#services">Услуги</a>
                        <a href="#license">Лицензия</a>
                        <div className="dot"></div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;