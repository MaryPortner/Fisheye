
// function slider(allImg, data){
//     const firstImg = 0;
//     const lastImg = allImg.length -1;
//     let currentImg = 0;
//     btnNext.addEventListener('click', () => {
//         imgTag = allImg.findIndex(data => data === currentUrl);
//         console.log(currentImg);
//         currentImg++;
//         console.log(currentImg);
//         imgTag = allImg[currentImg].getAttribute('href');;
//         console.log(imgTag);
//         return imgTag
    
//     });

// }





// function slider(images, imgDisplayed, indexCurrentImg){
//     const firstImg = 0;
//     const lastImg = indexCurrentImg.length -1;
//     let currentImg = indexCurrentImg;

//     console.log(currentImg);
//     btnNext.addEventListener('click', () => {
//         imgTag = images.findIndex(image => image === indexCurrentImg);
//         currentImg++;
//     console.log(currentImg);
//         imgTag = images[currentImg].getAttribute('href');
//         console.log(imgTag);
// //   return imgTag;
//     });
// } 



















// // function slider(currentUrl){
// //     const firstImg = 0;
// //     const lastImg = currentUrl.length -1;
// //     let currentImg = 0;
// //     lightbox.querySelector(".lightbox_next-btn").addEventListener('click', (currentUrl) => {
// //         // imgTag = images.findIndex(data => data === currentUrl);
// //         currentImg++;
// //         imgTag = currentUrl[currentImg];
// //         console.log(imgTag);    
// //     });

// // }




// // function slider(images){
// //     const firstImg = 0;
// //     const lastImg = images.length -1;
// //     let currentImg = 0;
// //     lightbox.querySelector(".lightbox_next-btn").addEventListener('click', (e) => {
// //         e.preventDefault();
// //         imgTag = images.findIndex(image => image === currentUrl);
// //         console.log(imgTag);
// //         currentImg++;
// //         imgTag = images[currentImg];

// //         console.log(imgTag);  
// //         buildLightbox(imgTag);
// //         main.append(buildLightbox(imgTag));
// //     });

//     // btnNext.addEventListener('click', () => {
//     //     imgTag = images.findIndex(image => image === currentUrl);
//     //     currentImg++;
//     //     imgTag = images[currentImg];
//     //     console.log(imgTag);    
//     // });

// //}


// // function next(images){
// //     console.log(images); // Tableau des href
// //     let i = images.findIndex(image => image === currentUrl);
// //     console.log(i); // index de l'image

// //     buildLightbox(images[i + 1]);
// //     main.append(buildLightbox(images[i + 1]));

// // }





// // function next(allImg){
// //     const firstImg = 0;
// //     const lastImg = allImg.length -1;
// //     let currentImg = 0;

// //     lightbox.querySelector(".lightbox_next-btn").addEventListener('click', () => {
// //         currentImg = allImg.findIndex(data => data === currentUrl);
// //         console.log(currentImg);
// //         currentImg++;
// //         imgTag = allImg[currentImg];
// //         console.log(imgTag);   
// //         buildLightbox(imgTag);
// //     });
// // }


















// // function slider(allImg, data){
// //     const firstImg = 0;
// //     const lastImg = allImg.length -1;
// //     let currentImg = 0;
// //     btnNext.addEventListener('click', () => {
// //         imgTag = allImg.findIndex(data => data === currentUrl);
// //         currentImg++;
// //         imgTag = allImg[currentImg];
// //         console.log(imgTag);    
// //     });

// // }




// // function slider(images){
// //     const firstImg = 0;
// //     const lastImg = images.length -1;
// //     let currentImg = 0;
// //     lightbox.querySelector(".lightbox_next-btn").addEventListener('click', (e) => {
// //         e.preventDefault();
// //         imgTag = images.findIndex(image => image === currentUrl);
// //         currentImg++;
// //         imgTag = images[currentImg];
// //         console.log(imgTag);  
// //         buildLightbox(imgTag);

// //     });

// //     // btnNext.addEventListener('click', () => {
// //     //     imgTag = images.findIndex(image => image === currentUrl);
// //     //     currentImg++;
// //     //     imgTag = images[currentImg];
// //     //     console.log(imgTag);    
// //     // });

// // }


// // function next(images){
// //     console.log(images); // Tableau des href
// //     let i = images.findIndex(image => image === currentUrl);
// //     console.log(i); // index de l'image

// //     buildLightbox(images[i + 1]);
// //     main.append(buildLightbox(images[i + 1]));

// // }


// // function prev(e){
// //     e.preventDefault();
// // }


