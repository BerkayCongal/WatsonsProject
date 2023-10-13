import SliderCont from "../Sliderimg/Slider"
import "./container.css"



export default function Container() {
   
    return(
        <> 
            <div className="mainTop">
                
                <div className="filter">
                    <h4><img src="/src/component/Container/img/sipari-takibi1.png" alt="" />Sipariş Takip</h4>
                    <h4><img src="/src/component/Container/img/magazalar.png" alt="" />Mağazalar</h4>
                    <h4> <img src="/src/component/Container/img/katalog.png" alt="" />Katalog</h4>
                    <h4> <img src="/src/component/Container/img/teslimat-ve-deme.png" alt="" />Teslimat/Ödeme</h4>
                    <h4> <img src="/src/component/Container/img/top-blog.avif" alt="" />Blog</h4>
                </div>
                <div className="headerlog">
                    <img src="/src/component/Container/img/Pure-beuaty-.png" alt="" />
                </div>
                <div>
                        <SliderCont/>
                </div>
            
            </div>
        </>
    )
}


