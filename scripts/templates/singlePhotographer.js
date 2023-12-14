import { dropdown } from './../utils/menuDropDown.js';

export const mainGallery = document.createElement('div');
mainGallery.classList.add("mainPhotographer_gallery");

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
            <div class="photograph-header">
                <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
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
        const { id, photographerId, title, image, likes, date, price } = galleryImg;

        // Création de la div contenant l'image, le titre et les likes
        const divImgPhotographer = document.createElement('div');
        divImgPhotographer.classList.add("divImgPhotographer");

        // Récupération de l'image
        const imgPhotographer = document.createElement('img');
        imgPhotographer.setAttribute("src", image); 
        imgPhotographer.setAttribute("title", title);
        imgPhotographer.setAttribute("alt", title);
        imgPhotographer.classList.add("mainPhotographer_gallery__img");

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
        iconeImgPhotographer.setAttribute("src", "assets/icons/likesRed.svg");
        iconeImgPhotographer.setAttribute("alt", "icone pour liker");
        iconeImgPhotographer.classList.add("mainPhotographer_gallery__icone");


        divImgPhotographer.appendChild(imgPhotographer);
        titlePriceLikes.appendChild(titleImgPhotographer);
        priceLikes.appendChild(likesImgPhotographer);
        priceLikes.appendChild(iconeImgPhotographer);
        titlePriceLikes.appendChild(priceLikes);
        divImgPhotographer.appendChild(titlePriceLikes);
        
        mainGallery.appendChild(divImgPhotographer);

        return mainGallery;
    }

    dropdown();

    // on retourne notre constante et notre fonction.
    return {getUserSingleCardDOM, galleryPhotographer}
}

