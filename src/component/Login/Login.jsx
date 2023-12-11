import { Link,useNavigate } from "react-router-dom";
import {useState} from "react"
import Advertising from "../Advertising/Advertising";
import { supabase } from "../../main";

export default function Login() {
    const isLogin = location.pathname === "/signup"
        const navigate = useNavigate()
    const [showPassword, setShotPassword] = useState(false)
    const [password, setPassword] = useState("");
        
   async function handleSubmit(e) {
        e.preventDefault()
        const form = e.target
        const formData = Object.fromEntries(new FormData(form))
        console.log(formData);
     
       
    
        const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
        })
        if(!error) {
            console.log(data);
            navigate("/")
        }

    }

    const handleChange =(e) => {
     setPassword(e.target.value)
    }

    return(
        <>
            <Advertising/>
           <div className="login">
                <div className="container-login">
                    <h2>OTURUM AÇ</h2>
                    <p>Kisişel Hesabınızda oturum açın</p>
                    <form onSubmit={handleSubmit} className="loginform">
                        <input type="text" name="email"  placeholder="E-posta" />
                        <input type="password" name="password" placeholder="Şifre" onChange={handleChange}/>
                        <button> Oturumu aç</button>
                        <button className="login-sign">Üye Ol</button>
                    </form>
                </div>
           </div>
        </>
    )
}