import"/src/component/Header.css"
import Advertising from "../Advertising/Advertising"
import { Link } from "react-router-dom"


export default function Signup () {
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
                        <h2>Kapmpanyalar ve size özel fırsatlardan haberdar olun</h2>
                        <h2>Favorilerinize hızlıca ulaşın</h2>
                        <h2>Önceki siparışlerinizi görüntüleyin</h2>
                    </div> 
                </div>
            </div>
            
        </>
    )
}
