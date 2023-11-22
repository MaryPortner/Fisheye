import { photographerTemplateSingle } from './photographers.js';
import { photographerTemplate } from './../templates/photographer.js';
// import { photographerPresentation } from './../utils/photographerPresentation.js';

async function getPhotographers() {
// requête sur le fichier JSON en utilisant "fetch".
    const response = await fetch("./../../data/photographers.json");
    const photographers = await response.json();
    console.log(photographers);
    return photographers;
}

const { photographers } = await getPhotographers();


// ********************* Récupération des paramètres d'url *********************
// Récupération de l'url courante
const url = new URL(document.location);
// Récupération paramètres d'url 
const params = url.searchParams;
console.log(params);

if (params.has(`idPhotographer`)){
    displayDataSingle(params.get(`idPhotographer`));
}



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
    // Récupère les datas des photographes de façon asynchrone. 
    // const { photographers } = await getPhotographers();
    //affiche les données du tableau photographers;
    displayData(photographers);
}

init();


async function displayDataSingle(idPhotographer) {
    // const { photographers } = await getPhotographers();
    const photographersSectionSingle = document.querySelector(".photograph-header");
  
    // Chercher dans le json tous les éléments dont les id sont égaux à l'id passé en paramètre
    const idJson = photographers.find( elements=>elements.id == idPhotographer );
    console.log('id de la catégorie ' + idJson.name);


        // console.log(photographer);
        //Récupère les données d'un seul photographe du tableau photographers.
        const photographerModelSingle = photographerTemplateSingle(idPhotographer);
        // console.log(photographerModelSingle);
        //Ici on va récupérer l'article dans son ensemble, créé grâce à la fonction getUserCardDOM
        const userCardDOMSingle = photographerModelSingle.getUserSingleCardDOM();
        // ici on va insérer dans les données de la const userCardDOM dans la section .photographer_section.
        photographersSectionSingle.appendChild(userCardDOMSingle);
 
}

async function initSingle() {
    // Récupère les datas des photographes de façon asynchrone. 
    // const { photographers } = await getPhotographers();
    //affiche les données du tableau photographers;
    displayDataSingle(photographers);
}

initSingle();


