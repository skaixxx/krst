import './ScaleSlideBracketsStyle.css';
import redBracket from '../../../assets/contacts/redBracket.svg';
import blackBracket from '../../../assets/contacts/blackBracket.svg';
export default function ScaleSlideBrackets() {
    return (
        <div className='SSB-container'>
            <img className='SSB-element-1' alt='ssb-element1' src={redBracket}/>
            <img className='SSB-element-2' alt='ssb-element2' src={blackBracket}/>
        </div>
    );
}