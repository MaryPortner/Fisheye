
// Récupération des datas

import { id } from '../utils/getData.js';
import { mainGallery } from './../templates/singlePhotographer.js';
import { media } from '../utils/getData.js';
import { photographers } from '../utils/getData.js';
import { photographerTemplateSingle } from '../templates/singlePhotographer.js';


// const btnDate = document.querySelector(".filter_date");
// const btnPopularite = document.querySelector(".filter_popularite");
// const btnTitle = document.querySelector(".filter_titre");
// Filtrer dans le json les éléments de média par id
export const dataGallery = media.filter(elements => elements.photographerId == id);
// Chercher dans le json  éléments dont les id = à l'id passé en paramètre
export const photographer = photographers.find( elements => elements.id == id);
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
    
    dataGallery.map((datas) => {
        const displayGalleryElement = photographerModelSingle.galleryPhotographer(datas);
        photographersSectionSingle.appendChild(displayGalleryElement);
    });
} 


// ************* filtrage des données  *************

document.querySelectorAll('.filter').forEach(button => {

    button.addEventListener("click",function () {
        const type = button.dataset.filter;
        if (type === 'popularite'){
            sortDatasGallery.sort((a, b) => b.likes - a.likes);
        } else if ( type === 'date'){
            sortDatasGallery.sort(( a , b ) => new Date(b.date) - new Date(a.date)); 
        } else if ( type === 'titre') {
            sortDatasGallery.sort(( a , b ) => (a.title.localeCompare(b.title))); 
        }

        mainGallery.innerHTML = "";
        sortDatasGallery.map((media) => {
            const displayGalleryElement = photographerModelSingle.galleryPhotographer(media);
            photographersSectionSingle.appendChild(displayGalleryElement);
        });
    });
})




