export default class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._img = data.img;
        this._linkText = data.linkText
        this._link = data.link;
        this._text = data.textUA;
        this._templateSelector = templateSelector;
    };

    _getTemplate = () => {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.place')
            .cloneNode(true);
        return cardElement;
    };

    _setEventListeners = () => {
        this._nameCard = this._element.querySelector('.place__title');
        this._imgCard = this._element.querySelector('.place__image');
        this._linkTextCard = this._element.querySelector('.place__link');
        this._linkCard = this._element.querySelector('.place__link');
        this._textCard = this._element.querySelector('.place__paragraph');
    };

    generate = () => {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._nameCard.textContent = this._name;
        this._imgCard.src = this._img;
        this._imgCard.alt = this._img;
        this._linkTextCard.textContent = this._linkText;
        this._linkCard.href = this._link;
        this._textCard.textContent = this._text;
        
        return this._element;
    };
};