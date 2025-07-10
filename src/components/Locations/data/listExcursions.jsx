import { createContext, useContext, useState } from "react";

import architecture from "../assets/locations/ListExcursions/architecture.png";
import prison from "../assets/locations/ListExcursions/prison.png";
import escape from "../assets/locations/ListExcursions/prison-2.png";
import nadzor from "../assets/locations/ListExcursions/nadzor.png";
import legend from "../assets/locations/ListExcursions/legend.png";
import prisoners from "../assets/locations/ListExcursions/prisoners.png";

import concretArchitecture from "../assets/locations/ConcretListExcursions/architecture.png";
import concretPrisonlife from "../assets/locations/ConcretListExcursions/prisonlife.png";
import concretEscape from "../assets/locations/ConcretListExcursions/escape.png";
import concretNadzor from "../assets/locations/ConcretListExcursions/nadzor.png";
import concretLegend from "../assets/locations/ConcretListExcursions/legend.png";
import concretPrisoners from "../assets/locations/ConcretListExcursions/uzniki.png";


import instruments from "../assets/locations/ConcretListExcursions/instruments.svg";
import transform from "../assets/locations/ConcretListExcursions/transform.svg";
import install from "../assets/locations/ConcretListExcursions/install.svg";
import history from "../assets/locations/ConcretListExcursions/history.svg";
import magic from "../assets/locations/ConcretListExcursions/magic.svg";
import headphone from "../assets/locations/ConcretListExcursions/headphones.svg";
import megaphone from "../assets/locations/ConcretListExcursions/megaphone.svg";
import run from "../assets/locations/ConcretListExcursions/run.svg";
import fallout from "../assets/locations/ConcretListExcursions/fallout.svg";
import eye from "../assets/locations/ConcretListExcursions/eye.svg";
import ment from "../assets/locations/ConcretListExcursions/ment.svg";
import evolution from "../assets/locations/ConcretListExcursions/evolution.svg";
import ghost from "../assets/locations/ConcretListExcursions/ghost.svg";
import hat from "../assets/locations/ConcretListExcursions/hat.svg";
import lupa from "../assets/locations/ConcretListExcursions/lupa.svg";
import polit from "../assets/locations/ConcretListExcursions/polit.svg";
import vor from "../assets/locations/ConcretListExcursions/vor.svg";
import famous from "../assets/locations/ConcretListExcursions/famous.svg";



import mcTime from "../assets/locations/ListExcursions/time.svg";
import mcWhiteTime from "../assets/locations/ListExcursions/white-time.svg";
import mcValute from "../assets/locations/ListExcursions/valute.svg";
import mcValuteBlack from "../assets/locations/ListExcursions/valute-black.svg";
import NotFound from "../../404/NotFound";


