export function photographerTemplateSingle(data) {
    const { name, portrait, city, country, tagline } = data;
    const picture = `${portrait}`;

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
        linkImgPhotographe.setAttribute("alt", `photo de ${name}`);
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


    /************** menu dropdown **************/
    const dropdownBtn = document.getElementById("btn");
    const dropdownMenu = document.getElementById("dropdown");
    const toggleArrow = document.getElementById("arrow");

    const toggleDropdown = function () {
        dropdownMenu.classList.toggle("show");
        toggleArrow.classList.toggle("arrow");
        dropdownBtn.classList.toggle("border-bottom-radius");
    };

    toggleArrow.addEventListener("click", function(e) {
        e.stopPropagation();
        toggleDropdown();
    });

    // Ferme quand l'élément du DOM est cliqué
    document.documentElement.addEventListener("click", function() {
        if (dropdownMenu.classList.contains("show")) {
            toggleDropdown();
        }
    });


    /************** gallery photographer **************/
    const mainGallery = document.createElement('div');
    mainGallery.classList.add("mainPhotographer_gallery");

    function galleryPhotographer(galleryImg){
        const { id, photographerId, title, image, likes, date, price } = galleryImg;

    
        // Création de la div contenant l'image, le titre et les likes
        const divImgPhotographer = document.createElement('div');
        divImgPhotographer.classList.add("divImgPhotographer");

        // Récupération de l'image
        const imgPhotographer = document.createElement('img');
        imgPhotographer.setAttribute("src", image); 
        imgPhotographer.setAttribute("title", title);
        imgPhotographer.setAttribute("alt", title);
        imgPhotographer.classList.add("mainPhotographer_gallery__img");

        // Création de la div contenant le titre, les likes et l'icône coeur
        const titlePriceLikes = document.createElement('div');
        titlePriceLikes.classList.add("mainPhotographer_gallery__title-likes");

        // Récupération du titre de l'image
        const titleImgPhotographer = document.createElement('p');
        titleImgPhotographer.innerText =  `${title}`; 
        titleImgPhotographer.classList.add("mainPhotographer_gallery__title");

        // Création de la div contenant les likes et l'icône 
        const priceLikes = document.createElement('div');
        priceLikes.classList.add("mainPhotographer_gallery__price-likes");

        // Récupération des likes
        const likesImgPhotographer = document.createElement('p');
        likesImgPhotographer.innerText =  `${likes}`; 
        likesImgPhotographer.classList.add("mainPhotographer_gallery__likes");

        // Insertion icône likes
        const iconeImgPhotographer = document.createElement('img');
        iconeImgPhotographer.setAttribute("aria-hiden", true);
        iconeImgPhotographer.setAttribute("src", "assets/icons/likesRed.svg");
        iconeImgPhotographer.setAttribute("alt", "icone pour liker");
        iconeImgPhotographer.classList.add("mainPhotographer_gallery__icone");


        divImgPhotographer.appendChild(imgPhotographer);
        titlePriceLikes.appendChild(titleImgPhotographer);
        priceLikes.appendChild(likesImgPhotographer);
        priceLikes.appendChild(iconeImgPhotographer);
        titlePriceLikes.appendChild(priceLikes);
        divImgPhotographer.appendChild(titlePriceLikes);
        
        mainGallery.appendChild(divImgPhotographer);



        /************** Tri par popularité **************/
        // Ajout du listener pour trier par popularité
        dropdownBtn.addEventListener("click",function (galleryImg) {
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
        
        return mainGallery;
    }


    // on retourne notre constante et notre fonction.
    return {picture, getUserSingleCardDOM, galleryPhotographer}
}