import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { places } from "../../../data/places.js"

import style from "./placement.module.css"

import SlidingRotatingCross from '../../../components/animations/SRCross/SlidingRotatingCross';
import ScaleCrossSlideBracketInverted from '../../../components/animations/ScaleCrossSlideBracket_inverted/ScaleCrossSlideBracket_inverted';
import ButtonGoToDesktop from "../../../components/Buttons/ButtonGoToDesktop";

import calendarIcon from "../../../assets/residence/calendar.svg"
import phoneIcon from "../../../assets/residence/phoneIcon.svg"
import profileIcon from "../../../assets/residence/profileIcon.svg"
import emailIcon from "../../../assets/residence/letterIcon.svg"

function Placement() {
	const { place } = useParams();

	const inputFocus = (current) => {
        current.target.placeholder = '';
	};
	const inputBlur = (current) => {
        if (current.target.value === '') {
            current.target.placeholder = current.target.dataset.placeholder || '';
        } 
	};

	const placement = places.find((item) => item.id == place);

	useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
	
	return (
		<div className={style.placement}>
			<div className={style.placementContainer}>
				<div className={style.placementHeader}>
					<div className={style.placementTitleWrap}>
						<h1 className={style.placementTitle}>
							{placement.title}
						</h1>
						<div className={style.placementTitleIcons}>
							<SlidingRotatingCross/>
						</div>
					</div>
					<div className={style.placementTitleWrap}>
						<div className={style.placementTitleIcons}>
							<ScaleCrossSlideBracketInverted />
						</div>
						<div className={style.placementTitle}>{placement.area}</div>
					</div>
				</div>

				<div className={style.placementBlock}>
					<div className={style.placementBlockLeft}>
						<img src={placement.image} alt="" />
					</div>
					<div className={style.placementBlockRight}>
						<div className={style.placementBlockRightItem}>
							<h3 className={style.placementLabel}>
								<span>{placement.detail.title}</span>
								<span>{placement.detail.place}</span>
							</h3>
							<p>{placement.detail.text}</p>
						</div>
						<div className={style.placementBlockRightItem}>
							<div className={style.specList}>
								{placement.specs.map((item, index) => (
									<div key={index} className={style.specItem}>
										<div className={style.specValue}>{item.value}</div>
										<div className={style.specLabel}>{item.label}</div>
									</div>
								))}
							</div>

							<div className={style.placementBtn}>
								<ButtonGoToDesktop text="арендовать"/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className={style.placementContainer}>
				<div className={`rollingStroke-container ${style.rollingStrokeContainer}`}>
					<div className={`rollingStroke1 ${style.rollingStroke1}`}>
						<div className="rolling-ticker">
							<div className={`rol-element ${style.rolElement}`}><span>NOMAD</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>СТАРИК ХИНКАЛЫЧ</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>БУШЕ</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>БАКЛАЖАН</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>TIGER LILY</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>SURF COFFEE</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>FRANK</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>MARSALA</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>ПОЙМАЙ МОМЕНТ</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>LEFT</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>ITALIANI</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>MAMA ROMA</span></div>
						</div>
						<div className="rolling-ticker">
							<div className={`rol-element ${style.rolElement}`}><span>NOMAD</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>СТАРИК ХИНКАЛЫЧ</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>БУШЕ</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>БАКЛАЖАН</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>TIGER LILY</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>SURF COFFEE</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>FRANK</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>MARSALA</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>ПОЙМАЙ МОМЕНТ</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>LEFT</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>ITALIANI</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>MAMA ROMA</span></div>
						</div>
					</div>
					<div className={`rollingStroke2 ${style.rollingStroke2}`}>
						<div className="rolling-ticker">
							<div className={`rol-element ${style.rolElement}`}><span>NOMAD</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>СТАРИК ХИНКАЛЫЧ</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>БУШЕ</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>БАКЛАЖАН</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>TIGER LILY</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>SURF COFFEE</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>FRANK</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>MARSALA</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>ПОЙМАЙ МОМЕНТ</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>LEFT</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>ITALIANI</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>MAMA ROMA</span></div>
						</div>
						<div className="rolling-ticker">
							<div className={`rol-element ${style.rolElement}`}><span>NOMAD</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>СТАРИК ХИНКАЛЫЧ</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>БУШЕ</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>БАКЛАЖАН</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>TIGER LILY</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>SURF COFFEE</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>FRANK</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>MARSALA</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>ПОЙМАЙ МОМЕНТ</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>LEFT</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>ITALIANI</span></div>
							<div className={`rol-element ${style.rolElement}`}><span>MAMA ROMA</span></div>
						</div>
					</div>
				</div>
			</div>
			
			<div className={style.placementContainer}>
				<div className={`bid-col1 ${style.formSection}`}>
					<div className="bid-text">
						<p className="bid-default-text">ОСТАВЬ ЗАЯВКУ</p>
						<p className="bid-accent-text">МЕНЕДЖЕРАМ</p>
					</div> 
					
					<form className={`bid-form ${style.form}`}>
						<div className={`form-name res-form ${style.formField}`}>
							<input className="input-r" type="name" id="name" placeholder='фио' data-placeholder='фио' onFocus={inputFocus} onBlur={inputBlur} />
							<img className="profile-icon" src={profileIcon} alt="profile" />
						</div>
						<div className={`form-birthday res-form ${style.formField}`}>
							<input className="input-r" type="text" name="birthday" id="birthday" placeholder="дата рождения" data-placeholder='дата рождения' onFocus={inputFocus} onBlur={inputBlur} />
							<img className="calendar-icon" src={calendarIcon} alt="calendar"></img>
						</div>
						<div className={`form-phone res-form ${style.formField}`}>
							<input className="input-r" type="tel" name="phone" id="phone" placeholder="телефон" data-placeholder='телефон' onFocus={inputFocus} onBlur={inputBlur} />
							<img className="phone-icon" src={phoneIcon} alt="phone" />
						</div>
						<div className={`form-email res-form ${style.formField}`}>
							<input className="input-r" type="email" name="email" id="email" placeholder="email" data-placeholder='email' onFocus={inputFocus} onBlur={inputBlur} />
							<img className="email-icon" src={emailIcon} alt="email" />
						</div>
						<div className="form-send-button"><ButtonGoToDesktop text="отправить"/></div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Placement;