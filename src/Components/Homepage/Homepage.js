import React from 'react';
import SliderContainer from "../Body/Slider_component/SliderContainer";
import BodyBack from "../../img/Body_Backgr/backg.jpg"
import SliderLicences from "../SliderLicences/SliderLicences";
import Plug from "../../img/plug.jpg"
import Female from "../../img/female.jpg"
import Male from "../../img/male.png"

const Homepage = () => {
    return (
        <div>
            <div className="body_background">
                <img src={BodyBack} alt={Plug}/>
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
                            <div style={{
                                display: "flex",
                                justifyContent: "space-around",
                                flexWrap: "wrap",
                                width: "100%"
                            }}>
                                <div style={{maxWidth: "400px", display: "flex", marginBottom: "30px"}}>
                                    <div>
                                        <img style={{width: "70px"}}
                                             src="https://static.tildacdn.com/lib/tildaicon/64316563-3364-4931-a466-643437303031/tooth.svg"
                                             alt={Plug}/>
                                    </div>
                                    <div>
                                        <div className="content_text">
                                            Помогаем получить налоговый вычет
                                            на лечение зубов
                                        </div>
                                        <div className="sub_title">
                                            Вы может получить Социальный налоговый вычет — 13 % от оплаченной суммы .
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}} >
                        <div className="content-container">
                            <div className="text-container">
                                <div className="title_text">
                                    Максимова Ольга Александровна
                                </div>
                                <div className="content_text">
                                    Врач-стоматолог-терапевт
                                </div>
                            </div>
                            <div className="specialists_img">
                                <img src={Female} alt=""/>
                            </div>
                        </div>
                        <div className="content-container">
                            <div className="text-container">
                                <div className="title_text">
                                    Максимов Игорь Владиславович
                                </div>
                                <div className="content_text">
                                    Врач-стоматолог-ортопед
                                </div>
                            </div>
                            <div className="specialists_img">
                                <img src={Male} alt=""/>
                            </div>
                        </div>
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
                        <div className="service_component">
                            <div className="img_hov">

                                <div className="title_text">
                                    Лечение зубов
                                </div>
                                <img
                                    src="https://sun1-98.userapi.com/s/v1/if1/8CNUUqetZgToiYqMaUb17ipEShZ_Ri7V1WI-FYdiPzrgezVskcVCh-t_qkam0GD3Joz2eWG7.jpg?size=400x400&quality=96&crop=0,51,639,639&ava=1"
                                    alt={Plug}/>
                            </div>
                        </div>
                        <div className="service_component">
                            <div className="img_hov">

                                <div className="title_text">
                                    Лечение кариеса
                                </div>
                                <img
                                    src="https://artdental.su/images/profilaktichesky-osmotr-stomatolog.jpg"
                                    alt={Plug}/>
                            </div>
                        </div>
                        <div className="service_component">
                            <div className="img_hov">
                                <div className="title_text">
                                    Профессиональная чистка зубов
                                </div>
                                <img
                                    src="https://foto.haberler.com/haber/2011/11/12/dr-arslan-estetik-turizminde-dis-tedavileri-3119001_5111_o.jpg"
                                    alt={Plug}/>
                            </div>
                        </div>
                        <div className="service_component">
                            <div className="img_hov">
                                <div className="title_text">
                                    Отбеливание зубов
                                </div>
                                <img
                                    src="https://cdn1.dailyhealthpost.com/wp-content/uploads/2014-06-27-new-tooth-decay-treatment-will-make-fillings-unnecessary-main.jpg"
                                    alt={Plug}/>
                            </div>
                        </div>
                        <div className="service_component">
                            <div className="img_hov">
                                <div className="title_text">
                                    Протезирование зубов
                                </div>
                                <img
                                    src="https://www.drbicuspid.com/user/images/content_images/nws_rad/2016_10_27_16_52_51_163_male_dentist_female_patient_400.jpg"
                                    alt={Plug}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="license">
                <span id="license" className="anchor"/>
                <div className="license-container">
                    <div className="title_text">
                        Лицензия
                    </div>
                    <div className="content-container">
                        <SliderLicences/>
                    </div>
                </div>
            </div>
            <div style={{textAlign: "center", marginBottom: "50px", padding: "0 15px"}}>
                <div className="content_text" style={{marginBottom: "10px"}}>
                    Имеются противопоказания. Необходима консультация специалиста.
                </div>
                <div className="sub_title">
                    Лицензия на осуществление медицинской деятельности ЛО-75-01-000628 от 28 марта 2013 года.
                </div>
            </div>
        </div>
    );
};

export default Homepage;