// function slider(currentUrl){
//     const firstImg = 0;
//     const lastImg = currentUrl.length -1;
//     let currentImg = 0;
//     lightbox.querySelector(".lightbox_next-btn").addEventListener('click', (currentUrl) => {
//         // imgTag = images.findIndex(data => data === currentUrl);
//         currentImg++;
//         imgTag = currentUrl[currentImg];
//         console.log(imgTag);    
//     });

// }




// function slider(images){
//     const firstImg = 0;
//     const lastImg = images.length -1;
//     let currentImg = 0;
//     lightbox.querySelector(".lightbox_next-btn").addEventListener('click', (e) => {
//         e.preventDefault();
//         imgTag = images.findIndex(image => image === currentUrl);
//         console.log(imgTag);
//         currentImg++;
//         imgTag = images[currentImg];

//         console.log(imgTag);  
//         buildLightbox(imgTag);
//         main.append(buildLightbox(imgTag));
//     });

    // btnNext.addEventListener('click', () => {
    //     imgTag = images.findIndex(image => image === currentUrl);
    //     currentImg++;
    //     imgTag = images[currentImg];
    //     console.log(imgTag);    
    // });

//}


// function next(images){
//     console.log(images); // Tableau des href
//     let i = images.findIndex(image => image === currentUrl);
//     console.log(i); // index de l'image

//     buildLightbox(images[i + 1]);
//     main.append(buildLightbox(images[i + 1]));

// }





// function next(allImg){
//     const firstImg = 0;
//     const lastImg = allImg.length -1;
//     let currentImg = 0;

//     lightbox.querySelector(".lightbox_next-btn").addEventListener('click', () => {
//         currentImg = allImg.findIndex(data => data === currentUrl);
//         console.log(currentImg);
//         currentImg++;
//         imgTag = allImg[currentImg];
//         console.log(imgTag);   
//         buildLightbox(imgTag);
//     });
// }


















// function slider(allImg, data){
//     const firstImg = 0;
//     const lastImg = allImg.length -1;
//     let currentImg = 0;
//     btnNext.addEventListener('click', () => {
//         imgTag = allImg.findIndex(data => data === currentUrl);
//         currentImg++;
//         imgTag = allImg[currentImg];
//         console.log(imgTag);    
//     });

// }




function slider(images){
    const firstImg = 0;
    const lastImg = images.length -1;
    let currentImg = 0;
    lightbox.querySelector(".lightbox_next-btn").addEventListener('click', (e) => {
        e.preventDefault();
        imgTag = images.findIndex(image => image === currentUrl);
        currentImg++;
        imgTag = images[currentImg];
        console.log(imgTag);  
        buildLightbox(imgTag);

    });

    // btnNext.addEventListener('click', () => {
    //     imgTag = images.findIndex(image => image === currentUrl);
    //     currentImg++;
    //     imgTag = images[currentImg];
    //     console.log(imgTag);    
    // });

}


// function next(images){
//     console.log(images); // Tableau des href
//     let i = images.findIndex(image => image === currentUrl);
//     console.log(i); // index de l'image

//     buildLightbox(images[i + 1]);
//     main.append(buildLightbox(images[i + 1]));

// }


// function prev(e){
//     e.preventDefault();
// }





function slider(allImg, data){
    const firstImg = 0;
    const lastImg = allImg.length -1;
    let currentImg = 0;
    btnNext.addEventListener('click', () => {
        imgTag = allImg.findIndex(data => data === currentUrl);
        currentImg++;
        imgTag = allImg[currentImg].getAttribute('href');;
        console.log(imgTag);
        return imgTag
    
    });

}