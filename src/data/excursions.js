import iconTimeLight from "../assets/Locations/Icons/iconTimeLight.svg";
import iconTimeDark from "../assets/Locations/Icons/iconTimeDark.svg"; 
import iconRubLight from "../assets/Locations/Icons/icon1.svg";
import iconRubDark from "../assets/Locations/Icons/icon3.svg";

export const excursions = [
    {
        id: "architecture",
        special: "architecture",
        title: 'АРХИТЕКТУРА',
        image: "/images/locations/Excursions/Architecture.png",
        text: 'Вас ждёт захватывающий рассказ о том, как проектировались и строились здания, какую роль играли безопасность и организация пространства в их конструкциях.',
        subText2: '14:00 - 18:30',
        text1: 'Экскурсия раскрывает тайны архитектурной эволюции одного из самых знаковых мест города — от суровых тюремных стен до современного культурного кластера.',
        cardIcon1Desktop: iconRubLight,
        cardIcon2Desktop: iconTimeLight,
        cardIcon1Mobile: iconRubDark,
        cardIcon2Mobile: iconTimeDark,
        price1: 'от 1 200 ₽',
        price: 'от 1 200 руб',
        tags: [
            {name: "#дневная" ,},
            {name: "#аудиогид" ,},
            {name: "#пешая" ,}
        ],
        insideText1: "Вы погрузитесь в уникальную атмосферу места, где каждый кирпич хранит свою историю. Наши гиды раскроют вам секреты архитектурных стилей — от неоготики до современного урбанизма.",
        insideText2: "Интерактивная система сопровождения позволит вам услышать голоса архитекторов прошлого и настоящего, чьи идеи воплощены в этих стенах.",
        iconsInside: {
            icon1: "/images/locations/Excursions/Architecture/icon_1.svg",
            icon2: "/images/locations/Excursions/Architecture/icon_2.svg",
            icon3: "/images/locations/Excursions/Architecture/icon_3.svg",
        },
        subIconsText: {
            text1: "Строительные решения",
            text2: "Трансформация пространства",
            text3: "Современные инсталляции"
        }
    },
    {
        id: "prisonLife",
        special: "prisonLife",
        title: 'ТЮРЕМНАЯ ЖИЗНЬ',
        image: "/images/locations/Excursions/Prison life.png",
        text: 'Погрузитесь в атмосферу прошлого и узнайте, как жили заключённые в стенах знаменитой тюрьмы. Вы сможете познакомиться с их бытом и камерами.',
        subText2: '16:00-21:00',
        text1: 'Экскурсия предлагает уникальную возможность погрузиться в мир, который обычно остаётся за закрытыми дверями исправительных учреждений.',
        cardIcon1Desktop: iconRubDark,
        cardIcon2Desktop: iconTimeDark,
        cardIcon1Mobile: iconRubDark,
        cardIcon2Mobile: iconTimeDark,
        price1: 'от 700 ₽',
        price: 'от 700 руб',
        tags: [
            {name: "#вечерняя" ,},
            {name: "#интерактивная" ,},
            {name: "#аудиогид" ,},
            {name: "#беседа" ,}

        ],
        insideText1: "Экскурсия включает интерактивные элементы, которые позволят участникам задать вопросы и обсудить реальные истории из жизни заключённых и сотрудников тюрьмы.",
        insideText2: "Участники смогут увидеть различные зоны тюрьмы, включая камеры, прогулочные дворы и административные помещения.",
        iconsInside: {
            icon1: "/images/locations/Excursions/Prison life/icon_1.svg",
            icon2: "/images/locations/Excursions/Prison life/icon_2.svg",
            icon3: "/images/locations/Excursions/Prison life/icon_3.svg",
        },
        subIconsText: {
            text1: "Истории заключенных",
            text2: "Погружение в атмосферу",
            text3: "Система аудиогида"
        },  
    },
    {
        id: "escapes",
        special: "escapes",
        title: 'ПОБЕГИ',
        image: "/images/locations/Excursions/Escapes.png",
        text: 'Исследуйте загадочную тюрьму и почувствуйте себя настоящим пленником, разгадывающим секреты побега. Экскурсия позволяет заново ощутить дух свободы.',
        subText2: '18:00-22:00',
        text1: 'Экскурсия раскрывает самые дерзкие и хитроумные попытки побегов из легендарной тюрьмы. Узнайте, как заключенные преодолевали, казалось бы, непреодолимые преграды.',
        cardIcon1Desktop: iconRubDark,
        cardIcon2Desktop: iconTimeDark,
        cardIcon1Mobile: iconRubDark,
        cardIcon2Mobile: iconTimeDark,
        price: 'от 1 500 руб',
        price1: 'от 1 500 ₽',
        tags: [
            {name: "#вечерняя" ,},
            {name: "#интерактивная" ,},
            {name: "#пешая" ,},
            {name: "#квест" ,}

        ],
        insideText1: "Эта экскурсия проведет вас по следам самых дерзких побегов в истории тюрьмы. Вы услышите подробные рассказы о тщательно спланированных операциях, когда заключенные преодолевали, казалось бы, непреодолимые преграды.",
        insideText2: "Вы увидите подлинные места, где осуществлялись эти попытки, с сохранившимися следами и отметинами. В программу включены документальные кадры из архивов ФСИН и возможность изучить настоящие тюремные чертежи.",
        iconsInside: {
            icon1: "/images/locations/Excursions/Escapes/icon_1.svg",
            icon2: "/images/locations/Excursions/Escapes/icon_2.svg",
            icon3: "/images/locations/Excursions/Escapes/icon_3.svg",
        },
        subIconsText: {
            text1: "Самые громкие случаи",
            text2: "Невероятные уловки",
            text3: "Последствия попыток"
        }
    },
    {
        id: "guards",
        special: "guards",
        title: 'НАДЗИРАТЕЛИ',
        image: "/images/locations/Excursions/The-guards.png",
        text: 'На экскурсии бывшие надзиратели поделятся личными историями, которые помогут понять психологию заключённых и специфику их взаимодействия с охраной.',
        subText2: '15:00-18:00',
        text1: 'Экскурсия о тех, кто поддерживал порядок за стенами учреждения.',
        cardIcon1Desktop: iconRubLight,
        cardIcon2Desktop: iconTimeLight,
        cardIcon1Mobile: iconRubDark,
        cardIcon2Mobile: iconTimeDark,
        price: 'от 900 руб',
        price1: 'от 900 ₽',
        tags: [
            {name: "#дневная" ,},
            {name: "#аудиогид" ,},
            {name: "#беседа" ,}

        ],
        insideText1: "Эта экскурсия раскрывает малоизвестные страницы работы тюремного персонала. Вы узнаете, как менялись методы надзора от XIX века до наших дней, познакомитесь с секретными инструкциями и методиками работы.",
        insideText2: "Вам покажут подлинную форму надзирателей разных периодов, средства связи и сигнализации, архивные фотографии рабочих моментов.",
        iconsInside: {
            icon1: "/images/locations/Excursions/The-guards/icon_1.svg",
            icon2: "/images/locations/Excursions/The-guards/icon_2.svg",
            icon3: "/images/locations/Excursions/The-guards/icon_3.svg",
        },
        subIconsText: {
            text1: "Методы надзора",
            text2: "Истории сотрудников",
            text3: "Эволюция тюремных правил"
        }
    },
    {
        id: "legends",
        special: "legends",
        title: 'ЛЕГЕНДЫ',
        image: "/images/locations/Excursions/Legends.png",
        text: 'Погрузитесь в атмосферу прошлого и откройте для себя тайны, которые хранит это уникальное место. Это увлекательная экскурсия, которая перенесёт вас в мир загадок и мистики.',
        subText2: '20:00-23:00',
        text1: 'Мистическая экскурсия по самым загадочным местам и историям, связанным с тюрьмой.',
        cardIcon1Desktop: iconRubDark,
        cardIcon2Desktop: iconTimeDark,
        cardIcon1Mobile: iconRubDark,
        cardIcon2Mobile: iconTimeDark,
        price1: 'от 2 000 руб',
        price: 'от 2 000 ₽',
        tags: [
            {name: "#вечерняя" ,},
            {name: "#беседа" ,},
            {name: "#интерактивная" ,}
        ],
        insideText1: "Ночная экскурсия для тех, кто хочет узнать другую сторону истории этого места. Вы посетите знаменитую \"камеру №7\", где фиксировались паранормальные явления, услышите легенды о призраке бывшего надзирателя и пророчества.",
        insideText2: "У вас будет уникальная возможность поработать с детекторами электромагнитных полей и получить доступ к ранее засекреченным материалам.",
        iconsInside: {
            icon1: "/images/locations/Excursions/Legends/icon_1.svg",
            icon2: "/images/locations/Excursions/Legends/icon_2.svg",
            icon3: "/images/locations/Excursions/Legends/icon_3.svg",
        },
        subIconsText: {
            text1: "Призраки и аномалии",
            text2: "Необъяснимые случаи",
            text3: "Тайные знаки и символы"
        }
    },
    {
        id: "thePrisoners",
        special: "thePrisoners",
        title: 'УЗНИКИ',
        image: "/images/locations/Excursions/The prisoners.png",
        text: 'Вас ждёт погружение в историю тюрьмы, начиная с известных заключённых и заканчивая теми, чьи имена канули в лету.',
        subText2: '12:00-16:00',
        text1: 'Экскурсия посвящена самым известным заключенным, чьи судьбы переплелись с историей этого места.',
        cardIcon1Desktop: iconRubDark,
        cardIcon2Desktop: iconTimeDark,
        cardIcon1Mobile: iconRubDark,
        cardIcon2Mobile: iconTimeDark,
        price1: 'от 1 000 руб',
        price: 'от 1 000 ₽',
        tags: [
            {name: "#вечерняя" ,},
            {name: "#пешая" ,},
            {name: "#интерактивная" ,}

        ],
        insideText1: "Погрузитесь в глубины человеческих судеб, навсегда связанных с этим местом. Экскурсия расскажет о жизни политических заключенных 1930-х годов, \"воров в законе\" советской эпохи и современных знаменитостях, отбывавших здесь срок.",
        insideText2: "Вы услышите подлинные истории из дневников узников, увидите личные вещи, изготовленные в камерах, и познакомитесь с реконструкцией типичного дня заключенного разных исторических периодов.",
        iconsInside: {
            icon1: "/images/locations/Excursions/The prisoners/icon_1.svg",
            icon2: "/images/locations/Excursions/The prisoners/icon_2.svg",
            icon3: "/images/locations/Excursions/The prisoners/icon_3.svg",
        },
        subIconsText: {
            text1: "Политические заключенные",
            text2: "Жизнь \"воров в законе\"",
            text3: "Известные личности"
        }
    }
]