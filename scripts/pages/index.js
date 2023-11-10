    async function getPhotographers() {
     // requête sur le fichier JSON en utilisant "fetch".
        const response = await fetch("./../../data/photographers.json");
        const photographers = await response.json();
        console.log(photographers);
   
        // et bien retourner le tableau photographers seulement une fois récupéré
        // ici on récupéres 3x le tableau photographers. 
        // return ({
        //     photographers: [...photographers]});
        return photographers;
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            //Récupère les données d'un seul photographe du tableau photographers.
            const photographerModel = photographerTemplate(photographer);
            // console.log(photographerModel);
            //Ici on va récupérer l'article dans son ensemble, créé grâce à la fonction getUserCardDOM
            const userCardDOM = photographerModel.getUserCardDOM();
            // ici on va insérer dans les données de la const userCardDOM dans la section .photographer_section.
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes de façon asynchrone. 
        const { photographers } = await getPhotographers();
        //affiche les données du tableau photographers;
        displayData(photographers);

    }
    
    init();
    
