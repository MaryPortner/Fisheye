import { main, priceTotalLikes } from "../templates/singlePhotographer.js";
import { mediaFactory } from "../factory.js";

const body = document.querySelector('body');
let btnLigthboxPrev;
let btnLigthboxNext;
let closeBtnLigthbox;
let currentImgIndex;
let focusableElements;
let indexImg;
let lightbox;
const lightboxImg = document.createElement("div");
const photographHeader = document.querySelector(".photograph-header");
const titleLigthbox = document.createElement("h2");


export function startLightbox(medias){
    let images = Array.from(document.querySelectorAll(".linkImgPhotographer"));
  
    images.forEach(img => {
        img.addEventListener('click', (e) => {
            e.preventDefault();
            const id = img.getAttribute('data-id');
            //Récupère le média en fonction de l'id du photographe
            const currentMedia = medias.find(m => m.id == id);
            const el = displayImage(currentMedia);

            main.append(buildLightbox(currentMedia));
            indexImg = e.currentTarget;
            //on va trouver l'image qui a l'index identique à l'image courante. 
            currentImgIndex = images.findIndex(image => image === indexImg);
            document.querySelector(".lightbox_content-img").appendChild(el);
        
            body.setAttribute('aria-hidden', true);
            lightbox.setAttribute('aria-modal', false); 
            main.setAttribute('aria-hidden', true);  // Masquer le main aux lecteurs d'écran à l'affichage de la lightbox.
            body.classList.add('no-scroll');
    
            closeBtnLigthbox.focus(); // Focus par défaut à l'ouverture de la lightbox.
            lightbox.focus();
            
            //Fermeture de la modale au clavier
            closeBtnLigthbox.addEventListener('keyup', (e) => {
                if (e.key === 'Escape' || e.key === 'Backspace') {
                    listenForCloseLightbox();
                }
            });

            //Fermeture de la lightbox au click
            lightbox.querySelector('.lightbox_close-btn').addEventListener('click', () =>{
                listenForCloseLightbox();
            });

            // display à none de l'encart likes et prix/jour
            priceTotalLikes.style.display = "none";

            focusableElements = [...lightbox.querySelectorAll("button.btn_lightbox.lightbox_next-btn, button.btn_lightbox.lightbox_previous-btn, button.btn_lightbox.lightbox_close-btn, video#player ")]; // Récupération de nos éléments focusable dans la lightbox
            
            changeBg("#00000080", "#c4c4c466", "contrast(60%)"); 
            keepFocus(focusableElements);   // Appeler la fonction au focus de la lightbox obtient le focus
            next(medias);
            prev(medias);
        });
    });
}

function buildLightbox(currentMedia){
    const title = currentMedia.title; // Titre de l'image
    lightbox = document.createElement("div");
    lightbox.innerHTML = '';
    lightbox.classList.add("lightbox_content");
    lightbox.setAttribute('aria-modal', false);
    lightbox.setAttribute("aria-label", "Vue agrandie de l'image");
    lightbox.setAttribute("role", "dialog");


    closeBtnLigthbox = document.createElement("button");
    closeBtnLigthbox.classList.add("btn_lightbox", "lightbox_close-btn");
    // closeBtnLigthbox.setAttribute("tabindex", 0);

    const descriptionCloseBtnLightbox = document.createElement("span");
    descriptionCloseBtnLightbox.classList.add("sr-only");
    descriptionCloseBtnLightbox.innerHTML="Fermer la boîte de dialogue";

    const imgClose = document.createElement("span");
    imgClose.classList.add("fa-solid", "fa-xmark");

    btnLigthboxNext = document.createElement("button");
    btnLigthboxNext.classList.add("btn_lightbox", "lightbox_next-btn");

    const imgBtnNext = document.createElement("span");
    imgBtnNext.classList.add("fa-solid", "fa-chevron-right");
    
    const descriptionImgBtnNext = document.createElement("span");
    descriptionImgBtnNext.classList.add("sr-only");
    descriptionImgBtnNext.innerHTML="Afficher l'image suivante";

    btnLigthboxPrev = document.createElement("button");
    btnLigthboxPrev.classList.add("btn_lightbox", "lightbox_previous-btn");

    const imgBtnPrev = document.createElement("span");
    imgBtnPrev.classList.add("fa-solid", "fa-chevron-left");

    const descriptionImgBtnPrev = document.createElement("span");
    descriptionImgBtnPrev.classList.add("sr-only");
    descriptionImgBtnPrev.innerHTML="Afficher l'image précédente";

    lightboxImg.innerHTML = '';
    lightboxImg.classList.add("lightbox_content-img");
    lightboxImg.setAttribute("role", "img");
    // lightboxImg.setAttribute("tabindex", 1);

    
    titleLigthbox.classList.add("lightbox_img-title");
    titleLigthbox.innerText = `${title}`;

    closeBtnLigthbox.appendChild(imgClose);
    closeBtnLigthbox.appendChild(descriptionCloseBtnLightbox);
    btnLigthboxNext.appendChild(imgBtnNext);
    btnLigthboxNext.appendChild(descriptionImgBtnNext);
    btnLigthboxPrev.appendChild(imgBtnPrev);
    btnLigthboxPrev.appendChild(descriptionImgBtnPrev);

    lightbox.appendChild(closeBtnLigthbox);
    lightbox.appendChild(btnLigthboxNext);
    lightbox.appendChild(btnLigthboxPrev);
    lightbox.appendChild(lightboxImg);
    lightbox.appendChild(titleLigthbox);

    return lightbox;
}


