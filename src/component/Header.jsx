import "./Header.css";
import { Link, Outlet } from "react-router-dom";

export default function CreateHeader() {
    return (
        <>
            <div className="headerTop">
           <Link  to={"/"}><img className="Headerimg" src="/src/component/img/320px-Watsons_logotype.svg.png"alt=""/></Link>
            <input className="headerInput" type="text" name="text" placeholder="Arama Yap" />
            <div className="userheader"><img src="/src/component/img/user-circle-regular-24.png" alt="" />Merhaba Hesabım <img  className="arrow" src="/src/component/img/arrow.png" alt="" /></div>
            <img className="basket-header" src="/src/component/img/basketnew.png" alt=""/>
            </div>
            
            <div className=" container">
                <div className="header-filter">
                <div className="filter-top ">
                <a  className="link" href="#">Sadece Watsons’ta</a>
                <a  className="link" href="#">Sana Özel</a>
                <a  className="link" href="#">Makyaj</a>
                <a  className="link" href="#">Saç Bakım</a>
                <a  className="link" href="#">Kişisel Bakım</a>
                <a  className="link" href="#">Sağlıklı Yaşam</a>
                <a  className="link" href="#">Erkek Bakım</a>
                <a  className="link" href="#">Parfüm</a>
                <a  className="link" href="#">Parfüm</a>
                <a  className="link" href="#">Aksesuar K-Beauty</a>
                <a  className="link" href="#">Sürdürülebilir Yaşam</a>
                </div>
          </div>
            </div>
            <Outlet/>
        </>
    )

}