function photographerTemplate(data) {
    const { name, portrait } = data;
    // Récupère l'image en fonction de la donnée 'portrait' du tableau JSON récupéré via data
    const picture = `assets/photographers/${portrait}`;
    // fonction qui permet la mise en page de la card du photographe
    function getUserCardDOM() {
        // On crée un élément article
        const article = document.createElement( 'article' );
          // On crée un élément image
        const img = document.createElement( 'img' );
        // On lui met la src qui provient de la constante picture car c'est la même chose
        img.setAttribute("src", picture)
        // On crée un titre
        const h2 = document.createElement( 'h2' );
        // Dans lequel on insère le name de la const data
        h2.textContent = name;
        //on ajoute un enfant img à article 
        article.appendChild(img);
        // Puis on ajoute le h2
        article.appendChild(h2);
        // et évidemment, on doit retourner l'article
        return (article);
    }
    // on retourne notre constante et notre fonction.
    return { name, picture, getUserCardDOM }
}