import { dropdown } from './../utils/menuDropDown.js';
import { dataPhotographer, dataGallery } from '../utils/getData.js';
import { displayNbTotalLikes } from '../utils/counter.js';
import { mediaFactory } from '../factory.js';



export const mainGallery = document.createElement('div');
mainGallery.classList.add("mainPhotographer_gallery");

export const main = document.querySelector('main#mainPhotographer');
const iconeCliked = `
    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_120_561)">
            <path d="M10.5 21.35L9.23125 20.03C4.725 15.36 1.75 12.28 1.75 8.5C1.75 5.42 3.8675 3 6.5625 3C8.085 3 9.54625 3.81 10.5 5.09C11.4537 3.81 12.915 3 14.4375 3C17.1325 3 19.25 5.42 19.25 8.5C19.25 12.28 16.275 15.36 11.7688 20.04L10.5 21.35Z" fill="#901C1C"/>
        </g>
        <defs>
            <clipPath id="clip0_120_561">
                <rect width="24" height="26" fill="#901C1C"/>
            </clipPath>
        </defs>
    </svg> 
`;

const icone = `
    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_120_561)">
            <path d="M10.5 21.35L9.23125 20.03C4.725 15.36 1.75 12.28 1.75 8.5C1.75 5.42 3.8675 3 6.5625 3C8.085 3 9.54625 3.81 10.5 5.09C11.4537 3.81 12.915 3 14.4375 3C17.1325 3 19.25 5.42 19.25 8.5C19.25 12.28 16.275 15.36 11.7688 20.04L10.5 21.35Z" fill="#DB8876"/>
        </g>
        <defs>
            <clipPath id="clip0_120_561">
                <rect width="24" height="26" fill="#DB8876"/>
            </clipPath>
        </defs>
    </svg> 
`;

export function photographerTemplateSingle(photographers) {

    function displayLikesPrice(){
        
        const priceTotalLikes =  document.createElement("aside");

        const photographerLikes = document.createElement('p');
        photographerLikes.classList.add("photographerLikes");

        const counterLikes = document.createElement("span");
        counterLikes.classList.add("photographerLikes_total");
    
        const counterIcone= document.createElement("img");
        counterIcone.setAttribute("src", "assets/icons/likeBlack.svg");
        counterIcone.setAttribute("aria-hiden", true);
        counterIcone.classList.add("photographerLikes_icone")

        const priceByDay = document.createElement("span");
        priceByDay.innerText = `${dataPhotographer.price}€ / Jour`;
        priceByDay.classList.add("priceByDay");

        photographerLikes.appendChild(counterLikes);
        photographerLikes.appendChild(counterIcone);
        priceTotalLikes.appendChild(photographerLikes);
        priceTotalLikes.appendChild(priceByDay);

        main.append(priceTotalLikes);

        main.insertAdjacentElement('afterend', priceTotalLikes);

    }


     /************** gallery photographer **************/
     function galleryPhotographer(galleryImg){

        const { id, photographerId, title, image, video, likes, date, price } = galleryImg;

        // Création de la div contenant l'image, le titre et les likes
        const sectionImgPhotographer = document.createElement('article');
        sectionImgPhotographer.classList.add("articleImgPhotographer");
    
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
        likesImgPhotographer.setAttribute("data-id",  `${id}`);
        likesImgPhotographer.classList.add("mainPhotographer_gallery__likes");

        // Insertion icône likes
        const btnLikes = document.createElement('button');
        btnLikes.classList.add("btnLikes");
        btnLikes.setAttribute("type", "button");
        btnLikes.setAttribute("aria-label", "Like");
        btnLikes.setAttribute("data-id",  `${id}`);
        // btnLikes.innerHTML = icone;

        const spanIcone = document.createElement('span');
        spanIcone.classList.add("fas", "fa-heart", "fa-solid", "mainPhotographer_gallery__icone", "aria-hidden=true");

        btnLikes.appendChild(spanIcone);
        titlePriceLikes.appendChild(titleImgPhotographer);
        priceLikes.appendChild(likesImgPhotographer);
        priceLikes.appendChild(btnLikes);
        titlePriceLikes.appendChild(priceLikes);
        sectionImgPhotographer.appendChild(titlePriceLikes);

        mainGallery.appendChild(sectionImgPhotographer);

        return mainGallery;
    }

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


    displayLikesPrice()
    displayNbTotalLikes();
    dropdown();

    // on retourne notre constante et notre fonction.
    return {getUserSingleCardDOM, galleryPhotographer, mediaFactory, displayLikesPrice, displayNbTotalLikes}
}

