
export function photographerPresentation(){
    // On récupère toutes nos photos dans le fichier template/photographer.js
    const imgPhotographers = document.querySelectorAll(".photographer_section .cardUser");
    console.log(imgPhotographers);
    for(let i = 0 ; i < imgPhotographers.length ; i++){
        // On va parcourir toutes les images en leur ajoutant un eventListener
        imgPhotographers[i].addEventListener("click", async function(event){
        // On va maintenant récupérer la valeur de l'attribut data-id à l'aide de la propriété dataset
        const id = event.target.dataset.id;
    
        });
    }
}

// const reponse = await fetch(`/http://localhost:5500/photographer/${id}/photographers.json`);
// const photographersId = await reponse.json();