import { photographerPresentation } from './../utils/photographerPresentation.js';

export function photographerTemplateSingle(data) {
    const { name, portrait, id, city, country, tagline } = data;
    console.log(data);
    // Récupère l'image en fonction de la donnée 'portrait' du tableau JSON récupéré via data
    const picture = `${portrait}`;
    // fonction qui permet la mise en page de la card du photographe

    function getUserSingleCardDOM() {
        // On récupére la div photographer-header
        const mainPhotographer = document.querySelector('.photograph-header');
        
        const presentationPhotographer = document.createElement('div');
        presentationPhotographer.classList.add("photographer-header__presentation");

        // On crée le titre avec le nom
        const h2 = document.createElement('h1');
        h2.textContent = `${name}`;
        h2.classList.add("cardUser__title");
        presentationPhotographer.appendChild(h2);

        // Création du paragraphe de la ville et du pays.
        const cityCountry = document.createElement('p');
        cityCountry.innerText = `${city}, ${country}`;
        cityCountry.classList.add("cardUser__cityCountry");
        presentationPhotographer.appendChild(cityCountry);

        // Création du paragraphe de la tagline
        const taglineText = document.createElement('p');
        taglineText.innerText =  tagline;
        taglineText.classList.add("cardUser__tagline");
        presentationPhotographer.appendChild(taglineText);

        // On crée un lien sur l'élément image
        const linkImgPhotographe = document.createElement('a');
        linkImgPhotographe.setAttribute("title", `page de ${name}`);
        linkImgPhotographe.setAttribute("href", "");

        const imgPhotographerHomePage = document.createElement('img');
        imgPhotographerHomePage.setAttribute("src", picture); // On lui met la src qui provient de la constante picture
        imgPhotographerHomePage.dataset.id = id;
        imgPhotographerHomePage.setAttribute("title",`photo de ${name}`);
        imgPhotographerHomePage.classList.add("cardUser__img");
  

        //on ajoute la présentation du photographe
        mainPhotographer.appendChild(presentationPhotographer);
        //On ajoute l'image du photographe 
        mainPhotographer.appendChild(imgPhotographerHomePage);
        // on retourne l'article
        return (mainPhotographer);
   
    }

    // function listPhotographerCards(){}
    // on retourne notre constante et notre fonction.
    return {picture, getUserSingleCardDOM}

    function getCardDOMPhotographer(id){
        photographerPresentation();



    }

}