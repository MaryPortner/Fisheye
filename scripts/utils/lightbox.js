import { main } from "../templates/singlePhotographer.js";
import { priceTotalLikes } from "../templates/singlePhotographer.js";

let btnLigthboxPrev;
let btnLigthboxNext;
let currentImgIndex;
let currentUrl;
let imgDisplayed; 
let indexImg;
let lightbox;
const photographHeader = document.querySelector(".photograph-header");
let title;


export function displayLightbox(){
    let images = Array.from(document.querySelectorAll(".linkImgPhotographer"));
 
    images.forEach(data => {
        data.addEventListener('click', (e) => {
            e.preventDefault();
            indexImg = e.currentTarget;

            imgDisplayed  = indexImg.getAttribute('href');
            console.log(imgDisplayed);

            currentImgIndex = images.findIndex(image => image === indexImg);

            title =  data.getAttribute("alt");

            buildLightbox(imgDisplayed);
            main.append(buildLightbox(imgDisplayed));
            // display à none de l'encart likes et prix/jour
            priceTotalLikes.style.display = "none";
            changeBg("#00000080", "#c4c4c466", "contrast(60%)");

            close();
            // slider(imgDisplayed, currentImgIndex, images);
            prev(images)
            next(images);

        });
    });

    document.addEventListener('keyup', onKeyUp);
}

function buildLightbox(){
    const extension = imgDisplayed.split('.').reverse()[0];

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

    if (controlExt(extension)){ 
        if(extension === "mp4"){
            const video = document.createElement("video");
            video.classList.add("lightbox_img");
            video.controls = "controls";
            video.setAttribute("src", `${imgDisplayed}`);
            video.setAttribute("alt", "");
            lightboxImg.appendChild(video);
        } else if (extension === "jpg"){
            const image = document.createElement("img");
            image.classList.add("lightbox_img");
            image.setAttribute("src", `${imgDisplayed}`);
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
        lightbox.textContent = '';
        lightbox.style.display = "none";
        priceTotalLikes.style.display = "flex";
        changeBg("#FFFFFF", "#FAFAFA", "none");
        document.removeEventListener('keyup', onKeyUp);      
    });
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





function next(images){
    let currentUrl;
    let lastImg = images.length-1;
    btnLigthboxNext.addEventListener('click', () => {
        console.log(currentImgIndex);
        currentImgIndex++;
        if (currentImgIndex >= lastImg){
            currentImgIndex = lastImg;
        }
        currentUrl = images[currentImgIndex].getAttribute('href');
        console.log(currentUrl);
        return currentUrl;
    });

}


function prev(images){
    let lastImg = 0;
    btnLigthboxPrev.addEventListener('click', () => {
        console.log(currentImgIndex);
        currentImgIndex--;
        if (currentImgIndex <= lastImg){
            currentImgIndex = 0;
        }
        currentUrl = images[currentImgIndex].getAttribute('href');
        console.log(currentUrl);
        return currentUrl;
    });

}



// function slider(imgDisplayed, currentImgIndex, images){
//     // console.log(imgDisplayed);

//     const firstImg = 0;
//     const lastImg = imgDisplayed.length -1;
//     let currentImg = 0;

//     btnLigthboxNext.addEventListener('click', () => {
     
//         console.log(currentImgIndex);
//         currentImgIndex++;

//         let currentUrl = images[currentImgIndex].getAttribute('href');

//         console.log(currentUrl);
//         imgDisplayed = currentUrl;
//     });
// }








