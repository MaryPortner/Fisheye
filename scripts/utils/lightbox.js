import { main, priceTotalLikes } from "../templates/singlePhotographer.js";

let btnLigthboxPrev;
let btnLigthboxNext;
let currentImgIndex;
let currentUrl;
let imgDisplayed; 
let indexImg;
let lightbox;
const photographHeader = document.querySelector(".photograph-header");
// let title;
const titleLigthbox = document.createElement("h2");


export function startLightbox(medias){
    let images = Array.from(document.querySelectorAll(".linkImgPhotographer"));
 
    images.forEach(img => {
        img.addEventListener('click', (e) => {
            e.preventDefault();
            const id = img.getAttribute('data-id');
            const currentMedia = medias.find(m => m.id == id);
            const el = displayImage(currentMedia);
            main.append(buildLightbox(currentMedia));
            indexImg = e.currentTarget;
            imgDisplayed  = indexImg.getAttribute('href');
            currentImgIndex = images.findIndex(image => image === indexImg);

            document.querySelector(".lightbox_content-img").appendChild(el);

            // display à none de l'encart likes et prix/jour
            priceTotalLikes.style.display = "none";

            changeBg("#00000080", "#c4c4c466", "contrast(60%)");
            listenForCloseLightbox();
            next(images, medias);
            prev(images, medias);
        

        });
    });

    document.addEventListener('keyup', onKeyUp);
}

function buildLightbox(currentMedia){
    console.log(currentMedia.title);

    lightbox = document.createElement("div");
    lightbox.textContent = '';
    lightbox.classList.add("lightbox_content");

    const closeBtnLigthbox = document.createElement("button");
    closeBtnLigthbox.classList.add("btn_lightbox", "lightbox_close-btn");

    const imgClose = document.createElement("i");
    imgClose.classList.add("fa-solid", "fa-xmark");

    btnLigthboxNext = document.createElement("button");
    btnLigthboxNext.classList.add("btn_lightbox", "lightbox_next-btn");

    const imgBtnNext = document.createElement("i");
    imgBtnNext.classList.add("fa-solid", "fa-chevron-right");

    btnLigthboxPrev = document.createElement("button");
    btnLigthboxPrev.classList.add("btn_lightbox", "lightbox_previous-btn");

    const imgBtnPrev = document.createElement("i");
    imgBtnPrev.classList.add("fa-solid", "fa-chevron-left");

    const lightboxImg = document.createElement("div");
    lightboxImg.classList.add("lightbox_content-img");

    titleLigthbox.classList.add("lightbox_img-title");
       titleLigthbox.innerText = `${currentMedia.title}`;

    closeBtnLigthbox.appendChild(imgClose);
    btnLigthboxNext.appendChild(imgBtnNext);
    btnLigthboxPrev.appendChild(imgBtnPrev);

    lightbox.appendChild(closeBtnLigthbox);
    lightbox.appendChild(btnLigthboxNext);
    lightbox.appendChild(btnLigthboxPrev);
    lightbox.appendChild(lightboxImg);
 

    return lightbox;
}

function displayImage(media){

    if(media.hasOwnProperty('video')){
        const video = document.createElement("video");
        video.classList.add("lightbox_img");
        video.controls = "controls";
        video.setAttribute("src", `${media.video}`);
        video.setAttribute("alt", "");
        return video;
    }
    if (media.hasOwnProperty('image')){
        const image = document.createElement("img");
        image.classList.add("lightbox_img");
        image.setAttribute("src", `${media.image}`);
        image.setAttribute("alt", "");
        return image;
    } 
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
        lightbox.textContent = '';
        lightbox.style.display = "none";
        priceTotalLikes.style.display = "flex";
        changeBg("#FFFFFF", "#FAFAFA", "none");
        document.removeEventListener('keyup', onKeyUp);      
    });
}


// Fermeture de la lightbox au clavier 
function onKeyUp(e){
    if (e.key === 'Escape'){
        close(e);
    }
}

function next(images, medias){
    let lastImg = images.length-1;
    btnLigthboxNext.addEventListener('click', () => {
        const currentMedia = medias[currentImgIndex];
        const el = displayImage(currentMedia);
        document.querySelector(".lightbox_content-img").appendChild(el);
    
        titleLigthbox.innerText = `${currentMedia.title}`;
        lightbox.appendChild(titleLigthbox);

        currentImgIndex++;
        if (currentImgIndex >= lastImg){
            currentImgIndex = lastImg++;
        }
        currentUrl = images[currentImgIndex].getAttribute('href');
 
    });

}


function prev(images, medias){
    let lastImg = 0;

    btnLigthboxPrev.addEventListener('click', () => {
        const currentMedia = medias[currentImgIndex];
        const el = displayImage(currentMedia);
        document.querySelector(".lightbox_content-img").appendChild(el);
 
        titleLigthbox.innerText = `${currentMedia.title}`;
        lightbox.appendChild(titleLigthbox);
        
        currentImgIndex--;
        if (currentImgIndex <= lastImg){
            currentImgIndex = images.length-1;
        }
        currentUrl = images[currentImgIndex].getAttribute('href');
        console.log(currentMedia);
    });

}



