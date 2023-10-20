import React, { useRef } from 'react'; 
import "./css/basket.css"
import { Steps } from 'primereact/steps';
import Cargo from"/src/Animations/Animation - 1697670627472.json"
import { Link } from "react-router-dom";
import { Player, Controls } from '@lottiefiles/react-lottie-player';




export default function Basket () {
    const nameRef = useRef()
    
    const items = [
        {
            label: 'Ürün Paketleniyor',
           
        },
        {
            label: 'Kargoya verildi'
        },
        {
            label: 'Teslim edildi.'
        },
        
    ];
    return(
        <>
            <div className="card">
             <Steps model={items} />
             
            </div>
            
           <div className='control-nav'>
           <div className='container-link'>
           <Link to={"/"}><p lassName='control-link'>
            <Player 
                    autoplay
                    loop
                    ref={nameRef}
                    src={Cargo}
                    style={{ height: '100px', width: '100px' }}
                    >selam
            </Player>Alışverişime Geri Dön
            </p></Link>
            <div>
                <h1>Sepetindeki Ürünler</h1>
            </div>
           </div>
            
            <div className='card-price'>
                <div>
                    <div className='card-container'>
                        <div className='all-price'>
                            <span>Ara toplam</span>
                            <span>0,00TL</span>
                        </div>
                        <div className='basketprice'>
                            <h3>Toplam</h3>
                            <span>0.00TL</span>
                        </div>
                    </div>
                    <button className='pricebutton'>Alışverişi Tamamla</button>
                </div>
                
            </div>
           </div>
                
        </>
    )
}