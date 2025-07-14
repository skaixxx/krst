import iconRubLight from "../assets/Locations/Icons/icon1.svg";
import iconCalLight from "../assets/Locations/Icons/icon2.svg";
import iconRubDark from "../assets/Locations/Icons/icon3.svg";
import iconCalDark from "../assets/Locations/Icons/icon4.svg";

export const masterClasses = [
    {
        id: "parfum",
        special: "parfum",
		title: 'ПАРФЮМ',
		image: "/images/locations/MasterClasses/Parfurm.png",
		text: 'Приглашаем вас на уникальный мастер-класс по созданию собственного парфюма! Погрузитесь в мир ароматов под руководством опытного парфюмера.',
		subText2: '12.04 - 12.05',
		text1: 'Научитесь сочетать ароматические ноты, создавая уникальные композиции из эфирных масел. На занятии вы освоите основы парфюмерного искусства. ',
        cardIcon1Desktop: iconRubLight,
        cardIcon2Desktop: iconCalLight,
        cardIcon1Mobile: iconRubDark,
        cardIcon2Mobile: iconCalDark,
        price1: 'от 2 000 ₽',
        price: 'от 2 000 руб',
        tags: [
            {name: "#романтический" ,},
            {name: "#арттерапия" ,},
            {name: "#индивидуальный" ,}
        ],
        insideText1: "Вы откроете язык запахов, где цитрусовые искрятся, древесные ноты согревают, а цветочные аккорды рассказывают без слов.",
        insideText2: "Научитесь составлять пирамиды из эфиров, чувствуя, как звучат вместе сандал и ваниль, роза и пачули. Здесь точные расчеты встречаются с вдохновением — один точный капелька переворачивает всю композицию.",
        iconsInside: {
            icon1: "/images/locations/MasterClasses/Parfurm/icon_1.svg",
            icon2: "/images/locations/MasterClasses/Parfurm/icon_2.svg",
            icon3: "/images/locations/MasterClasses/Parfurm/icon_3.svg",
        },
        subIconsText: [
            "Стойкий запах",
            "Подберите свой аромат",
            "Натуральные компоненты"
        ]
    },
    {
        id: "blacksmithing",
        special: "blacksmithing",
		title: 'КУЗНЕЧНОЕ РЕМЕСЛО',
		image: "/images/locations/MasterClasses/Blacksmithing.png",
		text: 'Вы узнаете секреты обращения с металлом и научитесь основным техникам кузнечного дела. На практическом занятии можно создать собственное кованое изделие.',
		subText2: '27.05 - 10.06',
		text1: 'Погрузитесь в атмосферу древнего ремесла на нашем мастер-классе по кузнечному мастерству, который проходит в уникальной исторической кузне.',
        cardIcon1Desktop: iconRubDark,
        cardIcon2Desktop: iconCalDark,
        cardIcon1Mobile: iconRubDark,
        cardIcon2Mobile: iconCalDark,
        price1: 'от 1 500 ₽',
        price: 'от 1 500 руб',
        tags: [
            {name: "#индивидуальный" ,},
            {name: "#тематический" ,}
        ],
        insideText1: "Каждое занятие наполнено увлекательными историями о кузнецах, их традициях и технике работы с металлом, что сделает ваше времяпрепровождение не только обучающим, но и увлекательным.",
        insideText2: "Не упустите возможность прикоснуться к истории и освоить древнее, но все ещё актуальное ремесло под руководством профессионалов своего дела!",
        iconsInside: {
            icon1: "/images/locations/MasterClasses/Blacksmithing/icon_1.svg",
            icon2: "/images/locations/MasterClasses/Blacksmithing/icon_2.svg",
            icon3: "/images/locations/MasterClasses/Blacksmithing/icon_3.svg",
        },
        subIconsText: [
            "Придумай и выкуй",
            "Историческая кузня",
            "Творческая свобода"
        ]
    },
    {
        id: "ceramics",
        special: "ceramics",
		title: 'КЕРАМИКА',
		image: "/images/locations/MasterClasses/Ceramics.png",
		text: 'Погрузитесь в увлекательный мир гончарного дела и создайте уникальное изделие своими руками. Наш мастер-класс подходит как для начинающих, так  и для тех, кто уже имеет опыт.',
		subText2: '16.03 - 26.06',
		text1: 'Попробуйте себя в гончарном искусстве! На наших занятиях вы освоите основы работы с глиной: от лепки до декорирования. ',
        cardIcon1Desktop: iconRubDark,
        cardIcon2Desktop: iconCalDark,
        cardIcon1Mobile: iconRubDark,
        cardIcon2Mobile: iconCalDark,
        price1: 'от 2 500 ₽',
        price: 'от 2 500 руб',
        tags: [
            {name: "#групповой" ,},
            {name: "#семейный" ,},
            {name: "#длядетей" ,}
        ],
        insideText1: "Под руководством мастера участники освоят основные техники ручной лепки, научатся формировать изделия и украшать их различными способами.",
        insideText2: "После завершения работы все изделия проходят обязательную просушку и профессиональный обжиг. Занятие подходит для начинающих, все необходимые материалы предоставляются.",
        iconsInside: {
            icon1: "/images/locations/MasterClasses/Ceramics/icon_1.svg",
            icon2: "/images/locations/MasterClasses/Ceramics/icon_2.svg",
            icon3: "/images/locations/MasterClasses/Ceramics/icon_3.svg",
        },
        subIconsText: [
            "Яркая роспись",
            "Быстрая сушка",
            "Лепка вручную"
        ]
    },
    {
        id: "floristry",
        special: "floristry",
		title: 'ФЛОРИСТИКА',
		image: "/images/locations/MasterClasses/Floristry.png",
		text: 'Мастер-класс по флористике является отличной возможностью познакомиться с искусством составления цветочных композиций и развить своё творческое мышление.',
		subText2: '22.03 - 22.07',
		text1: 'Познакомьтесь с искусством составления цветочных композиций. На занятиях вы освоите основные техники работы с растениями, научитесь подбирать материалы и создавать гармоничные букеты.',
        cardIcon1Desktop: iconRubLight,
        cardIcon2Desktop: iconCalLight,
        cardIcon1Mobile: iconRubDark,
        cardIcon2Mobile: iconCalDark,
        price1: 'от 2 000 ₽',
        price: 'от 2 000 руб',
        tags: [
            {name: "#арттерапия" ,},
            {name: "#групповой" ,},
            {name: "#тематический" ,}
        ],
        insideText1: "Вдохновляющая атмосфера и все необходимые инструменты помогут вам раскрыть творческий потенциал.Познакомьтесь с искусством создания цветочных композиций.",
        insideText2: "Вы освоите основные принципы работы с растениями, научитесь сочетать цвета и формы, создавая выразительные букеты. Под руководством флориста соберете собственную композицию!",
        iconsInside: {
            icon1: "/images/locations/MasterClasses/Floristry/icon_1.svg",
            icon2: "/images/locations/MasterClasses/Floristry/icon_2.svg",
            icon3: "/images/locations/MasterClasses/Floristry/icon_3.svg",
        },
        subIconsText: [
            "Оформи букет",
            "Создай свою композицию",
            "Разнообразие цветов"
        ]
    },
    {
        id: "painting",
        special: "painting",
		title: 'ЖИВОПИСЬ',
		image: "/images/locations/MasterClasses/Painting.jpg",
		text: 'Приглашаем вас окунуться в мир творчества и изобразительного искусства на нашем мастер-классе по живописи!',
		subText2: '10.02 - 15.06',
		text1: 'На занятиях вы освоите базовые принципы: как составлять композицию, смешивать цвета, работать с разными материалами.',
        cardIcon1Desktop: iconRubDark,
        cardIcon2Desktop: iconCalDark,
        cardIcon1Mobile: iconRubDark,
        cardIcon2Mobile: iconCalDark,
        price1: 'от 1 000 ₽',
        price: 'от 1 000 руб',
        tags: [
            {name: "#групповой" ,},
            {name: "#арттерапия" ,},
            {name: "#длядетей" ,}
        ],
        insideText1: "Мы разберём технические приёмы, но главное — научимся видеть и анализировать, что делает изображение выразительным.",
        insideText2: "На наших занятиях вы будете экспериментировать с разными материалами, изучать основы композиции и колористики, а также вдохновляться работами великих мастеров.",
        iconsInside: {
            icon1: "/images/locations/MasterClasses/Painting/icon_1.svg",
            icon2: "/images/locations/MasterClasses/Painting/icon_2.svg",
            icon3: "/images/locations/MasterClasses/Painting/icon_3.svg",
        },
        subIconsText: [
            "Работа с цветом",
            "Удобное рабочее место",
            "Разные материалы"
        ]
    },
    {
        id: "candles",
        special: "candles",
		title: 'СВЕЧИ',
		image: "/images/locations/MasterClasses/Candles.png",
		text: 'Приглашаем вас в мир ароматов и света на нашем мастер-классе по созданию свечей. На занятии вы узнаете все тонкости и секреты этого искусства.',
        subText2: '08.04 - 23.06',
		text1: 'Создание свечей — это увлекательное сочетание ремесла и творчества, где каждая деталь превращает простые материалы в уютный аксессуар.',
        cardIcon1Desktop: iconRubDark,
        cardIcon2Desktop: iconCalDark,
        cardIcon1Mobile: iconRubDark,
        cardIcon2Mobile: iconCalDark,
        price1: 'от 1 500 ₽',
        price: 'от 1 500 руб',
        tags: [
            {name: "#индвидуальный" ,},
            {name: "#романтический" ,},
            {name: "#арттерапия" ,}
        ],
        insideText1: "Вы научитесь основам: подготовке воска и парафина, работе с фитилями, добавлению оттенков и ароматов. Разберём тонкости процесса - как добиться ровной поверхности, создавать слои и текстуры.",
        insideText2: "Это ремесло, где ваша внимательность превращается в ровный гладкий край, а творческая смелость — в необычные цветовые переходы.",
        iconsInside: {
            icon1: "/images/locations/MasterClasses/Candles/icon_1.svg",
            icon2: "/images/locations/MasterClasses/Candles/icon_2.svg",
            icon3: "/images/locations/MasterClasses/Candles/icon_3.svg",
        },
        subIconsText: [
            "Ручная работа",
            "Натуральные ароматы",
            "Эфирные масла"
        ]
    }
]