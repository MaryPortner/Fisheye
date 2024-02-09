export function mediaFactory(data){
    let el;

    if (Object.prototype.hasOwnProperty.call(data, 'video')){
        el = document.createElement('video');
        el.id="player";
        // el.setAttribute("tabindex", 0);
    
        const src = document.createElement('source');
        src.setAttribute("src", data.video);
        src.setAttribute("type", "video/mp4" );
        src.setAttribute("alt", data.title);
        src.setAttribute("tabindex", 0);

        el.appendChild(src);

    } else if (Object.prototype.hasOwnProperty.call(data, 'image')){
        el = document.createElement('img');
        el.setAttribute("src", data.image); 
        el.setAttribute("alt", data.title);
        el.classList.add("mainPhotographer_gallery__img");
    } 

    else {
        console.log('Aucune donnée affichée');
    }
    
    return el;
}