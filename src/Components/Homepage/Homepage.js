import React from 'react';
import SliderContainer from "../Body/Slider_component/SliderContainer";
import BodyBack from "../../img/Body_Backgr/backg.jpg"
import SliderLicences from "../SliderLicences/SliderLicences";

const Homepage = () => {
    return (
        <div>
            <div className="body_background">
                <img src={BodyBack} alt=""/>
            </div>
            <SliderContainer/>
            <div className="info">
                <span id="advantages" className="anchor"/>
                <div className="info-container">
                    <div className="info_content-container">
                        <div className="title_text">
                            Преимущества
                        </div>
                        <div className="content-container">
                            контент
                        </div>
                        <div className="content-container">

                        </div>
                    </div>
                </div>
            </div>
            <div className="specialists">
                <span id="specialists" className="anchor"/>
                <div className="specialists-container">
                    <div className="title_text">
                        Специалисты
                    </div>
                    <div className="content-container">
                        контент
                    </div>
                </div>
            </div>
            <div className="services">
                <span id="services" className="anchor"/>
                <div className="services-container">
                    <div className="title_text">
                        Услуги
                    </div>
                    <div className="content-container">
                        контент
                    </div>
                </div>
            </div>
            <div className="license">
                <span id="license" className="anchor"/>
                <div className="license-container">
                    <div className="title_text">
                        Лицензии
                    </div>
                    <div className="content-container">
                        <SliderLicences/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Homepage;