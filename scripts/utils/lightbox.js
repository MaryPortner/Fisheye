import { main } from "../templates/singlePhotographer.js";
import { priceTotalLikes } from "../templates/singlePhotographer.js";



let btnPrevious;
let btnNext;
const lightboxImg = document.querySelector(".lightbox_img");

const photographHeader = document.querySelector(".photograph-header");

let currentUrl; 
let lightbox;
let title;
let url;
let slideIndex = 0;




export function displayLightbox(){
    const allImg = Array.from(document.querySelectorAll(".linkImgPhotographer"));
    allImg.forEach(data => {
        data.addEventListener('click', (e) => {
            e.preventDefault();
            title =  data.getAttribute("alt");
            currentUrl = e.currentTarget.getAttribute('href');
            buildLightbox(currentUrl);
            main.append(buildLightbox(currentUrl));
            // display à none de l'encart likes et prix/jour
            priceTotalLikes.style.display = "none";
            changeBg("#00000080", "#c4c4c466", "contrast(60%)");
            btnPrevious = document.querySelector(".lightbox_previous-btn");
            btnNext = document.querySelector(".lightbox_next-btn");

            close();
            slider(allImg,data);
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




function slider(allImg, data){
  const firstImg = 0;
  const lastImg = allImg.length -1;
  let currentImg = 0;



 btnNext.addEventListener('click', () => {
    let imgTag = allImg.findIndex(data => data === currentUrl);
  
    currentImg++;
    imgTag = allImg[currentImg];
      console.log(imgTag);
      buildLightbox(currentUrl)
 });

 
}
// url = currentTarget.getAttribute('href');
// let pos = images.findIndex(image => image === url);
// buildLightbox(image[image + 1])


// if (extension == "jpg"){
//             `<div class="lightbox_img">
//                 <img class="lightbox_img" src="${currentUrl}" alt=""  >}
//             </div>
//             `
          
//         }else {
//             `<div class="lightbox_img">
//                 <video controls class="lightbox_img" src="${currentUrl}" alt=""  >
//             </div>
//             `
//         }`