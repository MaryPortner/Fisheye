const firstName = document.querySelector("#firstName");
const form = document.querySelector('form');
const inputDataEnter = form.querySelectorAll(".formData [data-enter]");
const last = document.querySelector("#last");
const mail = document.querySelector("#email");
const message = document.querySelector("#message");
const modal = document.getElementById("contact_modal");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(firstName.value == ''  ||  last.value == ''   || mail.value == ''   || message.value == ''   ){ 
       alert('Vous devez remplir tous les champs');
    } else {
        confirmSendingForm();
        closeModal();
    }
});


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







