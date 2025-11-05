// login.js
// Script pour la page de connexion

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
    let compte = JSON.parse(localStorage.getItem("compte"))
    if (!compte) {
        messageTextError.innerText = "aucun compte trouvé, veuillez vous inscrire d'abord"
        return;
    }
    let identifiant = ""
    for (let i = 0; i < 6; i++)
        identifiant += compte.ribComptePrincipal.numeroCompte[i]


    if (identifiant == emailInput.value && compte.password === passwordInput.value) {
        localStorage.setItem("login", "seccuss")
        window.location.href = "signup.html";
    }
    else {
        messageTextError.innerText = "identifiant de compte ou mot de passe incorrect .identifiant doit être les 6 premiers chiffres du numéro de compte"
    }
})

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