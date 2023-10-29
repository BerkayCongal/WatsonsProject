import"/src/component/Header.css"
import React from "react"
export default function SecoundFilter() {

    const sfilter = [
        {
            id: 12,
            img:"/src/component/img/Test.png",
            title:"Deneme",
            price:449.32,
            clubprice: 250.00
        }
    ]


    let secoundfilter = sfilter.map((x => {
        return(
            <div className="datafilter" key={x.id}>
                <img src={x.img} />
                <span>{x.title}</span>
               <div className="filtercards">
               <span className="dataprice">{x.price}₺</span>
                <span className="clubdata">Club {x.clubprice}₺</span>
               </div>
                <button className="databutton">Sepete ekle</button>
            </div>
        )
    }))
    

    return(
        <>
          {secoundfilter}
        </>
    )
}