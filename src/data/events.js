import longArrow from "../assets/events/cardButtonIconLong.svg";
import arrow from "../assets/events/cardButtonIcon.svg";
const eventsData = [
    {
        id: 1,
        title: {
            ru: "ПОЙМАЙ МОМЕНТ",
            en: "CATCH THE MOMENT",
        },
        title1:{ru: "ПОЙМАЙ",
            en: "CATCH"
        },
        title2:{ru: "МОМЕНТ",
            en: "THE MOMENT"
        },
        dates: "20.03 — 25.03",
        icon: arrow,
        iconMobile: longArrow, 
        iconClass:"shortCardIcon",
        iconClassMobile: "longCardIcon", 
        image:`${process.env.PUBLIC_URL}/images/events/img1.png`,
        inIcon1:`${process.env.PUBLIC_URL}/images/events/inIcons/1-1.svg`,
        inIcon2:`${process.env.PUBLIC_URL}/images/events/inIcons/1-2.svg`,
        inIcon3:`${process.env.PUBLIC_URL}/images/events/inIcons/1-3.svg`,
        inText1: {ru : "Живой формат",  
            en: "Live format"
        },
        inText2: {ru: "Прогулка",
            en: "Walk"
        },
        inText3:{ru:"Атмосфера диалога",
            en: "The atmosphere of dialogue"
        },
        price:"600",
        paragraph1:{ru: "Откройте для себя искусство видеть — не глазами, а чувствами. Этот практикум посвящён уличной фотографии как способу наблюдать и фиксировать жизнь вокруг.",
            en: "Discover the art of seeing — not with your eyes, but with your senses. This workshop is dedicated to street photography as a way to observe and capture life around you."
        },
        paragraph2:{ru: "Мы начнём с короткой теоретической части и примеров работ классиков стрит-фото, а затем — отправимся на прогулку по территории КРСТ и окрестностям.",
            en: "We will start with a short theoretical part and examples of the works of classics of street photography, and then we will go for a walk around the territory of the KRST and the surrounding area."
        },
        paragraph3:{ru: "Это не просто фотоурок — это возможность посмотреть на привычный мир по‑новому и запечатлеть его уникальность через своё сердце и объектив. Присоединяйтесь к нам в этом увлекательном путешествии!",
            en: "This is not just a photo tutorial — it is an opportunity to look at the familiar world in a new way and capture its uniqueness through your heart and lens. Join us on this exciting journey!"
        },
    },
    {
        id: 2,
        title: {
            ru: "ЯРКИЕ ГОРИЗОНТЫ",
            en: "BRIGHT HORIZONS"
        },
        title1:{ru: "ЯРКИЕ",
            en: "BRIGHT"
        },
        title2:{ru: "ГОРИЗОНТЫ",
            en: "HORIZONS"
        },
        dates: "10.04 — 15.04",
        icon: longArrow,
        iconMobile: arrow,
        iconClass:"longCardIcon",
        iconClassMobile: "shortCardIcon", 
        image:`${process.env.PUBLIC_URL}/images/events/img2.png`,
        inIcon1:`${process.env.PUBLIC_URL}/images/events/inIcons/3-1.svg`,
        inIcon2:`${process.env.PUBLIC_URL}/images/events/inIcons/3-2.svg`,
        inIcon3:`${process.env.PUBLIC_URL}/images/events/inIcons/3-3.svg`,
        inText1:{ru: "Интерактивный формат",
            en: "Interactive format"
        },
        inText2:{ru:"Живые впечатления",
            en: "Live impressions"
        },
        inText3:{ru: "Свободное посещение",
            en: "Free visit"
        },
        price:"800",
        paragraph1:{ru: "Погрузитесь в мир живых красок, музыки и творческой энергии! \"Яркие горизонты\" — это динамичный фестиваль, объединяющий уличных художников, перформанс-артистов и всех, кто ценит актуальное искусство.",
            en: "Immerse yourself in the world of vibrant colors, music and creative energy! Bright Horizons is a dynamic festival that brings together street artists, performance artists and everyone who appreciates contemporary art."
        },
        paragraph2:{ru: "Это пятидневный творческий марафон в общественном пространстве, где искусство становится доступным каждому. Художники будут создавать муралы, музыканты — исполнять живые композиции, а перформансы удивят своей неординарностью.",
            en:"This is a five-day creative marathon in a public space where art becomes accessible to everyone. Artists will create murals, musicians will perform live compositions, and performances will surprise with their originality."
        },
        paragraph3:{ru: "Особенность — интерактивность. Гости смогут участвовать в создании арт-объектов, посещать мастер-классы и наслаждаться вечерними концертами под открытым небом.",
            en: "The special feature is interactivity. Guests will be able to participate in the creation of art objects, attend workshops and enjoy evening concerts in the open air."
        }
    },
    {
        id: 3,
        title: {
            ru:"ЗВУКИ ГОРОДА",
            en: "SOUNDS OF CITY"
        }, 
        title1:{ru: "ЗВУКИ",
            en: "SOUNDS"
        }, 
        title2:{ru: "ГОРОДА",
            en: "OF CITY"
        }, 
        dates: "14.04 — 30.04", 
        icon:arrow,
        iconMobile: arrow,
        iconClass:"shortCardIcon",
        iconClassMobile: "shortCardIcon", 
        image:`${process.env.PUBLIC_URL}/images/events/img3.png`, 
        inIcon1:`${process.env.PUBLIC_URL}/images/events/inIcons/2-1.svg`,
        inIcon2:`${process.env.PUBLIC_URL}/images/events/inIcons/2-2.svg`,
        inIcon3:`${process.env.PUBLIC_URL}/images/events/inIcons/2-3.svg`,
        inText1:{ru: "Аудиопрогулка",
            en: "Audio tour",
        },
        inText2:{ru: "Мастер-классы",
            en: "Master classes"
        },
        inText3:{ru: "Интерактивная звуковая инсталляция",
            en:"Interactive sound installation"
        },
        price:"900",
        paragraph1:{ru: "Город — это не только архитектура и люди, но и его уникальная звуковая палитра. Это мероприятие раскроет вам урбанистическую музыку: от ритмов метро до мелодий уличных музыкантов.",
            en: "A city is not only about architecture and people, but also about its unique sound palette. This event will reveal urban music to you: from the rhythms of the subway to the melodies of street musicians."
        },
        paragraph2:{ru: "Начнём с изучения основ звукозаписи в городской среде. Затем отправимся на прогулку, где каждый участник создаст свою звуковую карту района. Завершим встречу совместной импровизацией с использованием записанных звуков.",
            en: "Let's start by learning the basics of sound recording in an urban environment. Then we'll go for a walk, where each participant will create their own sound map of the area. We will end the meeting with a joint improvisation using recorded sounds."
        },
        paragraph3:{ru: "Это не просто мероприятие — это новый способ услышать привычное пространство. Откройте для себя музыку, которая звучит вокруг нас каждый день.",
            en: "It's not just an event, it's a new way to hear a familiar space. Discover the music that sounds around us every day."
        }
    },
    {
        id: 4, 
        title: {ru:"КВЕСТ ЛАБИРИНТ",
            en: "QUEST LABIRINTH",
        }, 
        title1:{ru: "КВЕСТ",
            en: "QUEST"}, 
        title2:{ru: "ЛАБИРИНТ",
            en:"LABIRINTH"
        }, 
        dates: "10.04 — 20.04", 
        icon:arrow,
        iconMobile: arrow,
        iconClass:"shortCardIcon",
        iconClassMobile: "shortCardIcon", 
        image:`${process.env.PUBLIC_URL}/images/events/img4.png`, 
        inIcon1:`${process.env.PUBLIC_URL}/images/events/inIcons/4-1.svg`,
        inIcon2:`${process.env.PUBLIC_URL}/images/events/inIcons/4-2.svg`,
        inIcon3:`${process.env.PUBLIC_URL}/images/events/inIcons/4-3.svg`,
        inText1:{ru: "Командная игра",
            en: "A team game",
        },
        inText2:{ru: "Интерактивные головоломки",
            en: "Interactive puzzles"
        },
        inText3:{ru: "Динамичные испытания",
            en: "Dynamic tests"
        },
        price:"1 500",
        paragraph1:{ru: "Затеряйтесь в мире головоломок и загадок! \"Квест Лабиринт\" — это уникальное приключение, где логика и интуиция помогут вам найти выход из самых неожиданных ситуаций.",
            en:"Get lost in the world of puzzles and riddles! \"Quest Labirinth\" is a unique adventure where logic and intuition will help you find a way out of the most unexpected situations."
        },
        paragraph2:{ru: "Участников ждёт серия интеллектуальных испытаний в специально оборудованных локациях. Каждый уровень — новый вызов, требующий смекалки и командной работы. Финалистов ожидает особый сюрприз!",
            en: "Participants will have a series of intellectual tests in specially equipped locations. Each level is a new challenge that requires ingenuity and teamwork. A special surprise awaits the finalists!"
        },
        paragraph3:{ru: "Это больше чем игра — это проверка вашей способности мыслить нестандартно. Соберите команду и испытайте себя!",
            en: "This is more than a game — it's a test of your ability to think outside the box. Assemble a team and challenge yourself!"
        }
    },
    {
        id: 5, 
        title: {ru: "ТАЙНА ВРЕМЕНИ",
            en: "SECRET OF TIME",
        }, 
        title1:{ru: "ТАЙНА",
            en: "SECRET"
        }, 
        title2:{ru: "ВРЕМЕНИ",
            en: "OF TIME"
        }, 
        dates: "25.04 — 30.04", 
        icon:longArrow,
        iconMobile: arrow,
        iconClass:"longCardIcon",
        iconClassMobile: "shortCardIcon", 
        image:`${process.env.PUBLIC_URL}/images/events/img5.png`,
        inIcon1:`${process.env.PUBLIC_URL}/images/events/inIcons/5-1.svg`,
        inIcon2:`${process.env.PUBLIC_URL}/images/events/inIcons/5-2.svg`,
        inIcon3:`${process.env.PUBLIC_URL}/images/events/inIcons/5-3.svg`,
        inText1:{ru: "Интерактивная выставка",
            en:"Interactive exhibition",
        },
        inText2:{ru: "Мастер-классы",
            en: "Master classes"
        },
        inText3:{ru: "Исторические реконструкции",
            en: "Historical reconstructions",
        }, 
        price:"2 000",
        paragraph1:{ru:"Отправьтесь в путешествие сквозь эпохи! Это мероприятие раскроет вам секреты часовых механизмов и научит понимать язык времени.",
            en: "Embark on a journey through the ages! This event will reveal the secrets of clockwork and teach you how to understand the language of time."
        },
        paragraph2:{ru: "Вас ждёт знакомство с редкими хронометрами, создание собственных часовых механизмов и погружение в атмосферу разных исторических периодов через театрализованные представления.",
            en:"You will get acquainted with rare chronometers, create your own watch movements and immerse yourself in the atmosphere of different historical periods through theatrical performances."
        },
        paragraph3:{ru: "Это возможность прикоснуться к вечности. Откройте для себя магию времени!",
            en:"This is an opportunity to touch eternity. Discover the magic of time!"
        }
    },
    {
        id: 6, 
        title: {ru: "УЛИЧНЫЙ ТЕАТР",
            en: "STREET THEATER",
        }, 
        title1:{ru: "УЛИЧНЫЙ",
            en: "STREET"
        }, 
        title2:{ru: "ТЕАТР",
            en: "THEATER"
        }, 
        dates: "26.04", 
        icon:arrow,
        iconMobile: longArrow,
        iconClass:"shortCardIcon",
        iconClassMobile: "longCardIcon", 
        image:`${process.env.PUBLIC_URL}/images/events/img6.png`,
        inIcon1:`${process.env.PUBLIC_URL}/images/events/inIcons/6-1.svg`,
        inIcon2:`${process.env.PUBLIC_URL}/images/events/inIcons/6-2.svg`,
        inIcon3:`${process.env.PUBLIC_URL}/images/events/inIcons/6-3.svg`,
        inText1:{ru : "Живые постановки",
            en: "Live productions",
        },
        inText2:{ru: "Интерактив со зрителями",
            en: "Interactive with the audience"
        },
        inText3:{ru: "Карнавальное шествие",
            en: "Carnival procession"
        }, 
        price:"300",
        paragraph1:{ru: "Город становится сценой, а прохожие — зрителями! \"Уличный театр\" — это однодневный фестиваль перформансов, где профессиональные актёры и талантливые любители представят необычные спектакли под открытым небом.",
            en: "The city becomes the stage, and passersby become the audience! \"Street Theater\" is a one—day performance festival where professional actors and talented amateurs will present unusual performances in the open air."
        },
        paragraph2:{ru: "С 12:00 до 20:00 в центре общественного пространства будут идти спектакли в жанрах пантомимы, комедии дель арте и современной уличной драмы. Завершится фестиваль ярким карнавальным парадом с участием всех желающих!",
            en: "From 12:00 to 20:00, performances in the genres of pantomime, commedia dell'arte and modern street drama will be held in the center of the public space. The festival will end with a bright carnival parade with the participation of all comers!"
        },
        paragraph3:{ru: "Это больше чем представление — это праздник, который стирает границы между искусством и жизнью.",
            en:"It's more than a performance — it's a celebration that blurs the boundaries between art and life."
        }
    },
    {
        id: 7, 
        title: {ru: "МОДНЫЙ ВИНТАЖ",
            en: "FASHIONABLE VINTAGE"
        }, 
        title1:{ru: "МОДНЫЙ",
            en: "FASHIONABLE"
        }, 
        title2:{ru: "ВИНТАЖ",
            en: "VINTAGE"
        }, 
        dates: "15.05 — 31.05", 
        icon:longArrow,
        iconMobile: longArrow,
        iconClass:"longCardIcon",
        iconClassMobile: "longCardIcon", 
        image:`${process.env.PUBLIC_URL}/images/events/img7.png`,
        inIcon1:`${process.env.PUBLIC_URL}/images/events/inIcons/7-1.svg`,
        inIcon2:`${process.env.PUBLIC_URL}/images/events/inIcons/7-2.svg`,
        inIcon3:`${process.env.PUBLIC_URL}/images/events/inIcons/7-3.svg`,
        inText1:{ru: "Выставка-продажа",
            en: "Exhibition and sale",
        },
        inText2:{ru: "Стилистические консультации",
            en: "Stylistic consultations",
        },
        inText3:{ru: "Фотосессии",
            en: "Photo shoots"
        }, 
        price:"300",
        paragraph1:{ru: "Окунитесь в атмосферу прошлых десятилетий! \"Модный винтаж\" — это выставка-продажа уникальных вещей из разных эпох, где каждый найдёт свой особенный стиль.",
            en: "Immerse yourself in the atmosphere of the past decades! \"Fashionable Vintage\" is an exhibition and sale of unique items from different eras, where everyone will find their own special style."
        },
        paragraph2:{ru: "На протяжении двух недель в красивом лофт-пространстве будут представлены лучшие образцы винтажной моды. Вы сможете не только приобрести эксклюзивные вещи, но и узнать их историю, получить советы по созданию ретро-образов и сделать запоминающиеся фотографии в специально оформленных зонах.",
            en: "For two weeks, the best examples of vintage fashion will be presented in the beautiful loft space. You will not only be able to purchase exclusive items, but also learn their history, get tips on creating retro images and take memorable photos in specially designed areas."
        },
        paragraph3:""
    },
    {
        id: 8, 
        title: {ru: "ИГРОВАЯ АРЕНА",
            en: "THE GAMING ARENA",
        }, 
        title1:{ru: "ИГРОВАЯ",
            en: "THE GAMING"
        }, 
        title2:{ru: "АРЕНА",
            en: "ARENA"
        }, 
        dates: "01.05 — 15.05", 
        icon:longArrow,
        iconMobile: longArrow,
        iconClass:"longCardIcon",
        iconClassMobile: "longCardIcon",
        image:`${process.env.PUBLIC_URL}/images/events/img8.png`,
        inIcon1:`${process.env.PUBLIC_URL}/images/events/inIcons/8-1.svg`,
        inIcon2:`${process.env.PUBLIC_URL}/images/events/inIcons/8-2.svg`,
        inIcon3:`${process.env.PUBLIC_URL}/images/events/inIcons/8-3.svg`,
        inText1:{ru: "Турниры",
            en: "Tournaments"
        },
        inText2:{ru: "Свободная игра" ,
            en: "Free play"
        },
        inText3:{ru: "Тестирование новинок",
            en: "Testing new products"
        }, 
        price:"500",
        paragraph1:{ru: "Настоящий рай для любителей игр! Две недели непрерывного игрового марафона, где каждый найдёт развлечение по душе — от классических настолок до новейших виртуальных миров.",
            en:"A real paradise for game lovers! Two weeks of continuous gaming marathon, where everyone will find entertainment to their liking — from classic board games to the latest virtual worlds."
        },
        paragraph2:{ru: "В просторном игровом центре вас ждут десятки игровых станций, где можно сразиться с друзьями или новыми знакомыми. Ежедневно проводятся турниры с ценными призами, работает зона для спокойных игр и площадка для тестирования самых свежих игровых новинок.",
            en: "Dozens of game stations are waiting for you in the spacious game center, where you can compete with friends or new acquaintances. Tournaments with valuable prizes are held daily, there is a zone for relaxing games and a platform for testing the latest gaming innovations."
        },
        paragraph3:""
    },
    {
        id: 9, 
        title: {ru :"ТВОРЧЕСКАЯ ЛАВКА",
            en: "CREATIVITY SHOP"
        }, 
        title1:{ru: "ТВОРЧЕСКАЯ",
            en: "CREATIVITY"
        }, 
        title2:{ru: "ЛАВКА",
            en:"SHOP"
        }, 
        dates: "01.06 — 15.06", 
        icon:arrow,
        iconMobile: arrow,
        iconClass:"shortCardIcon",
        iconClassMobile: "shortCardIcon",  
        image:`${process.env.PUBLIC_URL}/images/events/img9.png`,
        inIcon1:`${process.env.PUBLIC_URL}/images/events/inIcons/9-1.svg`,
        inIcon2:`${process.env.PUBLIC_URL}/images/events/inIcons/9-2.svg`,
        inIcon3:`${process.env.PUBLIC_URL}/images/events/inIcons/9-3.svg`,
        inText1:{ru:"Мастер-классы",
            en: "Master classes"
        },
        inText2:{ru: "Ярмарка ручной работы",
            en: "Handmade Fair",
        },
        inText3:{ru: "Творческий коворкинг",
            en: "Creative coworking"
        }, 
        price:"800",
        paragraph1:{ru: "Пространство, где оживают творческие идеи. Здесь собраны лучшие мастера, готовые поделиться своими умениями и вдохновить на создание собственных шедевров.",
            en: "A space where creative ideas come to life. The best craftsmen are gathered here, ready to share their skills and inspire you to create your own masterpieces."
        },
        paragraph2:{ru: "Две недели творческого вдохновения! Каждый день проводятся разнообразные мастер-классы — от традиционных ремёсел до современных техник рукоделия. Вы сможете не только научиться новому, но и приобрести уникальные изделия местных мастеров или поработать над собственными проектами в уютной творческой атмосфере.",
            en: "Two weeks of creative inspiration! A variety of workshops are held every day, from traditional crafts to modern needlework techniques. You can not only learn new things, but also purchase unique products from local craftsmen or work on your own projects in a cozy creative atmosphere."
        },
        paragraph3:{ru: "Для тех, кто хочет поработать над своими проектами, работает творческий коворкинг с комфортными рабочими местами и всем необходимым оборудованием.",
            en: "For those who want to work on their projects, there is a creative coworking space with comfortable workplaces and all the necessary equipment."
        }
    },
    {
        id: 10,
        title: {ru: "ПЕСНЯ ЭПОХИ",
            en: "THE SONG OF THE ERA",
        }, 
        title1:{ru: "ПЕСНЯ",
            en: "THE SONG"
        }, 
        title2:{ru: "ЭПОХИ",
            en: "OF THE ERA"
        }, 
        dates: "12.06", 
        icon:longArrow,
        iconMobile: longArrow,
        iconClass:"longCardIcon",
        iconClassMobile: "longCardIcon",
        image:`${process.env.PUBLIC_URL}/images/events/img10.png`,
        inIcon1:`${process.env.PUBLIC_URL}/images/events/inIcons/10-1.svg`,
        inIcon2:`${process.env.PUBLIC_URL}/images/events/inIcons/10-2.svg`,
        inIcon3:`${process.env.PUBLIC_URL}/images/events/inIcons/10-3.svg`,
        inText1:{ru: "Концертная программа",
            en: "Concert program",
        },
        inText2:{ru: "Просветительская лекция",
            en: "Educational lecture",
        },
        inText3:{ru: "Открытая дискуссия",
            en: "Open discussion",
        }, 
        price:"1 200",
        paragraph1:{ru: "Современная классическая музыка — это диалог времён, где традиции встречаются с новаторством. На этом мероприятии вы услышите, как композиторы XXI века создают звучание, отражающее дух нашей эпохи.",
            en: "Modern classical music is a dialogue of times where traditions meet with innovation. At this event, you will hear how 21st century composers create a sound that reflects the spirit of our era."
        },
        paragraph2:{ru: "Вечер начнётся с рассказа о главных направлениях в современной академической музыке. Затем прозвучат сочинения талантливых авторов в исполнении камерного ансамбля. В завершение гости смогут пообщаться с музыкантами и задать им вопросы.",
            en: "The evening will begin with a story about the main trends in modern academic music. Then the compositions of talented authors will be performed by a chamber ensemble. At the end, the guests will be able to chat with the musicians and ask them questions."
        },
        paragraph3:{ru: "Это больше чем концерт — это погружение в мир, где каждая мелодия становится частью большого музыкального полотна. Приходите, чтобы услышать звуки, которые пишут историю сегодня.",
            en: "This is more than a concert — it is an immersion into a world where every melody becomes a part of a large musical canvas. Come to hear the sounds that make history today."
        }
    },
];
export default eventsData;