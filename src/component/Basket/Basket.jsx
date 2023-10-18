import React from 'react'; 
import "./css/basket.css"
import { Steps } from 'primereact/steps';

export default function Basket () {

    const items = [
        {
            label: 'Ürün Paketleniyor'
        },
        {
            label: 'Kargoya verildi'
        },
        {
            label: 'Teslim edildi.'
        },
        
    ];
    return(
        <>
            <div className="card">
             <Steps model={items} />
             
            </div>
            <h1>Selam merhaba</h1>
        </>
    )
}