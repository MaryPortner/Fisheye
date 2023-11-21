import { photographerTemplateSingle } from './photographer.js';
import { photographerTemplate } from './../templates/photographer.js';
import { photographerPresentation } from './../utils/photographerPresentation.js';

export async function getPhotographers() {
    // requête sur le fichier JSON en utilisant "fetch".
        const response = await fetch("./../../data/photographers.json");
        const photographers = await response.json();
        return photographers;
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            //Récupère les données d'un seul photographe du tableau photographers.
            const photographerModel = photographerTemplate(photographer);
            // console.log(photographerModel);
            //Ici on va récupérer l'article dans son ensemble, créé grâce à la fonction getUserCardDOM
            const userCardDOM = photographerModel.getUserCardDOM();
            // ici on va insérer dans les données de la const userCardDOM dans la section .photographer_section.
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes de façon asynchrone. 
        const { photographers } = await getPhotographers();
        //affiche les données du tableau photographers;
        displayData(photographers);
    }

    init();



    async function displayDataSingle(photographers) {
        const photographersSectionSingle = document.querySelectorAll(".photographer_section .cardUser");
        for(let i = 0 ; i < photographersSectionSingle.length ; i++){
            //Récupère les données d'un seul photographe du tableau photographers.
            const photographerId = photographersSectionSingle[i];
            
       
            const photographerModelSingle = photographerTemplateSingle(photographerId);
            console.log(photographerModelSingle);
            //Ici on va récupérer l'article dans son ensemble, créé grâce à la fonction getUserCardDOM
            const userCardDOMSingle = photographerModelSingle.getUserSingleCardDOM(photographerModelSingleId);
            // ici on va insérer dans les données de la const userCardDOM dans la section .photographer_section.
            photographersSectionSingle.appendChild(userCardDOMSingle);
        }     
    }


    async function initSingle() {
        // Récupère les datas des photographes de façon asynchrone. 
        const { photographers } = await getPhotographers();
        //affiche les données du tableau photographers;
        displayDataSingle(photographers);
    }

    initSingle();
