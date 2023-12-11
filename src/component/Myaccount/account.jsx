import { useState } from "react"
import "/src/component/Header.css"
import { supabase } from "../../main";
import { useEffect } from "react";


export default function Account() {

  const [acount, setAcount] = useState(false)
  const [user, setUser] = useState();



  async function logout(){
    const {error} = await supabase.auth.signOut()
      setUser(null)
  }

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
      if(session) {
        setUser(session.user)
      }
    })
  },[])

// girilen kullanıcıyı göstermek için --------

  function handleClick () {
    setAcount(!acount)
      console.log("asdasd");
  }
    return(
        <>
            {
            user ? (
                <div>
                    {user.user_metadata.username},
                    {user.user_metadata.number}
                    <button onClick={logout}>Cıkıs yap</button>
                </div>
            ):(
        
              <div>
                
                <h2 onClick={handleClick}> tıkla</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.4949627116594!2d29.12163537655741!3d40.92681817136211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac6ba7efe94ad%3A0x972bbc78946391c7!2zU8O8cmV5eWEgUGxhasSx!5e0!3m2!1str!2str!4v1699002125936!5m2!1str!2str" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
         
            )
        }
            
        </>
    )
}


{/* <div className="account-contaner">
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.4949627116594!2d29.12163537655741!3d40.92681817136211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac6ba7efe94ad%3A0x972bbc78946391c7!2zU8O8cmV5eWEgUGxhasSx!5e0!3m2!1str!2str!4v1699002125936!5m2!1str!2str" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className={acount ? "acount active": "acountMain"}>
            <div className="acount-sepet">
              <h2>adı:</h2>
              <h2>soyadı</h2>
              <h2>Age</h2>
            </div>
          </div> */}