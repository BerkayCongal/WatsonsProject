import"/src/component/Header.css"
import Advertising from "../Advertising/Advertising"
import { Link, useNavigate } from "react-router-dom"
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import  Favoir from"/src/Animations/Favoir.json"
import New from "/src/Animations/New.json"
import Car from "/src/Animations/Car.json"
import { useRef } from "react";
import { supabase } from "../../main";


export default function Signup () {
    const navgate = useNavigate()

     async function handleSubmit(e) {
        e.preventDefault()
        const form = e.target
        const {email,password,name,number} = Object.fromEntries(new FormData(form))
        const {data, error} = await supabase.auth.signUp({
          email, 
          password,
        options:{
            data:{
                username:name,
                number,
            }
         }
        })
        if(!error ) {
            navgate("/login")
        }
        console.log(error,data);

    }
    

    const signFavori = useRef()
    return(
        <>   
                <Advertising/>
            <div className="signup">
                <div className="signup-container">
                    <div className="new-sign">
                        <h2>Watson da yeni misiniz?</h2>
                        <p>Sadece 3 dakika içerisinde hesabınızı oluşturun!</p>
                        <form onSubmit={handleSubmit} className="sign-form">
                        <input type="text"  name="name" placeholder="Adınız" required/>
                        <input type="text" name="email"  placeholder="E-posta"required />
                        <input type="password" name="password" placeholder="Şifre"/>
                        {/* <input type="password" name="password" placeholder="Şifre Onlaylayın"/> */}
                        <input type="number" name="number" placeholder="Telefon Numarası" required />
                        <button>Üye Ol</button>
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
