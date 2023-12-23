import { dataGallery } from "./getData.js";




export function displayNbTotalLikes(){

    const btnLikes = document.querySelectorAll("button.btnLikes");
    const likeByPhoto = document.querySelector('mainPhotographer_gallery__likes');
    const counterLikes = document.querySelector("span.photographerLikes_total");
  
    function updateNbLikesTotal() {
        const initialValue = 0;
        //La méthode reduce() applique une fonction qui est un « accumulateur » et qui traite 
        //chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur.
        //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
        const nbTotalLikes = dataGallery.reduce((accumulator, currentValue) => 
        accumulator + currentValue.likes, initialValue);
        counterLikes.innerText = `${nbTotalLikes}`;
    };

    updateNbLikesTotal();

    btnLikes.forEach(btn => {
        btn.addEventListener("click", () => {
            const idPhoto = dataGallery.find(element => element.id == btnLikes.dataset.id);
            btn.classList.toggle("clicked");
            if (btn.classList.contains("clicked")){
                element.likes++;
                console.log(element);
            } else {
                element.likes--;
            }


        });
    });


}

// 1 - OK - Récupérer le nombre de likes de chaque photo et l'afficher dans le total
// 2 - Au clic sur un like, on applique avec un toggle une class cliqué
// 3 - si un like contient une class cliqué, on lui incrément de 1 son like, et on l'ajoute au total
//     s'il ne contient plus le like, on décrémente de 1, on le supprime du total


// import { getPhotographerById } from "../pages/photographerPage.js";

// export const displayTotalLikes = async () => {
//     const { medias } = await getPhotographerById();
//     const allBtnLike = document.querySelectorAll(".btn_like");
//     const likesElement = document.querySelector(".photographer_likes_count");

//     const updateTotalLikes = () => {
//         const totalLikes = medias.reduce((acc, media) => acc + media.likes, 0);
//         likesElement.textContent = `${totalLikes}`;
//     };

//     updateTotalLikes();

//     allBtnLike.forEach(btn => {
//         btn.addEventListener("click", () => {
//             const media = medias.find(media => media.id == btn.dataset.id);

//             !btn.classList.contains("liked") ? media.likes++ : media.likes--;

//             btn.classList.toggle("liked");

//             const likesElement = btn.previousElementSibling;
//             likesElement.textContent = `${media.likes}`;

//             updateTotalLikes();
//         });
//     });
// };
