const places = [
	{
		id: "harmony",
		title: {ru: "ГАРМОНИЯ", en: "HARMONY"},
		area: '120 М²',
		image: `${process.env.PUBLIC_URL}/images/places/place-1-min.png`,
		images: [
			{
				image: `${process.env.PUBLIC_URL}/images/places/place-1-min.png`,
			},
			{
				image: `${process.env.PUBLIC_URL}/images/places/place-1-min.png`,
			},
		],
		text: {ru: "Помещение идеально подходит для мастер-классов по керамике: здесь всё продумано до мелочей для удобства участников.",
			en: "The room is ideal for master classes in ceramics: everything is thought out to the smallest detail for the convenience of participants."
		},
		detail: {
			title: {ru: "#ОПИСАНИЕ", en: "#DESCRIPTION"},
			place: {ru: "ТЦ", en: "CC"},
			text: {ru: "Это пространство прекрасно адаптировано для проведения разнообразных художественных занятий - от индивидуальных уроков до групповых мастер-классов и творческих семинаров.",
				en: "This space is perfectly adapted for a variety of artistic activities, from individual lessons to group workshops and creative seminars."},
		},
		specs: [
			{
				icon: `${process.env.PUBLIC_URL}/images/card/icon-2.svg`,
				label: {ru: "Площадь", en: "Square"},
				value: '120 М²',
			},
			{
				icon: `${process.env.PUBLIC_URL}/images/card/icon-1.svg`,
				label: {ru: "Цена в месяц", en: "Price per month"},
				value: '87 000 ₽',
			},
		],
		tags: [
			{ name: {ru: '#проектор', en: "#projector"}},
			{ name: {ru: '#гардеробная', en: "#wardrobe"} },
			{ name: {ru: '#зонаочистки', en: "#cleaningzone"} }
		]
	},
	{
		id: "fantasy",
		title: {ru: "ФАНТАЗИЯ", en: "FANTASY"},
		area: '110 М²',
		image: `${process.env.PUBLIC_URL}/images/places/place-2-min.png`,
		images: [
			{
				image: `${process.env.PUBLIC_URL}/images/places/place-2-min.png`,
			},
			{
				image: `${process.env.PUBLIC_URL}/images/places/place-2-min.png`,
			},
		],
		text: {ru: "Уютный и вдохновляющий зал с большими окнами, идеально подходящий для проведения мастер-классов по живописи.",
			en: "A cozy and inspiring room with large windows, ideal for master classes in painting."},
		detail: {
			title: {ru: "#ОПИСАНИЕ", en: "#DESCRIPTION"},
			place: {ru: "ТЦ", en: "CC"},
			text: {ru: "Это пространство прекрасно адаптировано для проведения разнообразных художественных занятий - от индивидуальных уроков до групповых мастер-классов и творческих семинаров.",
				en: "This space is perfectly adapted for a variety of artistic activities, from individual lessons to group workshops and creative seminars."},
		},
		specs: [
			{
				icon: `${process.env.PUBLIC_URL}/images/card/icon-2.svg`,
				label: {ru: "Площадь", en: "Square"},
				value: '110 М²',
			},
			{
				icon: `${process.env.PUBLIC_URL}/images/card/icon-1.svg`,
				label: {ru: "Цена в месяц", en: "Price per month"},
				value: '83 000 ₽',
			},
		],
		tags: [
			{ name: {ru: "#трековаясистема", en: "#tracksystem"}},
			{ name: {ru: "#проектор", en: "#projector"}},
			{ name: {ru: "#шкафы", en: "#closet"}},
			{ name: {ru: "#декор", en: "#decor"}},
		]
	},
	{
		id: "perspective",
		title: {ru: "ПЕРСПЕКТИВА", en: "PERSPECTIVE"},
		area: '140 М²',
		image: `${process.env.PUBLIC_URL}/images/places/place-3-min.png`,
		images: [
			{
				image: `${process.env.PUBLIC_URL}/images/places/place-2-min.png`,
			},
			{
				image: `${process.env.PUBLIC_URL}/images/places/place-2-min.png`,
			},
		],
		text: {ru: "Светлый и просторный зал, идеально подходящий для создания фотостудии. Помещение оснащено современным оборудованием и удобной мебелью.",
			en: "A bright and spacious hall, ideal for creating a photo studio. The room is equipped with modern equipment and comfortable furniture."
		},
		detail: {
			title: {ru: "#ОПИСАНИЕ", en: "#DESCRIPTION"},
			place: {ru: "ТЦ", en: "CC"},
			text: {ru: "Это пространство прекрасно адаптировано для проведения разнообразных художественных занятий - от индивидуальных уроков до групповых мастер-классов и творческих семинаров.",
				en: "This space is perfectly adapted for a variety of artistic activities, from individual lessons to group workshops and creative seminars."},
		},
		specs: [
			{
				icon: `${process.env.PUBLIC_URL}/images/card/icon-2.svg`,
				label: {ru: "Площадь", en: "Square"},
				value: '140 М²',
			},
			{
				icon: `${process.env.PUBLIC_URL}/images/card/icon-1.svg`,
				label: {ru: "Цена в месяц", en: "Price per month"},
				value: '110 000 ₽',
			},
		],
		tags: [
			{ name: {ru: "#высокиепотолки", en: "#highvolume"}},
			{ name: {ru: "#трековаясистема", en: "#tracksystem"}},
			{ name: {ru: "#кондиционер", en: "#airconditioning"}},
		]
	},
	{
		id: "melody",
		title: {ru: "МЕЛОДИЯ", en: "MELODY"},
		area: '120 М²',
		image: `${process.env.PUBLIC_URL}/images/places/place-4-min.png`,
		images: [
			{
				image: `${process.env.PUBLIC_URL}/images/places/place-2-min.png`,
			},
			{
				image: `${process.env.PUBLIC_URL}/images/places/place-2-min.png`,
			},
		],
		text: {ru: "В данном помещении каждый найдет всё необходимое для раскрытия своего потенциала: удобная мебель, качественный звук и продуманное освещение.",
			en: "In this room, everyone will find everything they need to reach their potential: comfortable furniture, high-quality sound and thoughtful lighting."
		},
		detail: {
			title: {ru: "#ОПИСАНИЕ", en: "#DESCRIPTION"},
			place: {ru: "ТЦ", en: "CC"},
			text: {ru: "Это пространство прекрасно адаптировано для проведения разнообразных художественных занятий - от индивидуальных уроков до групповых мастер-классов и творческих семинаров.",
				en: "This space is perfectly adapted for a variety of artistic activities, from individual lessons to group workshops and creative seminars."},
		},
		specs: [
			{
				icon: `${process.env.PUBLIC_URL}/images/card/icon-2.svg`,
				label: {ru: "Площадь", en: "Square"},
				value: '140 М²',
			},
			{
				icon: `${process.env.PUBLIC_URL}/images/card/icon-1.svg`,
				label: {ru: "Цена в месяц", en: "Price per month"},
				value: '110 000 ₽',
			},
		],
		tags: [
			{ name: {ru: "#звукоизоляция", en: "#soundinsulation"}},
			{ name: {ru: "#зеркала", en: "#mirrors"}},
			{ name: {ru: "#аудиосистема", en: "#audiosystem"}},
		]
	},
]
export default places;