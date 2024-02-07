// Récupération des datas
import { getDatas } from "../utils/getData.js";
import { mainGallery, photographerTemplateSingle} from "./../templates/singlePhotographer.js"
import { displayNbTotalLikes } from "../utils/counter.js";
import { startLightbox } from '../utils/lightbox.js';


// *********** Récupération des datas ***********/
const params = new URLSearchParams(window.location.search);
export const { media, photographers } = await getDatas();
export const id = params.get("idPhotographer");
export const dataPhotographer = photographers.find( elements => elements.id == id);
export const dataGallery = media.filter(elements => elements.photographerId == id).map(m => 
    {
        return { ...m, hasbeenLiked : false} // Ajoute hasbeenLiked sur chaque élément du tableau
    });
export const sortDatasGallery= Array.from(dataGallery); // Copie de dataGallery pour trie de données
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

sortByPopularity(); //on trie les images par popularité par défaut
displayMedia(); // On affiche une première fois la galerie;

document.querySelectorAll('.dropdown_content-filter').forEach(button => { // Ajoute un listener sur chacun des boutons de tri
   button.addEventListener("click",function () {
        const type = button.dataset.filter;
        if (type === 'popularite'){
            sortByPopularity();
        }
        if ( type === 'date'){
            sortDatasGallery.sort(( a , b ) => new Date(b.date) - new Date(a.date)); 
        }
        if ( type === 'titre') {
            sortDatasGallery.sort(( a , b ) => (a.title.localeCompare(b.title))); 
        }

        displayMedia(); // Réaffiche la galerie en fonction du tri.
        startLightbox(sortDatasGallery); // Réaffiche la lightbox selon le tri
    });
})

// Affiche la lightbox en fonction du tri par défaut (popularité)
startLightbox(sortDatasGallery);


function displayMedia(){
    mainGallery.innerHTML = "";
    sortDatasGallery.map((media) => {
    
        const displayGalleryElement = photographerModelSingle.galleryPhotographer(media);
        photographersSectionSingle.appendChild(displayGalleryElement);
    });
    displayNbTotalLikes(dataGallery);
}

// Factorisation du tri par likes
function sortByPopularity(){
    sortDatasGallery.sort(( a,  b) => b.likes - a.likes);
}



