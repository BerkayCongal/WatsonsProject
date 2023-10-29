import { useState } from "react"
import "/src/component/Header.css"


export default function Account() {

  const [acount, setAcount] = useState(false)


  function handleClick () {
    setAcount(!acount)
      console.log("asdasd");
  }
    return(
        <>
          <div className="account-contaner">
            <form className="account-form" >
                <span className="form-basket">SİPARİŞLERİM <img onChange={handleClick} className="arrowbtn" src="/src/component/img/arrowaccount.png" alt="" /></span>
                <span className="form-bnt"> ÜYELİK BİLGİLERİM <img className="arrowbtn" src="/src/component/img/arrowaccount.png" alt="" /></span>
            </form>
            <select className="account-form" name="mesaj" id="">
              <option disabled>Siparişler</option>
              <option>Siparisleri</option>
              <option className="acount-title" onChange={handleClick}>Hesap Bilgileri</option>
            </select>
            <h2 onClick={handleClick}> tıkla</h2>
          </div>
          <div className={acount ? "acount active": "acountMain"}>
            <div className="acount-sepet">
              <h2>adı:</h2>
              <h2>soyadı</h2>
              <h2>Age</h2>
            </div>
          </div>
        </>
    )
}