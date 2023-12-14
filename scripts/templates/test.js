const divImgPhotographer = `
    <div class="divImgPhotographer">
        <img class="mainPhotographer_gallery__img"
            alt="${title}"
            src="${image}"
            title="${title}"
        />

        <div class="mainPhotographer_gallery__title-likes">
            <p class="mainPhotographer_gallery__title">${title}</p>
            <div class="mainPhotographer_gallery__price-likes">
                <p class="mainPhotographer_gallery__likes">${likes}</p>
                <img class="mainPhotographer_gallery__icone" arria-hiden="true" src="assets/icons/likesRed.svg" alt="icone pour liker" />
            </div>
        </div>
    </div>
`

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



        
        return mainGallery;
    }
