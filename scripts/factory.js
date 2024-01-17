export function mediaFactory(data){
    let el;

    if (data.hasOwnProperty('video')){
        el = document.createElement('video');
        el.setAttribute("src", data.video);
        el.setAttribute("alt", data.title);
        el.setAttribute("type", "video/mp4" );

    } else if (data.hasOwnProperty('image')){
        el = document.createElement('img');
        el.setAttribute("src", data.image); 
        el.setAttribute("title", data.title);
        el.setAttribute("alt", data.title);
        el.classList.add("mainPhotographer_gallery__img");
    } 

    else {
        console.log('Aucune donnée affichée');
    }
    
    return el;
}
