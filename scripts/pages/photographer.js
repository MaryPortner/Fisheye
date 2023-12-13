
import { photographerTemplateSingle } from '../templates/singlePhotographer.js';
import { getDatas } from '../utils/getData.js';

const { photographers } = await getDatas();
const { media } = await getDatas();
const id = getIdFromUrl();

// Chercher dans le json tous les éléments dont les id sont égaux à l'id passé en paramètre
const photographer = photographers.find( elements => elements.id == id);

if (!id || id.length > 3){
    alert("Erreur ! Vous allez être redirigé vers la page d'accueil ");
    //redirection vers la page d'accueil
    location.href="index.html";
  
} else {
    display(id);
}

// ************* fonction d'affichage de templates/singlePhotographer.js  *************
function display(id) {
    const photographersSectionSingle = document.querySelector("#mainPhotographer");

    // Filtrer dans le json les éléments de média par id
    const galleryImg = media.filter(elements => elements.photographerId == id);

    //Récupère les données d'un seul photographe du tableau photographers.
    const photographerModelSingle = photographerTemplateSingle(photographer);

    //Ici on va récupérer l'article dans son ensemble, créé grâce à la fonction getUserCardDOM
    const userCardDOMSingle = photographerModelSingle.getUserSingleCardDOM();

    galleryImg.forEach((galleryImgElement) => {
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

function sortPopularity(photographer){
    /************** Tri par popularité **************/
    const popularite = document.querySelector('.filter_popularite');
        // Ajout du listener pour trier par popularité
        popularite.addEventListener("click",function (galleryImg) {
            //Ici on crée une copie du tableau media pour ne pas modifier l'ordre des données de base avec Array.from.
            const popularity = Array.from(galleryImg);
            console.log(popularity);
            
            // Ici la methode sort va trier les likes par ordre décroissant
            popularity.sort(function (a, b) {
                return b.likes - a.likes;
            });
            // Effacement de l'écran et regénération de la page
            divImgPhotographer.innerHTML = "";
        
            galleryPhotographer(popularity) ;
        });
        
}

sortPopularity(photographer);
    