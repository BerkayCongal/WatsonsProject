import { Link } from "react-router-dom";
import Advertising from "../Advertising/Advertising";
export default function Login() {
    return(
        <>
            <Advertising/>
           <div className="login">
                <div className="container-login">
                    <h2>OTURUM AÇ</h2>
                    <p>Kisişel Hesabınızda oturum açın</p>
                    <form className="loginform">
                        <input type="text" name="email"  placeholder="E-posta" />
                        <input type="password" name="password" placeholder="Şifre"/>
                        <button> Oturumu aç</button>
                        <Link to={"/signup"}><button className="login-sign">Üye Ol</button></Link>
                    </form>
                </div>
           </div>
        </>
    )
}