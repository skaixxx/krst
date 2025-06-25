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
import ScaleSlideBrackets from "../../components/animations/ScaleSlideBrackets/ScaleSlideBrackets"
import FamousCards from "../../components/History/FamousPersonCards";
import RotatingCross from "../../components/animations/RotatingCross/RotatingCross";
import DangerousCards from "../../components/History/DangerousPersonCards";
import { useEffect, useState } from "react";
import Carousel from "../../components/History/HistoryCarousel";
import ScaleSlideDotsInverted from "../../components/animations/ScaleSlideDots/ScaleSlideDotsInverted";
function History() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('/data/history/carouselData.json')
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(setItems)
        .catch((err) => {
            console.error('ошибка загрузки данных', err);
        })
    }, [])
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
                <Carousel items={items} />      
            </div>
            <div className={style.fullScreenContainer2}>
                <div className={style.wideContainer1}>
                    <div className={style.wideContainer1Col1}>
                        <p className={style.wideContainer1Title}>
                        АНТОНИЙ ОСИПОВИЧ ТОМИШКО (1851–1900)
                        </p>
                        <div className={style.wideContainerTextBox}>
                            <p className={style.wideContainerText}>
                                Антоний Осипович Томишко родился 6 апреля 1851 года в небольшом чешском городке Германув-Местец. 
                            </p>
                            <p className={style.wideContainerText}>
                               Самой значимой постройке Томишко за всю его жизнь была разработка тюрьмы «Кресты». 
                            </p>
                            <p className={style.wideContainerText}>
                                С точки зрения архитектуры, тюрьма «Кресты» особенно интересна благодаря своей уникальной планировке: здания тюрьмы имеют форму крестов, что облегчает наблюдение за заключёнными. До Томишко тюрьмы с подобной конструкцией возводились как в России, так и за границей, но именно Томишко воплотил этот замысел в реальность!
                            </p>
                        </div>
                    </div>
                    <div className={style.wideContainer1Col2}>
                        <img src={tomishko} alt="tomishko" className={style.imageTomishko}/>
                    </div>
                </div>
                <div className={style.container1892} id="y1892">
                    <div className={style.container1892Col1}>
                        <div className={style.container1892Col1Row1}>
                            <p className={`${style.container1892Title} ${style.wideContainerTitle}`}>
                            1892 —
                            </p>
                            <div className={style.container1892Animation}>
                                <ScaleSlideBrackets/>
                            </div>
                        </div>
                    </div>
                    <div className={style.container1892Col2}>
                        <img src={y1892} alt="1892" className={style.image1892}/>
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
                <div className={style.container1905} id="y1905">
                    <div className={style.container1905Col1}>
                        <img src={y1905} alt="1905" className={style.image1905}/>
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
                <div className={style.container1917} id="y1917">
                    <div className={style.container1917Col1}>
                        <p className={`${style.container1917Title} ${style.wideContainerTitle}`}>
                        1917 —
                        </p>
                        <p className={style.paragraph1917}>
                        После революции в тюрьме произошли большие изменения. В жёстких условиях и под строгим надзором оказались сторонники монархии.
                        В начале XX века «Кресты» превратились в лагерь принудительного труда для особо опасных преступников. Особенно часто там содержали тех, кто был склонён к побегу, так как считалось, что 
                        из этой тюрьмы невозможно выбраться.
                        </p>
                    </div>
                    <div className={style.container1917Col2}>
                        <img src={y1917} alt="1917" className={style.image1917}/>
                    </div>
                </div>
                <div className={style.container1937} id="y1937">
                    <div className={style.container1937Col1}>
                        <div className={style.container1937Col1Row1}>
                            <div className={style.container1937Animation}><ScaleSlideDotsInverted/></div>
                            <p className={`${style.container1937Title} ${style.wideContainerTitle}`}>
                            1937 — 
                            </p>
                            <p className={`${style.container1937Title} ${style.wideContainerTitle}`}>1938</p>
                        </div>
                        <div className={style.container1937Col1Row2}>
                            <p>
                            В годы Большого террора в «Крестах» содержалось множество людей, обвинённых 
                            в контрреволюционной деятельности. В каждой одиночной камере площадью 8 м² находилось 
                            по 15–17 арестованных. В этот период в тюрьме оказались выдающиеся деятели науки и культуры.
                            </p>
                            <p>
                                Позднее, в составе «Крестов» появились так называемые «шарашкины конторы» - особые конструкторские бюро, где работали осуждённые, в том числе из военной сферы. Эти закрытые учреждения использовали труд заключённых для решения научно-технических задач.
                            </p>
                        </div>
                    </div>
                    <div className={style.container1937Col2}>
                        <img src={y1937} alt="1937" className={style.image1937}/>
                    </div>
                </div>
                <div className={style.container1941} id="y1941">
                    <div className={style.container1941Col1}>
                        <img src={y1941} alt="1941" className={style.image1941}/>
                    </div>
                    <div className={style.container1941Col2}>
                        <p className={`${style.container1941Title} ${style.wideContainerTitle}`}>
                        1941 — 1944
                        </p>
                        <p>
                        В блокадные дни «Кресты» стали не только тюрьмой, но и укреплённым пунктом обороны. Персонал организовал защиту комплекса — 
                        на набережной Невы, прямо напротив главных ворот, возвели пулемётный дот.
                        </p>
                        <p>
                            Тюремные корпуса регулярно подвергались артобстрелам. Один из самых разрушительных ударов пришёлся на 7 ноября 1941 года: снаряды снесли Северные ворота, под обломками погибли двое часовых. Голод и лишения не щадили никого — за время блокады от истощения умерли десятки заключённых и несколько сотрудников.
                        </p>
                    </div>
                    
                </div>
                <div className={style.container1958} id="y1958">
                    <div className={style.container1958Col1}>
                        <p className={`${style.container1958Title} ${style.wideContainerTitle}`}>
                        1958 — 1960
                        </p>
                        <p>
                            В послевоенные годы тюрьма «Кресты» столкнулась с острой нехваткой средств на ремонт и содержание. Чтобы решить проблему, в 1958 году начальник учреждения подполковник Н.Е. Орловский организовал на территории картонажную фабрику. Всего за год удалось создать полноценное производство с заготовительным цехом, которое быстро стало приносить доход. К 1960 году мастерские возглавил И.К. Капустин, сформировав постоянный штат рабочих.
                        </p>
                    </div>
                    <div className={style.container1958Col2}>
                        <img src={y1958} alt="1958" className={style.image1958}/>
                    </div>
                </div>
                <div className={style.container1990} id="y1990">
                    <div className={style.container1990Col1}>
                        <img src={y1990} alt="1990" className={style.image1990}/>
                    </div>
                    <div className={style.container1990Col2}>
                        <p className={`${style.container1990Title} ${style.wideContainerTitle}`}>
                        90 — Е
                        </p>
                        <p>
                           В тюрьме одиночные камеры переделали под размещение шести человек, из-за чего общее число заключённых достигло 12 тысяч.
                        </p>
                        <p>
                           Перенаселённая тюрьма не справлялась и люди страдали от тесноты, голода и холода. Этот период оставил тяжёлые воспоминания на судьбах многих людей. 
                        </p>
                    </div>    
                </div>
                <div className={style.container2006} id="y2006">
                    <div className={style.container2006Col1}>
                        <p className={`${style.container2006Title} ${style.wideContainerTitle}`}>
                        2006 —
                        </p>
                        <p>
                           В 2000-х власти обратили внимание на хроническую переполненность СИЗО. Ранее, в годы репрессий и в 1990-е, в камерах площадью 8 м² содержали по 20 и более человек. В 2006 году приняли решение о строительстве нового комплекса «Кресты-2» на 35 га в Колпино.
                        </p>
                    </div>
                    <div className={style.container2006Col2}>
                        <img src={y2006} alt="2006" className={style.image2006}/>
                    </div>    
                </div>
                <div className={style.container2017} id="y2017">
                    <div className={style.container2017Col1}>
                        <p className={`${style.container2017Title} ${style.wideContainerTitle}`}>
                        2017 —
                        </p>
                        <p className={style.paragraph2017}>
                           В 2017 году завершилось строительство нового тюремного комплекса, состоящего из двух восьмиэтажных крестообразных корпусов. 22 декабря того же года последние заключённые были переведены из старых «Крестов» в новый следственный изолятор в Колпино, который в народе сразу прозвали «Новые Кресты» или «Кресты-2». Исторический комплекс на Арсенальной набережной окончательно прекратил функционировать как тюрьма.
                        </p>
                    </div>
                    <div className={style.container2017Col2}>
                        <img src={y2017} alt="2017" className={style.image2017}/>
                    </div>    
                </div>
                <div className={style.container2025} id="y2025">
                    <div className={style.container2025Col1}>
                        <img src={y2025} alt="2025" className={style.image2025}/>
                    </div>
                    <div className={style.container2025Col2}>
                        <p className={`${style.container2025Title} ${style.wideContainerTitle}`}>
                        — 2025
                        </p>
                        <p className={style.paragraph2025}>
                           В 2017 году завершилось строительство нового тюремного комплекса, состоящего из двух восьмиэтажных крестообразных корпусов. 22 декабря того же года последние заключённые были переведены из старых «Крестов» в новый следственный изолятор в Колпино, который в народе сразу прозвали «Новые Кресты» или «Кресты-2». Исторический комплекс на Арсенальной набережной окончательно прекратил функционировать как тюрьма.
                        </p>
                    </div>
                </div>
                <div className={style.containerAboutPeople}>
                    <div className={style.famousPeopleBlock}>
                        <div className={style.famousPeopleBlockTitle}>
                            <p className={style.famousPeopleBlockTitleText1}>ИЗВЕСТНЫЕ</p>
                            <div className={style.famousPeopleBlockTitleSub}>
                                <div className={style.famousPeopleBlockTitleSubAnimation}><RotatingCross/></div>
                                <p className={style.famousPeopleBlockTitleText2}>ЛИЧНОСТИ</p>
                            </div>
                        </div>
                        <FamousCards/>
                    </div>
                    <div className={style.containerDangerousPeople}>
                        <div className={style.dangerousPeopleBlockTitle}>
                            <p className={style.dangerousPeopleBlockTitleText1}>ОПАСНЫЕ</p>
                            <div className={style.dangerousPeopleBlockTitleSub}>
                                <div className={style.dangerousPeopleBlockTitleSubAnimation}><RotatingCross/></div>
                                <p className={style.dangerousPeopleBlockTitleText2}>ЗАКЛЮЧЁННЫЕ</p>
                            </div>
                        </div>
                        <DangerousCards/>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default History;