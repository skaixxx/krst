import style from "./history.module.css";
import tomishko from "../../assets/history/tomishko.png";
import y1892 from "../../assets/history/1892.png"
import y1905 from "../../assets/history/1905.png"
import y1917 from "../../assets/history/1917.png"
import y1937 from "../../assets/history/1937.png"
import y1941 from "../../assets/history/1941.png"
import y1958 from "../../assets/history/1958.png"
import y1990 from "../../assets/history/1990.png"
import y2006 from "../../assets/history/2006.png"
import y2017 from "../../assets/history/2017.png"
import y2025 from "../../assets/history/2025.png"
import ScaleSlideBrackets from "../animations/ScaleSlideBrackets/ScaleSlideBrackets"
function History() {
    return (
        <div className={style.historyPage}>
            <div className={style.fullScreenContainer1}>
                <div className={style.pageTitle}>
                        <p className={style.titleText1}>ИСТОРИЯ</p>
                        <p className={style.titleText2}>КРЕСТОВ</p>
                </div>
            </div>
            <div className={style.interactiveLine}>
                <div className={style.interactiveLineProgressBar}></div>
                <div className={style.interactiveLineElements}>
                    <div className={style.interactiveLineElement}>
                        <a href="#" className={style.interactiveLineElementLink}>
                            <div className={style.interactiveLineElementIndicator}></div>
                            <p className={style.interactiveLineElementTitle}>1892</p>
                            <p className={style.interactiveLineElementText}>ТЮРЬМА «КРЕСТЫ»</p>
                        </a>
                    </div>
                    <div className={style.interactiveLineElement}>
                        <a href="#" className={style.interactiveLineElementLink}>
                            <div className={style.interactiveLineElementIndicator}></div>
                            <p className={style.interactiveLineElementTitle}>1905</p>
                            <p className={style.interactiveLineElementText}>ПОСЛЕ РЕВОЛЮЦИИ</p>
                        </a>
                    </div>
                    <div className={style.interactiveLineElement}>
                        <a href="#" className={style.interactiveLineElementLink}>
                            <div className={style.interactiveLineElementIndicator}></div>
                            <p className={style.interactiveLineElementTitle}>1917</p>
                            <p className={style.interactiveLineElementText}>В НАЧАЛЕ XX ВЕКА</p>
                        </a>
                    </div>
                    <div className={style.interactiveLineElement}>
                        <a href="#" className={style.interactiveLineElementLink}>
                            <div className={style.interactiveLineElementIndicator}></div>
                            <p className={style.interactiveLineElementTitle}>1937</p>
                            <p className={style.interactiveLineElementText}>ГОДЫ БОЛЬШОГО ТЕРРОРА</p>
                        </a>
                    </div>
                    <div className={style.interactiveLineElement}>
                        <a href="#" className={style.interactiveLineElementLink}>
                            <div className={style.interactiveLineElementIndicator}></div>
                            <p className={style.interactiveLineElementTitle}>1941</p>
                            <p className={style.interactiveLineElementText}>В БЛОКАДНЫЕ ДНИ</p>
                        </a>
                    </div>
                    <div className={style.interactiveLineElement}>
                        <a href="#" className={style.interactiveLineElementLink}>
                            <div className={style.interactiveLineElementIndicator}></div>
                            <p className={style.interactiveLineElementTitle}>1958</p>
                            <p className={style.interactiveLineElementText}>В ПОСЛЕВОЕННЫЕ ГОДЫ</p>
                        </a>
                    </div>
                    <div className={style.interactiveLineElement}>
                        <a href="#" className={style.interactiveLineElementLink}>
                            <div className={style.interactiveLineElementIndicator}></div>
                            <p className={style.interactiveLineElementTitle}>1990</p>
                            <p className={style.interactiveLineElementText}>ПЕРЕНАСЕЛЁННАЯ ТЮРЬМА</p>
                        </a>
                    </div>
                    <div className={style.interactiveLineElement}>
                        <a href="#" className={style.interactiveLineElementLink}>
                            <div className={style.interactiveLineElementIndicator}></div>
                            <p className={style.interactiveLineElementTitle}>2006</p>
                            <p className={style.interactiveLineElementText}>Lorem ipsum</p>
                        </a>
                    </div>
                    <div className={style.interactiveLineElement}>
                        <a href="#" className={style.interactiveLineElementLink}>
                            <div className={style.interactiveLineElementIndicator}></div>
                            <p className={style.interactiveLineElementTitle}>2017</p>
                            <p className={style.interactiveLineElementText}>Lorem ipsum</p>
                        </a>
                    </div>
                    <div className={style.interactiveLineElement}>
                        <a href="#" className={style.interactiveLineElementLink}>
                            <div className={style.interactiveLineElementIndicator}></div>
                            <p className={style.interactiveLineElementTitle}>2025</p>
                            <p className={style.interactiveLineElementText}>Lorem ipsum</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className={style.fullScreenContainer2}>
                <div className={style.wideContainer1}>
                    <div className={style.wideContainer1Col1}>
                        <p className={style.wideContainer1Title}>
                        АНТОНИЙ ОСИПОВИЧ ТОМИШКО (1851–1900)
                        </p>
                        <p>
                            Антоний Осипович Томишко родился 6 апреля 1851 года в небольшом чешском городке Германув-Местец. 
                        </p>
                        <p>
                           Самой значимой постройке Томишко за всю его жизнь была разработка тюрьмы «Кресты». 
                        </p>
                        <p>
                            С точки зрения архитектуры, тюрьма «Кресты» особенно интересна благодаря своей уникальной планировке: здания тюрьмы имеют форму крестов, что облегчает наблюдение за заключёнными. До Томишко тюрьмы с подобной конструкцией возводились как в России, так и за границей, но именно Томишко воплотил этот замысел в реальность!
                        </p>
                    </div>
                    <div className={style.wideContainer1Col2}>
                        <img src={tomishko} alt="tomishko" />
                    </div>
                </div>
                <div className={style.container1892}>
                    <div className={style.container1892Col1}>
                        <p className={`${style.container1892Title} ${style.wideContainerTitle}`}>
                        1892 —
                        </p>
                        <div className={style.container1892Animation}>
                            <ScaleSlideBrackets/>
                        </div>
                    </div>
                    <div className={style.container1892Col2}>
                        <img src={y1892} alt="1892" />
                        <div className={style.container1892Col2Row}>
                            <p>
                               Тюрьма «Кресты» была построена на Выборгской стороне Петербурга в 1884–1892 годах. Комплекс занимал 4,5 га и включал более 20 зданий, главные из которых — два пятиэтажных корпуса в форме крестов.
                            </p>
                            <p>
                               Первоначально тюрьма была предназначена для размещения 1150 заключённых, которых собирались размещать в 960 камерах. Позднее количество камер, задуманных как одиночные, увеличилось до 999, каждая площадью 8 м².
                            </p>
                        </div>
                    </div>
                </div>
                <div className={style.container1905}>
                    <div className={style.container1905Col1}>
                        <img src={y1905} alt="1905" />
                    </div>
                    <div className={style.container1905Col2}>
                        <p className={`${style.container1905Title} ${style.wideContainerTitle}`}>
                        — 1905
                        </p>
                        <p>
                            После революции сюда перемещали политических заключённых, которым была разрешена относительная свобода передвижения в пределах тюрьмы.
                        </p>
                    </div>
                    
                </div>
                <div className={style.container1917}>
                    <div className={style.container1917Col1}>
                        <p className={`${style.container1917Title} ${style.wideContainerTitle}`}>
                        1917 —
                        </p>
                        <p>
                        После революции в тюрьме произошли большие изменения. В жёстких условиях и под строгим надзором оказались сторонники монархии.
                        В начале XX века «Кресты» превратились в лагерь принудительного труда для особо опасных преступников. Особенно часто там содержали тех, кто был склонён к побегу, так как считалось, что 
                        из этой тюрьмы невозможно выбраться.
                        </p>
                    </div>
                    <div className={style.container1917Col2}>
                        <img src={y1917} alt="1917" />
                    </div>
                </div>
                <div className={style.container1937}>
                    <div className={style.container1937Col1}>
                        <p className={`${style.container1937Title} ${style.wideContainerTitle}`}>
                        1937 — 1938
                        </p>
                        <p>
                        В годы Большого террора в «Крестах» содержалось множество людей, обвинённых 
                        в контрреволюционной деятельности. В каждой одиночной камере площадью 8 м² находилось 
                        по 15–17 арестованных. В этот период в тюрьме оказались выдающиеся деятели науки и культуры.
                        </p>
                        <p>
                            Позднее, в составе «Крестов» появились так называемые «шарашкины конторы» - особые конструкторские бюро, где работали осуждённые, в том числе из военной сферы. Эти закрытые учреждения использовали труд заключённых для решения научно-технических задач.
                        </p>
                    </div>
                    <div className={style.container1937Col2}>
                        <img src={y1937} alt="1937" />
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default History;