import iconRubLight from "../assets/Locations/Icons/icon1.svg";
import iconCalLight from "../assets/Locations/Icons/icon2.svg";
import iconRubDark from "../assets/Locations/Icons/icon3.svg";
import iconCalDark from "../assets/Locations/Icons/icon4.svg";

export const masterClasses = [
    {
        id: "perfume",
        special: "perfume",
		title: {ru: "ПАРФЮМ", en: "PERFUME"},
		image: `${process.env.PUBLIC_URL}/images/locations/MasterClasses/Parfurm.png`,
		text: {ru: "Приглашаем вас на уникальный мастер-класс по созданию собственного парфюма! Погрузитесь в мир ароматов под руководством опытного парфюмера.",
            en: "We invite you to a unique master class on creating your own perfume! Immerse yourself in the world of fragrances under the guidance of an experienced perfumer."},
		subText2: {ru: "12.04 - 12.05", en: "12.04 - 12.05"},
		text1: {ru:"Научитесь сочетать ароматические ноты, создавая уникальные композиции из эфирных масел. На занятии вы освоите основы парфюмерного искусства. ",
            en: "Learn how to combine aromatic notes, creating unique compositions of essential oils. During the lesson, you will learn the basics of perfumery."},
        cardIcon1Desktop: iconRubLight,
        cardIcon2Desktop: iconCalLight,
        cardIcon1Mobile: iconRubDark,
        cardIcon2Mobile: iconCalDark,
        price1: {ru: "от 2 000 ₽",
			en: "from 2 000 ₽"
		},
		price: {ru: "от 2 000 руб",
			en: "from 2 000 rub"
		},
        tags: [
            {name: {ru: "#романтический", en: "#romantic" },},
            {name: {ru: "#арттерапия", en: "#arttherapy"} ,},
            {name: {ru: "#индивидуальный", en: "#individual"},}
        ],
        insideText1: {ru: "Вы откроете язык запахов, где цитрусовые искрятся, древесные ноты согревают, а цветочные аккорды рассказывают без слов.",
            en: "You will discover a language of scents where citrus sparkles, woody notes warm, and floral chords speak without words."},
        insideText2: {ru: "Научитесь составлять пирамиды из эфиров, чувствуя, как звучат вместе сандал и ваниль, роза и пачули. Здесь точные расчеты встречаются с вдохновением — один точный капелька переворачивает всю композицию.",
            en:"Learn how to make pyramids of ethers, feeling how sandalwood and vanilla, rose and patchouli sound together. Here, precise calculations meet with inspiration — one precise droplet turns the whole composition upside down."},
        iconsInside: {
            icon1: `${process.env.PUBLIC_URL}/images/locations/MasterClasses/Parfurm/icon_1.svg`,
            icon2: `${process.env.PUBLIC_URL}/images/locations/MasterClasses/Parfurm/icon_2.svg`,
            icon3: `${process.env.PUBLIC_URL}/images/locations/MasterClasses/Parfurm/icon_3.svg`,
        },
        insideBtnText: {
			ru: "перейти",
			en: "go to"
		},
        subIconsTextRU: [
            "Стойкий запах",
            "Подберите свой аромат",
            "Натуральные компоненты"
        ],
        subIconsTextEN: [
            "Persistent odor",
            "Choose your fragrance",
            "Natural ingredients"
        ]
    },
    {
        id: "blacksmithing",
        special: "blacksmithing",
		title: {ru: "КУЗНЕЧНОЕ РЕМЕСЛО", en: "BLACKSMITHING"},
		image: `${process.env.PUBLIC_URL}/images/locations/MasterClasses/Blacksmithing.png`,
		text: {ru: "Вы узнаете секреты обращения с металлом и научитесь основным техникам кузнечного дела. На практическом занятии можно создать собственное кованое изделие.",
            en: "You will learn the secrets of metalworking and learn the basic techniques of blacksmithing. During the practical lesson, you can create your own forged product."},
		subText2: {ru: "27.05 - 10.06", en: "27.05 - 10.06"},
		text1: {ru: "Погрузитесь в атмосферу древнего ремесла на нашем мастер-классе по кузнечному мастерству, который проходит в уникальной исторической кузне.",
            en: "Immerse yourself in the atmosphere of ancient craft at our blacksmithing workshop, which takes place in a unique historical forge."},
        cardIcon1Desktop: iconRubDark,
        cardIcon2Desktop: iconCalDark,
        cardIcon1Mobile: iconRubDark,
        cardIcon2Mobile: iconCalDark,
        price1: {ru: "от 1 500 ₽",
			en: "from 1 500 ₽"
		},
		price: {ru: "от 1 500 руб",
			en: "from 1 500 rub"
		},
        tags: [
            {name: {ru: "#индивидуальный", en: "#individual"}},
            {name: {ru: "#тематический", en: "#thematic"}}
        ],
        insideText1: {ru: "Каждое занятие наполнено увлекательными историями о кузнецах, их традициях и технике работы с металлом, что сделает ваше времяпрепровождение не только обучающим, но и увлекательным.",
            en: "Each lesson is filled with fascinating stories about blacksmiths, their traditions and techniques of working with metal, which will make your pastime not only educational, but also fascinating."},
        insideText2: {ru: "Не упустите возможность прикоснуться к истории и освоить древнее, но все ещё актуальное ремесло под руководством профессионалов своего дела!",
            en: "Don't miss the opportunity to touch history and master an ancient but still relevant craft under the guidance of professionals in their field!"},
        iconsInside: {
            icon1: `${process.env.PUBLIC_URL}/images/locations/MasterClasses/Blacksmithing/icon_1.svg`,
            icon2: `${process.env.PUBLIC_URL}/images/locations/MasterClasses/Blacksmithing/icon_2.svg`,
            icon3: `${process.env.PUBLIC_URL}/images/locations/MasterClasses/Blacksmithing/icon_3.svg`,
        },
        insideBtnText: {
			ru: "перейти",
			en: "go to"
		},
        subIconsTextRU: [
            "Придумай и выкуй",
            "Историческая кузня",
            "Творческая свобода"
        ],
        subIconsTextEN: [
            "Invent and forge",
            "Historical Forge",
            "Creative freedom"
        ],
    },
    {
        id: "ceramics",
        special: "ceramics",
		title: {ru: "КЕРАМИКА", en: "CERAMICS"},
		image: `${process.env.PUBLIC_URL}/images/locations/MasterClasses/Ceramics.png`,
		text: {ru: "Погрузитесь в увлекательный мир гончарного дела и создайте уникальное изделие своими руками. Наш мастер-класс подходит как для начинающих, так  и для тех, кто уже имеет опыт.",
            en: "Immerse yourself in the fascinating world of pottery and create a unique piece with your own hands. Our master class is suitable for both beginners and those who already have experience."},
		subText2: {ru: "16.03 - 26.06", en: "16.03 - 26.06"},
		text1: {ru: "Попробуйте себя в гончарном искусстве! На наших занятиях вы освоите основы работы с глиной: от лепки до декорирования.",
            en: "Try your hand at pottery! In our classes, you will learn the basics of working with clay: from modeling to decorating."},
        cardIcon1Desktop: iconRubDark,
        cardIcon2Desktop: iconCalDark,
        cardIcon1Mobile: iconRubDark,
        cardIcon2Mobile: iconCalDark,
        price1: {ru: "от 2 500 ₽",
			en: "from 2 500 ₽"
		},
		price: {ru: "от 2 500 руб",
			en: "from 2 500 rub"
		},
        tags: [
            {name: {ru: "#групповой", en: "#group"}},
            {name: {ru: "#семейный",en: "#family"}},
            {name: {ru: "#длядетей", en: "#forkids"}}
        ],
        insideText1: {ru: "Под руководством мастера участники освоят основные техники ручной лепки, научатся формировать изделия и украшать их различными способами.",
            en: "Under the guidance of the master, participants will master the basic techniques of hand molding, learn how to shape products and decorate them in various ways."},
        insideText2: {ru: "После завершения работы все изделия проходят обязательную просушку и профессиональный обжиг. Занятие подходит для начинающих, все необходимые материалы предоставляются.",
            en: "After completion of the work, all products undergo mandatory drying and professional firing. The lesson is suitable for beginners, all the necessary materials are provided."},
        iconsInside: {
            icon1: `${process.env.PUBLIC_URL}/images/locations/MasterClasses/Ceramics/icon_1.svg`,
            icon2: `${process.env.PUBLIC_URL}/images/locations/MasterClasses/Ceramics/icon_2.svg`,
            icon3: `${process.env.PUBLIC_URL}/images/locations/MasterClasses/Ceramics/icon_3.svg`,
        },
        insideBtnText: {
			ru: "перейти",
			en: "go to"
		},
        subIconsTextRU: [
            "Яркая роспись",
            "Быстрая сушка",
            "Лепка вручную"
        ],
        subIconsTextEN: [
            "Bright painting",
            "Fast drying",
            "Modeling by hand"
        ],
    },
    {
        id: "floristry",
        special: "floristry",
		title: {ru: "ФЛОРИСТИКА", en: "FLORISTRY"},
		image: `${process.env.PUBLIC_URL}/images/locations/MasterClasses/Floristry.png`,
		text: {ru: "Мастер-класс по флористике является отличной возможностью познакомиться с искусством составления цветочных композиций и развить своё творческое мышление.",
            en: "The master class in floristry is an excellent opportunity to get acquainted with the art of making flower arrangements and develop your creative thinking."},
		subText2: {ru: "22.03 - 22.07", en: "22.03 - 22.07"},
		text1: {ru: "Познакомьтесь с искусством составления цветочных композиций. На занятиях вы освоите основные техники работы с растениями, научитесь подбирать материалы и создавать гармоничные букеты.",
            en: "Get to know the art of making flower arrangements. During the lessons, you will master the basic techniques of working with plants, learn how to select materials and create harmonious bouquets."},
        cardIcon1Desktop: iconRubLight,
        cardIcon2Desktop: iconCalLight,
        cardIcon1Mobile: iconRubDark,
        cardIcon2Mobile: iconCalDark,
        price1: {ru: "от 2 000 ₽",
			en: "from 2 000 ₽"
		},
		price: {ru: "от 2 000 руб",
			en: "from 2 000 rub"
		},
        tags: [
            {name: {ru: "#арттерапия", en: "#arttherapy"} ,},
            {name: {ru: "#групповой", en: "#group"}},
            {name: {ru: "#тематический", en: "#thematic"}}
        ],
        insideText1: "Вдохновляющая атмосфера и все необходимые инструменты помогут вам раскрыть творческий потенциал.Познакомьтесь с искусством создания цветочных композиций.",
        insideText2: "Вы освоите основные принципы работы с растениями, научитесь сочетать цвета и формы, создавая выразительные букеты. Под руководством флориста соберете собственную композицию!",
        iconsInside: {
            icon1: `${process.env.PUBLIC_URL}/images/locations/MasterClasses/Floristry/icon_1.svg`,
            icon2: `${process.env.PUBLIC_URL}/images/locations/MasterClasses/Floristry/icon_2.svg`,
            icon3: `${process.env.PUBLIC_URL}/images/locations/MasterClasses/Floristry/icon_3.svg`,
        },
        insideBtnText: {
			ru: "перейти",
			en: "go to"
		},
        subIconsTextRU: [
            "Оформи букет",
            "Создай свою композицию",
            "Разнообразие цветов"
        ],
        subIconsTextEN: [
            "Form a bouquet",
            "Create your own composition",
            "A variety of colors"
        ],
    },
    {
        id: "painting",
        special: "painting",
		title: {ru: "ЖИВОПИСЬ", en: "PAINTING"},
		image: `${process.env.PUBLIC_URL}/images/locations/MasterClasses/Painting.jpg`,
		text: {ru:"Приглашаем вас окунуться в мир творчества и изобразительного искусства на нашем мастер-классе по живописи!",
            en: "We invite you to plunge into the world of creativity and fine art at our painting master class!"},
		subText2: {ru: "10.02 - 15.06", en: "10.02 - 15.06"},
		text1: {ru: "На занятиях вы освоите базовые принципы: как составлять композицию, смешивать цвета, работать с разными материалами.",
            en: "During the lessons, you will learn the basic principles: how to compose a composition, mix colors, and work with different materials."},
        cardIcon1Desktop: iconRubDark,
        cardIcon2Desktop: iconCalDark,
        cardIcon1Mobile: iconRubDark,
        cardIcon2Mobile: iconCalDark,
        price1: {ru: "от 1 000 ₽",
			en: "from 1 000 ₽"
		},
		price: {ru: "от 1 000 руб",
			en: "from 1 000 rub"
		},
        tags: [
            {name: {ru: "#групповой", en: "#group"}},
            {name: {ru: "#арттерапия", en: "#arttherapy"} ,},
            {name: {ru: "#длядетей", en: "#forkids"}}
        ],
        insideText1: {ru: "Мы разберём технические приёмы, но главное — научимся видеть и анализировать, что делает изображение выразительным.",
            en: "We will analyze the techniques, but most importantly, we will learn how to see and analyze what makes an image expressive."},
        insideText2: {ru: "На наших занятиях вы будете экспериментировать с разными материалами, изучать основы композиции и колористики, а также вдохновляться работами великих мастеров.",
            en: "In our classes, you will experiment with different materials, learn the basics of composition and coloristics, and be inspired by the works of great masters."},
        iconsInside: {
            icon1: `${process.env.PUBLIC_URL}/images/locations/MasterClasses/Painting/icon_1.svg`,
            icon2: `${process.env.PUBLIC_URL}/images/locations/MasterClasses/Painting/icon_2.svg`,
            icon3: `${process.env.PUBLIC_URL}/images/locations/MasterClasses/Painting/icon_3.svg`,
        },
        insideBtnText: {
			ru: "перейти",
			en: "go to"
		},
        subIconsTextRU: [
            "Работа с цветом",
            "Удобное рабочее место",
            "Разные материалы"
        ],
        subIconsTextEN: [
            "Working with color",
            "A comfortable workplace",
            "Different materials"
        ],
    },
    {
        id: "candles",
        special: "candles",
		title: {ru: "СВЕЧИ", en: "CANDLES"},
		image: `${process.env.PUBLIC_URL}/images/locations/MasterClasses/Candles.png`,
		text: {ru: "Приглашаем вас в мир ароматов и света на нашем мастер-классе по созданию свечей. На занятии вы узнаете все тонкости и секреты этого искусства.",
            en: "We invite you to the world of scents and light at our candle making workshop. During the lesson, you will learn all the subtleties and secrets of this art."},
        subText2: {ru: "08.04 - 23.06", en: "08.04 - 23.06"},
		text1: {ru: "Создание свечей — это увлекательное сочетание ремесла и творчества, где каждая деталь превращает простые материалы в уютный аксессуар.",
            en: "Candle making is a fascinating combination of craft and creativity, where every detail transforms simple materials into a cozy accessory."},
        cardIcon1Desktop: iconRubDark,
        cardIcon2Desktop: iconCalDark,
        cardIcon1Mobile: iconRubDark,
        cardIcon2Mobile: iconCalDark,
        price1: {ru: "от 1 500 ₽",
			en: "from 1 500 ₽"
		},
		price: {ru: "от 1 500 руб",
			en: "from 1 500 rub"
		},
        tags: [
            {name: {ru: "#индивидуальный", en: "#individual"},},
            {name: {ru: "#романтический", en: "#romantic" },},
            {name: {ru: "#арттерапия", en: "#arttherapy"} ,},
        ],
        insideText1: {ru: "Вы научитесь основам: подготовке воска и парафина, работе с фитилями, добавлению оттенков и ароматов. Разберём тонкости процесса - как добиться ровной поверхности, создавать слои и текстуры.",
            en: "You will learn the basics: preparing wax and paraffin, working with wicks, adding shades and flavors. Let's look at the subtleties of the process - how to achieve a smooth surface, create layers and textures."},
        insideText2: {ru: "Это ремесло, где ваша внимательность превращается в ровный гладкий край, а творческая смелость — в необычные цветовые переходы.",
            en: "This is a craft where your attentiveness turns into a smooth, smooth edge, and your creative courage turns into unusual color transitions."},
        iconsInside: {
            icon1: `${process.env.PUBLIC_URL}/images/locations/MasterClasses/Candles/icon_1.svg`,
            icon2: `${process.env.PUBLIC_URL}/images/locations/MasterClasses/Candles/icon_2.svg`,
            icon3: `${process.env.PUBLIC_URL}/images/locations/MasterClasses/Candles/icon_3.svg`,
        },
        insideBtnText: {
			ru: "перейти",
			en: "go to"
		},
        subIconsTextRU: [
            "Ручная работа",
            "Натуральные ароматы",
            "Эфирные масла"
        ],
        subIconsTextEN: [
            "Handmade work",
            "Natural flavors",
            "Essential oils"
        ],
    }
]