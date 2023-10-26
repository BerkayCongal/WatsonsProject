import { useState } from "react";
import "./Header.css";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Signup from "./SignUp/Signup";



export default function CreateHeader() {


const [mycount, setMyCount ] = useState(false)

function handleClickCount() {
    setMyCount(!mycount)
}

    return (
        <>
            <div className="headerTop">
                <Link  to={"/"}><img className="Headerimg" src="/src/component/img/320px-Watsons_logotype.svg.png"alt=""/></Link>
                <input className="headerInput" type="text" name="text" placeholder="Arama Yap" />
                <div className="userheader">
                    <img src="/src/component/img/user-circle-regular-24.png" alt="" />
                    <p style={{width:"40px",marginRight:"25px"}}>Merhaba Hesabım</p>
                    <img onClick={handleClickCount} className="arrow" src="/src/component/img/arrow.png" alt="" />
                     <Link to={"/basket"}><img className="basket-header" src="/src/component/img/basketnew.png" alt=""/></Link>
                    <div className={mycount ? "mycount active": "sepet"}>
                        <form className="form-mycount" action="">
                            <Link to={"/login"}><button className="login-header">Oturumu Aç</button></Link> 
                            <Link to={"/account"}><button className="count-header">Hesabım</button></Link>
                            <Link to={"/account"}> <button className="myorders-header">Siparişlerim</button></Link>
                            <Link to={"/signup"}><button className="signup-header">Kayıt</button></Link> 
                        </form>
                    </div>
                    
                </div>
            </div>
            
            <div className=" container">
            <div className="header-filter">
                    <div className="filter-top">
                        <Link className="link" to={"/filter"}>Sadece Watsons’ta 
                        <p className="dropdown"><span> Sana özel  malzemeler</span></p></Link>

                       <Link to={"/filter"}><a className="link" href="#">Sana Özel
                       <p className="dropdown">a Deneme</p>
                        </a></Link>

                       <Link className="link" to={"/filter"}> Makyaj
                       <p className="dropdown">a Deneme</p>
                       </Link>
                       
                       <Link className="link" to={"/filter"}> Saç Bakım
                       <p className="dropdown">a Deneme</p></Link>

                       <Link className="link" to={"/filter"}> Kişisel Bakım
                       <p className="dropdown">a Deneme</p></Link>

                       <Link className="link" to={"/filter"}> Sağlıklı Yaşam
                       <p className="dropdown">a Deneme</p></Link>

                       <Link className="link" to={"/filter"}> Erkek Bakım
                       <p className="dropdown">a Deneme</p></Link>

                       <Link className="link" to={"/filter"}> Parfüm
                       <p className="dropdown">a Deneme</p></Link>

                       <Link className="link" to={"/filter"}>Aksesuar K-Beauty 
                       <p className="dropdown">a Deneme</p></Link>

                       <Link className="link" to={"/filter"}>Sürdürülebilir Yaşam
                       <p className="dropdown">a Deneme</p></Link>

                        {/* Tekrara dön bak buraya arastır....! */}
                    </div>
                </div>
            </div>
            <Outlet/>
            <Footer/>
        </>
    )

}