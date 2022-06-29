import one_Lic from "../../img/Licences/IMG-20220614-WA0000.jpg"
import two_Lic from "../../img/Licences/IMG-20220614-WA0001.jpg"
import three_Lic from "../../img/Licences/IMG-20220614-WA0002.jpg"
import four_Lic from "../../img/Licences/IMG-20220614-WA0003.jpg"

import Carousel from 'carousel-react-rcdev'

let setActive=(e)=>{
    if(e.currentTarget.className==="lic_img-container"){
        e.currentTarget.className="lic_img-container__active"
    }else {
        e.currentTarget.className="lic_img-container"
    }
}


let SliderLicences = () => {
    return (
        <div className="carousel">
            <div onClick={(e)=>setActive(e)}  className="lic_img-container">
                <img src={one_Lic} alt='imagem' title='imagem'/>
            </div>
            <div onClick={(e)=>setActive(e)} className="lic_img-container">
                <img src={two_Lic} alt='imagem' title='imagem'/>
            </div>
            <div onClick={(e)=>setActive(e)} className="lic_img-container">
                <img src={three_Lic} alt='imagem' title='imagem'/>
            </div>
            <div onClick={(e)=>setActive(e)} className="lic_img-container">
                <img src={four_Lic} alt='imagem' title='imagem'/>
            </div>
        </div>
    )
}
export default SliderLicences