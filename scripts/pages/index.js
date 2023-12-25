
import { photographerTemplate } from '../templates/photographers.js';
import { getDatas } from '../utils/getData.js';

// *********** Récupération des datas ***********/
const { photographers } = await getDatas();

// ************ fonction d'affichage de templates/photographer.js  *************
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        
        const photographerModel = photographerTemplate(photographer);
        //Récupère l'article dans son ensemble, via fonction getUserCardDOM
        const userCardDOM = photographerModel.getUserCardDOM();
        // Insertion des données de la const userCardDOM dans la section .photographer_section.
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    //affiche les données du tableau photographers;
    displayData(photographers);
}

init();