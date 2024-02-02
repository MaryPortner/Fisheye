import { btnContact, imgPhotographer, allArticles, main, priceTotalLikes } from "../templates/singlePhotographer.js";

const closeModalBtn = document.querySelector("button.modal_Close");
const firstName = document.querySelector("#firstName");
const form = document.querySelector('form');
const last = document.querySelector("#last");
const mail = document.querySelector("#email");
const message = document.querySelector("#message");
const modal = document.getElementById("contact_modal");
const photographHeader = document.querySelector(".photograph-header");
const btnSubmit = document.querySelector('button.contact_btn-form');


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
    modal.setAttribute('aria-modal', true);
    main.setAttribute('aria-hidden', true);
    closeModalBtn.focus();
}


// Focus reste sur le formulaire tant qu'il n'a pas été envoyé ou fermé.


        document.addEventListener('keydown', (e) => {
          if(btnSubmit.hasFocus && e.key === 'Tab'){
                  document.querySelector('button.modal_Close').focus();
                  console.log(document.activeElement);
            }
    });


// Garder le focus dans la modale 

let keepFocus =  () => {
    //On récupère nos éléments
    const focusableElements = [...modal.querySelectorAll( 'button, input, textarea, [tabindex]')];
  
    // On récupère le premier et le dernier élément focusable
	let firstTabbableElement = focusableElements[0];
	let lastTabbableElement = focusableElements[focusableElements.length - 1];

	let keyListener =  (e) => {
		let keyCode = e.which || e.keyCode; // Get the current keycode

		// Polyfill pour éviter le comportement par défaut des évènements
		e.preventDefault = e.preventDefault || function () {
			e.returnValue = false;
		};

		// On utilise la tabulation
		if (keyCode === 9) {

			// Déplacer le focus sur le premier élément qui peut être tabulé si Shift n'est pas utilisé
			if (e.target === lastTabbableElement && !e.shiftKey) {
				e.preventDefault();
				firstTabbableElement.focus();

			// Déplacer le focus sur le dernier élément pouvant être tabulé si Shift est utilisé
			} else if (e.target === firstTabbableElement && e.shiftKey) {
				e.preventDefault();
				lastTabbableElement.focus();
			}
		}
	};

	modal.addEventListener('keydown', keyListener, false);
};

// Appeler la fonction lorsque la partie de la page obtient le focus

keepFocus();
modal.focus();



