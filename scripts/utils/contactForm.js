import { btnContact, imgPhotographer, allArticles, main, priceTotalLikes } from "../templates/singlePhotographer.js";

const closeModalBtn = document.querySelector("img.modal_Close");
const firstName = document.querySelector("#firstName");
const form = document.querySelector('form');
const last = document.querySelector("#last");
const mail = document.querySelector("#email");
const message = document.querySelector("#message");
const modal = document.getElementById("contact_modal");
const photographHeader = document.querySelector(".photograph-header");


//Fermeture de la modale au clavier
closeModalBtn.addEventListener('keyup', (e) => {
    if (e.key === 'Escape' || e.key === 'Backspace') {
        closeModal();
    }
});


function changeBg(color1, color2, color3, display) {
    document.body.style.background = color1;
    photographHeader.style.background = color2;
    imgPhotographer.style.filter = color3;
    allArticles.forEach(article => {
        article.style.filter = color3;
    });
    priceTotalLikes.style.display = display;
}


function closeModal() {
    modal.style.display = "none";
    modal.setAttribute('aria-hidden', true);
    main.setAttribute('aria-hidden', false);
    changeBg("#FFFFFF", "#FAFAFA", "none", "flex");
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

export function contactFormInit(){

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


function displayModal() {
    modal.style.display = "block";
    modal.setAttribute('aria-hidden', false);
    main.setAttribute('aria-hidden', true);
    closeModalBtn.focus();
}


