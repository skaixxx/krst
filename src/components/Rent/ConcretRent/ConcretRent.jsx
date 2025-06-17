import "./ConcretRent.css"
import "../../general.css";
import SpecificConcretRentButton from "../../Buttons/ButtonGoToDesktop";
import Room1 from "../../../assets/rent/room-1.png"
import Room2 from "../../../assets/rent/room-2.png"
import Room3 from "../../../assets/rent/room-3.png"
import profileIcon from "../../../assets/rent/profile.png"
import calendarIcon from "../../../assets/rent/Calendar.png"
import phoneIcon from "../../../assets/rent/email.png"
import emailIcon from "../../../assets/rent/phone.png"
import ScaleCrossSlideBracketInverted from "../../../components/animations/ScaleCrossSlideBracket_inverted/ScaleCrossSlideBracket_inverted";
import SRCross from "../../../components/animations/SRCross/SlidingRotatingCross";


function ConcretRent() {


return (

<div className="container-rent">
<div className="onerent">
<div className="rent-title-1">
        <p>ГАРМОНИЯ</p>
</div>
<div className="image-SRCross">
        <SRCross/>
</div>
</div>
<div className="tworent">
<div className="image-scaleCross">
        <ScaleCrossSlideBracketInverted/>
</div> 
<div className="rent-title-2">
        <p>120 М<sup>2</sup></p>
        </div>
</div>

<div className="slider-rent">

<div className="slider-radio">
        <img src={Room1} alt="" className="rent-picture" id="slide1"/>
        <img src={Room2} alt="" className="rent-picture" id="slide2"/>
        <img src={Room3} alt="" className="rent-picture" id="slide3"/>
</div>
<div className="slider-nav">
        <a href="#slide1"></a>
        <a href="#slide2"></a>
        <a href="#slide3"></a>
</div>


<div className="about-rent">
    <div className="about-rent-t">
         <h2 className="about-rent-text">#ОПИСАНИЕ</h2>
         <h2 className="about-rent-text2">ТЦ</h2>
    </div>
<div className="rent-title">
    <p className="rent-title-text">
        Уютное и светлое помещение,<br/>
        созданное для занятий йогой,<br/>
        растяжкой, медитацией и другими<br/> 
        видами активности, направленными<br/>
        на развитие тела и души.
    </p>
</div>
<div className="rent-description">
    <h2 className="rent-metr">120 М<sup>2</sup></h2>
    <h6 className="rent-area">Площадь</h6>
</div>
<div className="rent-description-2">
    <h2 className="rent-metr-2">87 000 ₽</h2>
    <h6 className="rent-area-2">Цена в месяц</h6>
</div>
<div className="rent-btn"><SpecificConcretRentButton text="арендовать"/></div>

</div>
</div>

  <div className="rentStroke-container">
    <div className="rentStroke1">
        <div className="rent-ticker">
            <div className="rent-element"><span>ЗВУКОВАЯ СИСТЕМА</span></div>
            <div className="rent-element"><span>ЗЕРКАЛА</span></div>
            <div className="rent-element"><span>ВЫСОКИЕ ПОТОЛКИ</span></div>
            <div className="rent-element"><span>ЭКРАН</span></div>
            <div className="rent-element"><span>WI-FI</span></div>
            <div className="rent-element"><span>ПРОЕКТОР</span></div>
        </div>
    <div className="rent-ticker">
           <div className="rent-element"><span>ЗВУКОВАЯ СИСТЕМА</span></div>
            <div className="rent-element"><span>ЗЕРКАЛА</span></div>
            <div className="rent-element"><span>ВЫСОКИЕ ПОТОЛКИ</span></div>
            <div className="rent-element"><span>ЭКРАН</span></div>
            <div className="rent-element"><span>WI-FI</span></div>
            <div className="rent-element"><span>ПРОЕКТОР</span></div> 
        </div>
        </div>
    <div className="rentStroke2">
        <div className="rent-ticker">
             <div className="rent-element"><span>ЗВУКОВАЯ СИСТЕМА</span></div>
            <div className="rent-element"><span>ЗЕРКАЛА</span></div>
            <div className="rent-element"><span>ВЫСОКИЕ ПОТОЛКИ</span></div>
            <div className="rent-element"><span>ЭКРАН</span></div>
            <div className="rent-element"><span>WI-FI</span></div>
            <div className="rent-element"><span>ПРОЕКТОР</span></div>
        </div>
    <div className="rent-ticker">
            <div className="rent-element"><span>ЗВУКОВАЯ СИСТЕМА</span></div>
            <div className="rent-element"><span>ЗЕРКАЛА</span></div>
            <div className="rent-element"><span>ВЫСОКИЕ ПОТОЛКИ</span></div>
            <div className="rent-element"><span>ЭКРАН</span></div>
            <div className="rent-element"><span>WI-FI</span></div>
            <div className="rent-element"><span>ПРОЕКТОР</span></div>
        </div>
        </div>
        </div>
<div className="renta">
<div className="rent-text">
        <p>ОСТАВЬ ЗАЯВКУ <br/><p className="rent-manager">МЕНЕДЖЕРАМ</p></p>
        </div>
 <div className="rent-form">
        <div className="rent-name"><input className="input-rent" type="name" id="name" placeholder='фио' data-placeholder='фио'/><img className="profile-icon" src={profileIcon} alt="profile"/></div>
        <div className="rent-birthday"><input className="input-rent" type="text" name="birthday" id="birthday" placeholder="дата рождения" data-placeholder='дата рождения'/><img className="calendar-icon" src={calendarIcon} alt="calendar"></img></div>
        <div className="rent-email"><input className="input-rent" type="email" name="email" id="email" placeholder="email" data-placeholder='email'/><img className="email-icon" src={phoneIcon} alt="email"/></div>
        <div className="rent-phone"><input className="input-rent" type="tel" name="phone" id="phone" placeholder="телефон" data-placeholder='телефон'/><img className="phone-icon" src={emailIcon} alt="phone"/></div>
        <div className="rent-send-button"><SpecificConcretRentButton text="отправить"/></div>
        </div>

 </div>


    
</div>

);

}
export default ConcretRent;