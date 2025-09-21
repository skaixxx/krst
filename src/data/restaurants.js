import iconCapacityLight from "../assets/Locations/Icons/iconCapacityLight.svg";
import iconCapacityDark from "../assets/Locations/Icons/iconCapacityDark.svg"; 
import iconRubLight from "../assets/Locations/Icons/icon1.svg";
import iconRubDark from "../assets/Locations/Icons/icon3.svg";
export const restaurants = [
    {
		id: "nightly",
		special: "nightly",
		title: 'NIGHTLY',
		image: `${process.env.PUBLIC_URL}/images/locations/Restaurants/night.png`,
		text: {ru: "Nightly — это футуристичный ресторан, в котором современный дизайн и инновационные технологии создают атмосферу будущего.",
			en: "Nightly is a futuristic restaurant where modern design and innovative technologies create an atmosphere of the future. The menu includes dishes from various cuisines of the world, from signature salads to unique desserts. This is a place for those who appreciate unusual tastes and stylish holidays."
		},
		subText1: {ru: "доступно",
			en: "available"
		},
		subText2: {ru: "80 мест",
			en: "80 seats"
		},
		subText3: {ru: "Средний чек",
			en: "Average receipt"
		},
		subText4: {ru: "Вместимость ресторана",
			en: "Restaurant capacity"
		},
		text1: {ru: "Nightly — это футуристичный ресторан, в котором современный дизайн и инновационные технологии создают атмосферу будущего. Меню включает блюда различных кухонь мира — от авторских салатов до уникальных десертов. Это место для тех, кто ценит необычные вкусы и стильный отдых.",
			en: "Nightly is a futuristic restaurant where modern design and innovative technologies create an atmosphere of the future. The menu includes dishes from various cuisines of the world, from signature salads to unique desserts. This is a place for those who appreciate unusual tastes and stylish holidays."
		},
		cardIcon1Desktop: iconRubLight,
		cardIcon2Desktop: iconCapacityLight,
		cardIcon1Mobile: iconRubDark,
		cardIcon2Mobile: iconCapacityDark,
		price1: 'от 3 500 ₽',
		price: 'от 3 500 руб',
		tags: [
			{name: "#интернациональная" ,},
			{name: "#авторская" ,},
			{name: "#семейный" ,}
		],
		insideText1: "Меню включает блюда различных кухонь мира — от авторских салатов до уникальных десертов.",
		insideText2: "Это место для тех, кто ценит необычные вкусы и стильный отдых.",
        iconsInside: {
            icon1: `${process.env.PUBLIC_URL}/images/locations/Restaurants/Nightly/icon_1.svg`,
            icon2: `${process.env.PUBLIC_URL}/images/locations/Restaurants/Nightly/icon_2.svg`,
            icon3: `${process.env.PUBLIC_URL}/images/locations/Restaurants/Nightly/icon_3.svg`,
        },
		subIconsText: [
			"Авторские смузи и кофе",
			"Сезонные продукты",
			"Интерпретации европейской классики"
		]
	},
	{
		id: "georgian",
		special: "georgian",
		title: 'GK',
		image: `${process.env.PUBLIC_URL}/images/locations/Restaurants/Georgian.png`,
		text: 'GK — традиционный ресторан грузинской кухни, где каждый гость может ощутить настоящий колорит Грузии.',
		subText1: {ru: "доступно",
			en: "available"
		},
		subText2: {ru: "40 мест",
			en: "40 seats"
		},
		subText3: {ru: "Средний чек",
			en: "Average receipt"
		},
		subText4: {ru: "Вместимость ресторана",
			en: "Restaurant capacity"
		},
		text1: "",
		cardIcon1Desktop: iconRubDark,
		cardIcon2Desktop: iconCapacityDark,
		cardIcon1Mobile: iconRubDark,
		cardIcon2Mobile: iconCapacityDark,
		price1: 'от 2 000 ₽',
		price: 'от 2 000 руб',
		tags: [
			{name: "#грузинская" ,},
			{name: "#семейный" ,}
		],
		insideText1: "Здесь подают ароматные хачапури, сочные хинкали и блюда, приготовленные по старинным рецептам.",
		insideText2: "Атмосфера уюта и радушия погружает в культуру и традиции гостеприимного Тбилиси.",
        iconsInside: {
            icon1: `${process.env.PUBLIC_URL}/images/locations/Restaurants/GK/icon_1.svg`,
            icon2: `${process.env.PUBLIC_URL}/images/locations/Restaurants/GK/icon_2.svg`,
            icon3: `${process.env.PUBLIC_URL}/images/locations/Restaurants/GK/icon_3.svg`,
        },
		subIconsText: [
			"Домашнее вино",
			"Национальные блюда",
			"Грузинская кухня"
		]
	},
	{
		id: "green",
		special: "green",
		title: 'GREENX',
		image: `${process.env.PUBLIC_URL}/images/locations/Restaurants/Green.png`,
		text: 'GREENX — ресторан, где природа встречается с гастрономией. ',
		subText1: {ru: "доступно",
			en: "available"
		},
		subText2: {ru: "60 мест",
			en: "60 seats"
		},
		subText3: {ru: "Средний чек",
			en: "Average receipt"
		},
		subText4: {ru: "Вместимость ресторана",
			en: "Restaurant capacity"
		},
		text1: "",
		cardIcon1Desktop: iconRubDark,
		cardIcon2Desktop: iconCapacityDark,
		cardIcon1Mobile: iconRubDark,
		cardIcon2Mobile: iconCapacityDark,
		price1: 'от 1 500 ₽',
		price: 'от 1 500 руб',
		tags: [
			{name: "#европейская" ,},
			{name: "#авторская" ,},
			{name: "#завтраки" ,}
		],
		insideText1: "Интерьер наполнен зелёными растениями, а в меню представлены полезные и вкусные блюда из свежих, натуральных продуктов. Идеальное место для тех, кто хочет вкусно поесть и при этом вести здоровый образ жизни, не переплачивая.",
		insideText2: "",
        iconsInside: {
            icon1: `${process.env.PUBLIC_URL}/images/locations/Restaurants/GREENX/icon_1.svg`,
            icon2: `${process.env.PUBLIC_URL}/images/locations/Restaurants/GREENX/icon_2.svg`,
            icon3: `${process.env.PUBLIC_URL}/images/locations/Restaurants/GREENX/icon_3.svg`,
        },
		subIconsText: [
			"Блюда на дровяной печи",
			"Сырное ассорти",
			"Паста по старинным рецептам"
		]
	},
	{
		id: "vegi",
		special: "vegi",
		title: 'VEGI',
		image: `${process.env.PUBLIC_URL}/images/locations/Restaurants/vegetablesOnly.png`,
		text: 'VEGI — ресторан, созданный специально для вегетарианцев и тех, кто ценит лёгкую и полезную пищу.',
		subText1: {ru: "доступно",
			en: "available"
		},
		subText2: {ru: "40 мест",
			en: "40 seats"
		},
		subText3: {ru: "Средний чек",
			en: "Average receipt"
		},
		subText4: {ru: "Вместимость ресторана",
			en: "Restaurant capacity"
		},
		text1: "",
		cardIcon1Desktop: iconRubLight,
		cardIcon2Desktop: iconCapacityLight,
		cardIcon1Mobile: iconRubDark,
		cardIcon2Mobile: iconCapacityDark,
		price1: 'от 1 000 ₽',
		price: 'от 1 000 руб',
		tags: [
			{name: "#семейный" ,},
			{name: "#вегетарианская" ,},
			{name: "#детскоеменю" ,}
		],
		insideText1: "В меню только растительные ингредиенты — яркие салаты, питательные боулы и оригинальные вегетарианские блюда.",
		insideText2: "Атмосфера заведения спокойная и уютная, чтобы каждый гость мог насладиться вкусом и гармонией.",
        iconsInside: {
            icon1: `${process.env.PUBLIC_URL}/images/locations/Restaurants/VEGI/icon_1.svg`,
            icon2: `${process.env.PUBLIC_URL}/images/locations/Restaurants/VEGI/icon_2.svg`,
            icon3: `${process.env.PUBLIC_URL}/images/locations/Restaurants/VEGI/icon_3.svg`,
        },
		subIconsText: [
			"Собственные оливковые масла",
			"Национальные блюда",
			"Авторские овощные закуски"
		]
	},
	{
		id: "asian",
		special: "asian",
		title: 'ASIAN D',
		image: `${process.env.PUBLIC_URL}/images/locations/Restaurants/Asian.png`,
		text: 'ASIAN D — ресторан высокой азиатской кухни, оформленный в классическом стиле Востока. ',
		subText1: {ru: "доступно",
			en: "available"
		},
		subText2: {ru: "50 мест",
			en: "50 seats"
		},
		subText3: {ru: "Средний чек",
			en: "Average receipt"
		},
		subText4: {ru: "Вместимость ресторана",
			en: "Restaurant capacity"
		},
		text1: "",
		cardIcon1Desktop: iconRubDark,
		cardIcon2Desktop: iconCapacityDark,
		cardIcon1Mobile: iconRubDark,
		cardIcon2Mobile: iconCapacityDark,
		price1: 'от 2 000 ₽',
		price: 'от 2 000 руб',
		tags: [
			{name: "#азиатская" ,},
			{name: "#семейный" ,}
		],
		insideText1: "Здесь подают изысканные блюда из Японии, Китая, Таиланда и других стран региона. Это место для ценителей восточной культуры и гурманов, готовых насладиться настоящими шедеврами кулинарного искусства.",
		insideText2: "",
        iconsInside: {
            icon1: `${process.env.PUBLIC_URL}/images/locations/Restaurants/AsianD/icon_1.svg`,
            icon2: `${process.env.PUBLIC_URL}/images/locations/Restaurants/AsianD/icon_2.svg`,
            icon3: `${process.env.PUBLIC_URL}/images/locations/Restaurants/AsianD/icon_3.svg`,
        },
		subIconsText: [
			"Фирменные коктейли",
			"Паназиатская кухня",
			"Живая музыка"
		]
	},
	{
		id: "default",
		special: "default",
		title: 'DEFAULT',
		image: `${process.env.PUBLIC_URL}/images/locations/Restaurants/DefaultEu.png`,
		text: 'Default — классический ресторан европейской кухни, где подают знакомые и любимые блюда в современном исполнении. Интерьер выполнен в универсальном стиле, который подойдёт как для деловых встреч, так и для семейных ужинов. Отличный выбор для тех, кто ценит проверенные вкусы и комфорт.',
		subText1: {ru: "доступно",
			en: "available"
		},
		subText2: {ru: "70 мест",
			en: "70 seats"
		},
		subText3: {ru: "Средний чек",
			en: "Average receipt"
		},
		subText4: {ru: "Вместимость ресторана",
			en: "Restaurant capacity"
		},
		text1: "",
		cardIcon1Desktop: iconRubDark,
		cardIcon2Desktop: iconCapacityDark,
		cardIcon1Mobile: iconRubDark,
		cardIcon2Mobile: iconCapacityDark,
		price1: 'от 2 500 ₽',
		price: 'от 2 500 руб',
		tags: [
			{name: "#европейская" ,},
			{name: "#детскоеменю" ,},
			{name: "#авторская" ,}
		],
		insideText1: "",
		insideText2: "",
        iconsInside: {
            icon1: `${process.env.PUBLIC_URL}/images/locations/Restaurants/DEFAULT/icon_1.svg`,
            icon2: `${process.env.PUBLIC_URL}/images/locations/Restaurants/DEFAULT/icon_2.svg`,
            icon3: `${process.env.PUBLIC_URL}/images/locations/Restaurants/DEFAULT/icon_3.svg`,
        },
		subIconsText: [
			"Гастро-перформансы",
			"Молекулярные коктейли",
			"Меню-сюрприз"
		]
	}
]