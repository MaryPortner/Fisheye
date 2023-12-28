import { main } from "../templates/singlePhotographer.js";

export function displayLightbox(){

    const allArticles = Array.from(document.querySelectorAll(".linkImgPhotographer"));
    const btnCloseLightbox = document.querySelector(".lightbox_close-btn");
    const btnNext = document.querySelector(".lightbox_next-btn");
    const btnPrevious = document.querySelector(".lightbox_previous-btn");
    const lightboxImg = document.querySelector(".lightbox_img");
    const lightImgTitle = document.querySelector(".lightbox_img-title");

    let currentUrl; 

    allArticles.forEach(data => {
        console.log(data);
        data.addEventListener('click', (e) => {
            e.preventDefault();

            currentUrl = e.currentTarget.getAttribute('href');
            buildLightbox(currentUrl);
            main.append(buildLightbox(currentUrl));

               // displayLightbox();
        });
    });
}

function buildLightbox(currentUrl){
    const lightbox =  document.createElement("div");
    const extension = currentUrl.split('.').reverse()[0];
    console.log(extension);
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
        
        <div class="lightbox_img">`
            // if (extension === mp4){`
            //     <video controls class="lightbox_img" src="${currentUrl}" alt=""  >`
            // } else (extension === jpg){``
            //     `<img class="lightbox_img" src="${currentUrl}" alt=""  >`
            // }`        
            
            extension.mp4 ? ` <video controls class="lightbox_img" src="${currentUrl}" alt=""  >` :  `<img class="lightbox_img" src="${currentUrl}" alt=""  >


        </div>




        <span class="lightbox_img-title">Test Texte </span>
    `
   return lightbox;
};


