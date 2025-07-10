import { createContext, useContext, useState } from "react";

import Nomad from "../assets/locations/ListRestaraunts/ListRestaraunt2.png";
import Starik from "../assets/locations/ListRestaraunts/ListRestaraunt3.png";
import Marsala from "../assets/locations/ListRestaraunts/ListRestaraunt4.png";
import Baklazhan from "../assets/locations/ListRestaraunts/ListRestaraunt5.png";
import TIGER  from "../assets/locations/ListRestaraunts/ListRestaraunt6.png";
import Leth from "../assets/locations/ListRestaraunts/ListRestaraunt7.png";

import concretNomad from "../assets/locations/ConcretListRestaraunts/nomad.png";
import concretStarik from "../assets/locations/ConcretListRestaraunts/starik.png";
import concretMarsala from "../assets/locations/ConcretListRestaraunts/marsala.png";
import concretBaklazhan from "../assets/locations/ConcretListRestaraunts/baklazhan.png";
import concretTiger from "../assets/locations/ConcretListRestaraunts/tiger.png";
import concretLeth from "../assets/locations/ConcretListRestaraunts/leth.png";


import coffee from "../assets/locations/ConcretListRestaraunts/coffee.svg";
import products from "../assets/locations/ConcretListRestaraunts/products.svg";
import inter from "../assets/locations/ConcretListRestaraunts/inter.svg";
import vine from "../assets/locations/ConcretListRestaraunts/vine.svg";
import bludo from "../assets/locations/ConcretListRestaraunts/bludo.svg";
import khinkali from "../assets/locations/ConcretListRestaraunts/khinkali.svg";
import pech from "../assets/locations/ConcretListRestaraunts/pech.svg";
import cheese from "../assets/locations/ConcretListRestaraunts/cheese.svg";
import pasta from "../assets/locations/ConcretListRestaraunts/pasta.svg";
import oil from "../assets/locations/ConcretListRestaraunts/oil.svg";
import nationalbludo from "../assets/locations/ConcretListRestaraunts/nationalbludo.svg";
import vegetables from "../assets/locations/ConcretListRestaraunts/vegetables.svg";
import coctail from "../assets/locations/ConcretListRestaraunts/coctail.svg";
import panaziat from "../assets/locations/ConcretListRestaraunts/panaziat.svg";
import guitar from "../assets/locations/ConcretListRestaraunts/guitar.svg";
import gastro from "../assets/locations/ConcretListRestaraunts/gastro.svg";
import molkok from "../assets/locations/ConcretListRestaraunts/molkok.svg";
import menusurprise from "../assets/locations/ConcretListRestaraunts/menu-surprise.svg";


import lrValute from "../assets/locations/ListRestaraunts/valute.svg";
import lrValuteBlack from "../assets/locations/ListRestaraunts/valute-black.svg";
import lrPeopleBlack from "../assets/locations/ListRestaraunts/peopleblack.svg";
import lrPeople from "../assets/locations/ListRestaraunts/people.svg";
import NotFound from "../../404/NotFound";


