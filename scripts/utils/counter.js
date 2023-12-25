import { getDatas, dataGallery } from "./getData.js";

//     // 1 -  OK Récupérer tous les btn
//     // 2 - si l'id de la photo == id du btn => ajoute class clicked au btn 
//     // 3 - si btn contient la class clicked => augmente le nbre de like de 1, 
//     //     et augmente le nombre de likes total de 1;
//     // 4 - Sinon, diminue le nbre de like de 1


export const displayNbTotalLikes = async () => {
    const {media} = await getDatas();

    const btnLikes = document.querySelectorAll("button.btnLikes");
    const counterLikes = document.querySelector(".photographerLikes_total");
    const likes = document.querySelectorAll(".mainPhotographer_gallery__likes");
 
 
    function updateNbLikesTotal() {
        const initialValue = 0;
        //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
        const nbTotalLikes = dataGallery.reduce((accumulator, currentValue) => 
        accumulator + currentValue.likes, initialValue);
        counterLikes.innerText = `${nbTotalLikes}`;
    };

    updateNbLikesTotal();


    btnLikes.forEach(btn => {
        btn.addEventListener("click", () => {
            const dataId = btn.dataset.id
            const data = dataGallery.find(data => data.id == dataId);

            btn.classList.toggle("clicked");
            if(btn.classList.contains("clicked")){
                btn.style.color = "var(--primary-color)";
                data.likes ++;
            } else if (!btn.classList.contains("clicked")) {
                btn.style.color = "var(--secondary-color)";
                data.likes --;
            }

            likes.forEach(element => {
                if(element.dataset.id == dataId){
                    element.innerHTML = data.likes;
                }
            });

            updateNbLikesTotal();

        });
    });
};