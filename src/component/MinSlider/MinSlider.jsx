import "./css/Minslider.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function MinSlider() {
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
            <div className="min-1">
                <div className="minslider-container">
                    <div className="min-slider">
                        <img className="min-img" src="/src/component/MinSlider/img/prd-front-1353604-365x385.png" alt="" />
                    </div>
                    <span className="min-cardText">Nip+Fab Fix Extreme4 Hyalüronik 2% Serum 30 ml</span>
                    <div className="min-cardprice">
                        <div className="min-price">
                            <span>449,90₺</span>
                        </div>
                    <div className="min-club">
                        <span>Club ile</span>
                        <p>250,00₺</p>
                    </div>
                    </div>
                    <button className="min-button">Sepete Ekle</button>
                </div>  
            </div>
            <div className="min-1">
                <div className="minslider-container">
                    <div className="min-slider">
                        <img className="min-img" src="/src/component/MinSlider/img/prd-front-1353604-365x385.png" alt="" />
                    </div>
                    <span className="min-cardText">Nip+Fab Fix Extreme4 Hyalüronik 2% Serum 30 ml</span>
                    <div className="min-cardprice">
                        <div className="min-price">
                            <span>449,90₺</span>
                        </div>
                    <div className="min-club">
                        <span>Club ile</span>
                        <p>250,00₺</p>
                    </div>
                    </div>
                    <button className="min-button">Sepete Ekle</button>
                </div>  
            </div>
            <div className="min-1">
                <div className="minslider-container">
                    <div className="min-slider">
                        <img className="min-img" src="/src/component/MinSlider/img/prd-front-1353604-365x385.png" alt="" />
                    </div>
                    <span className="min-cardText">Nip+Fab Fix Extreme4 Hyalüronik 2% Serum 30 ml</span>
                    <div className="min-cardprice">
                        <div className="min-price">
                            <span>449,90₺</span>
                        </div>
                    <div className="min-club">
                        <span>Club ile</span>
                        <p>250,00₺</p>
                    </div>
                    </div>
                    <button className="min-button">Sepete Ekle</button>
                </div>  
            </div>
            <div className="min-1">
                <div className="minslider-container">
                    <div className="min-slider">
                        <img className="min-img" src="/src/component/MinSlider/img/prd-front-1353604-365x385.png" alt="" />
                    </div>
                    <span className="min-cardText">Nip+Fab Fix Extreme4 Hyalüronik 2% Serum 30 ml</span>
                    <div className="min-cardprice">
                        <div className="min-price">
                            <span>449,90₺</span>
                        </div>
                    <div className="min-club">
                        <span>Club ile</span>
                        <p>250,00₺</p>
                    </div>
                    </div>
                    <button className="min-button">Sepete Ekle</button>
                </div>  
            </div>
            <div className="min-1">
                <div className="minslider-container">
                    <div className="min-slider">
                        <img className="min-img" src="/src/component/MinSlider/img/prd-front-1353604-365x385.png" alt="" />
                    </div>
                    <span className="min-cardText">Nip+Fab Fix Extreme4 Hyalüronik 2% Serum 30 ml</span>
                    <div className="min-cardprice">
                        <div className="min-price">
                            <span>449,90₺</span>
                        </div>
                    <div className="min-club">
                        <span>Club ile</span>
                        <p>250,00₺</p>
                    </div>
                    </div>
                    <button className="min-button">Sepete Ekle</button>
                </div>  
            </div>
            </Carousel>
            </div>
        </>
    )

}