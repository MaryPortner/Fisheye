import { photographerTemplateSingle } from './photographers.js';
import { photographerTemplate } from './../templates/photographer.js';
// import { photographerPresentation } from './../utils/photographerPresentation.js';


async function getPhotographers() {
    // requête sur le fichier JSON en utilisant "fetch".
    const response = await fetch("./../../data/photographers.json");
    const photographers = await response.json();
    return photographers;
}

const { photographers } = await getPhotographers();
const { media } = await getPhotographers();
console.log(media);



// ********************* Récupération des paramètres d'url *********************
// Récupération de l'url courante
const params = new URLSearchParams(window.location.search);
// Récupération paramètres d'url 
if (params.has(`idPhotographer`)){
    console.log(params.get(`idPhotographer`));
    displayDataSingle(params.get("idPhotographer"));
}


// ************ fonction d'affichage de templates/photographer.js  *************
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        //Récupère les données d'un seul photographe du tableau photographers.
        const photographerModel = photographerTemplate(photographer);
        //Ici on va récupérer l'article dans son ensemble, créé grâce à la fonction getUserCardDOM
        const userCardDOM = photographerModel.getUserCardDOM();
        // ici on va insérer dans les données de la const userCardDOM dans la section .photographer_section.
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    //affiche les données du tableau photographers;
    displayData(photographers);
}

init();


// ************* fonction d'affichage de page/photographer.js  *************
async function displayDataSingle(idPhotographer) {
    const photographersSectionSingle = document.querySelector(".mainPhotographer");
    // Chercher dans le json tous les éléments dont les id sont égaux à l'id passé en paramètre
    const idJson = photographers.find( elements => elements.id == idPhotographer );
  
    const galleryImg = media.filter(elements => elements.photographerId == idPhotographer );
  
    //Récupère les données d'un seul photographe du tableau photographers.
    const photographerModelSingle = photographerTemplateSingle(idJson, galleryImg);

    //Ici on va récupérer l'article dans son ensemble, créé grâce à la fonction getUserCardDOM
    const userCardDOMSingle = photographerModelSingle.getUserSingleCardDOM();
    const galleryImgPhotographer = photographerModelSingle.galleryPhotographer();

    // ici on va insérer dans les données de la const userCardDOM dans la section .photographer_section.
    photographersSectionSingle.appendChild(userCardDOMSingle);
    photographersSectionSingle.appendChild(galleryImgPhotographer);
}

async function initSingle() {
    // Récupère les datas des photographes de façon asynchrone. 
    // const { photographers } = await getPhotographers();
    //affiche les données du tableau photographers;
    displayDataSingle(photographers);
}

initSingle();