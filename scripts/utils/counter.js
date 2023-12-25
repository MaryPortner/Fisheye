export const displayNbTotalLikes = (dataGallery) => {

    const btnLikes = document.querySelectorAll("button.btnLikes");
    const likes = document.querySelectorAll(".mainPhotographer_gallery__likes");
 
    updateNbLikesTotal(dataGallery);


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

            updateNbLikesTotal(dataGallery);

        });
    });
};


function updateNbLikesTotal(dataGallery) {
    const counterLikes = document.querySelector(".photographerLikes_total");
    const initialValue = 0;
    const nbTotalLikes = dataGallery.reduce((accumulator, currentValue) => 
    accumulator + currentValue.likes, initialValue);
    counterLikes.innerText = `${nbTotalLikes}`;
};