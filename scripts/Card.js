export default class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._text = data.text;
        this._templateSelector = templateSelector;
    };

    _getTemplate = () => {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.places')
            .cloneNode(true);
        return cardElement;
    };

    _setEventListeners = () => {
        this._nameCard = this._element.querySelector('.place__title');
        this._imageCard = this._element.querySelector('.place__image');
        this._linkText = this._element.querySelector('.place__link');
        this._linkCard = this._element.querySelector('.place__link').href;
        this._textCard = this._element.querySelector('.place__paragraph');
        

    };

    generateCard = () => {
        this._element = this._getTemplate();
        this._setEventListeners();

        // this._cardImage.src = ;
        // this._nameImage.textContent = ;
        // this._cardImage.alt = ;
        return this._element;
    };
};