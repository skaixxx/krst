import iconRub from "../assets/Locations/Icons/icon1.svg";
import iconCal from "../assets/Locations/Icons/icon2.svg";

export const masterClasses = [
    {
        id: "parfum",
        special: "parfum",
		title: 'ПАРФЮМ',
		image: "/images/locations/MasterClasses/Parfurm.png",
		text: 'Приглашаем вас на уникальный мастер-класс по созданию собственного парфюма! Погрузитесь в мир ароматов под руководством опытного парфюмера.',
		sub: '12.04 - 12.05',
		text1: 'Научитесь сочетать ароматические ноты, создавая уникальные композиции из эфирных масел. На занятии вы освоите основы парфюмерного искусства. ',
        cardIcon1: iconRub,
        cardIcon2: iconCal,
        price1: 'от 2 000 ₽',
        price: 'от 2 000 руб',
        tags: [
            {name: "#романтический" ,},
            {name: "#арттерапия" ,},
            {name: "#индивидуальный" ,}
        ],
        iconsInside: {
            icon1: "",
            icon2: "",
            icon3: "",
        }
    },
    {
        id: "blacksmithing",
        special: "blacksmithing",
		title: 'КУЗНЕЧНОЕ РЕМЕСЛО',
		image: "/images/locations/MasterClasses/Blacksmithing.png",
		text: 'Вы узнаете секреты обращения с металлом и научитесь основным техникам кузнечного дела. На практическом занятии можно создать собственное кованое изделие.',
		sub: '27.05 - 10.06',
		text1: 'Научитесь сочетать ароматические ноты, создавая уникальные композиции из эфирных масел. На занятии вы освоите основы парфюмерного искусства. ',
        cardIcon1: iconRub,
        cardIcon2: iconCal,
        price1: 'от 1 500 ₽',
        price: 'от 1 500 руб',
        tags: [
            {name: "#индивидуальный" ,},
            {name: "#тематический" ,}
        ],
        iconsInside: {
            icon1: "",
            icon2: "",
            icon3: "",
        }
    },
    {
        id: "ceramics",
        special: "ceramics",
		title: 'КЕРАМИКА',
		image: "/images/locations/MasterClasses/Ceramics.png",
		text: 'Погрузитесь в увлекательный мир гончарного дела и создайте уникальное изделие своими руками. Наш мастер-класс подходит как для начинающих, так  и для тех, кто уже имеет опыт.',
		sub: '16.03 - 26.06',
		text1: 'Научитесь сочетать ароматические ноты, создавая уникальные композиции из эфирных масел. На занятии вы освоите основы парфюмерного искусства. ',
        cardIcon1: iconRub,
        cardIcon2: iconCal,
        price1: 'от 2 500 ₽',
        price: 'от 2 500 руб',
        tags: [
            {name: "#групповой" ,},
            {name: "#семейный" ,},
            {name: "#длядетей" ,}
        ],
        iconsInside: {
            icon1: "",
            icon2: "",
            icon3: "",
        }
    }
]