// // function slider(allImg, data){
// //     const firstImg = 0;
// //     const lastImg = allImg.length -1;
// //     let currentImg = 0;
// //     btnNext.addEventListener('click', () => {
// //         imgTag = allImg.findIndex(data => data === currentUrl);
// //         console.log(currentImg);
// //         currentImg++;
// //         console.log(currentImg);
// //         imgTag = allImg[currentImg].getAttribute('href');;
// //         console.log(imgTag);
// //         return imgTag
    
// //     });

// // }





// // function slider(allImg, data){
// //     const firstImg = 0;
// //     const lastImg = allImg.length -1;
// //     let currentImg = 0;
// //     btnNext.addEventListener('click', () => {
// //         imgTag = allImg.findIndex(data => data === currentUrl);
// //         currentImg++;
// //         imgTag = allImg[currentImg].getAttribute('href');;
// //         console.log(imgTag);
// //         return imgTag
    
// //     });

// // }

// // function slider(images, currentUrl){
// //     const firstImg = 0;
// //     const lastImg = currentUrl.length -1;
// //     let currentImg = 0;
// //     btnNext.addEventListener('click', () => {
// //         imgTag = images.findIndex(image => image === currentUrl);
// //         currentImg++;
// //         console.log(currentImg);
// //         currentUrl = images[currentImg].getAttribute('href');
// //         console.log(currentUrl);   
// //     });
// // } 










// import { main } from "../templates/singlePhotographer.js";
// import { priceTotalLikes } from "../templates/singlePhotographer.js";

// let btnPrevious;
// let btnNext;
// let imgDisplayed; 
// let indexCurrentImg;
// let currentImgIndex;
// let lightbox;
// const photographHeader = document.querySelector(".photograph-header");
// let slideIndex = 0;
// let title;
// let currentUrl;


// export function displayLightbox(){
//     let images = Array.from(document.querySelectorAll(".linkImgPhotographer"));
 
//     // console.log(images);
//     images.forEach(data => {
//         data.addEventListener('click', (e) => {
//             e.preventDefault();
//             imgDisplayed  = e.currentTarget.getAttribute('href');
       

//             indexCurrentImg = images.findIndex(image => image === imgDisplayed);
//             console.log(indexCurrentImg);

//             title =  data.getAttribute("alt");

//             buildLightbox(imgDisplayed);
//             main.append(buildLightbox(imgDisplayed));
//             // display à none de l'encart likes et prix/jour
//             priceTotalLikes.style.display = "none";
//             changeBg("#00000080", "#c4c4c466", "contrast(60%)");
//             btnPrevious = document.querySelector(".lightbox_previous-btn");
//             btnNext = document.querySelector(".lightbox_next-btn");

//             close();
//             // slider(images, imgDisplayed, indexCurrentImg);
           

//         });
//     });

//     document.addEventListener('keyup', onKeyUp);
// }

// function buildLightbox(){
//     const extension = imgDisplayed.split('.').reverse()[0];

//     lightbox = document.createElement("div");
//     lightbox.textContent = '';
//     lightbox.classList.add("lightbox_content");

//     const closeBtnLigthbox = document.createElement("button");
//     closeBtnLigthbox.classList.add("btn_lightbox", "lightbox_close-btn");

//     const imgClose = document.createElement("i");
//     imgClose.classList.add("fa-solid", "fa-xmark");

//     const btnLigthboxNext = document.createElement("button");
//     btnLigthboxNext.classList.add("btn_lightbox", "lightbox_next-btn");

//     const imgBtnNext = document.createElement("i");
//     imgBtnNext.classList.add("fa-solid", "fa-chevron-right");

//     const btnLigthboxPrev = document.createElement("button");
//     btnLigthboxPrev.classList.add("btn_lightbox", "lightbox_previous-btn");

//     const imgBtnPrev = document.createElement("i");
//     imgBtnPrev.classList.add("fa-solid", "fa-chevron-left");

//     const lightboxImg = document.createElement("div");
//     lightboxImg.classList.add("lightbox_content-img");

//     if (controlExt(extension)){ 
//         if(extension === "mp4"){
//             const video = document.createElement("video");
//             video.classList.add("lightbox_img");
//             video.controls = "controls";
//             video.setAttribute("src", `${imgDisplayed}`);
//             video.setAttribute("alt", "");
//             lightboxImg.appendChild(video);
//         } else if (extension === "jpg"){
//             const image = document.createElement("img");
//             image.classList.add("lightbox_img");
//             image.setAttribute("src", `${imgDisplayed}`);
//             image.setAttribute("alt", "");
//             lightboxImg.appendChild(image);
//         } else {
//             console.log(`Le fichier ${currentUrl} n'est pas géré par la lightbox`);
//         }
//     }

