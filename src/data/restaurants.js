import iconCapacityLight from "../assets/Locations/Icons/iconCapacityLight.svg";
import iconCapacityDark from "../assets/Locations/Icons/iconCapacityDark.svg"; 
import iconRubLight from "../assets/Locations/Icons/icon1.svg";
import iconRubDark from "../assets/Locations/Icons/icon3.svg";
export const restaurants = [
    {
		id: "nightly",
		special: "nightly",
		title: {ru: "NIGHTLY", en: "NIGHTLY"},
		image: `${process.env.PUBLIC_URL}/images/locations/Restaurants/night.png`,
		text: {ru: "Nightly — это футуристичный ресторан, в котором современный дизайн и инновационные технологии создают атмосферу будущего.",
			en: "Nightly is a futuristic restaurant where modern design and innovative technologies create an atmosphere of the future."
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
		price1: {ru: "от 3 500 ₽",
			en: "from 3 500 ₽"
		},
		price: {ru: "от 3 500 руб",
			en: "from 3 500 rub"
		},
		tags: [
			{name: {ru: "#интернациональная", en:"#international" },},
			{name: {ru: "#авторская", en: "#authorial"} ,},
			{name: {ru: "#семейный", en: "#family"} ,}
		],
		insideText1: {ru: "Молекулярный десерт «Космос» с азотным охлаждением, стейк из мраморной говядины с соусом из трюфеля, салат с киноа, цитрусами и соусом юдзу, мини-бургеры с разными видами мяса и соусов.",
			en: "Kosmos molecular dessert with nitrogen cooling, marbled beef steak with truffle sauce, salad with quinoa, citrus fruits and yuzu sauce, mini burgers with different types of meat and sauces."
		},
		insideText2: {ru: "МММ, как же всё это вкусно, это место определённо для тех, кто ценит необычные вкусы, стильный отдых и незабываемую атмосферу",
			en: "MMM, how delicious it all is, this place is definitely for those who appreciate unusual tastes, stylish holidays and an unforgettable atmosphere."
		},
        iconsInside: {
            icon1: `${process.env.PUBLIC_URL}/images/locations/Restaurants/Nightly/icon_1.svg`,
            icon2: `${process.env.PUBLIC_URL}/images/locations/Restaurants/Nightly/icon_2.svg`,
            icon3: `${process.env.PUBLIC_URL}/images/locations/Restaurants/Nightly/icon_3.svg`,
        },
		insideBtnText: {
			ru: "перейти",
			en: "go to"
		},
		subIconsTextRU: [
			"Авторские смузи и кофе",
			"Сезонные продукты",
			"Интернациональная кухня"
		],
		subIconsTextEN: [
			"Author's smoothies and coffee",
			"Seasonal products",
			"International cuisine"
		]
	},
	{
		id: "georgian",
		special: "georgian",
		title: {ru: "GK", en: "GK"},
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
		text1: {ru: "GK — ресторан, где каждый гость может почувствовать тёплую атмосферу грузинского дома. В меню представлены блюда, приготовленные по старинным рецептам и традициям. Это место для шумных застолий и душевных встреч за вкусной едой.",
			en: "GK is a restaurant where every guest can feel the warm atmosphere of a Georgian house. The menu features dishes prepared according to ancient recipes and traditions. This is a place for noisy feasts and sincere meetings over delicious food."
		},
		cardIcon1Desktop: iconRubDark,
		cardIcon2Desktop: iconCapacityDark,
		cardIcon1Mobile: iconRubDark,
		cardIcon2Mobile: iconCapacityDark,
		price1: {ru: "от 2 000 ₽", en: "from 2 000 ₽"},
		price: {ru: "от 2 000 руб", en: "from 2 000 rub"},
		tags: [
			{name: {ru: "#грузинская", en:"#georgian" },},
			{name: {ru: "#семейный", en: "#family"} ,},
		],
		insideText1: {ru: "Хачапури по-аджарски с расплавленным сыром и яйцом, хинкали с мясом или зеленью, чахохбили из курицы в ароматных специях",
			en: "Adjarian khachapuri with melted cheese and egg, khinkali with meat or herbs, chicken chakhokhbili in aromatic spices"
		},
		insideText2: {ru: "Безумно вкусные и сочные блюда в лучших традициях Грузии.",
			en: "Incredibly delicious and juicy dishes in the best traditions of Georgia."
		},
        iconsInside: {
            icon1: `${process.env.PUBLIC_URL}/images/locations/Restaurants/GK/icon_1.svg`,
            icon2: `${process.env.PUBLIC_URL}/images/locations/Restaurants/GK/icon_2.svg`,
            icon3: `${process.env.PUBLIC_URL}/images/locations/Restaurants/GK/icon_3.svg`,
        },
		insideBtnText: {
			ru: "перейти",
			en: "go to"
		},
		subIconsTextRU: [
			"Домашнее вино",
			"Национальные блюда",
			"Грузинская кухня"
		],
		subIconsTextEN: [
			"Homemade wine",
			"National dishes",
			"Georgian cuisine"
		]
	},
	{
		id: "green",
		special: "green",
		title: {ru: "GREENX", en: "GREENX"},
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
		text1: {ru: "GREENX — ресторан с особым вниманием к свежести и натуральности. Здесь царит эко-философия: зелёные стены, живые растения и блюда, приготовленные из органических продуктов. Это идеальное место для тех, кто ценит здоровую еду и атмосферу гармонии с природой.",
			en: "GREENX is a restaurant with special attention to freshness and naturalness. Eco-philosophy reigns here: green walls, live plants and dishes made from organic products. It is an ideal place for those who appreciate healthy food and an atmosphere of harmony with nature."},
		cardIcon1Desktop: iconRubDark,
		cardIcon2Desktop: iconCapacityDark,
		cardIcon1Mobile: iconRubDark,
		cardIcon2Mobile: iconCapacityDark,
		price1: {ru: "от 1 500 ₽", en: "from 1 500 ₽"},
		price: {ru: "от 1 500 руб", en: "from 1 500 rub"},
		tags: [
			{name: {ru: "#европейская", en:"#european" },},
			{name: {ru: "#завтраки", en: "#breakfast"} ,},
			{name: {ru: "#авторская", en: "#authorial"} ,}
		],
		insideText1: {ru: "Зелёный смузи с авокадо, шпинатом и яблоком, боул с киноа, свежими овощами и соусом тахини, крем-суп из брокколи и шпината, чай матча с миндальным молоком",
			en: "Green smoothie with avocado, spinach and apple, quinoa bowl with fresh vegetables and tahini sauce, broccoli and spinach cream soup, matcha tea with almond milk"
		},
		insideText2: {ru: "Идеально подходит для тех, кто следит за фигурой и здоровьем, наши блюда отвечают нашему названию.",
			en: "Ideal for those who follow the figure and health, our dishes correspond to our name."
		},
        iconsInside: {
            icon1: `${process.env.PUBLIC_URL}/images/locations/Restaurants/GREENX/icon_1.svg`,
            icon2: `${process.env.PUBLIC_URL}/images/locations/Restaurants/GREENX/icon_2.svg`,
            icon3: `${process.env.PUBLIC_URL}/images/locations/Restaurants/GREENX/icon_3.svg`,
        },
		insideBtnText: {
			ru: "перейти",
			en: "go to"
		},
		subIconsTextRU: [
			"Блюда на дровяной печи",
			"Сырное ассорти",
			"Паста по старинным рецептам"
		],
		subIconsTextEN: [
			"Dishes on a wood-burning stove",
			"Assorted cheese",
			"Pasta according to old recipes"
		]
	},
	{
		id: "vegi",
		special: "vegi",
		title: {ru: "VEGI", en: "VEGI"},
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
		text1: {ru: "VEGI — ресторан, созданный специально для тех, кто выбирает растительное питание. Здесь нет мяса и рыбы — только овощи, фрукты, злаки и бобовые в самых вкусных и необычных сочетаниях. Интерьер выполнен в мягких тонах, располагающих к спокойствию и наслаждению едой.",
			en: "VEGI is a restaurant created specifically for those who choose plant—based food. There is no meat or fish here — only vegetables, fruits, cereals and legumes in the most delicious and unusual combinations. The interior is decorated in soft colors, encouraging peace and enjoyment of food."
		},
		cardIcon1Desktop: iconRubLight,
		cardIcon2Desktop: iconCapacityLight,
		cardIcon1Mobile: iconRubDark,
		cardIcon2Mobile: iconCapacityDark,
		price1: {ru: "от 1 000 ₽", en: "from 1 000 ₽"},
		price: {ru: "от 1 000 руб", en: "from 1 000 rub"},
		tags: [
			{name: {ru: "#семейный", en:"#family" },},
			{name: {ru: "#вегетарианская", en: "#vegetarian"} ,},
			{name: {ru: "#детскоеменю", en: "#forkids"} ,}
		],
		insideText1: {ru: "Веганские роллы с авокадо и овощами, фалафель с соусом тахини и свежей зеленью, лазанья из баклажанов с томатным соусом, салат из киноа с гранатом и лимонной заправкой.",
			en: "Vegan rolls with avocado and vegetables, falafel with tahini sauce and fresh herbs, eggplant lasagna with tomato sauce, quinoa salad with pomegranate and lemon dressing."
		},
		insideText2: {ru: "Приготовлено исключительно из натуральных продуктов без использования мяса и рыбы.",
			en: "It is made exclusively from natural products without the use of meat and fish."
		},
        iconsInside: {
            icon1: `${process.env.PUBLIC_URL}/images/locations/Restaurants/VEGI/icon_1.svg`,
            icon2: `${process.env.PUBLIC_URL}/images/locations/Restaurants/VEGI/icon_2.svg`,
            icon3: `${process.env.PUBLIC_URL}/images/locations/Restaurants/VEGI/icon_3.svg`,
        },
		insideBtnText: {
			ru: "перейти",
			en: "go to"
		},
		subIconsTextRU: [
			"Собственные оливковые масла",
			"Национальные блюда",
			"Авторские овощные закуски"
		],
		subIconsTextEN: [
			"Own olive oil",
			"National dishes",
			"Author's vegetable snacks"
		]
	},
	{
		id: "asian",
		special: "asian",
		title: {ru: "ASIAN D", en: "ASIAN D"},
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
		text1: {ru: "ASIAN D — изысканный ресторан азиатской кухни, в котором каждый элемент пропитан культурой Востока. Интерьер выполнен в классическом азиатском стиле: мягкий свет, деревянные перегородки, традиционная посуда. Меню сочетает классические блюда Китая, Японии, Таиланда и Вьетнама в авторском исполнении шеф-повара.",
			en: "ASIAN D is an exquisite Asian cuisine restaurant in which every element is imbued with Oriental culture. The interior is decorated in classic Asian style: soft light, wooden partitions, traditional dishes. The menu combines classic dishes from China, Japan, Thailand and Vietnam, created by the chef."},
		cardIcon1Desktop: iconRubDark,
		cardIcon2Desktop: iconCapacityDark,
		cardIcon1Mobile: iconRubDark,
		cardIcon2Mobile: iconCapacityDark,
		price1: {ru: "от 2 000 ₽", en: "from 2 000 ₽"},
		price: {ru: "от 2 000 руб", en: "from 2 000 rub"},
		tags: [
			{name: {ru: "#азиатская", en:"#asian" },},
			{name: {ru: "#семейный", en: "#family"} ,},
		],
		insideText1: {ru: "Суши и сашими из свежей рыбы премиум-класса, Том Ям с креветками и кокосовым молоком, Утка по-пекински с блинчиками и соусом хойсин, Пад Тай с курицей и арахисом",
			en: "Premium fresh fish sushi and sashimi, Tom Yam with shrimp and coconut milk, Peking Duck with pancakes and hoisin sauce, Pad Thai with chicken and peanuts"
		},
		insideText2: {ru: "Открой для себя вкус этих необыкновенных блюд и вновь почувствуй тягу к чему-то прекрасному и новому!",
			en: "Discover the taste of these extraordinary dishes and feel the craving for something wonderful and new again!"
		},
        iconsInside: {
            icon1: `${process.env.PUBLIC_URL}/images/locations/Restaurants/AsianD/icon_1.svg`,
            icon2: `${process.env.PUBLIC_URL}/images/locations/Restaurants/AsianD/icon_2.svg`,
            icon3: `${process.env.PUBLIC_URL}/images/locations/Restaurants/AsianD/icon_3.svg`,
        },
		insideBtnText: {
			ru: "перейти",
			en: "go to"
		},
		subIconsTextRU: [
			"Фирменные коктейли",
			"Азиатская кухня",
			"Живая музыка"
		],
		subIconsTextEN: [
			"Specialty cocktails",
			"Asian cuisine",
			"Live music"
		]
	},
	{
		id: "default",
		special: "default",
		title: {ru: "DEFAULT", en: "DEFAULT"},
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
		text1: {ru: "Default — ресторан для тех, кто ценит проверенные временем блюда и комфортную атмосферу. Меню составлено из самых популярных рецептов европейской кухни. Интерьер универсален: строгий, но уютный, подходящий и для деловых встреч, и для романтического ужина.",
			en: "Default is a restaurant for those who appreciate time—tested dishes and a comfortable atmosphere. The menu is made up of the most popular recipes of European cuisine. The interior is versatile: austere but cozy, suitable for both business meetings and a romantic dinner."},
		cardIcon1Desktop: iconRubDark,
		cardIcon2Desktop: iconCapacityDark,
		cardIcon1Mobile: iconRubDark,
		cardIcon2Mobile: iconCapacityDark,
		price1: {ru: "от 2 500 ₽", en: "from 2 500 ₽"},
		price: {ru: "от 2 500 руб", en: "from 2 500 rub"},
		tags: [
			{name: {ru: "#европейская", en:"#european" },},
			{name: {ru: "#детскоеменю", en: "#forkids"} ,},
			{name: {ru: "#авторская", en: "#authorial"} ,}
		],
		insideText1: {ru: "Стейк из говядины с соусом бернез, паста карбонара с пармезаном, салат «Цезарь» с курицей, крем-суп из шампиньонов",
			en: "Beef steak with bernese sauce, carbonara pasta with parmesan, Caesar salad with chicken, cream mushroom soup"
		},
		insideText2: {ru: "Эти блюда наиболее известны широкой публике и прекрасно, что есть такое место, куда можно прийти с семьёй в любое время",
			en: "These dishes are best known to the general public and it's great that there is a place where you can come with your family at any time."
		},
        iconsInside: {
            icon1: `${process.env.PUBLIC_URL}/images/locations/Restaurants/DEFAULT/icon_1.svg`,
            icon2: `${process.env.PUBLIC_URL}/images/locations/Restaurants/DEFAULT/icon_2.svg`,
            icon3: `${process.env.PUBLIC_URL}/images/locations/Restaurants/DEFAULT/icon_3.svg`,
        },
		insideBtnText: {
			ru: "перейти",
			en: "go to"
		},
		subIconsTextRU: [
			"Гастро-перформансы",
			"Молекулярные коктейли",
			"Меню-сюрприз"
		],
		subIconsTextEN: [
			"Gastro-performances",
			"Molecular cocktails",
			"Surprise menu"
		]
	}
]