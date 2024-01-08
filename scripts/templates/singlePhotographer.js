import { dropdown } from './../utils/menuDropDown.js';
import { dataPhotographer } from './../pages/photographer.js';
import { displayNbTotalLikes } from "../utils/counter.js";
import { mediaFactory } from '../factory.js';
import { contactFormInit } from '../utils/contactForm.js';


export const mainGallery = document.createElement('div');

export const main = document.querySelector('main#mainPhotographer');
export const priceTotalLikes =  document.createElement("aside");
export const btnContact = document.createElement("button");
export const imgPhotographer = document.createElement("img");
export const linkImg = document.createElement('a');
const name = document.querySelector(".namePhotographer");


export function photographerTemplateSingle(photographer, dataGallery) {

    function displayLikesPrice(){
        
        const photographerLikes = document.createElement('p');
        photographerLikes.classList.add("photographerLikes");

        const counterLikes = document.createElement("span");
        counterLikes.classList.add("photographerLikes_total");
    
        const counterIcone= document.createElement("img");
        counterIcone.classList.add("photographerLikes_icone");
        counterIcone.setAttribute("src", "assets/icons/likeBlack.svg");
        counterIcone.setAttribute("aria-hiden", true);
        

        const priceByDay = document.createElement("span");
        priceByDay.classList.add("priceByDay");
        priceByDay.innerText = `${photographer.price}€ / Jour`;
    

        photographerLikes.appendChild(counterLikes);
        photographerLikes.appendChild(counterIcone);
        priceTotalLikes.appendChild(photographerLikes);
        priceTotalLikes.appendChild(priceByDay);

        main.append(priceTotalLikes);

        main.insertAdjacentElement('afterend', priceTotalLikes);
    }

     /************** gallery photographer **************/
    function galleryPhotographer(galleryImg){

        const { id, photographerId, title, image, video, likes, date, price, hasBeenLiked } = galleryImg;

        mainGallery.classList.add("mainPhotographer_gallery");

        // Création de la div contenant l'image, le titre et les likes
        const articlePhotographer = document.createElement('article');
        articlePhotographer.classList.add("articleImgPhotographer");
        articlePhotographer.setAttribute("data-id",`${id}`);
        articlePhotographer.setAttribute("data-date",`${date}`);
        articlePhotographer.setAttribute("data-title",`${title}`);
        articlePhotographer.setAttribute("data-likes",`${likes}`);
        articlePhotographer.setAttribute("data-photographerId",`${photographerId}`);

        const linkImg = document.createElement('a');
        linkImg.classList.add('linkImgPhotographer');
        if (galleryImg.hasOwnProperty('video')){
            linkImg.setAttribute("href",`${video}`);
        }
        if (galleryImg.hasOwnProperty('image')){
            linkImg.setAttribute("href",`${image}`);
        }
        linkImg.setAttribute("data-id",`${id}`);
        linkImg.setAttribute("alt" , `${title}`);
        linkImg.setAttribute("role","link");
        linkImg.setAttribute("aria-label","View image large format");

        // affichage des img et vidéos
        let medias = mediaFactory(galleryImg);

        // Création de la div contenant le titre, les likes et l'icône coeur
        const titlePriceLikes = document.createElement('div');
        titlePriceLikes.classList.add("mainPhotographer_gallery__title-likes");

        // Récupération du titre de l'image
        const titleImgPhotographer = document.createElement('p');
        titleImgPhotographer.classList.add("mainPhotographer_gallery__title");
        titleImgPhotographer.innerText =  `${title}`; 

        // Création de la div contenant les likes et l'icône 
        const priceLikes = document.createElement('div');
        priceLikes.classList.add("mainPhotographer_gallery__price-likes");

        // Récupération des likes
        const likesImgPhotographer = document.createElement('p');
        likesImgPhotographer.classList.add("mainPhotographer_gallery__likes");
        likesImgPhotographer.innerText =  `${likes}`; 
        likesImgPhotographer.setAttribute("data-id",`${id}`);

        // Insertion icône likes
        const btnLikes = document.createElement('button');
        btnLikes.classList.add("btnLikes");
        btnLikes.setAttribute("type", "button");
        btnLikes.setAttribute("aria-label", "Like");
        btnLikes.setAttribute("data-id",  `${id}`);

        if(hasBeenLiked){
            btnLikes.style.color = "var(--primary-color)";
        } else {
            btnLikes.style.color = "var(--secondary-color)";
        }
    
        const spanIcone = document.createElement('span');
        spanIcone.classList.add("fas", "fa-heart", "fa-solid", "mainPhotographer_gallery__icone", "aria-hidden=true");

        articlePhotographer.appendChild(linkImg);
        linkImg.appendChild(medias);
        btnLikes.appendChild(spanIcone);
        titlePriceLikes.appendChild(titleImgPhotographer);
        priceLikes.appendChild(likesImgPhotographer);
        priceLikes.appendChild(btnLikes);
        titlePriceLikes.appendChild(priceLikes);
        articlePhotographer.appendChild(titlePriceLikes);

        mainGallery.appendChild(articlePhotographer);

        return mainGallery;
    }


    function getUserSingleCardDOM() {
        // On récupére la div photographer-header
        const photographHeader = document.querySelector(".photograph-header");

        const presentationPhotographer = document.createElement("div");
        presentationPhotographer.classList.add("photographer-header__presentation");

        const photographerName = document.createElement("h1");
        photographerName.classList.add("cardUser__title");
        photographerName.innerText = `${photographer.name}`; 

        const cityCountry =  document.createElement("p");
        cityCountry.classList.add("cardUser__cityCountry");
        cityCountry.innerText = `${photographer.city}, ${photographer.country}`;
        
        const tagline =  document.createElement("p");
        tagline.classList.add("cardUser__tagline");
        tagline.innerText = `${photographer.tagline}`;

        const linkPhotographer = document.createElement("a");
        linkPhotographer.setAttribute("title",`page de ${photographer.name}`);
        linkPhotographer.setAttribute("alt",`photo de ${photographer.name}`);
        linkPhotographer.setAttribute("href", "");

        const photographBtn =  document.createElement("div");
        photographBtn.classList.add("photograph-btn");
        
        btnContact.setAttribute("id", "contact");
        btnContact.classList.add("contact_button");
        btnContact.innerText = `Contactez-moi`;

        imgPhotographer.classList.add("cardUser__img");
        imgPhotographer.setAttribute("alt", `${photographer.name}`);
        imgPhotographer.setAttribute("src", `${photographer.portrait}`);
        imgPhotographer.setAttribute("title", `photo de ${photographer.name}`);



        presentationPhotographer.appendChild(photographerName);
        presentationPhotographer.appendChild(cityCountry);
        presentationPhotographer.appendChild(tagline);
        presentationPhotographer.appendChild(linkPhotographer);

        photographBtn.appendChild(btnContact);

        photographHeader.appendChild(presentationPhotographer);
        photographHeader.appendChild(photographBtn);
        photographHeader.appendChild(imgPhotographer);

        return photographHeader;
    }

    displayLikesPrice();
    displayNbTotalLikes(dataGallery);
    dropdown();

    name.innerHTML = dataPhotographer.name;
    contactFormInit();

    return {getUserSingleCardDOM, galleryPhotographer, mediaFactory, displayLikesPrice, displayNbTotalLikes, dataGallery}
}






