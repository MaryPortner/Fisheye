
//Affichage du média selon le type
function displayImage(media){
    console.log(media);
    // console.log(media.image);
    // const extension = media.image;
    // console.log(extension);
    // const extension = url.split('.').reverse()[0];

    if(media.includes(mp4)){
        const video = document.createElement("video");
        video.classList.add("lightbox_img");
        video.controls = "controls";
        video.setAttribute("src", `${media.video}`);
        video.setAttribute("alt", `${media.title}`);
        return video;
    }
    if (media.includes(jpg)){
        const image = document.createElement("img");
        image.classList.add("lightbox_img");
        image.setAttribute("src", `${media.image}`);
        image.setAttribute("alt", `${media.title}`);
        return image;
    } 
}
