// import { LangFunction } from "./script.js";
import { Photo } from "./Photo.js";

const elementsPhoto = document.querySelector('#elementsPhoto');
const elementsCard = document.querySelector('.elementsCard');

const photos = [
    {
        link: "https://wownature.in.ua/wp-content/uploads/2021/04/Synevyr-Krasnoshtan-Vasyl--scaled.jpg",
    },
    {
        link: "https://wownature.in.ua/wp-content/uploads/2021/04/TSentr-reabilitatsii-buroho-vedmedia-Larisa-Uhryn-scaled.jpg",
    },
    {
        link: "https://wownature.in.ua/wp-content/uploads/2021/05/Beskydy_autumn-Mykhaylo-Petskovych-1.jpg",
    },
    {
        link: "https://wownature.in.ua/wp-content/uploads/2021/05/Kopiia-_8-Havrylenko-V.S.-Kolektsiia-kilehrudykh-ptakhiv-zooparku-1-scaled-e1620393095389.jpg",
    },
    {
        link: "https://wownature.in.ua/wp-content/uploads/2022/02/Pliamysti-oleni.jpg",
    },
    {
        link: "https://wownature.in.ua/wp-content/uploads/2021/05/Azovo-Syvaskyy_natsionalnyy_pryrodnyy_park_1_01-Viktoriia-Rogovenko.jpg",
    },
    {
        link: "https://wownature.in.ua/wp-content/uploads/2021/04/Nickolay-Omelchenko_Zamkova-hora.jpg",
    },
    {
        link: "https://wownature.in.ua/wp-content/uploads/2021/06/Hora-SHpytsi-Pyvovar-Pavlo.jpg",
    },
    {
        link: "https://wownature.in.ua/wp-content/uploads/2021/06/Hoverla-vzymku-Robert-Erik-.jpg",
    },
    {
        link: "https://wownature.in.ua/wp-content/uploads/2021/06/Vodospad-Probiy-Pedahoh-Svitlana.jpg",
    },
];

function createPhoto(item) {
    const photo = new Photo(item, "#templatePhoto");
    return photo.generate()
};
function addPhoto(item) {
    elementsPhoto.prepend(createPhoto(item));
};
photos.forEach((item) => {
    addPhoto(item)
});

const cards = [
    {
        name: "Сколівські Бескиди",
        linkText: "",
        link: "https://wownature.in.ua/wp-content/uploads/2021/05/SkoleBeskidsNationalNaturePark-nov-2011-Mykhaylo-Petskovych-1-1.jpg",
        text: "Озеро Синевир – найбільше в Україні гірське озеро. Хоча це, безумовно, родзинка парку, але відвідати його варто не лише заради цієї водойми. Тут є і чарівні гори, і кришталево чисті водоспади, річки та озера, заповідні болота і праліси, що належать до Списку всесвітньої спадщини ЮНЕСКО.Тут відкриті для відвідувачів унікальні для України реабілітаційні центри для бурих ведмедів та хижих птахів. У дикій природі, крім тих же ведмедів, можна зустріти вовка, рись, оленів та козуль. У смерекових лісах гніздяться глухарі, рябчики, на торф’яні болота залітають білі та чорні лелеки, а високо в небесах ширяють беркути. А ще приїжджайте до “Синевиру“ знайомитись із душею Карпат  – місцевою культурою. Побачите знаряддя праці сплавників деревини у єдиному в Європі та другому у світі Музеї лісу і сплаву, вивчите побут та традиції трьохсотлітньої давнини в музеї “Старе село“ та оглянете оборонні бункери Лінії Арпада, яку використовувала угорська армія в Другій світовій війні.",
    },
    {
        name: "Національний природний парк “Синевир”",
        link: "https://wownature.in.ua/wp-content/uploads/2021/04/Svitanok-Tanya-Troyan-scaled.jpg",
        text: "",
    },
    {
        name: "Кармелюкове Поділля",
        link: "",
        text: "",
    },
    {
        name: "Бугский Гард",
        link: "",
        text: "",
    },
    {
        name: "Ялтинский горно-лесной природный заповедник",
        link: "",
        text: "",
    },
    {
        name: "Pryazovsʹkyy",
        link: "",
        text: "",
    },
    {
        name: "Азово-Сивашский",
        link: "",
        text: "",
    },
    {
        name: "Великий Луг",
        link: "",
        text: "",
    },
    {
        name: "Днепровско-Орельский природный заповедник",
        link: "",
        text: "",
    },
    {
        name: "Pyryatynskyi National Park",
        link: "",
        text: "",
    },
    {
        name: "Залісся",
        link: "",
        text: "",
    },
];

// function createCard(item) {
//     const card = new Card(item, "#templateCard");
//     return card.generate();
// };
// function addCard(item) {
//     elementsCard.prepend(createCard(item));
// };
// cards.forEach((item) => {
//     // console.log(item)
//     addCard(item)
// });