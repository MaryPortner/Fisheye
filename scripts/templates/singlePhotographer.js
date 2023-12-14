import { dropdown } from './../utils/menuDropDown.js';
import { media } from '../utils/getData.js';
import { photographers } from '../utils/getData.js';
import { dataGallery } from './../pages/photographer.js';

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

            const datasPhotographer =
             `          
                <div class="divImgPhotographer">
                    <img class="mainPhotographer_gallery__img"
                        alt="${title}"
                        src="${image}"
                        title="${title}"
                    />
            
                    <div class="mainPhotographer_gallery__title-likes">
                        <p class="mainPhotographer_gallery__title">${title}</p>
                        <div class="mainPhotographer_gallery__price-likes">
                            <p class="mainPhotographer_gallery__likes">${likes}</p>
                            <img class="mainPhotographer_gallery__icone" arria-hiden="true" src="assets/icons/likesRed.svg" alt="icone pour liker" />
                        </div>
                    </div>
                </div>
            `

        mainGallery.innerHTML = datasPhotographer;
        return mainGallery;
    }

    dropdown();

    // on retourne notre constante et notre fonction.
    return {getUserSingleCardDOM, galleryPhotographer}
}

