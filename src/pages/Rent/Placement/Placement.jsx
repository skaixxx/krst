import { useParams } from "react-router-dom";
import { useEffect } from "react";
import places from "../../../data/places.js"
import style from "./placement.module.css"
import Slider from "../../../components/Slider/Slider.jsx";
import ButtonGoToDesktop from "../../../components/Buttons/ButtonGoToDesktop";
import SlidingRotatingCross from '../../../components/animations/SRCross/SlidingRotatingCross';
import ScaleSlideDotsInverted from "../../../components/animations/ScaleSlideDots/ScaleSlideDotsInverted";
import calendarIcon from "../../../assets/residence/calendar.svg"
import phoneIcon from "../../../assets/residence/phoneIcon.svg"
import profileIcon from "../../../assets/residence/profileIcon.svg"
import emailIcon from "../../../assets/residence/letterIcon.svg"
import { useTranslation } from "../../../hooks/useTranslation.jsx";
function Placement() {
	const { place } = useParams();
	const t = useTranslation();
	const inputFocus = (current) => {
        current.target.placeholder = '';
	};
	const inputBlur = (current) => {
        if (current.target.value === '') {
            current.target.placeholder = current.target.dataset.placeholder || '';
        } 
	};
	const placement = places.find((item) => item.id === place);
	useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
	return (
		<div className={style.placement}>
			<div className={style.placementContainer}>
				<div className={style.placementHeader}>
					<div className={style.placementTitleWrap}>
						<h1 className={style.placementTitleTop}>
							{t(placement.title)}
						</h1>
						<div className={style.placementTitleIconsTop}>
							<ScaleSlideDotsInverted/>
						</div>
					</div>
					<div className={style.placementTitleWrap}>
						<div className={style.placementTitleIconsBottom}>
							<SlidingRotatingCross/>
						</div>
						<div className={style.placementTitleBottom}>{placement.area}</div>
					</div>
				</div>
				<div className={style.placementBlock}>
					<div className={style.placementBlockLeft}>
						<Slider list={placement.images}></Slider>
					</div>
					<div className={style.placementBlockRight}>
						<div className={style.placementBlockRightItem}>
							<h3 className={style.placementLabel}>
								<span>{t(placement.detail.title)}</span>
								<span>{t(placement.detail.place)}</span>
							</h3>
							<p>{t(placement.detail.text)}</p>
						</div>
						<div className={style.placementBlockRightItem}>
							<div className={style.specList}>
								{placement.specs.map((item, index) => (
									<div key={index} className={style.specItem}>
										<div className={style.specValue}>{item.value}</div>
										<div className={style.specLabel}>{t(item.label)}</div>
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
				<div className={style.rollingStrokeContainer}>
					<div className={style.rollingStroke1}>
						<div className={style.rollingTicker}>
							<div className={style.rolElement}><span>ЗВУКОВАЯ СИСТЕМА</span></div>
							<div className={style.rolElement}><span>ЗЕРКАЛА</span></div>
							<div className={style.rolElement}><span>ВЫСОКИЕ ПОТОЛКИ</span></div>
							<div className={style.rolElement}><span>ЭКРАН</span></div>
							<div className={style.rolElement}><span>КОНДИЦИОНЕР</span></div>
							<div className={style.rolElement}><span>WI — FI</span></div>
							<div className={style.rolElement}><span>ПРОЕКТОР</span></div>
							<div className={style.rolElement}><span>КОФЕМАШИНА</span></div>
							<div className={style.rolElement}><span>ЖИВЫЕ РАСТЕНИЯ</span></div>
							<div className={style.rolElement}><span>БИБЛИОТЕКА</span></div>
							<div className={style.rolElement}><span>ЛОФТ-ИНТЕРЬЕР</span></div>
							<div className={style.rolElement}><span>ФОТОЗОНА</span></div>
						</div>
						<div className={style.rollingTicker}>
							<div className={style.rolElement}><span>ЗВУКОВАЯ СИСТЕМА</span></div>
							<div className={style.rolElement}><span>ЗЕРКАЛА</span></div>
							<div className={style.rolElement}><span>ВЫСОКИЕ ПОТОЛКИ</span></div>
							<div className={style.rolElement}><span>ЭКРАН</span></div>
							<div className={style.rolElement}><span>КОНДИЦИОНЕР</span></div>
							<div className={style.rolElement}><span>WI — FI</span></div>
							<div className={style.rolElement}><span>ПРОЕКТОР</span></div>
							<div className={style.rolElement}><span>КОФЕМАШИНА</span></div>
							<div className={style.rolElement}><span>ЖИВЫЕ РАСТЕНИЯ</span></div>
							<div className={style.rolElement}><span>БИБЛИОТЕКА</span></div>
							<div className={style.rolElement}><span>ЛОФТ-ИНТЕРЬЕР</span></div>
							<div className={style.rolElement}><span>ФОТОЗОНА</span></div>
						</div>
					</div>
					<div className={style.rollingStroke2}>
						<div className={style.rollingTicker}>
							<div className={style.rolElement}><span>ЗВУКОВАЯ СИСТЕМА</span></div>
							<div className={style.rolElement}><span>ЗЕРКАЛА</span></div>
							<div className={style.rolElement}><span>ВЫСОКИЕ ПОТОЛКИ</span></div>
							<div className={style.rolElement}><span>ЭКРАН</span></div>
							<div className={style.rolElement}><span>КОНДИЦИОНЕР</span></div>
							<div className={style.rolElement}><span>WI — FI</span></div>
							<div className={style.rolElement}><span>ПРОЕКТОР</span></div>
							<div className={style.rolElement}><span>КОФЕМАШИНА</span></div>
							<div className={style.rolElement}><span>ЖИВЫЕ РАСТЕНИЯ</span></div>
							<div className={style.rolElement}><span>БИБЛИОТЕКА</span></div>
							<div className={style.rolElement}><span>ЛОФТ-ИНТЕРЬЕР</span></div>
							<div className={style.rolElement}><span>ФОТОЗОНА</span></div>
						</div>
						<div className={style.rollingTicker}>
							<div className={style.rolElement}><span>ЗВУКОВАЯ СИСТЕМА</span></div>
							<div className={style.rolElement}><span>ЗЕРКАЛА</span></div>
							<div className={style.rolElement}><span>ВЫСОКИЕ ПОТОЛКИ</span></div>
							<div className={style.rolElement}><span>ЭКРАН</span></div>
							<div className={style.rolElement}><span>КОНДИЦИОНЕР</span></div>
							<div className={style.rolElement}><span>WI — FI</span></div>
							<div className={style.rolElement}><span>ПРОЕКТОР</span></div>
							<div className={style.rolElement}><span>КОФЕМАШИНА</span></div>
							<div className={style.rolElement}><span>ЖИВЫЕ РАСТЕНИЯ</span></div>
							<div className={style.rolElement}><span>БИБЛИОТЕКА</span></div>
							<div className={style.rolElement}><span>ЛОФТ-ИНТЕРЬЕР</span></div>
							<div className={style.rolElement}><span>ФОТОЗОНА</span></div>
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