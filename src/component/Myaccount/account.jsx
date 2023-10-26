import "/src/component/Header.css"

export default function Account() {
    return(
        <>
          <div className="account-contaner">
            {/* <form className="account-form" >
                <span className="form-basket">SİPARİŞLERİM <img className="arrowbtn" src="/src/component/img/arrowaccount.png" alt="" /></span>
                <span className="form-bnt"> ÜYELİK BİLGİLERİM <img className="arrowbtn" src="/src/component/img/arrowaccount.png" alt="" /></span>
            </form> */}
            <select className="account-form" name="mesaj" id="">
              <option disabled>Siparişler</option>
              <option>Siparisleri</option>
              <option>Hesap Bilgileri</option>
            </select>
          </div>
        </>
    )
}