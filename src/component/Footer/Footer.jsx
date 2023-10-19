import "/src/component/Header.css"

export default function Footer() {
    return(
        <>
            <div className="footer-nav">
                <div className="footerimg">
                <img src="/src/component/Footer/img/instagram-logo-24.png" alt="" />
                <img src="/src/component/Footer/img/facebook-logo-24.png" alt="" />
                <img src="/src/component/Footer/img/twitter-logo-24.png" alt="" />
                <img src="/src/component/Footer/img/youtube-logo-24.png" alt="" />
                </div>
            </div>

            <div className="footer-contanier">
                <ul>Kurumsal
                    <li>Hakıımızda</li>
                    <li>Kariyer</li>
                    <li>İşe Alım</li>
                    <li>Başvuru</li>
                    <li>Performans</li>
                    <li>Gelisim</li>
                </ul>
                <ul>Alışveriş
                   <li>Sipariş ve Ödeme</li>
                   <li>iptal İade</li>
                  <li> Teslimat Koşullar</li>
                  <li>Güvenli Alışveriş</li>
                  <li>Kampanyalar</li>
                </ul>
                <ul>Watsons Club
                    <li>Kayıt OL</li>
                    <li>Watson Club</li>
                    <li>Watson Elite</li>
                    <li>Watons Club Sıkca Sorulan</li>
                    <li>Aydınlatma Metni</li>
                </ul>
                <ul> Yardım
                    <li>Sıkça Sorulan Sorular</li>
                    <li>İletişim</li>
                </ul>
                <ul>Yasal
                    <li>Kullanım Koşulları</li>
                    <li>Gizlilik Politikası</li>
                    <li>Marka ve Telif Hakları</li>
                    <li>Mesafeli Satış Sözleşmesi</li>
                    <li>KVKK Aydınlatma Metni</li>
                </ul>
            </div>
            <div className="footer-son">
               <h2>© Watsons 2022 Tüm hakları saklıdır</h2>
            </div>

            
        </>
    )
}