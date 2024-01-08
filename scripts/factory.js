export function mediaFactory(datas){
    let el;

    if (datas.hasOwnProperty('video')){
        el = document.createElement('video');
        el.setAttribute("src", datas.video);
        el.setAttribute("alt", datas.title);
        el.setAttribute("type", "video/mp4" );
     


    } else if (datas.hasOwnProperty('image')){
        el = document.createElement('img');
        el.setAttribute("src", datas.image); 
        el.setAttribute("title", datas.title);
        el.setAttribute("alt", datas.title);
        el.classList.add("mainPhotographer_gallery__img");
    } 

    else {
        console.log('Aucune donnée affichée');
    }
    
    return el;
}
