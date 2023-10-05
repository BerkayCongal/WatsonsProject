import { useState } from "react";
import "./Header.css";



export function createHeader() {


    return (
        <div>
            <div className="headerTop">
            <img className="Headerimg" src="/src/component/img/320px-Watsons_logotype.svg.png" placeholder="Arama" alt=""/>
            <input className="headerInput" type="text" name="text" placeholder="Arama Yap" />
            <h1>Sepet</h1></div>
        </div>
    )
}