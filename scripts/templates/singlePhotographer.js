import { dropdown } from './../utils/menuDropDown.js';
import { mediaFactory } from '../factory.js';

export const mainGallery = document.createElement('div');
mainGallery.classList.add("mainPhotographer_gallery");
const main = document.querySelector('main#mainPhotographer');


export function photographerTemplateSingle(photographers) {

    function getUserSingleCardDOM() {
        // On récupére la div photographer-header
        const photographHeader = document.querySelector('.photograph-header');

        const presentationPhotographer = `
            <div class="photographer-header__presentation">
                <h1 class="cardUser__title">${photographers.name}</h1>
                <p class="cardUser__cityCountry">${photographers.city}, ${photographers.country}</p>
                <p class="cardUser__tagline">${photographers.tagline}</p>
                <a title="page de ${photographers.name}" alt="photo de ${photographers.name}" href=""></a>
            </div>
            <div class="photograph-btn">
                <button class="contact_button">Contactez-moi</button>
            </div>
            <img class="cardUser__img"
                alt="${photographers.name}"
                src="${photographers.portrait}"
                title=" photo de ${photographers.name}"
            />
        `
        //on ajoute la présentation du photographe
        photographHeader.innerHTML = presentationPhotographer;

        return photographHeader;
    }

    
    /************** gallery photographer **************/
    function galleryPhotographer(galleryImg){

        const { id, photographerId, title, image, video, likes, date, price } = galleryImg;

        // Création de la div contenant l'image, le titre et les likes
        const sectionImgPhotographer = document.createElement('section');
        sectionImgPhotographer.classList.add("sectionImgPhotographer");
    
        // affichage des img et vidéos
        let medias = mediaFactory(galleryImg);
        sectionImgPhotographer.appendChild(medias);

        // Création de la div contenant le titre, les likes et l'icône coeur
        const titlePriceLikes = document.createElement('div');
        titlePriceLikes.classList.add("mainPhotographer_gallery__title-likes");

        // Récupération du titre de l'image
        const titleImgPhotographer = document.createElement('p');
        titleImgPhotographer.innerText =  `${title}`; 
        titleImgPhotographer.classList.add("mainPhotographer_gallery__title");

        // Création de la div contenant les likes et l'icône 
        const priceLikes = document.createElement('div');
        priceLikes.classList.add("mainPhotographer_gallery__price-likes");

        // Récupération des likes
        const likesImgPhotographer = document.createElement('p');
        likesImgPhotographer.innerText =  `${likes}`; 
        likesImgPhotographer.classList.add("mainPhotographer_gallery__likes");

        // Insertion icône likes
        const iconeImgPhotographer = document.createElement('img');
        iconeImgPhotographer.setAttribute("aria-hiden", true);
        iconeImgPhotographer.setAttribute("aria-label", "like");
        iconeImgPhotographer.setAttribute("src", "assets/icons/like.svg");
        iconeImgPhotographer.setAttribute("alt", "icone pour liker");
        iconeImgPhotographer.classList.add("mainPhotographer_gallery__icone");




        titlePriceLikes.appendChild(titleImgPhotographer);
        priceLikes.appendChild(likesImgPhotographer);
        priceLikes.appendChild(iconeImgPhotographer);
        titlePriceLikes.appendChild(priceLikes);
        sectionImgPhotographer.appendChild(titlePriceLikes);

        mainGallery.appendChild(sectionImgPhotographer);

        return mainGallery;
    }


    dropdown();
    
    // insertion des likes et tarifs
    const priceTotalLikes =  document.createElement("aside");

    const photographerLikes = document.createElement('p');
    photographerLikes.classList.add("photographerLikes")

    const counterLikes = document.createElement("span");
    counterLikes.classList.add("photographerLikes_count");

    const counterIcone= document.createElement("span");
    counterIcone.classList.add("photographerLikes_icone")

    const priceByDay = document.createElement("span");
    // const icone = 
    photographerLikes.appendChild(counterLikes);
    photographerLikes.appendChild(counterIcone);
    priceTotalLikes.appendChild(photographerLikes);
    priceTotalLikes.appendChild(priceByDay);

    main.append(priceTotalLikes);

    main.insertAdjacentElement('afterend', priceTotalLikes);
    // main.insertBefore(mainGallery, priceTotalLikes);

    // on retourne notre constante et notre fonction.
    return {getUserSingleCardDOM, galleryPhotographer, mediaFactory}
}

