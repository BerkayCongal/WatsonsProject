import { useState } from "react";
import "./Header.css";
import { supabase } from "../main";
import { Link, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import Footer from "./Footer/Footer";

export default function CreateHeader() {
    const navigate = useNavigate()
    const [mycount, setMyCount ] = useState(false);
    const data = useLoaderData();
    const outUser = async () => {
        const {error} = await supabase.auth.signOut()
       !error && navigate("/")
    }

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
                          
                            {data  ? (
                                <>
                                <Link to={"/account"}><button className="count-header">Hesabım</button></Link>
                                <Link to={"/account"}> <button className="myorders-header">Siparişlerim</button></Link>
                                <button className="headerOut"  type="button" onClick={outUser}>Cıkış yap</button>
                                </>
                            ):(
                               <>
                                 <Link to={"/login"}><button className="login-header">Oturumu Aç</button></Link> 
                                <Link to={"/signup"}><button className="signup-header">Kayıt</button></Link>
                               </>
                            ) }
                        </form>
                    </div>
                    
                </div>
            </div>
            
            <div className=" container">
            <div className="header-filter">
                    <div className="filter-top">
                    <Link className="link" to={"/filter"}>Sadece Watsons’ta 
                        <ul className="dropdown">Sana özel  malzemeler</ul>
                        </Link>
                       <Link className="link" to={"/filter"}> Sana Özel
                       <ul className="dropdown">
                        <li>Kiyafetler</li>
                        <li>Ojeler</li>
                        <li>Bakım setleri</li>
                        <li>Rujlar</li>
                       </ul>
                       </Link>
                       <Link className="link" to={"/filter"}> Makyaj
                       <ul className="dropdown">
                       <li>Allık</li>
                       <li>Oje</li>
                        <li>Boya</li>
                        <li>fondeten</li>
                        <li>kapatıcı</li>
                        <li>kontur</li>
                       </ul>
                       </Link>
                       <Link className="link" to={"/filter"}> Saç Bakım
                       <ul className="dropdown">a Deneme</ul></Link>
                       <Link className="link" to={"/filter"}> Sağlıklı Yaşam
                       <ul className="dropdown">
                        <li>Alışverişi</li>
                        <li>ara</li>
                        <li>asdasd</li>
                        <li>kiyafet</li>

                        </ul></Link>

                       <Link className="link" to={"/filter"}> Erkek Bakım
                       <ul className="dropdown">a Deneme</ul></Link>

                       <Link className="link" to={"/filter"}> Parfüm
                       <ul className="dropdown">a Deneme</ul></Link>

                       <Link className="link" to={"/filter"}>Aksesuar K-Beauty 
                       <ul className="dropdown">a Deneme</ul></Link>

                       <Link className="link" to={"/filter"}>Sürdürülebilir Yaşam
                       <ul className="dropdown">a Deneme</ul></Link>

                        {/* Tekrara dön bak buraya arastır....! */}
                    </div>
                </div>
            </div>
            <Outlet/>
            <Footer/>
        </>
    )
}