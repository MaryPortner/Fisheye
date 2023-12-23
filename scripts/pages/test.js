import { getPhotographerById } from "../pages/photographerPage.js";

export const displayTotalLikes = async () => {
    const { medias } = await getPhotographerById();
    const allBtnLike = document.querySelectorAll(".btn_like");
    const likesElement = document.querySelector(".photographer_likes_count");

    const updateTotalLikes = () => {
        const totalLikes = medias.reduce((acc, media) => acc + media.likes, 0);
        likesElement.textContent = `${totalLikes}`;
    };

    updateTotalLikes();

    allBtnLike.forEach(btn => {
        btn.addEventListener("click", () => {
            const media = medias.find(media => media.id == btn.dataset.id);

            !btn.classList.contains("liked") ? media.likes++ : media.likes--;

            btn.classList.toggle("liked");

            const likesElement = btn.previousElementSibling;
            likesElement.textContent = `${media.likes}`;

            updateTotalLikes();
        });
    });
};





// export const displayTotalLikes = async () => {
//     const { medias } = await getPhotographerById();
//     const allBtnLike = document.querySelectorAll(".btn_like");
//     const likesElement = document.querySelector(".photographer_likes_count");

//     const updateTotalLikes = () => {
//         const totalLikes = medias.reduce((acc, media) => acc + media.likes, 0);
//         likesElement.textContent = `${totalLikes}`;
//     };

//     updateTotalLikes();

//     allBtnLike.forEach(btn => {
//         btn.addEventListener("click", () => {
//             const media = medias.find(media => media.id == btn.dataset.id);

//             !btn.classList.contains("liked") ? media.likes++ : media.likes--;

//             btn.classList.toggle("liked");

//             const likesElement = btn.previousElementSibling;
//             likesElement.textContent = `${media.likes}`;

//             updateTotalLikes();
//         });
//     });
// };






const iconeCliked = `
    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_120_561)">
            <path d="M10.5 21.35L9.23125 20.03C4.725 15.36 1.75 12.28 1.75 8.5C1.75 5.42 3.8675 3 6.5625 3C8.085 3 9.54625 3.81 10.5 5.09C11.4537 3.81 12.915 3 14.4375 3C17.1325 3 19.25 5.42 19.25 8.5C19.25 12.28 16.275 15.36 11.7688 20.04L10.5 21.35Z" fill="#901C1C"/>
        </g>
        <defs>
            <clipPath id="clip0_120_561">
                <rect width="24" height="26" fill="#901C1C"/>
            </clipPath>
        </defs>
    </svg> 
`;

const icone = `
    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_120_561)">
            <path d="M10.5 21.35L9.23125 20.03C4.725 15.36 1.75 12.28 1.75 8.5C1.75 5.42 3.8675 3 6.5625 3C8.085 3 9.54625 3.81 10.5 5.09C11.4537 3.81 12.915 3 14.4375 3C17.1325 3 19.25 5.42 19.25 8.5C19.25 12.28 16.275 15.36 11.7688 20.04L10.5 21.35Z" fill="#DB8876"/>
        </g>
        <defs>
            <clipPath id="clip0_120_561">
                <rect width="24" height="26" fill="#DB8876"/>
            </clipPath>
        </defs>
    </svg> 
`;



const btnLikes = document.createElement('button');
btnLikes.classList.add("btnLikes","mainPhotographer_gallery__icone");
btnLikes.setAttribute("type", "button");
btnLikes.setAttribute("aria-label", "Like");
btnLikes.innerHTML = icone;