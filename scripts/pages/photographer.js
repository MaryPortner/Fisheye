// Récupération des datas
import { getDatas } from "../utils/getData.js";
import { mainGallery, photographerTemplateSingle} from "./../templates/singlePhotographer.js"
import { displayNbTotalLikes } from "../utils/counter.js";
import { displayLightbox } from '../utils/lightbox.js';


// *********** Récupération des datas ***********/
const params = new URLSearchParams(window.location.search);
export const { media, photographers } = await getDatas();
export const id = params.get("idPhotographer");
export const dataPhotographer = photographers.find( elements => elements.id == id);
export const dataGallery = media.filter(elements => elements.photographerId == id).map(m => 
    {
        return { ...m, hasbeenLiked : false } 
    });

export const sortDatasGallery= Array.from(dataGallery);

export let allArticles;

const photographerModelSingle = photographerTemplateSingle(dataPhotographer, dataGallery);
const photographersSectionSingle = document.querySelector("#mainPhotographer");
const userCardDOMSingle = photographerModelSingle.getUserSingleCardDOM();


// ************* Affichage de templates/singlePhotographer.js  *************
if (!id){
    alert("Erreur ! Vous allez être redirigé vers la page d'accueil");
    //redirection 
    location.href="index.html";
} 
// Insertion des données de la const userCardDOM dans la balise main
photographersSectionSingle.prepend(userCardDOMSingle);

sortDatasGallery.sort((a, b) => b.likes - a.likes); 
displayMedia();

document.querySelectorAll('.filter').forEach(button => {
   button.addEventListener("click",function () {
        const type = button.dataset.filter;
        if (type === 'popularite'){
            sortDatasGallery.sort((a, b) => b.likes - a.likes);}
        if ( type === 'date'){
            sortDatasGallery.sort(( a , b ) => new Date(b.date) - new Date(a.date)); 
        } else if ( type === 'titre') {
            sortDatasGallery.sort(( a , b ) => (a.title.localeCompare(b.title))); 
        }

        displayMedia();
        displayLightbox(dataGallery);
    });
})



displayLightbox(dataGallery);


function displayMedia(){
    mainGallery.innerHTML = "";
    sortDatasGallery.map((media) => {
    
        const displayGalleryElement = photographerModelSingle.galleryPhotographer(media);
        photographersSectionSingle.appendChild(displayGalleryElement);
    });
    displayNbTotalLikes(dataGallery);
}
