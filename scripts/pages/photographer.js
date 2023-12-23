// Récupération des datas
import { id, dataPhotographer, dataGallery, sortDatasGallery } from '../utils/getData.js';
import { mainGallery, photographerTemplateSingle } from './../templates/singlePhotographer.js';

const photographerModelSingle = photographerTemplateSingle(dataPhotographer);
const photographersSectionSingle = document.querySelector("#mainPhotographer");
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




