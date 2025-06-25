import style from './ScaleSlideBracketsStyle.module.css';
import redBracket from '../../../assets/contacts/redBracket.svg';
import blackBracket from '../../../assets/contacts/blackBracket.svg';
export default function ScaleSlideBrackets() {
    return (
        <div className={style.container}>
            <img className={style.element1} alt='ssb-element1' src={redBracket}/>
            <img className={style.element2} alt='ssb-element2' src={blackBracket}/>
        </div>
    );
}