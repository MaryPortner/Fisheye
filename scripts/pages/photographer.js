
// Récupération des datas

import { id } from '../utils/getData.js';
import { mainGallery } from './../templates/singlePhotographer.js';
import { media } from '../utils/getData.js';
import { photographers } from '../utils/getData.js';
import { photographerTemplateSingle } from '../templates/singlePhotographer.js';


const btnDate = document.querySelector(".filter_date");
const btnPopularite = document.querySelector(".filter_popularite");
const btnTitle = document.querySelector(".filter_titre");
// Filtrer dans le json les éléments de média par id
export const dataGallery = media.filter(elements => elements.photographerId == id);
// Chercher dans le json  éléments dont les id = à l'id passé en paramètre
const photographer = photographers.find( elements => elements.id == id);
//Récupère les données d'un seul photographe du tableau photographers.
const photographerModelSingle = photographerTemplateSingle(photographer);
const photographersSectionSingle = document.querySelector("#mainPhotographer");
//Copie du tableau de medias
export const sortDatasGallery= Array.from(dataGallery);
//Récupérer l'affichage présentation du photographe singlePhotographer
const userCardDOMSingle = photographerModelSingle.getUserSingleCardDOM();


// ************* Affichage de templates/singlePhotographer.js  *************
if (!id){
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


// ************* filtrage des données  *************

    btnPopularite.addEventListener("click",function () {

        // Ici la methode sort va trier les likes par ordre décroissant
        sortDatasGallery.sort((a, b) => b.likes - a.likes);
        // Effacement de l'écran et regénération de la page
        mainGallery.innerHTML = "";
        sortDatasGallery.map((likes) => {
            const displayGalleryElement = photographerModelSingle.galleryPhotographer(likes);
            photographersSectionSingle.appendChild(displayGalleryElement);
        });
    });


    btnDate.addEventListener("click",function () {

        // Ici la methode sort va trier les likes par ordre décroissant
        sortDatasGallery.sort(( a , b ) => new Date(b.date) - new Date(a.date)); 
        
        // Effacement de l'écran et regénération de la page
        mainGallery.innerHTML = "";
        sortDatasGallery.map((date) => {
            const displayGalleryElement = photographerModelSingle.galleryPhotographer(date);
            photographersSectionSingle.appendChild(displayGalleryElement);
        });
    });


    btnTitle.addEventListener("click",function () {
        // Ici la methode sort va trier les likes par ordre décroissant
        // localeCompare renvoie un nombre indiquant si la chaîne courante se situe avant ou après la chaîne passée en paramètre
        sortDatasGallery.sort(( a , b ) => (a.title.localeCompare(b.title))); 
        // Effacement de l'écran et regénération de la page
        mainGallery.innerHTML = "";
        sortDatasGallery.map((title) => {
            const displayGalleryElement = photographerModelSingle.galleryPhotographer(title);
            photographersSectionSingle.appendChild(displayGalleryElement);
        });
    });





