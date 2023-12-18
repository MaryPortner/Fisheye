export function mediaFactory(mediaType){

    if (mediaType.hasOwnProperty('video')){

        const videoPhotographer = document.createElement('video');
        videoPhotographer.setAttribute("controls");
        videoPhotographer.setAttribute("width", "220");

        const sourceVideo = document.createElement('source');
        sourceVideo.setAttribute("src", video);
        sourceVideo.setAttribute("type", "video/mp4" );

        const linkVideo = document.createElement('a');

        videoPhotographer.appendChild(sourceVideo);
        videoPhotographer.appendChild(linkVideo);
        sectionImgPhotographer.appendChild(videoPhotographer);


    } else if (mediaType.hasOwnProperty('image')){

        const imgPhotographer = document.createElement('img');
        imgPhotographer.setAttribute("src", image); 
        imgPhotographer.setAttribute("title", title);
        imgPhotographer.setAttribute("alt", title);
        imgPhotographer.classList.add("mainPhotographer_gallery__img");

        sectionImgPhotographer.appendChild(imgPhotographer);
    
    } else {
        console.log ("aucun donnee récupérée");
    }
}