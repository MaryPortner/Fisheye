export const displayNbTotalLikes = (dataGallery) => {
    let btnLikes = document.querySelectorAll("button.btnLikes");
    const likes = document.querySelectorAll(".mainPhotographer_gallery__likes");
    updateNbLikesTotal(dataGallery);

    btnLikes.forEach(btn => {
        btn.addEventListener("click", () => {
            const dataId = btn.dataset.id
            let data = dataGallery.find(data => data.id == dataId);
            //nouvel objet avec les éléments cliqués.
            // btnClicked = btnLikes;
            // convertBtnClickedArray = btnClicked;
            btn.classList.toggle("clicked");
        
            if(btn.classList.contains("clicked")){
                btn.style.color = "var(--primary-color)";
                data.likes ++;
            }  
            
            if (!btn.classList.contains("clicked")) {
                btn.style.color = "var(--secondary-color)";
                data.likes --;
            }

            likes.forEach(element => {
                if(element.dataset.id == dataId){
                    element.innerHTML = data.likes;
                }
            });  
            // arrayWithBtnClicked = convertBtnClickedArray;
            // console.log(arrayWithBtnClicked);
            // // console.log(arrayWithBtnClicked);
            // btnLikes = arrayWithBtnClicked;
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

