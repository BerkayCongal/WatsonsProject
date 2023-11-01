import React from "react";
import "./css/Minslider.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function MinSlider() {

    const sliderData = [
        {
            id: 1,
            img:"/src/component/MinSlider/img/prd-front-1353604-365x385.png",
            title:"Nip+Fab Fix Extreme4 Hyalüronik 2% Serum 30 ml",
            price:449.32,
            clubprice: 250.00
        },
        {
            id: 2,
            img:"/src/component/MinSlider/img/prd-front-1338995-365x385.png",
            title:"Unfilter Beauty Oje  Sedefli Şeffaf No: 103",
            price:35.35,
            clubprice: 150.00,
        },
        {
            id: 3,
            img:"/src/component/MinSlider/img/prd-front-1338918-365x385.png",
            title:"Unfilter Beauty Oje Mavi No: 43",
            price:39.35,
            clubprice: 160.00,
        },
        {
            id:4,
            img:"/src/component/MinSlider/img/prd-front-1338911-365x385.png",
            title:"Unfilter Beauty Oje  Açık Mavi No: 42",
            price: 35.95,
            clubprice: 22.95,
        }
    ]


        let renderData = sliderData.map(x => {
            
            return(
                <li className="id" key={x.id}>
                       <div className="min-1">
                <div className="minslider-container">
                    <div className="min-slider">
                      <img className="min-img" src={x.img}/>
                    </div>
                    <span className="min-cardText">{x.title}</span>
                    <div className="min-cardprice">
                        <div className="min-price">
                            <span>{x.price}₺</span>
                        </div>
                    <div className="min-club">
                        <span>Club ile</span>
                        <p>{x.clubprice}₺</p>
                    </div>
                    </div>
                    <button className="min-button">Sepete Ekle</button>
                </div>  
            </div> 
                </li>
            )
        })

    const responsive = {
        superLargeDesktop: {

          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
     
    return(
        <>
            <div>
            <Carousel responsive={responsive}>
                {renderData}
           
            </Carousel>
            </div>
        </>
    )

}