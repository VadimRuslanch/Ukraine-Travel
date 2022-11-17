import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupElement) {
        super(popupElement);
        this._openedCardImage = this._popup.querySelector('.popup__image');
        this._openedCardName = this._popup.querySelector('.popup__text');
    };

    handleCardClick(link) {
        this.setEventListeners()
        
        this._openedCardImage.src = link;
        super.open();
    };
};