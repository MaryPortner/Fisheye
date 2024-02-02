import { main, priceTotalLikes } from "../templates/singlePhotographer.js";
import { mediaFactory } from "../factory.js";


let btnLigthboxPrev;
let btnLigthboxNext;
let closeBtnLigthbox;
let currentImgIndex;
let indexImg;
let lightbox;
const photographHeader = document.querySelector(".photograph-header");
const lightboxImg = document.createElement("div");
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
            // display à none de l'encart likes et prix/jour
            priceTotalLikes.style.display = "none";

            // on masque le main lorsque la lightbox est affichée pour le masquer aux lecteurs d'écran
            main.setAttribute('aria-hidden', true); 
            lightbox.setAttribute('aria-hidden', false);
            lightbox.setAttribute('aria-modal', true);

 
            closeBtnLigthbox.focus();

            
            changeBg("#00000080", "#c4c4c466", "contrast(60%)");
            listenForCloseLightbox();
            next(medias);
            prev(medias);

            // Appeler la fonction lorsque la partie de la page obtient le focus
            keepFocus();
            lightbox.focus();

            console.log(document.activeElement);
        });
    });
}


function buildLightbox(currentMedia){
    const title = currentMedia.title;
   
    lightbox = document.createElement("div");
    lightbox.innerHTML = '';
    lightbox.classList.add("lightbox_content");
    lightbox.setAttribute('aria-hidden', false);
    lightbox.setAttribute("aria-label", "Vue agrandie de l'image");
    lightbox.setAttribute("role", "dialog");

    closeBtnLigthbox = document.createElement("button");
    closeBtnLigthbox.classList.add("btn_lightbox", "lightbox_close-btn");
    closeBtnLigthbox.setAttribute("tabindex", 0);

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


//Affichage du média selon le type
function displayImage(media){
    const m = mediaFactory(media);
    m.controls = "controls";
    m.classList.add("lightbox_img");
    return m;
}

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


//Fermeture lightbox
function listenForCloseLightbox(){
    lightbox.querySelector('.lightbox_close-btn').addEventListener('click', () =>{
        lightbox.innerHTML = '';
        lightbox.style.display = "none";
        priceTotalLikes.style.display = "flex";
        changeBg("#FFFFFF", "#FAFAFA", "none");
        lightbox.setAttribute('aria-hidden', true);
        lightbox.setAttribute('aria-modal', false);
        main.setAttribute('aria-hidden', false); 
    });
}


function next(medias){
    btnLigthboxNext.addEventListener('click', () => {
        lightboxImg.innerHTML = '';      
        currentImgIndex++;
        if (currentImgIndex >= medias.length){
            currentImgIndex = 0;
        }
        displayMediaNextOrPrev(medias);
    });
}


function prev(medias){
    btnLigthboxPrev.addEventListener('click', () => {
        lightboxImg.innerHTML = '';
        currentImgIndex--;
        if (currentImgIndex < 0){
            currentImgIndex = medias.length-1;
        }
        displayMediaNextOrPrev(medias);
    });
}



let keepFocus =  () => {
    //On récupère nos éléments
    const focusableElements = [...lightbox.querySelectorAll('button.btn_lightbox, div.lightbox_content-img')];
    console.log(focusableElements);
  
    // On récupère le premier et le dernier élément focusable
	let firstTabbableElement = focusableElements[0];
	let lastTabbableElement = focusableElements[focusableElements.length - 1];

	let keyListener =  (e) => {
		let keyCode = e.which || e.keyCode; // Rècupère le Keycode courant

		// On utilise la tabulation
		if (keyCode === 9) {

			// Déplacer le focus sur le premier élément qui peut être tabulé si Shift n'est pas utilisé
			if (e.target === lastTabbableElement && !e.shiftKey) {
				e.preventDefault();
				firstTabbableElement.focus();

			// Déplacer le focus sur le dernier élément pouvant être tabulé si Shift est utilisé
			} else if (e.target === firstTabbableElement && e.shiftKey) {
				e.preventDefault();
				lastTabbableElement.focus();
			}
		}

                    //Fermeture de la modale au clavier
                    closeBtnLigthbox.addEventListener('keyup', (e) => {
                        if (e.key === 'Enter' || e.key === 'Backspace') {
                            listenForCloseLightbox();
                        }
                    });
	};

	lightbox.addEventListener('keydown', keyListener, false);
};