const ListLR =  [
	{
		id: 1,
		title: 'NOMAD',
		image: Nomad,
        concretimage: concretNomad,
		text: 'Самые вкусные и фотогеничные завтраки в Петербурге. У нас вы можете попробовать шакшуку, омлет с крабом или наш фирменный скрембл с мортаделлой или форелью.',
		place: '80 мест',
        concretplace: 'доступно 80 мест',
		text1: 'NOMAND — культовое место для гурманов, где утро начинается с лучших завтраков в городе. Наше меню это европейский comfort food в сердце Петроградской стороны.',
        price: '3 500 ₽',
        price1: '3 500 руб',
        icon1: coffee,
		icon2: products,
        icon3: inter,
        categories: [
        {
		name1: '#европейская',
		name2: '#завтраки',
        },
        ],
        text2: 'Каждое блюдо в NOMAD — это диалог традиций и новаторства. В меню вы найдете как узнаваемые вкусы, так и неожиданные сочетания, где главную роль играют качественные сезонные ингредиенты. Сомелье поможет подобрать идеальное вино из нашей обширной коллекции.',
        text3: 'Интерьер ресторана — это гармоничное сочетание натурального дерева, латуни, стекла и мрамора. Особую атмосферу создает свет: каждый светильник — винтажный экземпляр 60-70-х годов, тщательно подобранный командой NOMAD.',
        inText1:"Авторские смузи и кофе",
        inText2:"Сезонные продукты",
        inText3:"Интерпретации европейской классики",
        lrValute: lrValute,
        lrValuteBlack: lrValuteBlack,
        lrPeopleBlack: lrPeopleBlack,
        lrPeople: lrPeople,
	},
	{
		id: 2,
		title: 'СТАРИК ХИНКАЛЫЧ',
		image: Starik,
        concretimage: concretStarik,
		text: 'Вас ждут самолепные хинкали, разнообразные виды хачапури, аджапсандал, а также множество блюд, приготовленных по традиционным рецептам. ',
		place: '40 мест',
        concretplace: 'доступно 40 мест',
		text1: 'Старик Хинкалыч — популярное заведение, специализирующееся на грузинской кухне. Основная гордость ресторана — хинкали, разнообразные по начинкам.',
        price: '2 000 ₽',
        price1: '2 000 руб',
        icon1: vine,
		icon2: bludo,
        icon3: khinkali,
         categories: [
        {
		name1: '#грузинская',
		name2: '#семейный',
        },
        ],
        text2: 'Грамотно подобранные вина из различных регионов Грузии подчеркнут вкус каждого угощения. Старик Хинкалыч часто принимает участие в кулинарных фестивалях и мастер-классах, где гости могут узнать секреты приготовления грузинских деликатесов.',
        text3: 'Уютная атмосфера и аутентичный интерьер создают ощущение грузинского дома. Здесь можно насладиться как деловыми обедами, так и дружескими встречами. ',
        inText1:"Домашнее вино",
        inText2:"Национальные блюда",
        inText3:"Грузинская кухня",
        lrValute: lrValute,
        lrValuteBlack: lrValuteBlack,
        lrPeopleBlack: lrPeopleBlack,
        lrPeople: lrPeople,
	},
	{
		id: 3,
		title: 'MARSALA',
		image: Marsala,
        concretimage: concretMarsala,
		text: 'Авторские блюда по разумным ценам, эксклюзивные вина по бокалам и комфортная обстановка с живыми растениями.',
		place: '60 мест',
        concretplace: 'доступно 60 мест',
		text1: 'Marsala — современное заведение, сочетающее в себе элементы итальянской кухни и уютную атмосферу.',
        price: '1 500 ₽',
        price1: '1 500 руб',
        icon1: pech,
		icon2: cheese,
        icon3: pasta,
        categories: [
        {
        name1: '#европейская',
		name2: '#авторская',
        name3: '#завтраки',
        },    
        ],
        text2: 'Тщательно отобранная винная карта с лучшими итальянскими винами дополняет гастрономический опыт. Marsala регулярно проводит тематические вечера и кулинарные мастер-классы, где гости могут научиться готовить традиционные итальянские блюда.  Элегантный интерьер и теплая атмосфера делают ресторан идеальным местом для романтических ужинов, деловых встреч и семейных праздников',
        text3: 'Элегантный интерьер и теплая атмосфера делают ресторан идеальным местом для романтических ужинов, деловых встреч и семейных праздников',
        inText1:"Блюда на дровяной печи",
        inText2:"Сырное ассорти",
        inText3:"Паста по старинным рецептам",
        lrValute: lrValute,
        lrValuteBlack: lrValuteBlack,
        lrPeopleBlack: lrPeopleBlack,
        lrPeople: lrPeople,
	},
	{
		id: 4,
		title: 'БАКЛАЖАН',
		image: Baklazhan,
        concretimage: concretBaklazhan,
		text: 'Это идеальное место для дружеских встреч, где можно насладиться блюдами в непринуждённой обстановке, а семейные обеды становятся настоящим праздником.',
		place: '40 мест',
        concretplace: 'доступно 40 мест',
		text1: 'Баклажан — уютный ресторан, посвященный средиземноморской кухне с акцентом на блюда из свежих овощей, морепродуктов и оливковых масел.',
        price: '1 000 ₽',
        price1: '1 000 руб',
        icon1: oil,
		icon2: nationalbludo,
        icon3: vegetables,
        categories: [
        {
		name1: '#семейный',
		name2: '#европейская',
        name3: '#детскоеменю',
        },
        ],
        text2: 'Наши повара ежедневно создают кулинарные шедевры, сочетая традиционные рецепты с современными техниками подачи. В винную карту вошли лучшие образцы из Италии, Франции и Греции.',
        text3: 'Просторный зал с панорамными окнами, терракотовой плиткой и живыми оливковыми деревьями создает атмосферу курортного ресторана где-то на побережье. Идеальное место для тех, кто ценит качественную кухню и непринужденную обстановку.',
        inText1:"Собственные оливковые масла",
        inText2:"Национальные блюда",
        inText3:"Авторские овощные закуски",
        lrValute: lrValute,
        lrValuteBlack: lrValuteBlack,
        lrPeopleBlack: lrPeopleBlack,
        lrPeople: lrPeople,
	},
    {
		id: 5,
		title: 'TIGER LILY',
		image: TIGER,
        concretimage: concretTiger,
		text: 'Наши гости могут насладиться разнообразными блюдами китайской кухни, приготовленными по оригинальным и традиционным рецептам.',
		place: '70 мест',
        concretplace: 'доступно 70 мест',
		text1: 'Tiger Lily — современный ресторан с азиатским уклоном, где сочетаются традиционные вкусы и новаторские подходы. Визитная карточка заведения это авторские роллы и острые тайские супы.',
        price: '2 000 ₽',
        price1: '2 000 руб',
        icon1: coctail,
		icon2: panaziat,
        icon3: guitar,
        categories: [
        {
		name1: '#китайская',
		name2: '#семейный',
        },
        ],
        text2: 'Шеф-повар Tiger Lily экспериментирует с ингредиентами, создавая уникальные сочетания. Ресторан регулярно проводит тематические ужины и мастер-классы по приготовлению суши.',
        text3: 'Минималистичный дизайн с акцентами в стиле джунглей и мягким светом делает пространство идеальным для романтических свиданий и вечеринок.',
        inText1:"Фирменные коктейли",
        inText2:"Паназиатская кухня",
        inText3:"Живая музыка",
        lrValute: lrValute,
        lrValuteBlack: lrValuteBlack,
        lrPeopleBlack: lrPeopleBlack,
        lrPeople: lrPeople,
	},
     {
		id: 6,
		title: 'LETH',
		image: Leth,
        concretimage: concretLeth,
		text: 'Меню ресторана предлагает уникальные блюд, основное внимание уделяется игре вкусов и визуальным эффектам.',
		place: '30 мест',
        concretplace: 'доступно 30 мест',
		text1: 'LETH — это современный ресторан, где сочетаются инновационные кулинарные техники и изысканные вкусы. Наше меню вдохновлено мировыми тенденциями, а каждое блюдо — это настоящее произведение искусства.',
        price: '2 500 ₽',
        price1: '2 500 руб',
        icon1: gastro,
		icon2: molkok,
        icon3: menusurprise,
        categories: [
        {
		name1: '#европейская',
		name2: '#авторская',
        },
        ],
        text2: 'LETH славится уникальной атмосферой, где элегантность встречается с новаторством. Мы используем только лучшие сезонные продукты, чтобы создать неповторимые вкусовые сочетания. Ресторан регулярно проводит тематические ужины и коллаборации с известными шеф-поварами, предлагая гостям новые гастрономические впечатления.',
        text3: 'Идеальное место для романтических вечеров, деловых встреч и особых мероприятий.',
        inText1:"Гастро-перформансы",
        inText2:"Молекулярные коктейли",
        inText3:"Меню-сюрприз",
        lrValute: lrValute,
        lrValuteBlack: lrValuteBlack,
        lrPeopleBlack: lrPeopleBlack,
        lrPeople: lrPeople,
	},
];

const DataContext = createContext();

export function DataProvider({ children }) {
    const [ items, setItems] = useState(ListLR);
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