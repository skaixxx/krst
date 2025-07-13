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
        sub: '14:00 - 18:30',
        text1: 'Экскурсия раскрывает тайны архитектурной эволюции одного из самых знаковых мест города — от суровых тюремных стен до современного культурного кластера.',
        cardIcon1: iconRubLight,
        cardIcon2: iconTimeLight,
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
            icon1: "",
            icon2: "",
            icon3: "",
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
    sub: '16:00-21:00',
    text1: 'Экскурсия предлагает уникальную возможность погрузиться в мир, который обычно остаётся за закрытыми дверями исправительных учреждений.',
        cardIcon1: iconRubDark,
        cardIcon2: iconTimeDark,
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
            icon1: "",
            icon2: "",
            icon3: "",
        },
        subIconsText: {
            text1: "Истории заключенных",
            text2: "Погружение в атмосферу",
            text3: "Система аудиогида"
        }
    }
]