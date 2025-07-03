import style from "./placement.module.css"
import SlidingRotatingCross from '../../../components/animations/SRCross/SlidingRotatingCross';
import ScaleCrossSlideBracketInverted from '../../../components/animations/ScaleCrossSlideBracket_inverted/ScaleCrossSlideBracket_inverted';
import ButtonGoToDesktop from "../../../components/Buttons/ButtonGoToDesktop";

import calendarIcon from "../../../assets/residence/calendar.svg"
import phoneIcon from "../../../assets/residence/phoneIcon.svg"
import profileIcon from "../../../assets/residence/profileIcon.svg"
import emailIcon from "../../../assets/residence/letterIcon.svg"

export default function first() {
	const inputFocus = (current) => {
        current.target.placeholder = '';
	};
	const inputBlur = (current) => {
        if (current.target.value === '') {
            current.target.placeholder = current.target.dataset.placeholder || '';
        } 
    };
	return (
		<div className={style.placement}>
			<div className={style.placementContainer}>
				<div className={style.placementHeader}>
					<div className={style.placementTitleWrap}>
						<h1 className={style.placementTitle}>
							ГАРМОНИЯ
						</h1>
						<div className={style.placementTitleIcons}>
							<SlidingRotatingCross/>
						</div>
					</div>
					<div className={style.placementTitleWrap}>
						<div className={style.placementTitleIcons}>
							<ScaleCrossSlideBracketInverted />
						</div>
						<div className={style.placementTitle}>120 м²</div>
					</div>
				</div>
			</div>

			<div className={style.placementContainer}>
				<div>
					<img src="#" alt="" />
				</div>
				<div>
					<h3>#описание</h3>
					<p>«Творческий центр» — это специально выделенный корпус КРСТ для художников, ремесленников и творческих команд. Помещения предназначены для мастерских, фотостудий, залов для йоги и других направлений, которые требуют уединённой и вдохновляющей атмосферы.</p>
				</div>
			</div>

			<div className="rollingStroke-container">
                <div className="rollingStroke1">
                    <div className="rolling-ticker">
                        <div className="rol-element"><span>NOMAD</span></div>
                        <div className="rol-element"><span>СТАРИК ХИНКАЛЫЧ</span></div>
                        <div className="rol-element"><span>БУШЕ</span></div>
                        <div className="rol-element"><span>БАКЛАЖАН</span></div>
                        <div className="rol-element"><span>TIGER LILY</span></div>
                        <div className="rol-element"><span>SURF COFFEE</span></div>
                        <div className="rol-element"><span>FRANK</span></div>
                        <div className="rol-element"><span>MARSALA</span></div>
                        <div className="rol-element"><span>ПОЙМАЙ МОМЕНТ</span></div>
                        <div className="rol-element"><span>LEFT</span></div>
                        <div className="rol-element"><span>ITALIANI</span></div>
                        <div className="rol-element"><span>MAMA ROMA</span></div>
                    </div>
                    <div className="rolling-ticker">
                        <div className="rol-element"><span>NOMAD</span></div>
                        <div className="rol-element"><span>СТАРИК ХИНКАЛЫЧ</span></div>
                        <div className="rol-element"><span>БУШЕ</span></div>
                        <div className="rol-element"><span>БАКЛАЖАН</span></div>
                        <div className="rol-element"><span>TIGER LILY</span></div>
                        <div className="rol-element"><span>SURF COFFEE</span></div>
                        <div className="rol-element"><span>FRANK</span></div>
                        <div className="rol-element"><span>MARSALA</span></div>
                        <div className="rol-element"><span>ПОЙМАЙ МОМЕНТ</span></div>
                        <div className="rol-element"><span>LEFT</span></div>
                        <div className="rol-element"><span>ITALIANI</span></div>
                        <div className="rol-element"><span>MAMA ROMA</span></div>
                    </div>
                </div>
           		<div className="rollingStroke2">
                    <div className="rolling-ticker">
                        <div className="rol-element"><span>NOMAD</span></div>
                        <div className="rol-element"><span>СТАРИК ХИНКАЛЫЧ</span></div>
                        <div className="rol-element"><span>БУШЕ</span></div>
                        <div className="rol-element"><span>БАКЛАЖАН</span></div>
                        <div className="rol-element"><span>TIGER LILY</span></div>
                        <div className="rol-element"><span>SURF COFFEE</span></div>
                        <div className="rol-element"><span>FRANK</span></div>
                        <div className="rol-element"><span>MARSALA</span></div>
                        <div className="rol-element"><span>ПОЙМАЙ МОМЕНТ</span></div>
                        <div className="rol-element"><span>LEFT</span></div>
                        <div className="rol-element"><span>ITALIANI</span></div>
                        <div className="rol-element"><span>MAMA ROMA</span></div>
                    </div>
                    <div className="rolling-ticker">
                        <div className="rol-element"><span>NOMAD</span></div>
                        <div className="rol-element"><span>СТАРИК ХИНКАЛЫЧ</span></div>
                        <div className="rol-element"><span>БУШЕ</span></div>
                        <div className="rol-element"><span>БАКЛАЖАН</span></div>
                        <div className="rol-element"><span>TIGER LILY</span></div>
                        <div className="rol-element"><span>SURF COFFEE</span></div>
                        <div className="rol-element"><span>FRANK</span></div>
                        <div className="rol-element"><span>MARSALA</span></div>
                        <div className="rol-element"><span>ПОЙМАЙ МОМЕНТ</span></div>
                        <div className="rol-element"><span>LEFT</span></div>
                        <div className="rol-element"><span>ITALIANI</span></div>
                        <div className="rol-element"><span>MAMA ROMA</span></div>
                    </div>
            	</div>
			</div>
			
			<div className={style.placementContainer}>
				<div className="bid-col1">
					<div className="bid-text">
						<p className="bid-default-text">ОСТАВЬ ЗАЯВКУ</p>
						<p className="bid-accent-text">МЕНЕДЖЕРАМ</p>
					</div> 
					
					<div className="bid-form">
						<div className="form-name res-form">
							<input className="input-r" type="name" id="name" placeholder='фио' data-placeholder='фио' onFocus={inputFocus} onBlur={inputBlur} />
							<img className="profile-icon" src={profileIcon} alt="profile" />
						</div>
						<div className="form-birthday res-form">
							<input className="input-r" type="text" name="birthday" id="birthday" placeholder="дата рождения" data-placeholder='дата рождения' onFocus={inputFocus} onBlur={inputBlur} />
							<img className="calendar-icon" src={calendarIcon} alt="calendar"></img>
						</div>
						<div className="form-phone res-form">
							<input className="input-r" type="tel" name="phone" id="phone" placeholder="телефон" data-placeholder='телефон' onFocus={inputFocus} onBlur={inputBlur} />
							<img className="phone-icon" src={phoneIcon} alt="phone" />
						</div>
						<div className="form-email res-form">
							<input className="input-r" type="email" name="email" id="email" placeholder="email" data-placeholder='email' onFocus={inputFocus} onBlur={inputBlur} />
							<img className="email-icon" src={emailIcon} alt="email" />
						</div>
						<div className="form-send-button"><ButtonGoToDesktop text="отправить"/></div>
					</div>
				</div>
			</div>
		</div>
	)
}