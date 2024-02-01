import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { supabase } from '../../main';
import { useEffect, useState } from 'react';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const Information = () => {
    const [user, setUser] = useState();
    const [acount, setAcount] = useState(false)
  const onClick = (e) => {
    console.log('click ', e);

  };

  function handleClick () {
    setAcount(!acount)
      console.log("asdasd");
  }
 
  async function logout(){
    const {error} = await supabase.auth.signOut()
      setUser(null)
  }

   useEffect(() => {
    async function  getUser() {
        const { data, error } = await supabase.auth.getSession()
        console.log(data);
        setUser(data.session.user)
    }
    getUser()
    console.log(user);
  },[])


const items = [
  getItem('Üye Bilgisi', 'sub1', <MailOutlined />, [
    getItem(user?.user_metadata?.username, 'g1', null, [getItem(user?.email, '1'), getItem('Option 2', '2')], 'group'),
    getItem('', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  {
    type: 'divider',
  },
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),

];

  return (
    <>
        <Menu
        onClick={onClick}
        style={{
            width: 256,
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
    />

      {
      user ? (
          <div>
            <h1>Hoşgeldin {user.user_metadata.username}</h1>
            <select  name="text"> 
              <option  value="text">Üye Bilgisi</option>
              <option disabled value="text">Adı: {user.user_metadata.username} </option>
             <option  disabled value="text">Telefon : {user.user_metadata.number}</option>
             <option disabled value="email">{user.email}</option>
            </select>
              <button onClick={logout}>Cıkıs yap</button>
          </div>
      ):(
  
        <div>
          
          <h2 onClick={handleClick}> tıkla</h2>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.4949627116594!2d29.12163537655741!3d40.92681817136211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac6ba7efe94ad%3A0x972bbc78946391c7!2zU8O8cmV5eWEgUGxhasSx!5e0!3m2!1str!2str!4v1699002125936!5m2!1str!2str" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </div>
   
      )
  }
      
  </>
  );
};
export default Information;