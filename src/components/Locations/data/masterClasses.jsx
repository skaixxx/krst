import { createContext, useContext, useState } from "react";

import Parfum from "../../../assets/locations/MasterClass/parfum.png";
import Kuznez from "../../../assets/locations/MasterClass/Kuznez.png";
import Keramika from "../../../assets/locations/MasterClass/keramika.png";
import Flora from "../../../assets/locations/MasterClass/flora.png";
import Zhivopis from "../../../assets/locations/MasterClass/zhivopis.png";
import Svechi from "../../../assets/locations/MasterClass/svechi.png";


import lamp from "../assets/locations/ConcretMasterClasses/lamp.svg";
import kovalna from "../assets/locations/ConcretMasterClasses/kovalna.svg";
import paint from "../assets/locations/ConcretMasterClasses/paint.svg";


import mcCalendar from "../../../assets/locations/MasterClass/calendar.svg";
import mcWhiteCalendar from "../../../assets/locations/MasterClass/calendar-white.svg";
import mcValute from "../../../assets/locations/MasterClass/valute.svg";
import mcValuteBlack from "../../../assets/locations/MasterClass/valute-black.svg";
import NotFound from "../../404/NotFound";


const ListMC =  [
	{
		id: 1,
		title: 'ПАРФЮМ',
		image: Parfum,
		text: 'Приглашаем вас на уникальный мастер-класс по созданию собственного парфюма! Погрузитесь в мир ароматов под руководством опытного парфюмера.',
		date: '12.04 - 12.05',
		text1: 'Научитесь сочетать ароматические ноты, создавая уникальные композиции из эфирных масел. На занятии вы освоите основы парфюмерного искусства. ',
        price: 'от 2000 ₽',
        price1: 'от 2 000 руб',
        icon1: lamp,
		icon2: kovalna,
        icon3: paint,
        categories: [
        {
		name1: '#романтический',
		name2: '#арттерапия',
		name3: '#индивидуальный',
        },
        ],
        text2: 'Вы откроете язык запахов, где цитрусовые искрятся, древесные ноты согревают, а цветочные аккорды рассказывают без слов.',
        text3: 'Научитесь составлять пирамиды из эфиров, чувствуя, как звучат вместе сандал и ваниль, роза и пачули. Здесь точные расчеты встречаются с вдохновением — один точный капелька переворачивает всю композицию.',
        inText1:"Придумай и выкуй",
        inText2:"Историческая кузня",
        inText3:"Творческая свобода",
        mcCalendar: mcCalendar,
        mcWhiteCalendar: mcWhiteCalendar,
        mcValute: mcValute,
        mcValuteBlack: mcValuteBlack,
	},
		{
		id: 2,
		title: 'КУЗНЕЧНОЕ РЕМЕСЛО',
		image: Kuznez,
		text: 'Вы узнаете секреты обращения с металлом и научитесь основным техникам кузнечного дела. На практическом занятии можно создать собственное кованое изделие.',
		date: '27.05 - 10.06',
		text1: 'Погрузитесь в атмосферу древнего ремесла на нашем мастер-классе по кузнечному мастерству, который проходит в уникальной исторической кузне.',
        price: 'от 1 500 ₽',
        price1: 'от 1 500 руб',
        icon1: lamp,
		icon2: kovalna,
        icon3: paint,
         categories: [
        {
		name1: '#индивидуальный',
		name2: '#тематический',
        },
        ],
        text2: 'Каждое занятие наполнено увлекательными историями о кузнецах, их традициях и технике работы с металлом, что сделает ваше времяпрепровождение не только обучающим, но и увлекательным.',
        text3: 'Не упустите возможность прикоснуться к истории и освоить древнее, но все ещё актуальное ремесло под руководством профессионалов своего дела!',
        inText1:"Придумай и выкуй",
        inText2:"Историческая кузня",
        inText3:"Творческая свобода",
        mcCalendar: mcCalendar,
        mcWhiteCalendar: mcWhiteCalendar,
        mcValute: mcValute,
        mcValuteBlack: mcValuteBlack,
	},
	{
		id: 3,
		title: 'КЕРАМИКА',
		image: Keramika,
		text: 'Погрузитесь в увлекательный мир гончарного дела и создайте уникальное изделие своими руками. Наш мастер-класс подходит как для начинающих, так и для тех, кто уже имеет опыт.',
		date: '16.03 - 26.06',
		text1: 'Попробуйте себя в гончарном искусстве! На наших занятиях вы освоите основы работы с глиной: от лепки до декорирования. ',
        price: 'от 2 500 ₽',
        price1: 'от 2 500 руб',
        icon1: lamp,
		icon2: kovalna,
        icon3: paint,
        categories: [
        {
        name1: '#групповой',
		name2: '#семейный',
        name3: '#длядетей',
        },    
        ],
        text2: 'Под руководством мастера участники освоят основные техники ручной лепки, научатся формировать изделия и украшать их различными способами.',
        text3: 'После завершения работы все изделия проходят обязательную просушку и профессиональный обжиг. Занятие подходит для начинающих, все необходимые материалы предоставляются.',
        inText1:"Придумай и выкуй",
        inText2:"Историческая кузня",
        inText3:"Творческая свобода",
        mcCalendar: mcCalendar,
        mcWhiteCalendar: mcWhiteCalendar,
        mcValute: mcValute,
        mcValuteBlack: mcValuteBlack,
	},
	{
		id: 4,
		title: 'ФЛОРИСТИКА',
		image: Flora,
		text: 'Мастер-класс по флористике является отличной возможностью познакомиться с искусством составления цветочных композиций и развить своё творческое мышление.',
		date: '22.03 - 22.07',
		text1: 'Познакомьтесь с искусством составления цветочных композиций. На занятиях вы освоите основные техники работы с растениями, научитесь подбирать материалы и создавать гармоничные букеты.',
        price: 'от 2 000 ₽',
        price1: 'от 2 000 руб',
        icon1: lamp,
		icon2: kovalna,
        icon3: paint,
        categories: [
        {
		name1: '#арттерапия',
		name2: '#групповой',
        name3: '#тематический',
        },
        ],
        text2: 'Вдохновляющая атмосфера и все необходимые инструменты помогут вам раскрыть творческий потенциал.Познакомьтесь с искусством создания цветочных композиций.',
        text3: 'Вы освоите основные принципы работы с растениями, научитесь сочетать цвета и формы, создавая выразительные букеты. Под руководством флориста соберете собственную композицию!',
        inText1:"Придумай и выкуй",
        inText2:"Историческая кузня",
        inText3:"Творческая свобода",
        mcCalendar: mcCalendar,
        mcWhiteCalendar: mcWhiteCalendar,
        mcValute: mcValute,
        mcValuteBlack: mcValuteBlack,
	},
    {
		id: 5,
		title: 'ЖИВОПИСЬ',
		image: Zhivopis,
		text: 'Приглашаем вас окунуться в мир творчества и изобразительного искусства на нашем мастер-классе по живописи!',
		date: '10.02 - 15.06',
		text1: 'На занятиях вы освоите базовые принципы: как составлять композицию, смешивать цвета, работать с разными материалами.',
        price: 'от 1 000 ₽',
        price1: 'от 1 000 руб',
        icon1: lamp,
		icon2: kovalna,
        icon3: paint,
        categories: [
        {
		name1: '#групповой',
		name2: '#арттерапия',
        name3: '#длядетей',
        },
        ],
        text2: 'Мы разберём технические приёмы, но главное — научимся видеть и анализировать, что делает изображение выразительным.',
        text3: 'На наших занятиях ыы будете экспериментировать с разными материалами, изучать основы композиции и колористики, а также вдохновляться работами великих мастеров.',
        inText1:"Придумай и выкуй",
        inText2:"Историческая кузня",
        inText3:"Творческая свобода",
        mcCalendar: mcCalendar,
        mcWhiteCalendar: mcWhiteCalendar,
        mcValute: mcValute,
        mcValuteBlack: mcValuteBlack,
	},
     {
		id: 6,
		title: 'СВЕЧИ',
		image: Svechi,
		text: 'Приглашаем вас окунуться в мир творчества и изобразительного искусства на нашем мастер-классе по живописи!',
		date: '10.02 - 15.06',
		text1: 'На занятиях вы освоите базовые принципы: как составлять композицию, смешивать цвета, работать с разными материалами.',
        price: 'от 1 500 ₽',
        price1: 'от 1 500 руб',
        icon1: lamp,
		icon2: kovalna,
        icon3: paint,
        categories: [
        {
		name1: '#индивидуальный',
		name2: '#романтический',
        name3: '#арттерапия',
        },
        ],
        text2: 'Вы научитесь основам: подготовке воска и парафина, работе с фитилями, добавлению оттенков и ароматов. Разберём тонкости процесса - как добиться ровной поверхности, создавать слои и текстуры.',
        text3: 'Это ремесло, где ваша внимательность превращается в ровный гладкий край, а творческая смелость — в необычные цветовые переходы.',
        inText1:"Придумай и выкуй",
        inText2:"Историческая кузня",
        inText3:"Творческая свобода",
        mcCalendar: mcCalendar,
        mcWhiteCalendar: mcWhiteCalendar,
        mcValute: mcValute,
        mcValuteBlack: mcValuteBlack,
	},
];

const DataContext = createContext();

export function DataProvider({ children }) {
    const [ items, setItems] = useState(ListMC);
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