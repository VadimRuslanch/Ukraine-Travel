import Photo from "../components/Photo.js"
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Card from "../components/Card.js";
import { elementsPhoto, elementsCard, popupOpenImage, photo, cards } from "../utils/constants.js"

const popupWithImage = new PopupWithImage(popupOpenImage);

/* -------------- Функция создания нового фото --------------- */
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
    },
    containerSelector: elementsPhoto
})
photoList.rendererItems();

/* -------------- Функция создания нового карточки --------------- */
function createCard(item) {
    const card = new Card(item, "#templateCard");
    return card.generate();
};

const cardList = new Section({
    items: cards,
    renderer: (data) => {
        cardList.addItem(createCard(data))
    },
    containerSelector: elementsCard
})
cardList.rendererItems();