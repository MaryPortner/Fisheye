import { main } from "../templates/singlePhotographer.js";
import { priceTotalLikes } from "../templates/singlePhotographer.js";


const btnPrevious = document.querySelector(".lightbox_previous-btn");
const lightboxImg = document.querySelector(".lightbox_img");
const lightImgTitle = document.querySelector(".lightbox_img-title");

// const asideLikesPrice = document.getElementsByTagName('aside');
const photographHeader = document.querySelector(".photograph-header");

let currentUrl; 
let lightbox;
let title;
let url;


export function displayLightbox(){
    const allArticles = Array.from(document.querySelectorAll(".linkImgPhotographer"));
    allArticles.forEach(data => {
        data.addEventListener('click', (e) => {
            e.preventDefault();
            title =  data.getAttribute("alt");
            currentUrl = e.currentTarget.getAttribute('href');
            buildLightbox(currentUrl);
            main.append(buildLightbox(currentUrl));
            // display à none de l'encart likes et prix/jour
            priceTotalLikes.style.display = "none";
            changeBg("#00000080", "#c4c4c466", "contrast(50%)");
        });
    });

    document.addEventListener('keyup', onKeyUp);
}


function buildLightbox(currentUrl){

    const extension = currentUrl.split('.').reverse()[0];
    lightbox = document.createElement("div");
    lightbox.appendChild = '';
    lightbox.classList.add("lightbox_content");
    lightbox.innerHTML = `
        <button class="btn_lightbox lightbox_close-btn">
            <i class="fa-solid fa-xmark"></i>
        </button>

        <button class="btn_lightbox lightbox_next-btn">
            <i class="fa-solid fa-chevron-right"></i>
        </button>

        <button class="btn_lightbox lightbox_previous-btn">
            <i class="fa-solid fa-chevron-left"></i>
        </button>
        
        <div class="lightbox_img">
        </div>

        <span class="lightbox_img-title">${title}</span>
    `
        lightbox.querySelector('.lightbox_img').innerHTML = 
        extension == "mp4" ? ` <video controls class="lightbox_img" src="${currentUrl}" alt=""  >` : `<img class="lightbox_img" src="${currentUrl}" alt=""  >}`
        
        close();

        return lightbox;
};

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

// Fermeture de la lightbox au clavier 
function onKeyUp(e){
    if (e.key === 'Escape'){
        close(e);
    }
}



// btnPrevious.addEventListener('click', prev );
// btnNext.addEventListener('click', next );


// function next(){
//     url = currentTarget.getAttribute('href');
//     const images = Array.from(document.querySelectorAll(".linkImgPhotographer"));

//     let i = images.findIndex(i => i === url);
//     buildLightbox(i[i + 1])
// }


// function next(e){
//     e.preventDefault();
//     let pos = allArticles.findIndex(image => image === url);
//     buildLightbox(image[i + 1])
// }
