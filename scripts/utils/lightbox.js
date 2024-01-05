import { main } from "../templates/singlePhotographer.js";
import { priceTotalLikes } from "../templates/singlePhotographer.js";



let btnPrevious;
let btnNext;
let imgTag;
const lightboxImg = document.querySelector(".lightbox_img");

const photographHeader = document.querySelector(".photograph-header");

let currentUrl; 
let lightbox;
let title;
let url;
let slideIndex = 0;

let extension;


export function displayLightbox(){
    const images = Array.from(document.querySelectorAll(".linkImgPhotographer"));
    // const images = allImg.map(img => img.getAttribute('href'));
    images.forEach(data => {
        data.addEventListener('click', (e) => {
            e.preventDefault();
            title =  data.getAttribute("alt");
            currentUrl = e.currentTarget.getAttribute('href');
            console.log(currentUrl);
            buildLightbox(currentUrl);
            main.append(buildLightbox(currentUrl));
            // display à none de l'encart likes et prix/jour
            priceTotalLikes.style.display = "none";
            changeBg("#00000080", "#c4c4c466", "contrast(60%)");
            btnPrevious = document.querySelector(".lightbox_previous-btn");
            btnNext = document.querySelector(".lightbox_next-btn");

            close();
            slider(images, currentUrl);

        });
    });

    document.addEventListener('keyup', onKeyUp);
}

function buildLightbox(){
    const extension = currentUrl.split('.').reverse()[0];

    lightbox = document.createElement("div");
    lightbox.textContent = '';
    lightbox.classList.add("lightbox_content");

    const closeBtnLigthbox = document.createElement("button");
    closeBtnLigthbox.classList.add("btn_lightbox", "lightbox_close-btn");

    const imgClose = document.createElement("i");
    imgClose.classList.add("fa-solid", "fa-xmark");

    const btnLigthboxNext = document.createElement("button");
    btnLigthboxNext.classList.add("btn_lightbox", "lightbox_next-btn");

    const imgBtnNext = document.createElement("i");
    imgBtnNext.classList.add("fa-solid", "fa-chevron-right");

    const btnLigthboxPrev = document.createElement("button");
    btnLigthboxPrev.classList.add("btn_lightbox", "lightbox_previous-btn");

    const imgBtnPrev = document.createElement("i");
    imgBtnPrev.classList.add("fa-solid", "fa-chevron-left");

    const lightboxImg = document.createElement("div");
    lightboxImg.classList.add("lightbox_img");

    if (controlExt(extension)){ 
        if(extension === "mp4"){
            const video = document.createElement("video");
            video.classList.add("lightbox_img");
            video.controls = "controls";
            video.setAttribute("src", `${currentUrl}`);
            video.setAttribute("alt", "");
            lightboxImg.appendChild(video);
        } else if (extension === "jpg"){
            const image = document.createElement("img");
            image.classList.add("lightbox_img");
            image.setAttribute("src", `${currentUrl}`);
            image.setAttribute("alt", "");
            lightboxImg.appendChild(image);
        } else {
            console.log(`Le fichier ${currentUrl} n'est pas géré par la lightbox`);
        }
    }

    const titleLigthbox = document.createElement("h2");
    titleLigthbox.classList.add("lightbox_img-title");
    titleLigthbox.innerText = `${title}`;

    closeBtnLigthbox.appendChild(imgClose);
    btnLigthboxNext.appendChild(imgBtnNext);
    btnLigthboxPrev.appendChild(imgBtnPrev);

    lightbox.appendChild(closeBtnLigthbox);
    lightbox.appendChild(btnLigthboxNext);
    lightbox.appendChild(btnLigthboxPrev);
    lightbox.appendChild(lightboxImg);
    lightbox.appendChild(titleLigthbox);

    return lightbox;
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
function close(){
    lightbox.querySelector('.lightbox_close-btn').addEventListener('click', () =>{
        lightbox.style.display = "none";
        priceTotalLikes.style.display = "flex";
        changeBg("#FFFFFF", "#FAFAFA", "none");
        document.removeEventListener('keyup', onKeyUp);
    })
}

// Contrôle de l'extension du fichier média
function controlExt(extension) {
    const allowExt = ["mp4", "jpg"]; 

    if (allowExt.includes(extension)){ 
        return true;
    } else {
        return false;
    }
}


// Fermeture de la lightbox au clavier 
function onKeyUp(e){
    if (e.key === 'Escape'){
        close(e);
    }
}


function slider(images, currentUrl){
    const firstImg = 0;
    const lastImg = currentUrl.length -1;
    let currentImg = 0;
    btnNext.addEventListener('click', () => {
        imgTag = images.findIndex(image => image === currentUrl);
        currentImg++;
        console.log(currentImg);
        currentUrl = images[currentImg].getAttribute('href');
        console.log(currentUrl);   
    });
}
