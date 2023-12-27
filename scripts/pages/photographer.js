// Récupération des datas
import { getDatas } from "../utils/getData.js";
import { mainGallery, photographerTemplateSingle} from "./../templates/singlePhotographer.js"
import { displayNbTotalLikes } from "../utils/counter.js";
import  contactFormInit from './../utils/contactForm.js';

// *********** Récupération des datas ***********/
const params = new URLSearchParams(window.location.search);
export const { media, photographers } = await getDatas();
export const id = params.get("idPhotographer");
export const dataPhotographer = photographers.find( elements => elements.id == id);
export const dataGallery = media.filter(elements => elements.photographerId == id);
export const sortDatasGallery= Array.from(dataGallery);

const photographerModelSingle = photographerTemplateSingle(dataPhotographer, dataGallery);
const photographersSectionSingle = document.querySelector("#mainPhotographer");
const userCardDOMSingle = photographerModelSingle.getUserSingleCardDOM();

let sortByLikes;
let sortByDate;
let sortByTitle;
// ************* Affichage de templates/singlePhotographer.js  *************
if (!id){
    alert("Erreur ! Vous allez être redirigé vers la page d'accueil ");
    //redirection 
    location.href="index.html";
} else {
    // Insertion des données de la const userCardDOM dans la balise main
    photographersSectionSingle.prepend(userCardDOMSingle);


    document.querySelectorAll('.filter').forEach(button => {
        const type = button.dataset.filter;
        if (type === 'popularite'){
            sortDatasGallery.sort((a, b) => b.likes - a.likes);
        }

        sortByLikes = sortDatasGallery;
        displayMedia();

        button.addEventListener("click",function (e) {
            e.preventDefault();

            if (type === 'popularite'){
                sortByLikes.sort((a, b) => b.likes - a.likes);
            } 
            sortByDate = sortByLikes;
            if ( type === 'date'){
                sortByDate.sort(( a , b ) => new Date(b.date) - new Date(a.date)); 
            } 
            sortByTitle = sortByDate;
            if ( type === 'titre') {
                sortByTitle.sort(( a , b ) => (a.title.localeCompare(b.title))); 
            }
            sortByLikes = sortByTitle;
            displayMedia();
        });
    })
} 


function displayMedia(){
    mainGallery.innerHTML = "";
    sortDatasGallery.map((media) => {
        const displayGalleryElement = photographerModelSingle.galleryPhotographer(media);
        photographersSectionSingle.appendChild(displayGalleryElement);
    });
    displayNbTotalLikes(dataGallery);
}

