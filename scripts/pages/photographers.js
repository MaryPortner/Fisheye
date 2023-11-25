export function photographerTemplateSingle(data, dataGallery) {
    const { name, portrait, city, country, tagline } = data;
    const { id, photographerId, title, image, likes, date, price } = dataGallery;
    const picture = `${portrait}`;

    //récupération de la balise main principale.
    const mainPhotographer = document.getElementById('mainPhotographer');

    function getUserSingleCardDOM() {
        // On récupére la div photographer-header
        const photographHeader = document.querySelector('.photograph-header');

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

        const imgPhographerHomePage = document.createElement('img');
        imgPhographerHomePage.setAttribute("src", picture); // On lui met la src qui provient de la constante picture
        imgPhographerHomePage.setAttribute("title",`photo de ${name}`);
        imgPhographerHomePage.classList.add("cardUser__img");

        //on ajoute la présentation du photographe
        photographHeader.appendChild(presentationPhotographer);
        //On ajoute l'image du photographe 
        photographHeader.appendChild(imgPhographerHomePage);
        // on retourne l'article
        return (photographHeader);
    }


    /* menu dropdown */
    const dropdownBtn = document.getElementById("btn");
    const dropdownMenu = document.getElementById("dropdown");
    const toggleArrow = document.getElementById("arrow");

    const toggleDropdown = function () {
        dropdownMenu.classList.toggle("show");
        toggleArrow.classList.toggle("arrow");
        dropdownBtn.classList.toggle("border-bottom-radius");
    };

    dropdownBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        toggleDropdown();
    });

    // Ferme quand l'élément du DOM est cliqué
    document.documentElement.addEventListener("click", function () {
        if (dropdownMenu.classList.contains("show")) {
            toggleDropdown();
        }
    });


    function galleryPhotographer(){
    
        const mainGallery = document.createElement('div');
        mainGallery.classList.add("mainPhotographer_gallery");

        mainPhotographer.appendChild(mainGallery);

        return mainPhotographer;
    }
    // on retourne notre constante et notre fonction.
    return {picture, getUserSingleCardDOM, galleryPhotographer}
}