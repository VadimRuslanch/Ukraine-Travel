const page = document.querySelector(".page");
const langLink = page.querySelector(".header__link");
const ruButton = page.querySelector('#ru')
const enButton = page.querySelector('#en')

function changeLang(lang) {
    for(const key in lang){
        document.getElementById(key).innerText = lang[key];
    };
    
};
enButton.addEventListener('click', () => changeLang(en))
ruButton.addEventListener('click', () => changeLang(ru))