//Affichage du média selon le type vidéo ou image
function displayImage(media){
    const m = mediaFactory(media);
    m.controls = "controls";
    m.classList.add("lightbox_img");
    return m;
}

// Affichage du media précédent ou suivant dans la lightbox;
function displayMediaNextOrPrev(medias){
    const currentMedia = medias[currentImgIndex];
    const el = displayImage(currentMedia);
    document.querySelector(".lightbox_content-img").appendChild(el);
    titleLigthbox.innerText = `${currentMedia.title}`;
    lightbox.appendChild(titleLigthbox);
}


// Changement du bg à l'affichage de la lightbox 
function changeBg(color1, color2, color3) {
    const imgs = document.querySelectorAll("img.mainPhotographer_gallery__img");
    const imgHeader = document.querySelector(".cardUser__img");
    const videos = document.querySelector(".linkImgPhotographer > video");

    document.body.style.background = color1;
    photographHeader.style.background = color2;
    imgHeader.style.filter = color3;
    imgs.forEach(img => {
        img.style.filter = color3;
    });
    videos.style.filter = color3;
}

//Affichage du média précédent dans la lightbox
function displayNextMedia(medias){
    lightboxImg.innerHTML = '';      
    currentImgIndex++;
    if (currentImgIndex >= medias.length){
        currentImgIndex = 0;
    }
    displayMediaNextOrPrev(medias);
}

//Affichage du média suivant dans la lightbox
function displayPreviousMedia(medias){
    lightboxImg.innerHTML = '';
    currentImgIndex--;
    if (currentImgIndex < 0){
        currentImgIndex = medias.length-1;
    }
    displayMediaNextOrPrev(medias);
}


//Fermeture lightbox
function listenForCloseLightbox(){
    body.setAttribute('aria-hidden', false); 
    body.classList.remove('no-scroll');
    lightbox.innerHTML = '';
    lightbox.style.display = "none";
    lightbox.setAttribute('aria-hidden', true);
    lightbox.setAttribute('aria-modal', false);
    main.setAttribute('aria-hidden', false); 
    priceTotalLikes.style.display = "flex";
    changeBg("#FFFFFF", "#FAFAFA", "none");
}
        

//Affichage du média suivant au click ou clavier via les flèches
function next(medias){
    btnLigthboxNext.addEventListener('click', () => {
        displayNextMedia(medias);
    });

    btnLigthboxNext.addEventListener('keydown', (e) => {
        if(e.keyCode === 39){
            displayNextMedia(medias);
        }
    });
}


//Affichage du média précédent au click ou clavier via les flèches
function prev(medias){
    btnLigthboxPrev.addEventListener('click', () => {
        displayPreviousMedia(medias);
    });

    btnLigthboxPrev.addEventListener('keydown', (e) => {
        if(e.keyCode === 37){
            displayPreviousMedia(medias);
        }
    });
}



let keepFocus =  (focusableElements) => {
    // On a préalablement récupéré nos élements dans la variable focusableElements
    // On récupère le premier et le dernier élément focusable
	let firstTabbableElement = focusableElements[0];
	let lastTabbableElement = focusableElements[focusableElements.length - 1];

	let keyListener =  (e) => {
		let keyCode = e.which || e.keyCode; // Rècupère le Keycode courant
		if (keyCode === 9) {
            // Déplacer le focus sur le premier élément qui peut être tabulé 
			if (e.target === lastTabbableElement && !e.shiftKey) {
				e.preventDefault();
				firstTabbableElement.focus();

			// Déplacer le focus sur le dernier élément pouvant être tabulé 
			} else if (e.target === firstTabbableElement && e.shiftKey) {
				e.preventDefault();
				lastTabbableElement.focus();
			}
		}
	};

	lightbox.addEventListener('keydown', keyListener, false);
};