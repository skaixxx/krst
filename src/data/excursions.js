import iconTimeLight from "../assets/Locations/Icons/iconTimeLight.svg";
import iconTimeDark from "../assets/Locations/Icons/iconTimeDark.svg"; 
import iconRubLight from "../assets/Locations/Icons/icon1.svg";
import iconRubDark from "../assets/Locations/Icons/icon3.svg";

export const excursions = [
    {
        id: "architecture",
        special: "architecture",
        title: {ru: "АРХИТЕКТУРА", en: "ARCHITECTURE"},
        image: `${process.env.PUBLIC_URL}/images/locations/Excursions/Architecture.png`,
        text: {ru: "Вас ждёт захватывающий рассказ о том, как проектировались и строились здания, какую роль играли безопасность и организация пространства в их конструкциях.",
            en: "You will find an exciting story about how buildings were designed and built, what role security and organization of space played in their structures."},
        subText2: {ru: "14:00 - 18:30", en: "14:00 - 18:30"},
        text1: {ru: "Экскурсия раскрывает тайны архитектурной эволюции одного из самых знаковых мест города — от суровых тюремных стен до современного культурного кластера.",
            en: "The tour reveals the secrets of the architectural evolution of one of the most iconic places in the city — from the harsh prison walls to the modern cultural cluster."},
        cardIcon1Desktop: iconRubLight,
        cardIcon2Desktop: iconTimeLight,
        cardIcon1Mobile: iconRubDark,
        cardIcon2Mobile: iconTimeDark,
        price1: {ru: "от 1 200 ₽",
			en: "from 1 200 ₽"
		},
		price: {ru: "от 1 200 руб",
			en: "from 1 200 rub"
		},
        tags: [
            {name: {ru: "#дневная", en: "#daytime"}},
            {name: {ru: "#аудиогид", en: "#audioguide"}},
            {name: {ru: "#пешая", en: "#walking"}}
        ],
        insideText1: {ru: "Вы погрузитесь в уникальную атмосферу места, где каждый кирпич хранит свою историю. Наши гиды раскроют вам секреты архитектурных стилей — от неоготики до современного урбанизма.",
            en: "You will immerse yourself in the unique atmosphere of a place where every brick keeps its own story. Our guides will reveal to you the secrets of architectural styles — from Neo-Gothic to modern urbanism."},
        insideText2: {ru: "Интерактивная система сопровождения позволит вам услышать голоса архитекторов прошлого и настоящего, чьи идеи воплощены в этих стенах.",
            en: "The interactive support system will allow you to hear the voices of architects of the past and present, whose ideas are embodied in these walls."
        },
        iconsInside: {
            icon1: `${process.env.PUBLIC_URL}/images/locations/Excursions/Architecture/icon_1.svg`,
            icon2: `${process.env.PUBLIC_URL}/images/locations/Excursions/Architecture/icon_2.svg`,
            icon3: `${process.env.PUBLIC_URL}/images/locations/Excursions/Architecture/icon_3.svg`,
        },
        insideBtnText: {
			ru: "перейти",
			en: "go to"
		},
        subIconsTextRU: [
            "Строительные решения",
            "Трансформация пространства",
            "Современные инсталляции"
        ],
        subIconsTextEN: [
            "Construction solutions",
            "Transformation of space",
            "Modern installations"
        ],
    },
    {
        id: "prisonLife",
        special: "prisonLife",
        title: {ru: "ТЮРЕМНАЯ ЖИЗНЬ", en: "PRISON LIFE"},
        image: `${process.env.PUBLIC_URL}/images/locations/Excursions/Prison life.png`,
        text: {ru: "Погрузитесь в атмосферу прошлого и узнайте, как жили заключённые в стенах знаменитой тюрьмы. Вы сможете познакомиться с их бытом и камерами.",
            en: "Immerse yourself in the atmosphere of the past and find out how the prisoners lived within the walls of the famous prison. You will be able to get acquainted with their everyday life and cameras."
        },
        subText2: {ru: "16:00 - 21:00", en: "16:00 - 21:00"},
        text1: {ru: "Экскурсия предлагает уникальную возможность погрузиться в мир, который обычно остаётся за закрытыми дверями исправительных учреждений.",
            en: "The tour offers a unique opportunity to immerse yourself in a world that usually remains behind the closed doors of correctional institutions."
        },
        cardIcon1Desktop: iconRubDark,
        cardIcon2Desktop: iconTimeDark,
        cardIcon1Mobile: iconRubDark,
        cardIcon2Mobile: iconTimeDark,
        price1: {ru: "от 700 ₽",
			en: "from 700 ₽"
		},
		price: {ru: "от 700 руб",
			en: "from 700 rub"
		},
        tags: [
            {name: {ru: "#вечерняя" , en: "#evening"}},
            {name: {ru: "#интерактивная" , en: "#interactive"}},
            {name: {ru: "#аудиогид" , en: "#audioguide"}},
            {name: {ru: "#беседа" , en: "#conversation"}}

        ],
        insideText1: {ru: "Экскурсия включает интерактивные элементы, которые позволят участникам задать вопросы и обсудить реальные истории из жизни заключённых и сотрудников тюрьмы.",
            en: "The tour includes interactive elements that will allow participants to ask questions and discuss real life stories from prisoners and prison staff."
        },
        insideText2: {ru: "Участники смогут увидеть различные зоны тюрьмы, включая камеры, прогулочные дворы и административные помещения.",
            en: "Participants will be able to see various areas of the prison, including cells, exercise yards and administrative offices."
        },
        iconsInside: {
            icon1: `${process.env.PUBLIC_URL}/images/locations/Excursions/Prison life/icon_1.svg`,
            icon2: `${process.env.PUBLIC_URL}/images/locations/Excursions/Prison life/icon_2.svg`,
            icon3: `${process.env.PUBLIC_URL}/images/locations/Excursions/Prison life/icon_3.svg`,
        },
        insideBtnText: {
			ru: "перейти",
			en: "go to"
		},
        subIconsTextRU: [
            "Истории заключенных",
            "Погружение в атмосферу",
            "Система аудиогида"
        ],
        subIconsTextEN: [
            "Prisoner stories",
            "Immersion in the atmosphere",
            "Audio guide system"
        ],    
    },
    {
        id: "escapes",
        special: "escapes",
        title: {ru: "ПОБЕГИ", en: "ESCAPES"},
        image: `${process.env.PUBLIC_URL}/images/locations/Excursions/Escapes.png`,
        text: {ru: "Исследуйте загадочную тюрьму и почувствуйте себя настоящим пленником, разгадывающим секреты побега. Экскурсия позволяет заново ощутить дух свободы.",
            en: "Explore the mysterious prison and feel like a real prisoner, unraveling the secrets of escape. The tour allows you to re-experience the spirit of freedom."
        },
        subText2: {ru: "18:00 - 22:00", en: "18:00 - 22:00"},
        text1: {ru: "Экскурсия раскрывает самые дерзкие и хитроумные попытки побегов из легендарной тюрьмы. Узнайте, как заключенные преодолевали, казалось бы, непреодолимые преграды.",
            en: "The tour reveals the most daring and ingenious escape attempts from the legendary prison. Find out how the prisoners overcame seemingly insurmountable obstacles."
        },
        cardIcon1Desktop: iconRubDark,
        cardIcon2Desktop: iconTimeDark,
        cardIcon1Mobile: iconRubDark,
        cardIcon2Mobile: iconTimeDark,
        price1: {ru: "от 1 500 ₽",
			en: "from 1 500 ₽"
		},
		price: {ru: "от 1 500 руб",
			en: "from 1 500 rub"
		},
        tags: [
            {name: {ru: "#вечерняя" ,en: "#evening"}},
            {name: {ru: "#интерактивная" ,en: "#interactive"}},
            {name: {ru: "#пешая" ,en: "#walking"}},
            {name: {ru: "#квест" ,en: "#quest"}}

        ],
        insideText1: {ru: "Эта экскурсия проведет вас по следам самых дерзких побегов в истории тюрьмы. Вы услышите подробные рассказы о тщательно спланированных операциях, когда заключенные преодолевали, казалось бы, непреодолимые преграды.",
            en: "This tour will take you on the trail of the most daring escapes in the history of the prison. You will hear detailed stories about carefully planned operations where prisoners overcame seemingly insurmountable obstacles."
        },
        insideText2: {ru: "Вы увидите подлинные места, где осуществлялись эти попытки, с сохранившимися следами и отметинами. В программу включены документальные кадры из архивов ФСИН и возможность изучить настоящие тюремные чертежи.",
            en: "You will see the authentic places where these attempts were carried out, with traces and marks preserved. The program includes documentary footage from the archives of the Federal Penitentiary Service and the opportunity to study real prison drawings."
        },
        iconsInside: {
            icon1: `${process.env.PUBLIC_URL}/images/locations/Excursions/Escapes/icon_1.svg`,
            icon2: `${process.env.PUBLIC_URL}/images/locations/Excursions/Escapes/icon_2.svg`,
            icon3: `${process.env.PUBLIC_URL}/images/locations/Excursions/Escapes/icon_3.svg`,
        },
        insideBtnText: {
			ru: "перейти",
			en: "go to"
		},
        subIconsTextRU: [
            "Самые громкие случаи",
            "Невероятные уловки",
            "Последствия попыток"
        ],
        subIconsTextEN: [
            "The most high-profile cases",
            "Incredible tricks",
            "Consequences of attempts"
        ],
    },
    {
        id: "guards",
        special: "guards",
        title: {ru: "НАДЗИРАТЕЛИ", en: "THE GUARDS"},
        image: `${process.env.PUBLIC_URL}/images/locations/Excursions/The-guards.png`,
        text: {ru: "На экскурсии бывшие надзиратели поделятся личными историями, которые помогут понять психологию заключённых и специфику их взаимодействия с охраной.",
            en: "On the tour, former guards will share personal stories that will help to understand the psychology of prisoners and the specifics of their interaction with the guards."
        },
        subText2: {ru: "15:00 - 18:00", en: "15:00 - 18:00"},
        text1: {ru: "Экскурсия о тех, кто поддерживал порядок за стенами учреждения.",
            en: "An excursion about those who maintained order outside the walls of the institution."
        },
        cardIcon1Desktop: iconRubLight,
        cardIcon2Desktop: iconTimeLight,
        cardIcon1Mobile: iconRubDark,
        cardIcon2Mobile: iconTimeDark,
        price1: {ru: "от 900 ₽",
			en: "from 900 ₽"
		},
		price: {ru: "от 900 руб",
			en: "from 900 rub"
		},
        tags: [
            {name: {ru: "#дневная", en: "#daytime"}},
            {name: {ru: "#аудиогид", en: "#audioguide"}},
            {name: {ru: "#беседа" , en: "#conversation"}}

        ],
        insideText1: {ru: "Эта экскурсия раскрывает малоизвестные страницы работы тюремного персонала. Вы узнаете, как менялись методы надзора от XIX века до наших дней, познакомитесь с секретными инструкциями и методиками работы.",
            en: "This tour reveals little-known aspects of the work of prison staff. You will learn how surveillance methods have changed from the 19th century to the present day, get acquainted with secret instructions and working methods."
        },
        insideText2: {ru: "Вам покажут подлинную форму надзирателей разных периодов, средства связи и сигнализации, архивные фотографии рабочих моментов.",
            en: "You will be shown the authentic uniforms of guards from different periods, communication and alarm systems, and archival photographs of working moments."
        },
        iconsInside: {
            icon1: `${process.env.PUBLIC_URL}/images/locations/Excursions/The-guards/icon_1.svg`,
            icon2: `${process.env.PUBLIC_URL}/images/locations/Excursions/The-guards/icon_2.svg`,
            icon3: `${process.env.PUBLIC_URL}/images/locations/Excursions/The-guards/icon_3.svg`,
        },
        insideBtnText: {
			ru: "перейти",
			en: "go to"
		},
        subIconsTextRU: [
            "Методы надзора",
            "Истории сотрудников",
            "Эволюция тюремных правил"
        ],
        subIconsTextEN: [
            "Methods of supervision",
            "Employee stories",
            "The evolution of prison rules"
        ],
    },
    {
        id: "legends",
        special: "legends",
        title: {ru: "ЛЕГЕНДЫ", en: "LEGENDS"},
        image: `${process.env.PUBLIC_URL}/images/locations/Excursions/Legends.png`,
        text: {ru: "Погрузитесь в атмосферу прошлого и откройте для себя тайны, которые хранит это уникальное место. Это увлекательная экскурсия, которая перенесёт вас в мир загадок и мистики.",
            en: "Immerse yourself in the atmosphere of the past and discover the secrets that this unique place holds. This is a fascinating tour that will take you into the world of mysteries and mysticism."
        },
        subText2: {ru: "20:00 - 23:00", en: "20:00 - 23:00"},
        text1: {ru: "Мистическая экскурсия по самым загадочным местам и историям, связанным с тюрьмой.",
            en: "A mystical tour of the most mysterious places and stories related to the prison."
        },
        cardIcon1Desktop: iconRubDark,
        cardIcon2Desktop: iconTimeDark,
        cardIcon1Mobile: iconRubDark,
        cardIcon2Mobile: iconTimeDark,
        price1: {ru: "от 2 000 ₽",
			en: "from 2 000 ₽"
		},
		price: {ru: "от 2 000 руб",
			en: "from 2 000 rub"
		},
        tags: [
            {name: {ru: "#вечерняя" ,en: "#evening"}},
            {name: {ru: "#интерактивная" ,en: "#interactive"}},
            {name: {ru: "#беседа" , en: "#conversation"}}
        ],
        insideText1: {ru: "Ночная экскурсия для тех, кто хочет узнать другую сторону истории этого места. Вы посетите знаменитую \"камеру №7\", где фиксировались паранормальные явления, услышите легенды о призраке бывшего надзирателя и пророчества.",
            en: "A night tour for those who want to learn the other side of the history of this place. You will visit the famous \"chamber No. 7\", where paranormal phenomena were recorded, you will hear legends about the ghost of the former overseer and prophecies."
        },
        insideText2: {ru: "У вас будет уникальная возможность поработать с детекторами электромагнитных полей и получить доступ к ранее засекреченным материалам.",
            en: "You will have a unique opportunity to work with electromagnetic field detectors and gain access to previously classified materials."
        },
        iconsInside: {
            icon1: `${process.env.PUBLIC_URL}/images/locations/Excursions/Legends/icon_1.svg`,
            icon2: `${process.env.PUBLIC_URL}/images/locations/Excursions/Legends/icon_2.svg`,
            icon3: `${process.env.PUBLIC_URL}/images/locations/Excursions/Legends/icon_3.svg`,
        },
        insideBtnText: {
			ru: "перейти",
			en: "go to"
		},
        subIconsTextRU: [
            "Призраки и аномалии",
            "Необъяснимые случаи",
            "Тайные знаки и символы"
        ],
        subIconsTextEN: [
            "Ghosts and anomalies",
            "Unexplained cases",
            "Secret signs and symbols"
        ],
    },
    {
        id: "thePrisoners",
        special: "thePrisoners",
        title: {ru: "УЗНИКИ", en: "THE PRISONERS"},
        image: `${process.env.PUBLIC_URL}/images/locations/Excursions/The prisoners.png`,
        text: {ru: "Вас ждёт погружение в историю тюрьмы, начиная с известных заключённых и заканчивая теми, чьи имена канули в лету.",
            en: "You will be immersed in the history of the prison, starting with famous prisoners and ending with those whose names have sunk into oblivion."
        },
        subText2: {ru: "12:00 - 16:00", en: "12:00 - 16:00"},
        text1: {ru: "Экскурсия посвящена самым известным заключенным, чьи судьбы переплелись с историей этого места.",
            en: "The tour is dedicated to the most famous prisoners, whose fates are intertwined with the history of this place."
        },
        cardIcon1Desktop: iconRubDark,
        cardIcon2Desktop: iconTimeDark,
        cardIcon1Mobile: iconRubDark,
        cardIcon2Mobile: iconTimeDark,
        price1: {ru: "от 1 000 ₽",
			en: "from 1 000 ₽"
		},
		price: {ru: "от 1 000 руб",
			en: "from 1 000 rub"
		},
        tags: [
            {name: {ru: "#вечерняя" ,en: "#evening"}},
            {name: {ru: "#пешая" ,en: "#walking"}},
            {name: {ru: "#интерактивная" ,en: "#interactive"}},
        ],
        insideText1: {ru: "Погрузитесь в глубины человеческих судеб, навсегда связанных с этим местом. Экскурсия расскажет о жизни политических заключенных 1930-х годов, \"воров в законе\" советской эпохи и современных знаменитостях, отбывавших здесь срок.",
            en: "Immerse yourself in the depths of human destinies, forever connected with this place. The tour will tell about the life of political prisoners of the 1930s, \"thieves in law\" of the Soviet era and modern celebrities who served their time here."
        },
        insideText2: {ru: "Вы услышите подлинные истории из дневников узников, увидите личные вещи, изготовленные в камерах, и познакомитесь с реконструкцией типичного дня заключенного разных исторических периодов.",
            en: "You will hear true stories from prisoners' diaries, see personal items made in the cells, and get acquainted with the reconstruction of a typical prisoner's day from different historical periods."
        },
        iconsInside: {
            icon1: `${process.env.PUBLIC_URL}/images/locations/Excursions/The prisoners/icon_1.svg`,
            icon2: `${process.env.PUBLIC_URL}/images/locations/Excursions/The prisoners/icon_2.svg`,
            icon3: `${process.env.PUBLIC_URL}/images/locations/Excursions/The prisoners/icon_3.svg`,
        },
        insideBtnText: {
			ru: "перейти",
			en: "go to"
		},
        subIconsTextRU: [
            "Политические заключенные",
            "Жизнь \"воров в законе\"",
            "Известные личности"
        ],
        subIconsTextEN: [
            "Political prisoners",
            "The life of \"thieves in law\"",
            "Famous personalities"
        ],
    }
]