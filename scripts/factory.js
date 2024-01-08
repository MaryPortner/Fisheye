
export let video;
export let image;
let el;
export function mediaFactory(datas){
    

    if (datas.hasOwnProperty('video')){
        el = document.createElement('video');
        el.setAttribute("src", datas.video);
        el.setAttribute("alt", datas.title);
        el.setAttribute("type", "video/mp4" );
        video = el;


    } else if (datas.hasOwnProperty('image')){
        el = document.createElement('img');
        el.setAttribute("src", datas.image); 
        el.setAttribute("title", datas.title);
        el.setAttribute("alt", datas.title);
        el.classList.add("mainPhotographer_gallery__img");
        image = document.querySelectorAll("img.mainPhotographer_gallery__img");
    } 

    else {
        console.log('Aucune donnée affichée');
    }
    
    return el;
}
