export async function getDatas() {
    // requête sur le fichier JSON en utilisant "fetch".
    const response = await fetch("./../../data/photographers.json");
    const photographers = await response.json();
    return photographers;
}

// *********** Récupération des datas ***********/

export const { media } = await getDatas();
export const { photographers } = await getDatas();
const params = new URLSearchParams(window.location.search);
export const id = params.get("idPhotographer");
export const dataPhotographer = photographers.find( elements => elements.id == id);
export const dataGallery = media.filter(elements => elements.photographerId == id);
export const sortDatasGallery= Array.from(dataGallery);



