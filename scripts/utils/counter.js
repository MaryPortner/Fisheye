export const displayNbTotalLikes = (dataGallery) => {
    let btnLikes = document.querySelectorAll("button.btnLikes");
    const likes = document.querySelectorAll(".mainPhotographer_gallery__likes");
    updateNbLikesTotal(dataGallery);

    btnLikes.forEach(btn => {
        btn.addEventListener("click", () => {
            const dataId = btn.dataset.id
            let data = dataGallery.find(data => data.id == dataId);
            btn.classList.toggle("clicked");
        
            if(!data.hasBeenLiked){
                btn.style.color = "var(--primary-color)";
                data.likes ++;
                data.hasBeenLiked = true;
            } else {
                btn.style.color = "var(--secondary-color)";
                data.hasBeenLiked = false;
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
    const nbTotalLikes = dataGallery.reduce((accumulator, currentValue) => accumulator + currentValue.likes, initialValue);
    counterLikes.innerText = `${nbTotalLikes}`;
}