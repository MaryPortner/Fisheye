 export async function getDatas() {
    // requête sur le fichier JSON en utilisant "fetch".
    const response = await fetch("./../../data/photographers.json");
    const photographers = await response.json();
    return photographers;
}

// *********** Récupération des datas ***********/
export const { media } = await getDatas();
export const { photographers } = await getDatas();


// ********* Récupération des données du l'url courante **********/
const params = new URLSearchParams(window.location.search);
export const id = params.get("idPhotographer");
