const divImgPhotographer = `
    <div class="divImgPhotographer">
        <img class="mainPhotographer_gallery__img"
            alt="${title}"
            src="${image}"
            title="${title}"
        />

        <div class="mainPhotographer_gallery__title-likes">
            <p class="mainPhotographer_gallery__title">${title}</p>
            <div class="mainPhotographer_gallery__price-likes">
                <p class="mainPhotographer_gallery__likes">${likes}</p>
                <img class="mainPhotographer_gallery__icone" arria-hiden="true" src="assets/icons/likesRed.svg" alt="icone pour liker" />
            </div>
        </div>
    </div>
`

    /************** gallery photographer **************/
    const mainGallery = document.createElement('div');
    mainGallery.classList.add("mainPhotographer_gallery");

    function galleryPhotographer(galleryImg){
        const { id, photographerId, title, image, likes, date, price } = galleryImg;

    
        // Création de la div contenant l'image, le titre et les likes
        const divImgPhotographer = document.createElement('div');
        divImgPhotographer.classList.add("divImgPhotographer");

        // Récupération de l'image
        const imgPhotographer = document.createElement('img');
        imgPhotographer.setAttribute("src", image); 
        imgPhotographer.setAttribute("title", title);
        imgPhotographer.setAttribute("alt", title);
        imgPhotographer.classList.add("mainPhotographer_gallery__img");

        // Création de la div contenant le titre, les likes et l'icône coeur
        const titlePriceLikes = document.createElement('div');
        titlePriceLikes.classList.add("mainPhotographer_gallery__title-likes");

        // Récupération du titre de l'image
        const titleImgPhotographer = document.createElement('p');
        titleImgPhotographer.innerText =  `${title}`; 
        titleImgPhotographer.classList.add("mainPhotographer_gallery__title");

        // Création de la div contenant les likes et l'icône 
        const priceLikes = document.createElement('div');
        priceLikes.classList.add("mainPhotographer_gallery__price-likes");

        // Récupération des likes
        const likesImgPhotographer = document.createElement('p');
        likesImgPhotographer.innerText =  `${likes}`; 
        likesImgPhotographer.classList.add("mainPhotographer_gallery__likes");

        // Insertion icône likes
        const iconeImgPhotographer = document.createElement('img');
        iconeImgPhotographer.setAttribute("aria-hiden", true);
        iconeImgPhotographer.setAttribute("src", "assets/icons/likesRed.svg");
        iconeImgPhotographer.setAttribute("alt", "icone pour liker");
        iconeImgPhotographer.classList.add("mainPhotographer_gallery__icone");


        divImgPhotographer.appendChild(imgPhotographer);
        titlePriceLikes.appendChild(titleImgPhotographer);
        priceLikes.appendChild(likesImgPhotographer);
        priceLikes.appendChild(iconeImgPhotographer);
        titlePriceLikes.appendChild(priceLikes);
        divImgPhotographer.appendChild(titlePriceLikes);
        
        mainGallery.appendChild(divImgPhotographer);



        
        return mainGallery;
    }










    // import { media } from "./getData";

// import { photographer } from "../pages/photographer.js";
// import { photographerModelSingle } from "../pages/photographer.js";
// import { sortDatasGallery } from "../pages/photographer.js";




export function dropdown(){

    const btnDrop = document.querySelector('.btn_drop');

    const showHideMenu = () => {
        const menu = document.querySelector('.dropdown_content');
        menu.classList.toggle('active');
        document.querySelector('.arrow').classList.toggle('rotate');

    }
    btnDrop.addEventListener('click', showHideMenu);
} 

// // Filtrer les données
const filters = Array.from(document.querySelectorAll('.dropdown_content li button'));
const currentSort = document.querySelector('#currentSort');

// Cacher les options déjà sélectionnées
let optionAlreadySelected = filters.find(filter => filter.textContent == currentSort.textContent);
optionAlreadySelected.style.display = 'none'; 


// // const sortDatas = sortType => {
// //     switch (sortType){
// //         case "Popularité" : 
// //             sortDatasGallery.sort(( a , b ) => b.likes - a.likes)
// //             const displayGalleryElement = photographerModelSingle.galleryPhotographer(sortDatasGallery.likes);
// //             photographersSectionSingle.appendChild(displayGalleryElement);
           
// //             break;

// //         case "Titre" : 
// //             sortDatasGallery.sort(( a , b ) => b.title - a.title)
// //             break;

// //         case "Date" : 
// //             sortDatasGallery.sort(( a , b ) => new Date(b.date) - new Date(b.date)) 
// //             break;
// //     }
// // }

//  function sortData(sortType){
//     if (sortType == "Popularité"){
//         sortDatasGallery.sort(function (a, b) {
//             return b.likes - a.likes;
//         });

//     }
//  }

//  function displaySortDatas(filterValue){
//     mainGallery.innerHTML = "";
//     sortDatasGallery.map((sortData) => {
//         const displayGalleryElement = photographerModelSingle.galleryPhotographer(sortData);
//         photographersSectionSingle.appendChild(displayGalleryElement);
//     });
//  }

// filters.forEach(filter => {
//     filter.addEventListener('click', () => {

//         const filterValue = filter.textContent;
//         currentSort.textContent = filterValue;

//         if(optionAlreadySelected) 
//             optionAlreadySelected.style.display = 'block'; 
        
//         filter.style.displayl= "none";
//         optionAlreadySelected = filter;
//         sortData(filterValue);

//         if (filterValue == "Popularité"){
//             sortDatasGallery.sort(function (a, b) {
//                 return b.likes - a.likes;
//             });
//             displaySortDatas(likes);
//         }
//         if (filterValue == "Date"){
//             displaySortDatas(date);
//         }
//         if (filterValue == "Titre"){
//             displaySortDatas(title);
//         }

//         showHideMenu();
        
  
    
//     })
//  })





// popularite.addEventListener("click",function () {

//     // Ici la methode sort va trier les likes par ordre décroissant
//     sortDatasGallery.sort(function (a, b) {
//         return b.likes - a.likes;
//     });
//     // Effacement de l'écran et regénération de la page
//     mainGallery.innerHTML = "";
//     sortDatasGallery.map((likes) => {
//         const displayGalleryElement = photographerModelSingle.galleryPhotographer(likes);
//         photographersSectionSingle.appendChild(displayGalleryElement);
//     });

// });




// filters.forEach(filter => {
// filter.addEventListener('click' , () => {
//     const filterValue = filter.textContent;
//     currentSort.textContent = filterValue;
//     if (optionAlreadySelected) {
//         optionAlreadySelected.style.display = "block";
//     }
//     filter.style.display = "none";
//     optionAlreadySelected = filter
// })

// })



// function sortByFilter(){

//     for(let i = 0; i < filters.length ; i++){
//         let filter = filters[i];
//         filter.addEventListener('click' , () => {
//             const filterValue = filter.textContent;
//             currentSort.textContent = filterValue;

//             if (optionSelected) {
//                 optionSelected.style.display = "block";
//             }
//             filter.style.display = "none";
//             optionSelected = filter;
//             console.log(optionSelected);
// })

//     }

// }
// sortByFilter();