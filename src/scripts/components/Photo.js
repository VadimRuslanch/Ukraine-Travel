export default class Photo {
    constructor(data, templateSelector,{handleCardClick}) {
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;

        
    };

    _getTemplate = () => {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.photo-grid__item')
            .cloneNode(true);
        return cardElement;
    };

    _setEventListeners = () => {
        this._element.addEventListener('click', () => {
            this._handleCardClick(this._link);
        });
    };

    generate = () => {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.src = this._link;
        
        return this._element;
    };
};