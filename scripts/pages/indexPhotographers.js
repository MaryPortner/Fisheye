
import { photographerTemplateSingle } from './photographers.js';


async function getPhotographers() {
    // requête sur le fichier JSON en utilisant "fetch".
    const response = await fetch("./../../data/photographers.json");
    const photographers = await response.json();
    return photographers;
}

const { photographers } = await getPhotographers();
const { media } = await getPhotographers();


// ********************* Récupération des paramètres d'url *********************
// Récupération de l'url courante
const params = new URLSearchParams(window.location.search);
// Récupération paramètres d'url 
const idPhotorapherInUrl = params.get("idPhotographer");


if (params.has(`idPhotographer`)){

        // ************* fonction d'affichage de page/photographer.js  *************
    function displayDataSingle(idPhotorapherInUrl) {
        const photographersSectionSingle = document.querySelector("#mainPhotographer");
        // Chercher dans le json tous les éléments dont les id sont égaux à l'id passé en paramètre
        const idJson = photographers.find( elements => elements.id == idPhotorapherInUrl);
        // Filtrer dans le json les éléments de média par id
        const galleryImg = media.filter(elements => elements.photographerId == idPhotorapherInUrl);
   
        //Récupère les données d'un seul photographe du tableau photographers.
        const photographerModelSingle = photographerTemplateSingle(idJson);

        //Ici on va récupérer l'article dans son ensemble, créé grâce à la fonction getUserCardDOM
        const userCardDOMSingle = photographerModelSingle.getUserSingleCardDOM();

        galleryImg.forEach((galleryImgElement) => {
            const displayGalleryElement = photographerModelSingle.galleryPhotographer(galleryImgElement);
            photographersSectionSingle.appendChild(displayGalleryElement);
        });

        // ici on va insérer dans les données de la const userCardDOM dans la section .photographer_section.
        photographersSectionSingle.prepend(userCardDOMSingle);
    }

    displayDataSingle(idPhotorapherInUrl);
    // console.log(displayDataSingle(idPhotorapherInUrl));
}






