import { useState } from "react"
import {LeftOutlined,RightOutlined} from '@ant-design/icons';
import "./css/slider.css"




export default function SliderCont()  {
   const [sliderTransform, setSliderTransform] = useState(0);


   function scollSlider () {
    setSliderTransform()
   }

   return(
    <>
      <div className="slider-container">
             <LeftOutlined  onClick={()=>{ sliderTransform < 0  ?  setSliderTransform(sliderTransform +14.4): null,console.log(sliderTransform)}} style={{position: "absolute", marginLeft: "30px", marginTop: "232px", zIndex: "301"}}/>
            <RightOutlined onClick={()=>{sliderTransform >= -14.4  ?  setSliderTransform(sliderTransform -14.4): null,console.log(sliderTransform)}} style={{position: "absolute", marginLeft: "1350px", marginTop: "250px", zIndex: "301"}}/>
        <div className="slider-main">
        <img style={{transform:`translateX(${sliderTransform *100}px)`}} src="/src/component/Container/img/sliderimg1.png" alt="" />
        <img style={{transform:`translateX(${sliderTransform *100}px)`}}src="/src/component/Container/img/sliderimg2.png" alt="" />
         <img style={{transform:`translateX(${sliderTransform *100}px)`}} src="/src/component/Container/img/sliderimg3.png" alt="" />
        </div>
      </div>
    </>
   )
}