import { useState } from "react";
import React from "react";
import"/src/component/Header.css"
import { Link, Outlet } from "react-router-dom";


export default function Filter() {
    const [formFilter, setFormFilter] = useState(false)


    function HandalClick() {
        setFormFilter(!formFilter)
    }

    return(
        <>
            <div className="filter-main">
                <div className="contanier-filter">
                <span className="filter-handalClick">Kişisel Bakım <img onClick={HandalClick} className="filter-arrow" src="/src/component/img/arrow.png"></img></span>
                   <div className={formFilter ? "formFilter active": "arrowBtn"}>
                        <form className="form-filter" action="">
                            <p>asdasdas</p>
                            <p>asdasdas</p>
                        </form>
                        <span className="filter-handalClick">Sampuan <img onClick={HandalClick} className="filter-arrow" src="/src/component/img/arrow.png"></img></span>
                   <div className={formFilter ? "formFilter active": "arrowBtn"}>
                        <form className="form-filter" action="">
                            <p>asdasdas</p>
                            <p>asdasdas</p>
                        </form>
                   </div>
                   <span className="filter-handalClick">Kremler <img onClick={HandalClick} className="filter-arrow" src="/src/component/img/arrow.png"></img></span>
                   <div className={formFilter ? "formFilter active": "arrowBtn"}>
                        <form className="form-filter" action="">
                            <p>asdasdas</p>
                            <p>asdasdas</p>
                        </form>
                   </div>
                   <span className="filter-handalClick">Sampuan <img onClick={HandalClick} className="filter-arrow" src="/src/component/img/arrow.png"></img></span>
                   <div className={formFilter ? "formFilter active": "arrowBtn"}>
                        <form className="form-filter" action="">
                            <p>asdasdas</p>
                            <p>asdasdas</p>
                        </form>
                   </div>
                   <span className="filter-handalClick">Sampuan <img onClick={HandalClick} className="filter-arrow" src="/src/component/img/arrow.png"></img></span>
                   <div className={formFilter ? "formFilter active": "arrowBtn"}>
                        <form className="form-filter" action="">
                            <p>asdasdas</p>
                            <p>asdasdas</p>
                        </form>
                   </div>
                   
                   
                   </div>
                </div>
                <div className="filter-cards">
                    <h2>Card</h2>
                    <h2>Card</h2>
                    <h2>Card</h2>
                    <h2>Card</h2>
                </div>
            </div>

        </>

        
    )
}