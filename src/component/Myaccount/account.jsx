import { useState } from "react"
import "/src/component/Header.css"
import { supabase } from "../../main";
import { useEffect } from "react";
import Information from"./accountMenu"


export default function Account() {

  const [acount, setAcount] = useState(false)
  const [user, setUser] = useState();
  const [information, setinformation] =useState(false);




// girilen kullanıcıyı göstermek için --------

    return(
        <>
          <Information/>
        </>
    )
}

