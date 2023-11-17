function photographerTemplate(data) {
    const { name, portrait, id, city, country, tagline, price } = data;
    // Récupère l'image en fonction de la donnée 'portrait' du tableau JSON récupéré via data
    const picture = `${portrait}`;
    // fonction qui permet la mise en page de la card du photographe

    function getUserCardDOM() {
        // On crée un élément article
        const article = document.createElement( 'article' );
        article.classList.add("cardUser");

        // On crée un lien sur l'élément image
        const linkImgPhotographe = document.createElement('a');
        linkImgPhotographe.setAttribute("title", `page de ${name}`);
        linkImgPhotographe.setAttribute("href", "");

        const imgPhographerHomePage = document.createElement('img');
        imgPhographerHomePage.setAttribute("src", picture); // On lui met la src qui provient de la constante picture
        imgPhographerHomePage.setAttribute("title", name);
        imgPhographerHomePage.classList.add("cardUser__img");
        linkImgPhotographe.appendChild(imgPhographerHomePage);

        // On crée le titre avec le nom
        const h2 = document.createElement( 'h2' );
        h2.textContent = `${name}`;
        h2.classList.add("cardUser__title");

        // Création du paragraphe de la ville et du pays.
        const cityCountry = document.createElement('p');
        cityCountry.innerText = `${city}, ${country}`;
        cityCountry.classList.add("cardUser__cityCountry");

        // Création du paragraphe de la tagline
        const taglineText = document.createElement('p');
        taglineText.innerText =  tagline;
        taglineText.classList.add("cardUser__tagline");

        // Création du paragraphe du tarif
        const priceData = document.createElement('p');
        priceData.innerText =  `${price} € / jour`;
        priceData.classList.add("cardUser__priceData");



        //on ajoute un enfant img à article 
        article.appendChild(linkImgPhotographe);
        // Puis on ajoute le h2
        article.appendChild(h2);
        // ajout de la ville et du pays
        article.appendChild(cityCountry);
        // ajout de la tagline
        article.appendChild(taglineText);
        // ajout du prix
        article.appendChild(priceData);

        // et évidemment, on doit retourner l'article
        return (article);
    }
    // on retourne notre constante et notre fonction.
    return { name, picture, getUserCardDOM }
}