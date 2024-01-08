import { btnContact, imgPhotographer, mainGallery, priceTotalLikes } from "../templates/singlePhotographer.js";
import { video, image } from "../factory.js";


// const asideLikesPrice = document.querySelector("aside");
const closeModalBtn = document.querySelector(".modal_Close");
const firstName = document.querySelector("#firstName");
const form = document.querySelector('form');

const last = document.querySelector("#last");
const mail = document.querySelector("#email");
const message = document.querySelector("#message");
const modal = document.getElementById("contact_modal");
const name = document.querySelector(".namePhotographer");
const photographHeader = document.querySelector(".photograph-header");
const imgs = document.querySelectorAll("articleImgPhotograher img.mainPhotographer_gallery__img");


export function contactFormInit(){

    console.log(image);
 
    closeModalBtn.addEventListener("click", () => {
        closeModal();
        changeBg("#FFFFFF", "#FAFAFA", "none", "flex");
    });
    
    
    btnContact.addEventListener("click", () => {
        displayModal();
        changeBg("#00000040", "#c4c4c466", "contrast(50%)", "none");
    });
    
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if(firstName.value == ''  ||  last.value == ''   || mail.value == ''   || message.value == ''   ){ 
            alert('Vous devez remplir tous les champs');
        } else {
            confirmSendingForm();
            closeModal();
            changeBg("#FFFFFF", "#FAFAFA", "none", "flex");
        }
    });
 }
    
function changeBg(color1, color2, color3, display) {
    document.body.style.background = color1;
    photographHeader.style.background = color2;
    imgPhotographer.style.filter = color3;
    imgs.forEach(img => {
        img.style.filter = color3;
    });
    video.style.filter = color3;
    priceTotalLikes.style.display = display;
}

function closeModal() {
    modal.style.display = "none";
    form.reset();
}

function confirmSendingForm(){
    const getDataForm = {
        prenom : firstName.value,
        nom : last.value,
        mail : mail.value,
        message : message.value
    }
    console.log(getDataForm);
}

function displayModal() {
    modal.style.display = "block";
}


