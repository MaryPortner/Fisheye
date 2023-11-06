    async function getPhotographers() {
        // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
        // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
        let photographers = [
            {
                "name": "Ma data Paris",
                "id": 1,
                "city": "Paris",
                "country": "France",
                "tagline": "Ceci est ma data test",
                "price": 400,
                "portrait": "account.png"
            },
            {
                "name": "Ma data Londres ",
                "id": 2,
                "city": "Londres",
                "country": "UK",
                "tagline": "Ceci est ma data test 2",
                "price": 500,
                "portrait": "account.png"
            },
            {
                "name": "Ma data NewYork",
                "id": 3,
                "city": "New York",
                "country": "USA",
                "tagline": "Ceci est ma data test 3",
                "price": 350,
                "portrait": "account.png"
            },
        ]
        // et bien retourner le tableau photographers seulement une fois récupéré
        // ici on récupéres 3x le tableau photographers. 
        return ({
            photographers: [...photographers, ...photographers, ...photographers]})
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            //Récupère les données d'un seul photographe du tableau photographers.
            const photographerModel = photographerTemplate(photographer);
            console.log(photographerModel);
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
    
