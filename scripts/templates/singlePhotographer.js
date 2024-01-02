
import { dropdown } from './../utils/menuDropDown.js';
import { dataPhotographer, dataGallery } from './../pages/photographer.js';
import { displayNbTotalLikes } from "../utils/counter.js";
import { mediaFactory } from '../factory.js';


export const mainGallery = document.createElement('div');
mainGallery.classList.add("mainPhotographer_gallery");
export const main = document.querySelector('main#mainPhotographer');
export const priceTotalLikes =  document.createElement("aside");


export  function photographerTemplateSingle(photographer, dataGallery) {

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
        const photographHeader = document.querySelector('.photograph-header');

        const presentationPhotographer = `
            <div class="photographer-header__presentation">
                <h1 class="cardUser__title">${photographer.name}</h1>
                <p class="cardUser__cityCountry">${photographer.city}, ${photographer.country}</p>
                <p class="cardUser__tagline">${photographer.tagline}</p>
                <a title="page de ${photographer.name}" alt="photo de ${photographer.name}" href=""></a>
            </div>
            <div class="photograph-btn">
                <button class="contact_button">Contactez-moi</button>
            </div>
            <img class="cardUser__img"
                alt="${photographer.name}"
                src="${photographer.portrait}"
                title=" photo de ${photographer.name}"
            />
        `
        //on ajoute la présentation du photographe
        photographHeader.innerHTML = presentationPhotographer;

        return photographHeader;
    }

  
    displayLikesPrice();
    displayNbTotalLikes(dataGallery);
    dropdown();

    // on retourne notre constante et notre fonction.
    return {getUserSingleCardDOM, galleryPhotographer, mediaFactory, displayLikesPrice, displayNbTotalLikes, dataGallery}
}