import { id } from './getData.js';
import { photographers } from './getData.js';

const contactBtn = document.querySelector(".contact_button");
const closeModalBtn = document.querySelector(".modal_Close");
const firstName = document.querySelector("#firstName");
const form = document.querySelector('form');
const last = document.querySelector("#last");
const mail = document.querySelector("#email");
const message = document.querySelector("#message");
const modal = document.getElementById("contact_modal");
const name = document.querySelector(".namePhotographer");
const photographer = photographers.find( elements => elements.id == id);



closeModalBtn.addEventListener("click", () => {
    closeModal();
});

contactBtn.addEventListener("click", () => {
    displayModal();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(firstName.value == ''  ||  last.value == ''   || mail.value == ''   || message.value == ''   ){ 
        alert('Vous devez remplir tous les champs');
    } else {
        confirmSendingForm();
        closeModal();
    }
});

name.innerHTML = photographer.name;



function displayModal() {
	modal.style.display = "block";
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









