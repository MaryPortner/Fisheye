import { photographerTemplateSingle } from './photographer.js';
import { photographerTemplate } from './../templates/photographer.js';

async function getPhotographers() {
    // requête sur le fichier JSON en utilisant "fetch".
        const response = await fetch("./../../data/photographers.json");
        const photographers = await response.json();
        // console.log(photographers);
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
        const photographersSectionSingle = document.querySelector(".photograph-header");
        photographers.forEach((photographer) => {
            //Récupère les données d'un seul photographe du tableau photographers.
            const photographerModelSingle = photographerTemplateSingle(photographer);
            console.log(photographerModelSingle);
            //Ici on va récupérer l'article dans son ensemble, créé grâce à la fonction getUserCardDOM
            const userCardDOMSingle = photographerModelSingle.getUserSingleCardDOM();
            // ici on va insérer dans les données de la const userCardDOM dans la section .photographer_section.
            photographersSectionSingle.appendChild(userCardDOMSingle);
        });
    }


    async function initSingle() {
        // Récupère les datas des photographes de façon asynchrone. 
        const { photographers } = await getPhotographers();
        //affiche les données du tableau photographers;
        displayDataSingle(photographers);
    }

    initSingle();
