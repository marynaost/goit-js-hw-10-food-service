import menu from "./menu.json";
import galleryTemp from "../templates/gallery-items.hbs";

const galleryRef = document.querySelector(".js-menu")
const markup = galleryTemp(menu)

galleryRef.insertAdjacentHTML('beforeend', markup)
