import { useState } from "react";
import React from "react";
import"/src/component/Header.css"
import { Link, Outlet } from "react-router-dom";



export default function Filter() {

    const [formFilter, setFormFilter] = useState(false)
    const [category, setCategories] = useState("all");

    const filterdata = [
        {
            id: 1,
            img:"/src/component/MinSlider/img/prd-front-1353604-365x385.png",
            title:"Nip+Fab Fix Extreme4 Hyalüronik 2% Serum 30 ml",
            category: "Sampuanlar",
            price:449.32,
            clubprice: 250.00
        },
        {
            id: 2,
            img:"/src/component/MinSlider/img/prd-front-1338995-365x385.png",
            title:"Unfilter Beauty Oje  Sedefli Şeffaf No: 103",
            category:"Kremler",
            price:35.35,
            clubprice: 150.00,
        },
        {
            id: 3,
            img:"/src/component/MinSlider/img/prd-front-1338918-365x385.png",
            title:"Unfilter Beauty Oje Mavi No: 43",
            category: "Sampuanlar",
            price:39.35,
            clubprice: 160.00,
        },
        {
            id:4,
            img:"/src/component/MinSlider/img/prd-front-1338911-365x385.png",
            title:"Unfilter Beauty Oje  Açık Mavi No: 42",
            category:"Kremler",
            price: 35.95,
            clubprice: 22.95,
        },
        {
            id: 5,
            img:"/src/component/MinSlider/img/prd-front-1353604-365x385.png",
            title:"Nip+Fab Fix Extreme4 Hyalüronik 2% Serum 30 ml",
            category:"Ojeler",
            price:449.32,
            clubprice: 251.00
        },
        {
            id:6,
            img:"/src/component/MinSlider/img/prd-front-1338911-365x385.png",
            title:"Unfilter Beauty Oje  Açık Mavi No: 42",
            category:"Ojeler",
            price: 38.95,
            clubprice: 22.95,
        },
        {
            id: 7,
            img:"/src/component/MinSlider/img/prd-front-1338995-365x385.png",
            title:"Unfilter Beauty Oje  Sedefli Şeffaf No: 103",
            
            price:35.35,
            clubprice: 200.00,
        },
        {
            id: 8,
            img:"/src/component/MinSlider/img/prd-front-1338918-365x385.png",
            title:"Unfilter Beauty Oje Mavi No: 43",
            category:"Ojeler",
            price:40.35,
            clubprice: 160.00,
        },
    ]

    

  
    let filter = filterdata.filter(x=> {
        if(category === "all") return x
        return x.category === category 
        
    } ).map(x=> {
        return(
            <li className="datafilter" key={x.id}>
                <img src={x.img} />
                <span>{x.title}</span>
               <div className="filtercards">
               <span className="dataprice">{x.price}₺</span>
                <span className="clubdata">Club {x.clubprice}₺</span>
                <span className="filter-catergory">{x.category}</span>
               </div>
                <button className="databutton">Sepete ekle</button>
            </li>
        )
    }) 

    

    const oneCategories = []
    filterdata.forEach(data => {
        if(oneCategories.includes(data.category)) return
        oneCategories.push(data.category)
    })
    
    const renderCategory = oneCategories.map(x => {
        return <li key={x} onClick={changeCategories}>{x}</li>
       
      })

    function changeCategories(e) {
        setCategories(e.target.innerText)
    }
    

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
                         <div className="secoundfilter">{renderCategory}</div>
                            
                        </form>
                   </div>
                   <select name="Sampuan" required>
                    <option disabled>Bakım Setleri </option>
                    <option>Serumlar</option>
                    <option>Bakım sampuan</option>
                   </select>
                    <div>
                        <select name="Kremler" required>
                        <option disabled>Kremler </option>
                        <option>Normal</option>
                        <option>Kuru</option>
                        
                    </select>
                    </div>
                   
                </div>
                <div className="filter-cards">
                    <p className="filter-item">{filter}</p>
                   
    
                </div>
            </div>

        </>

        
    )
}