const ListLE =  [
	{
		id: 1,
		title: 'АРХИТЕКТУРА',
		image: architecture,
        concretimage: concretArchitecture,
		text: 'Вас ждёт захватывающий рассказ о том, как проектировались и строились здания, какую роль играли безопасность и организация пространства в их конструкциях.',
		time: '14:00-18:30',
		text1: 'Экскурсия раскрывает тайны архитектурной эволюции одного из самых знаковых мест города — от суровых тюремных стен до современного культурного кластера.',
        price: 'от 1 2000 ₽',
        price1: 'от 1 200 руб',
        icon1: instruments,
		icon2: transform,
        icon3: install,
        categories: [
        {
		name1: '#дневная',
		name2: '#аудиогид',
		name3: '#пешая',
        },
        ],
        text2: 'Вы погрузитесь в уникальную атмосферу места, где каждый кирпич хранит свою историю. Наши гиды раскроют вам секреты архитектурных стилей — от неоготики до современного урбанизма.',
        text3: 'Интерактивная система сопровождения позволит вам услышать голоса архитекторов прошлого и настоящего, чьи идеи воплощены в этих стенах.',
        inText1:"Строительные решения",
        inText2:"Трансформация пространства",
        inText3:"Современные инсталляции",
        leTime: mcTime,
        leWhiteTime: mcWhiteTime,
        mcValute: mcValute,
        mcValuteBlack: mcValuteBlack,
	},
		{
		id: 2,
		title: 'ТЮРЕМНАЯ ЖИЗНЬ',
		image: prison,
        concretimage: concretPrisonlife,
		text: 'Погрузитесь в атмосферу прошлого и узнайте, как жили заключённые в стенах знаменитой тюрьмы. Вы сможете познакомиться с их бытом и камерами.',
		time: '16:00-21:00',
		text1: 'Экскурсия предлагает уникальную возможность погрузиться в мир, который обычно остаётся за закрытыми дверями исправительных учреждений.',
        price: 'от 700 ₽',
        price1: 'от 700 руб',
        icon1: history,
		icon2: magic,
        icon3: headphone,
         categories: [
        {
		name1: '#вечерняя',
		name2: '#интерактивная',
        name3: '#аудиогид',
        name4: '#беседа',
        },
        ],
        text2: 'Экскурсия включает интерактивные элементы, которые позволят участникам задать вопросы и обсудить реальные истории из жизни заключённых и сотрудников тюрьмы.',
        text3: 'Участники смогут увидеть различные зоны тюрьмы, включая камеры, прогулочные дворы и административные помещения.',
        inText1:"Истории заключенных",
        inText2:"Погружение в атмосферу",
        inText3:"Система аудиогида",
        leTime: mcTime,
        leWhiteTime: mcWhiteTime,
        mcValute: mcValute,
        mcValuteBlack: mcValuteBlack,
	},
	{
		id: 3,
		title: 'ПОБЕГИ',
		image: escape,
        concretimage: concretEscape,
		text: 'Исследуйте загадочную тюрьму и почувствуйте себя настоящим пленником, разгадывающим секреты побега. Экскурсия позволяет заново ощутить дух свободы.',
		time: '18:00-22:00',
		text1: 'Экскурсия раскрывает самые дерзкие и хитроумные попытки побегов из легендарной тюрьмы. Узнайте, как заключенные преодолевали, казалось бы, непреодолимые преграды.',
        price: 'от 1 500 ₽',
        price1: 'от 1 500 руб',
        icon1: megaphone,
		icon2: run,
        icon3: fallout,
        categories: [
        {
        name1: '#вечерняя',
		name2: '#интерактивная',
        name3: '#пешая',
        name4: '#квест',
        },    
        ],
        text2: 'Эта экскурсия проведет вас по следам самых дерзких побегов в истории тюрьмы. Вы услышите подробные рассказы о тщательно спланированных операциях, когда заключенные преодолевали, казалось бы, непреодолимые преграды.',
        text3: 'Вы увидите подлинные места, где осуществлялись эти попытки, с сохранившимися следами и отметинами. В программу включены документальные кадры из архивов ФСИН и возможность изучить настоящие тюремные чертежи.',
        inText1:"Самые громкие случаи",
        inText2:"Невероятные уловки",
        inText3:"Последствия попыток",
        leTime: mcTime,
        leWhiteTime: mcWhiteTime,
        mcValute: mcValute,
        mcValuteBlack: mcValuteBlack,
	},
	{
		id: 4,
		title: 'НАДЗИРАТЕЛИ',
		image: nadzor,
        concretimage: concretNadzor,
		text: 'На экскурсии бывшие надзиратели поделятся личными историями, которые помогут понять психологию заключённых и специфику их взаимодействия с охраной.',
		time: '15:00-18:00',
		text1: 'Экскурсия о тех, кто поддерживал порядок за стенами учреждения.',
        price: 'от 900 ₽',
        price1: 'от 900 руб',
        icon1: eye,
		icon2: ment,
        icon3: evolution,
        categories: [
        {
		name1: '#дневная',
		name2: '#аудиогид',
        name3: '#беседа',
        },
        ],
        text2: 'Эта экскурсия раскрывает малоизвестные страницы работы тюремного персонала. Вы узнаете, как менялись методы надзора от XIX века до наших дней, познакомитесь с секретными инструкциями и методиками работы.',
        text3: 'Вам покажут подлинную форму надзирателей разных периодов, средства связи и сигнализации, архивные фотографии рабочих моментов.',
        inText1:"Методы надзора",
        inText2:"Истории сотрудников",
        inText3:"Эволюция тюремных правил",
        leTime: mcTime,
        leWhiteTime: mcWhiteTime,
        mcValute: mcValute,
        mcValuteBlack: mcValuteBlack,
	},
    {
		id: 5,
		title: 'ЛЕГЕНДЫ',
		image: legend,
        concretimage: concretLegend,
		text: 'Погрузитесь в атмосферу прошлого и откройте для себя тайны, которые хранит это уникальное место. Это увлекательная экскурсия, которая перенесёт вас в мир загадок и мистики.',
		time: '20:00-23:00',
		text1: 'Мистическая экскурсия по самым загадочным местам и историям, связанным с тюрьмой.',
        price: 'от 2 000 ₽',
        price1: 'от 2 000 руб',
        icon1: ghost,
		icon2: hat,
        icon3: lupa,
        categories: [
        {
		name1: '#вечерняя',
		name2: '#беседа',
        name3: '#интерактивная',
        },
        ],
        text2: 'Ночная экскурсия для тех, кто хочет узнать другую сторону истории этого места. Вы посетите знаменитую "камеру №7", где фиксировались паранормальные явления, услышите легенды о призраке бывшего надзирателя и пророчества.',
        text3: 'У вас будет уникальная возможность поработать с детекторами электромагнитных полей и получить доступ к ранее засекреченным материалам.',
        inText1:"Призраки и аномалии",
        inText2:"Необъяснимые случаи",
        inText3:"Тайные знаки и символы",
        leTime: mcTime,
        leWhiteTime: mcWhiteTime,
        mcValute: mcValute,
        mcValuteBlack: mcValuteBlack,
	},
     {
		id: 6,
		title: 'УЗНИКИ',
		image: prisoners,
        concretimage: concretPrisoners,
		text: 'Вас ждёт погружение в историю тюрьмы, начиная с известных заключённых и заканчивая теми, чьи имена канули в лету.',
		time: '12:00-16:00',
		text1: 'Экскурсия посвящена самым известным заключенным, чьи судьбы переплелись с историей этого места.',
        price: 'от 1 000 ₽',
        price1: 'от 1 000 руб',
        icon1: polit,
		icon2: vor,
        icon3: famous,
        categories: [
        {
		name1: '#вечерняя',
		name2: '#пешая',
        name3: '#интерактивная',
        },
        ],
        text2: 'Погрузитесь в глубины человеческих судеб, навсегда связанных с этим местом. Экскурсия расскажет о жизни политических заключенных 1930-х годов, "воров в законе" советской эпохи и современных знаменитостях, отбывавших здесь срок.',
        text3: 'Вы услышите подлинные истории из дневников узников, увидите личные вещи, изготовленные в камерах, и познакомитесь с реконструкцией типичного дня заключенного разных исторических периодов.',
        inText1:"Политические заключенные",
        inText2:'Жизнь "воров в законе"',
        inText3:"Известные личности",
        leTime: mcTime,
        leWhiteTime: mcWhiteTime,
        mcValute: mcValute,
        mcValuteBlack: mcValuteBlack,
	},
];

const DataContext = createContext();

export function DataProvider({ children }) {
    const [ items, setItems] = useState(ListLE);
    return (
        <DataContext.Provider value={{ items, setItems }}>
            {children}
        </DataContext.Provider>
    )
}

export function useData() {
    const context = useContext(DataContext);
    console.log(context)
    return context;
}