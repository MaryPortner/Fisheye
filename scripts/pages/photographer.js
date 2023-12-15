
// Récupération des datas
import { id } from '../utils/getData.js';
import { mainGallery } from './../templates/singlePhotographer.js';
import { media } from '../utils/getData.js';
import { photographers } from '../utils/getData.js';
import { photographerTemplateSingle } from '../templates/singlePhotographer.js';


// Filtrer dans le json les éléments de média par id
const dataGallery = media.filter(elements => elements.photographerId == id);
// Chercher dans le json  éléments dont les id = à l'id passé en paramètre
const photographer = photographers.find( elements => elements.id == id);
//Récupère les données d'un seul photographe du tableau photographers.
const photographerModelSingle = photographerTemplateSingle(photographer);

const photographersSectionSingle = document.querySelector("#mainPhotographer");

const popularite = document.querySelector('.filter_popularite');
//Copie du tableau de medias
 const sortPopularity = Array.from(dataGallery);
//Récupérer l'affichage présentation du photographe singlePhotographer
const userCardDOMSingle = photographerModelSingle.getUserSingleCardDOM();


// ************* Affichage de templates/singlePhotographer.js  *************
if (isNaN(id) || id.length > 3){
    alert("Erreur ! Vous allez être redirigé vers la page d'accueil ");
    //redirection 
    location.href="index.html";
} else {
    // Insertion des données de la const userCardDOM dans la balise main
    photographersSectionSingle.prepend(userCardDOMSingle);
    
    dataGallery.map((galleryImgElement) => {
        const displayGalleryElement = photographerModelSingle.galleryPhotographer(galleryImgElement);
        photographersSectionSingle.appendChild(displayGalleryElement);
    });
} 


popularite.addEventListener("click",function () {

    // Ici la methode sort va trier les likes par ordre décroissant
    sortPopularity.sort(function (a, b) {
        return b.likes - a.likes;
    });
    // Effacement de l'écran et regénération de la page
    mainGallery.innerHTML = "";

    sortPopularity.map((likes) => {
        const displayGalleryElement = photographerModelSingle.galleryPhotographer(likes);
        photographersSectionSingle.appendChild(displayGalleryElement);
    });

});





