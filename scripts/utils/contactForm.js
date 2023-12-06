const modal = document.getElementById("contact_modal");
const form = document.querySelector('form');
const inputDataEnter = form.querySelectorAll(".formData [data-enter]");



function displayModal() {
	modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

function confirmSendingForm(){
    console.log(inputDataEnter[0].value);
    console.log(inputDataEnter[1].value);
    console.log(inputDataEnter[2].value);
    console.log(inputDataEnter[3].value);
    form.reset();
}



form.addEventListener("submit", (e) => {

    e.preventDefault();
    if(inputDataEnter[0].value != "" &&  inputDataEnter[1].value != "" && inputDataEnter[2].value != "" && inputDataEnter[3].value != "" ){
        confirmSendingForm();
    }else {
        alert('Vous devez remplir tous les champs');
    }

       
    
});






