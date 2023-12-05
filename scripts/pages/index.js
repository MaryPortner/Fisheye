
import { photographerTemplate } from './../templates/photographer.js';




async function getPhotographers() {
    // requête sur le fichier JSON en utilisant "fetch".
    const response = await fetch("./../../data/photographers.json");
    const photographers = await response.json();
    return photographers;
}

const { photographers } = await getPhotographers();
const { media } = await getPhotographers();
console.log(media);



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