//     const titleLigthbox = document.createElement("h2");
//     titleLigthbox.classList.add("lightbox_img-title");
//     titleLigthbox.innerText = `${title}`;

//     closeBtnLigthbox.appendChild(imgClose);
//     btnLigthboxNext.appendChild(imgBtnNext);
//     btnLigthboxPrev.appendChild(imgBtnPrev);

//     lightbox.appendChild(closeBtnLigthbox);
//     lightbox.appendChild(btnLigthboxNext);
//     lightbox.appendChild(btnLigthboxPrev);
//     lightbox.appendChild(lightboxImg);
//     lightbox.appendChild(titleLigthbox);

//     return lightbox;
// }


// // Changement du bg à l'affichage de la lightbox 
// function changeBg(color1, color2, color3) {
//     const imgs = document.querySelectorAll("img.mainPhotographer_gallery__img");
//     const imgHeader = document.querySelector(".cardUser__img");
//     const videos = document.querySelector(".linkImgPhotographer > video");

//     document.body.style.background = color1;
//     photographHeader.style.background = color2;
//     imgHeader.style.filter = color3;
//     imgs.forEach(img => {
//         img.style.filter = color3;
//     });
//     videos.style.filter = color3;
// }


// //Fermeture lightbox
// function close(){
//     lightbox.querySelector('.lightbox_close-btn').addEventListener('click', () =>{
//         lightbox.style.display = "none";
//         priceTotalLikes.style.display = "flex";
//         changeBg("#FFFFFF", "#FAFAFA", "none");
//         document.removeEventListener('keyup', onKeyUp);      
//     });
// }

// // Contrôle de l'extension du fichier média
// function controlExt(extension) {
//     const allowExt = ["mp4", "jpg"]; 

//     if (allowExt.includes(extension)){ 
//         return true;
//     } else {
//         return false;
//     }
// }


// // Fermeture de la lightbox au clavier 
// function onKeyUp(e){
//     if (e.key === 'Escape'){
//         close(e);
//     }
// }

// // function slider(allImg, data){
// //     const firstImg = 0;
// //     const lastImg = allImg.length -1;
// //     let currentImg = 0;
// //     btnNext.addEventListener('click', () => {
// //         imgTag = allImg.findIndex(data => data === currentUrl);
// //         console.log(currentImg);
// //         currentImg++;
// //         console.log(currentImg);
// //         imgTag = allImg[currentImg].getAttribute('href');;
// //         console.log(imgTag);
// //         return imgTag
    
// //     });

// // }





// // function slider(images, imgDisplayed, indexCurrentImg){
// //     const firstImg = 0;
// //     const lastImg = indexCurrentImg.length -1;
// //     let currentImg = indexCurrentImg;

// //     console.log(currentImg);
// //     btnNext.addEventListener('click', () => {
// //         imgTag = images.findIndex(image => image === indexCurrentImg);
// //         currentImg++;
// //     console.log(currentImg);
// //         imgTag = images[currentImg].getAttribute('href');
// //         console.log(imgTag);
// // //   return imgTag;
// //     });
// // } 



// // function slider(images, imgDisplayed){
// //     console.log(images);

// //     const firstImg = 0;
// //     const lastImg = imgDisplayed.length -1;
// //     let currentImg = 0;
    
// //     console.log(currentImg);

// //     btnNext.addEventListener('click', () => {
// //         let imgTag = images.findIndex(data => data === currentUrl);
// //         console.log(imgTag);
// //         currentUrl = images[currentImg].getAttribute('href');
// //         console.log(currentUrl);
// //         currentImg++;

// //         console.log(currentImg);
// //         currentUrl = images[currentImg].getAttribute('href');

// //         console.log(currentUrl);   
// //     });
// // }


// // function next(e){
// //     e.preventDefault();
// //     const images = Array.from(document.querySelectorAll(".linkImgPhotographer"));
// //    let url = e.currentTarget.getAttribute('href');
// //     let pos = images.findIndex(image => image === url);
// //     buildLightbox(pos[pos + 1])
// // }



// <div class="photographer-header__presentation">
// <h1 class="cardUser__title">${photographer.name}</h1>
// <p class="cardUser__cityCountry">${photographer.city}, ${photographer.country}</p>
// <p class="cardUser__tagline">${photographer.tagline}</p>
// <a title="page de ${photographer.name}" alt="photo de ${photographer.name}" href=""></a>
// </div>
// <div class="photograph-btn">
// <button id="contact" class="contact_button">Contactez-moi</button>
// </div>
// <img class="cardUser__img"
// alt="${photographer.name}"
// src="${photographer.portrait}"
// title=" photo de ${photographer.name}"
// />
// `