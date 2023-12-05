const modal = document.getElementById("contact_modal");
const header = document.querySelector("modal_header");


function displayModal() {
	modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}


/* 
 * Formulaire
 */

// recupération du formulaire
const form = document.querySelector('form');

// récupération des données ayant l'attribut data-enter
const inputDataEnter = form.querySelectorAll(".formData [data-enter]");
console.log(inputDataEnter);
//variable 
let sendValid;

function testValidation(){
    sendValid = true;
    emailValidation(); 
    firstNameValidation();
    lastValidation();
    messageValidation();
}


form.addEventListener("submit", (e) => {

    e.preventDefault();
    testValidation();
    if(sendValid){
        confirmSendingForm();
    }

});


function emailValidation(){
    const error = document.querySelector("div.email[data-error]");
    const email = /^[a-z0-9._-]+@[a-z0-9._-]+.[a-z]{2,20}$/.test(inputDataEnter[2].value.trim());
    showValidation(email, error);
} 

function firstNameValidation(){
    const error = document.querySelector("div.firstName[data-error]");
    const firstName = /^[a-z A-Z à-ÿ À-Ý]{2,}$/.test(inputDataEnter[0].value.trim());
    showValidation(firstName, error);
}   

function lastValidation(){
    const error = document.querySelector("div.last[data-error]");
    const last = /^[a-z A-Z à-ÿ À-Ý]{2,}$/.test(inputDataEnter[1].value.trim());
    showValidation(last, error);
}  

function messageValidation(){
    const error = document.querySelector("div.message[data-error]");
    const last = /^[a-z A-Z à-ÿ À-Ý]{2,}$/.test(inputDataEnter[1].value.trim());
    showValidation(last, error);
}

//*******************************/factorization of the validation test ******************************/
function showValidation(validationCondition, error){
    if(!validationCondition){
        error.setAttribute('data-error-visible', 'true');
        sendValid = false;
    }else {
        error.setAttribute('data-error-visible', 'false');
    }
}



