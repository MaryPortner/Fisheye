import { main } from "../templates/singlePhotographer.js";
import { priceTotalLikes } from "../templates/singlePhotographer.js";

const photographHeader = document.querySelector(".photograph-header");
let title;

export function displayLightbox(){
    const allArticles = Array.from(document.querySelectorAll(".linkImgPhotographer"));
    const btnNext = document.querySelector(".lightbox_next-btn");
    const btnPrevious = document.querySelector(".lightbox_previous-btn");
    let currentUrl; 
    const lightboxImg = document.querySelector(".lightbox_img");
    const lightImgTitle = document.querySelector(".lightbox_img-title");

    allArticles.forEach(data => {
        data.addEventListener('click', (e) => {
            e.preventDefault();
    
            title =  data.getAttribute("alt");
            currentUrl = e.currentTarget.getAttribute('href');
            buildLightbox(currentUrl);
            main.append(buildLightbox(currentUrl));
            priceTotalLikes.style.display = "none";
            changeBg("#00000080", "#c4c4c466", "contrast(50%)");
        });
    });
}


function buildLightbox(currentUrl){
    const extension = currentUrl.split('.').reverse()[0];
    const lightbox =  document.createElement("div");
 
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
        
        //close lightbox
        lightbox.querySelector('.lightbox_close-btn').addEventListener('click', () =>{
            lightbox.style.display = "none";
            priceTotalLikes.style.display = "flex";
               changeBg("#FFFFFF", "#FAFAFA", "none");
        })

    return lightbox;
};



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


// document.addEventListener('keyup', onKeyUp);
// document.removeEventListener('keyup', onKeyUp);
     // Fermeture de la lightbox au clavier 
    //  function onKeyUp(e){
    //     if (e.key === 'Escape'){
    //         close(e)
    //     }
    // }