import { en, ua } from "./lang";

export class LangFunction {
    constructor(){
        this._page = document.querySelector(".page");
        this._langLink = page.querySelector(".header__link");
        this._ruButton = page.querySelector('#ua')
        this._enButton = page.querySelector('#en')
    }
    
    changeLang(lang) {
        for(const key in lang){
            document.getElementById(key).innerText = lang[key];
        };
        
    };
    setEventListener(){
        enButton.addEventListener('click', () => changeLang(en));
        ruButton.addEventListener('click', () => changeLang(ua));
    };
};


