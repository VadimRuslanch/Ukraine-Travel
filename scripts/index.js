// import { LangFunction } from "./script.js";
import Photo from "./Photo.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import Card from "./Card.js";

const elementsPhoto = document.querySelector('#elementsPhoto');
const elementsCard = document.querySelector('#elementsCard');
const popupOpenImage = document.querySelector('#popup-open-image');
const popupWithImage = new PopupWithImage(popupOpenImage);

const photo = [
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
    const photo = new Photo(item, "#templatePhoto", {
        handleCardClick: (link) => {
            popupWithImage.handleCardClick(link)
        }
    });
    return photo.generate()
};

const photoList = new Section({
    items: photo,
    renderer: (data) => {
        photoList.addItem(createPhoto(data))
    }
,containerSelector: elementsPhoto})
photoList.rendererItems();

// function addPhoto(item) {
//     elementsPhoto.prepend(createPhoto(item));
// };

// photos.forEach((item) => {
//     addPhoto(item)
// });





const cards = [
    {
        name: "Національний природний парк “Сколівські Бескиди”",
        img: "https://wownature.in.ua/wp-content/uploads/2021/05/TSerkva-Sv.Panteleymona-Z-arkhivu-pakku-1.jpg",
        text: "wownature.in.ua",
        link: "https://wownature.in.ua/parky-i-zapovidnyky/natsionalnyy-pryrodnyy-park-skolivski-beskydy/",
        text: "“Сколівські Бескиди” – край гір, природних див, вікових величних лісів, безмежних краєвидів, смарагдових полонин, численних гірських потоків, цілющих джерел мінеральних вод, талановитих народних умільців. Вітер, що гуляє поміж гір, досі розповідає про героїчні часи, коли на скелях вирувало життя давньоруського міста Тустань, що відбивало навали ворогів.",
    },
    // {
    //     name: "Національний природний парк “Синевир”",
    //     linkText: "Синевир",
    //     link: "https://wownature.in.ua/wp-content/uploads/2021/04/Svitanok-Tanya-Troyan-scaled.jpg",
    //     text: "Озеро Синевир – найбільше в Україні гірське озеро. Хоча це, безумовно, родзинка парку, але відвідати його варто не лише заради цієї водойми. Тут є і чарівні гори, і кришталево чисті водоспади, річки та озера, заповідні болота і праліси, що належать до Списку всесвітньої спадщини ЮНЕСКО. ",
    // },
    // {
    //     name: "Національний природний парк “Кармелюкове Поділля”",
    //     linkText: "Кармелюкове Поділля",
    //     link: "https://wownature.in.ua/parky-i-zapovidnyky/natsionalnyy-pryrodnyy-park-karmeliukove-podillia/",
    //     text: "Побачити красу унікального незайманого лісу, відчути аромат різнотрав’я, побродити стежками, які протоптали дикі звірі, на власні очі побачити рослину ще з дольодовикового періоду та проїхатися міні-потягом вузькоколійною залізницею – це все про національний природний парк “Кармелюкове Поділля”. Майже всі пагорби парку вкриті лісами, багато з яких досягли столітнього віку. Край багатий на величні храми, історичні та сакральні місця.",
    // },
    // {
    //     name: "Національний природний парк “Бузький Гард”",
    //     linkText: "Бузький Гард",
    //     link: "https://wownature.in.ua/parky-i-zapovidnyky/natsionalnyy-pryrodnyy-park-buzkyy-hard/",
    //     text: "Тут спокійний Південний Буг перетворюється на бурхливу річку поміж скелястих берегів гранітного каньйону. Він утворює вузьку каньйоноподібну долину з величними гранітними скелями, водограями й островами. Унікальні ландшафти тут створили південні відроги (вузькі гірські хребти) тектонічної плити Українського кристалічного щита.",
    // },
    // {
    //     name: "Ялтинський гірсько-лісовий природний заповідник",
    //     linkText: "Ялтинський гірсько-лісовий природний заповідник",
    //     link: "https://wownature.in.ua/parky-i-zapovidnyky/yaltynskyy-hirsko-lisovyy-pryrodnyy-zapovidnyk/",
    //     text: "Заповідник простягається вздовж узбережжя Чорного моря на 49 кілометрів (від Гурзуфа до Фороса, оточуючи Ялту). Заповідник здебільшого покриває гірські території над узбережжям, а в деяких місцях сягає берега моря. Найвища точка – гора Ай-Петрі (1234 м). Гори, скелі та яйла, карстові впадини та порожнини, котловини та зниження, морське узбережжя – ландшафт цих живописних територій утворився внаслідок складних і тривалих геологічних процесів, пов’язаних як з відкладенням осадових порід, так і з підняттям земної кори.",
    // },
    // {
    //     name: "Приазовський національний природний парк",
    //     linkText: "Приазовський",
    //     link: "https://wownature.in.ua/parky-i-zapovidnyky/pryazovskyy-natsionalnyy-pryrodnyy-park/",
    //     text: "Шурхіт хвиль Азову, пахощі трав та мерехтіння ковили, спів птахів та шелест очерету, піщані коси та теплі лимани. Це одне з найдивовижніших місць півдня України для мандрівок. ",
    // },
    // {
    //     name: "Азово-Сиваський національний природний парк",
    //     linkText: "Азово-Сиваський",
    //     link: "https://wownature.in.ua/azovo-syvaskyy-natsionalnyy-pryrodnyy-park/",
    //     text: "Царство сивих заповідних полинових степів та яскравих червоно-жовтих солончаків. Унікальний парк, де лише шоста частина території –  суходіл, а решта –  акваторії Азовського моря, озера Сиваш та Утлюцького лиману. Це Азово-Сиваський національний природний парк – одна з найцінніших природних територій Приазов’я. ",
    // },
    // {
    //     name: "Національний природний парк “Великий Луг”",
    //     linkText: "Великий Луг",
    //     link: "https://wownature.in.ua/parky-i-zapovidnyky/natsionalnyy-pryrodnyy-park-velykyy-luh/",
    //     text: "Тут ви пройдете стежками запорізьких козаків та торговців, зустрінете козацькі поховання, скіфські кургани, виходи вапнякових порід Сарматського моря, залишки старовинних штолень, розмиви археологічних пам’яток від раннього палеоліту до середньовіччя. ",
    // },
    // {
    //     name: "Природний заповідник “Дніпровсько-Орільський”",
    //     linkText: "Дніпровсько-Орільський",
    //     link: "https://wownature.in.ua/parky-i-zapovidnyky/pryrodnyy-zapovidnyk-dniprovsko-orilskyy/",
    //     text: "Це неочікувана дика природа, затиснута між двома промисловими гігантами – містом Дніпро і містом Кам’янське. Тихий шепіт очерету та віковічних осокорів, спів очеретянок та солов’їв, тінь орлана посеред безодні синього неба, обережний погляд сарни, стежки борсуків – тут неймовірно слухати і вивчати природу.",
    // },
    // {
    //     name: "Національний природний парк “Пирятинський”",
    //     linkText: "Пирятинський",
    //     link: "https://wownature.in.ua/parky-i-zapovidnyky/natsionalnyy-pryrodnyy-park-pyriatynskyy/",
    //     text: "Справжній смарагд Полтавського краю, що вражає різноманітністю ландшафтів, барвами перелісків, степів, луків та звивистим руслом річки Удай. Екотуристичні маршрути національного парку – це майже 280 кілометрів, що проходять повз вали стародавнього городища Полкостень, Шкуратівські схили, Кручанські краєвиди, Куквинські хащі. На шляху маршрутів – оповитим таємницею століть палацово-парковий ансамбль садиби Закревських, піраміда-усипальниця, сакральні пам’ятки, можна прогулятися Березоворудським парком чи стежками острова Масальський.",
    // },
    // {
    //     name: "Національний природний парк «Залісся»",
    //     linkText: "Залісся",
    //     link: "https://wownature.in.ua/natsionalnyy-pryrodnyy-park-zalissia/",
    //     text: "Назва парку «Залісся» цілком відповідає його території, адже 80% парку – це великий ліс на лівобережжі Десни. Тут ростуть розкішні сосни та дуби. Зустрічається також ялина, ясен, акація, береза, вільха та інші дерева. А частина з них – старші 100 років. Площа парку дійсно вражає. Він розкинувся на частині двох областей – Київської та Чернігівської. Унікальність «Залісся» в тому, що майже 13 тисяч гектарів парку загороджено парканом, що робить його великим домом для диких тварин. Тут ви точно зустрінете оленя, лань, дикого кабана чи навіть зубра. А на болотах парку живуть цілі сім’ї бобрів. «Залісся» може похизуватися хорошою інфраструктурою. Веломандрівка тут буде ідеальною пригодою. Крім того, відвідувачів парку обов’язково зацікавить Музей дикої природи або стайня з породистими скакунами.",
    // },
];

// function createCard(item) {
//     console.log(item)
//     const card = new Card(item, "#templateCard");
//     return card.generateCard();
// };

// const cardList = new Section({
//     renderer: (card) => cardList.prepend(createCard(item)),
//     containerSelector: ".places"
// });
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