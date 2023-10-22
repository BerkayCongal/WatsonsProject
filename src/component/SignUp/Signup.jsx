import"/src/component/Header.css"
import Advertising from "../Advertising/Advertising"
import { Link } from "react-router-dom"
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import  Favoir from"/src/Animations/Favoir.json"
import New from "/src/Animations/New.json"
import Car from "/src/Animations/Car.json"
import { useRef } from "react";


export default function Signup () {
    const signFavori = useRef()
    return(
        <>   
                <Advertising/>
            <div className="signup">
                <div className="signup-container">
                    <div className="new-sign">
                        <h2>Watson da yeni misiniz?</h2>
                        <p>Sadece 3 dakika içerisinde hesabınızı oluşturun!</p>
                        <form className="sign-form">
                        <input type="text" name="email"  placeholder="E-posta" />
                        <input type="password" name="password" placeholder="Şifre"/>
                        <input type="password" name="password" placeholder="Şifre Onlaylayın"/>
                        <input type="number" name="number" placeholder="Telefon Numarası" />
                        <Link to={"/login"}><button>Üye Ol</button></Link>
                        </form>
                    </div>

                    <div className="sign-Favorite">
                        <h2 className="sign-animation"><Player
                                autoplay
                                loop
                                ref={signFavori}
                                src={New}
                                style={{ height: '100px', width: '100px' }}
                                >
                        </Player>Kapmpanyalar ve size özel fırsatlardan haberdar olun</h2>
                        
                        <h2 className="sign-animation"><Player
                                autoplay
                                loop
                                ref={signFavori}
                                src={Favoir}
                                style={{ height: '100px', width: '100px' }}
                                >
                        </Player>Favorilerinize hızlıca ulaşın</h2>
                        
                        <h2 className="sign-animation"><Player
                                autoplay
                                loop
                                ref={signFavori}
                                src={Car}
                                style={{ height: '100px', width: '100px' }}
                                >
                        </Player>Önceki siparışlerinizi görüntüleyin</h2>
                        
                    </div> 
                </div>
            </div>
            
        </>
    )
}
