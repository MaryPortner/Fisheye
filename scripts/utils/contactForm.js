const firstName = document.querySelector("#firstName").value;
const form = document.querySelector('form');
const inputDataEnter = form.querySelectorAll(".formData [data-enter]");
const last = document.querySelector("#last").value;
const mail = document.querySelector("#email").value;
const message = document.querySelector("#message").value;
const modal = document.getElementById("contact_modal");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(firstName == "" ||  last == "" || mail == "" || message == "" ){ 
        console.log('Vous devez remplir tous les champs');
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
        prenom : firstName,
        nom : last,
        mail : mail,
        message : message
    }
    console.log(getDataForm);
}

function displayModal() {
	modal.style.display = "block";
}







