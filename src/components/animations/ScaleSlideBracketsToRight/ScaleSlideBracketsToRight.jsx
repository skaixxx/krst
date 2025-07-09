import style from './ScaleSlideBracketsTRStyle.module.css';
import arrowRed from '../../../assets/animation/5/arrowRed.svg';
import arrowBlack from '../../../assets/animation/5/arrowBlack.svg';
export default function ScaleSlideBracketsToRight() {
	return (
		<div className={style.container}>
			<img className={style.element1} alt='ssb-element1' src={arrowRed}/>
			<img className={style.element2} alt='ssb-element2' src={arrowBlack}/>
		</div>
	);
}