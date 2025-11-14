// login.js
// Script pour la page de connexion

if (localStorage.getItem("login") == "seccuss")
    window.location.href = "dashboard.html";


let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput");
let submitButton = document.getElementById("submitButton");
let signupButton = document.getElementById('signup-button');
let messageTextError = document.getElementById("message-text-error")
disablede_button(submitButton);
// Validation de l'email

signupButton.addEventListener('click', function () {
    // redirection vers la page signup.html
    window.location.href = "signup.html";
});

emailInput.addEventListener('keyup', function () {
    messageTextError.innerText = ""
    let emailValue = emailInput.value;
    if (emailValue.length == 6) {
        change_border_to_success(emailInput)
    } else {
        change_border_to_error(emailInput)
    }
    countSuccess();
});

// Validation du mot de passe

passwordInput.addEventListener('keyup', function () {
    messageTextError.innerText = ""
    let passwordValue = passwordInput.value;
    if (passwordValue.length >= 8) {
        change_border_to_success(passwordInput)
    } else {
        change_border_to_error(passwordInput)
    }
    countSuccess();
});

function countSuccess() {
    let successCount = 0;
    if (emailInput.classList.contains("message-success-border")) {
        successCount++;
    }
    if (passwordInput.classList.contains("message-success-border")) {
        successCount++;
    }
    if (successCount === 2) {
        enable_button(submitButton);
    } else {
        disablede_button(submitButton);
    }
}

submitButton.addEventListener('click', function () {
    let listComptes = JSON.parse(localStorage.getItem("listComptes"))
    if (!listComptes) {
        messageTextError.innerText = "aucun compte trouvé, veuillez vous inscrire d'abord"
        return;
    }


    const identifiantSaisi = emailInput.value;
    const motDePasseSaisi = passwordInput.value;

    const compteTrouve = listComptes.find(compte => {
        let identifiantCompte = compte.ribComptePrincipal.numeroCompte.substring(0, 6);
        return identifiantCompte == identifiantSaisi && compte.password == motDePasseSaisi;
    });

    if (compteTrouve) { //!= null
        localStorage.setItem("compte", JSON.stringify(compteTrouve)); // IMPORTANT: stocker l'objet du compte
        localStorage.setItem("login", "seccuss");
        window.location.href = "dashboard.html";
    }
    else {
        messageTextError.innerText = "Identifiant de compte ou mot de passe incorrect. L'identifiant doit être les 6 premiers chiffres du numéro de compte.";
    }
});

function change_border_to_error(inputElement) {
    inputElement.classList.add("message-error-border");
    inputElement.classList.remove("message-success-border");
}

// changer la bordure en vert pour indiquer une réussite
function change_border_to_success(inputElement) {
    inputElement.classList.add("message-success-border");
    inputElement.classList.remove("message-error-border");
}

// réinitialiser la bordure
function reset_border(inputElement) {
    inputElement.classList.remove("message-error-border");
    inputElement.classList.remove("message-success-border");
}
// desactiver le bouton
function disablede_button(buttonElement) {
    buttonElement.disabled = true;
    buttonElement.classList.remove("button-background-orange");
}
// activer le bouton
function enable_button(buttonElement) {
    buttonElement.disabled = false;
    buttonElement.classList.add("button-background-orange");
}






// localStorage.clear()