// Récupération des templates
import { mainGallery } from '../templates/singlePhotographer.js';
import { photographerTemplateSingle } from '../templates/singlePhotographer.js';

// récupération de l'id via l'url de photographer.js ligne 16
const id = getIdFromUrl();
import { media } from '../utils/getData.js';
import { photographers } from '../utils/getData.js';

// Filtrer dans le json les éléments de média par id
export const dataGallery = media.filter(elements => elements.photographerId == id);

// Chercher dans le json  éléments dont les id = à l'id passé en paramètre
const photographer = photographers.find( elements => elements.id == id);

//Récupère les données d'un seul photographe du tableau photographers.
const photographerModelSingle = photographerTemplateSingle(photographer);

const photographersSectionSingle = document.querySelector("#mainPhotographer");

//Récupérer l'affichage présentation du photographe singlePhotographer
const userCardDOMSingle = photographerModelSingle.getUserSingleCardDOM();


// Vérification sur l'id
if (!id || id.length > 3){
    alert("Erreur ! Vous allez être redirigé vers la page d'accueil ");
    //redirection 
    location.href="index.html";
  
} else {
    display(id);
}

// ************* fonction d'affichage de templates/singlePhotographer.js  *************
function display(id) {
    
    dataGallery.map((galleryImgElement) => {
        const displayGalleryElement = photographerModelSingle.galleryPhotographer(galleryImgElement);
        photographersSectionSingle.appendChild(displayGalleryElement);
    });

    // ici on va insérer dans les données de la const userCardDOM dans la section .photographer_section.
    photographersSectionSingle.prepend(userCardDOMSingle);
}

function getIdFromUrl(){
    // Récupération de l'url courante
    const params = new URLSearchParams(window.location.search);
    // Récupération paramètres d'url 
    const id = params.get("idPhotographer");
    return id;
}

export const popularite = document.querySelector('.filter_popularite');
// Ajout du listener pour trier par popularité
popularite.addEventListener("click",function () {
    //Ici on crée une copie du tableau media pour ne pas modifier l'ordre des données de base avec Array.from.
    const popularity = Array.from(dataGallery);
    console.log(popularity);
    
    // Ici la methode sort va trier les likes par ordre décroissant
    popularity.sort(function (a, b) {
        return b.likes - a.likes;
    });

    // Effacement de l'écran et regénération de la page
    mainGallery.innerHTML = "";
    galleryPhotographer(popularity);

});
    