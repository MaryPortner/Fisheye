import { dataGallery } from "./getData.js";

console.log(dataGallery);
export function displayNbTotalLikes(){

    const btnLikes = document.querySelectorAll(".btnLikes");
    const counterLikes = document.querySelector("span.photographerLikes_total");
    console.log(counterLikes);
;
    function updateNbLikesTotal() {
        const initialValue = 0;
        const nbTotalLikes = dataGallery.reduce((accumulator, currentValue) => 
        accumulator + currentValue.likes, initialValue);
        counterLikes.innerText = `${nbTotalLikes}`;
    };

    updateNbLikesTotal();


}

// 1 - Récupérer le nombre de likes de chaque photo et l'afficher dans le total
// 2 - Au clic sur un like, on applique avec un toggle une class cliqué
// 3 - si un like contient une class cliqué, on lui incrément de 1 son like, et on l'ajoute au total
//     s'il ne contient plus le like, on décrémente de 1, on le supprime du total



