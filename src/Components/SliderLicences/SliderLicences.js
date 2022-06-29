import one_Lic from "../../img/Licences/IMG-20220614-WA0000.jpg"
import two_Lic from "../../img/Licences/IMG-20220614-WA0001.jpg"
import three_Lic from "../../img/Licences/IMG-20220614-WA0002.jpg"
import four_Lic from "../../img/Licences/IMG-20220614-WA0003.jpg"

import Carousel from 'carousel-react-rcdev'

let SliderLicences = () => {
    return (
        <Carousel>
            <div className="lic_img-container">
                <img src={one_Lic} alt='imagem' title='imagem'/>
            </div>
            <div className="lic_img-container">
                <img src={two_Lic} alt='imagem' title='imagem'/>
            </div>
            <div className="lic_img-container">
                <img src={three_Lic} alt='imagem' title='imagem'/>
            </div>
            <div className="lic_img-container">
                <img src={four_Lic} alt='imagem' title='imagem'/>
            </div>
        </Carousel>
    )
}
export default SliderLicences