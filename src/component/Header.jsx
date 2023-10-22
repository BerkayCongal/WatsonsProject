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
                            <button className="count-header">Hesabım</button>
                            <button className="myorders-header">Siparişlerim</button>
                            <Link to={"/signup"}><button className="signup-header">Kayıt</button></Link> 
                        </form>
                    </div>
                    
                </div>
            </div>
            
            <div className=" container">
            <div className="header-filter">
                    <div className="filter-top">
                        <Link to={"/filter"}><span className="link" href="#">Sadece Watsons’ta</span></Link>
                       <Link to={"/filter"}><a className="link" href="#">Sana Özel</a></Link>
                       <Link to={"/filter"}><a  className="link" href="#">Makyaj</a></Link>
                       <Link to={"/filter"}><a  className="link" href="#">Saç Bakım</a></Link>
                       <Link to={"/filter"}><a  className="link" href="#">Kişisel Bakım</a></Link>
                       <Link to={"/filter"}><a className="link" href="#">Sağlıklı Yaşam</a></Link>
                       <Link to={"/filter"}><a  className="link" href="#">Erkek Bakım</a></Link>
                       <Link to={"/filter"}><a  className="link" href="#">Parfüm</a></Link>
                       <Link to={"/filter"}><a  className="link" href="#">Aksesuar K-Beauty</a></Link>
                       <Link to={"/filter"}><a  className="link" href="#">Sürdürülebilir Yaşam</a></Link>
                        <p>a Deneme</p>
                        {/* Tekrara dön bak buraya arastır....! */}
                    </div>
                </div>
            </div>
            <Outlet/>
            <Footer/>
        </>
    )

}