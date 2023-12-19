// import { sectionImgPhotographer } from "./templates/singlePhotographer";
export function mediaFactory(media){
  
    if (media.hasOwnProperty('video')){

        el = document.createElement('video');
        el.setAttribute("controls", true);
  

        const sourceVideo = document.createElement('source');
        sourceVideo.setAttribute("src", media.video);
        // sourceVideo.setAttribute("type", "video/mp4" );

        el.appendChild(sourceVideo);
        sectionImgPhotographer.appendChild(el);

    } else if (media.hasOwnProperty('image')){

        el = document.createElement('img');
        el.setAttribute("src", media.image); 
        el.setAttribute("title", media.title);
        el.setAttribute("alt", media.title);
        el.classList.add("mainPhotographer_gallery__img");

        // sectionImgPhotographer.appendChild(el);
    } 
    console.log(el);
    return el
}

// .lightbox_media img,
// .lightbox_media video{
//     width: 100%;
//     height: calc(100% - 50px);
// }