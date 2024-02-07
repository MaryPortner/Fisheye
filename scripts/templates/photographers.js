export function photographerTemplate(data) {
    const { name, portrait, id, city, country, tagline, price } = data;
    // console.log(data);
    // Récupère l'image en fonction de la donnée 'portrait' du tableau JSON récupéré via data
    const picture = `${portrait}`;
    // fonction qui permet la mise en page de la card du photographe

    function getUserCardDOM() {
        // On crée un élément article
        const article = document.createElement( 'article' );
        article.classList.add("cardUser");
   
        // On crée un lien sur l'élément image
        const linkImgPhotographe = document.createElement('a');
        linkImgPhotographe.classList.add("outline");
        linkImgPhotographe.setAttribute("title", `Lien vers la page personnelle de ${name}`);
        linkImgPhotographe.setAttribute("href", `photographer.html?idPhotographer=`+ id );

        const descriptionlinkImgPhotographe = document.createElement("span");
        descriptionlinkImgPhotographe.classList.add("sr-only");
        descriptionlinkImgPhotographe.innerHTML=`Lien vers la page personnelle du photographe ${name}`;

        const imgPhotographerHomePage = document.createElement('img');
        imgPhotographerHomePage.setAttribute("src", picture); 
        imgPhotographerHomePage.setAttribute("title", `${name}`);
        imgPhotographerHomePage.setAttribute("alt", `Image du photographe ${name}`);
        imgPhotographerHomePage.classList.add("cardUser__img");
        linkImgPhotographe.appendChild(imgPhotographerHomePage);

        // On crée le titre avec le nom
        const h2 = document.createElement( 'h2' );
        h2.textContent = `${name}`;
        h2.classList.add("cardUser__title");

        // Création du paragraphe de la ville et du pays.
        const cityCountry = document.createElement('h3');
        cityCountry.innerText = `${city}, ${country}`;
        cityCountry.classList.add("cardUser__cityCountry");

        // Création du paragraphe de la tagline
        const taglineText = document.createElement('p');
        taglineText.innerText =  `${tagline}`;
        taglineText.classList.add("cardUser__tagline");

        // Création du paragraphe du tarif
        const priceData = document.createElement('p');
        priceData.innerText =  `${price} € / jour`;
        priceData.classList.add("cardUser__priceData");


        linkImgPhotographe.appendChild(descriptionlinkImgPhotographe);
        linkImgPhotographe.appendChild(h2);
  
        //on ajoute un enfant img à article 
        article.appendChild(linkImgPhotographe);
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
    return {getUserCardDOM }
}