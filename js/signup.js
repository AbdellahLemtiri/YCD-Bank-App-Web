if (localStorage.getItem("login") == "seccuss")
    window.location.href = "dashboard.html";


// signup.js
// dom elements les inputs  de la page signup.html
let signupButton = document.getElementById('signup-button');
let navbarButton = document.getElementById('navbar-button');
let createAccountButton = document.getElementById('createAccountButton');
let validateButton = document.getElementById('validateButton')
// let finalizeButton = document.getElementById('finalizeButton')
let emailInput = document.getElementById('emailInput');
let confirmEmailInput = document.getElementById('confirmEmailInput');
let passwordInput = document.getElementById('passwordInput');
let confirmPasswordInput = document.getElementById('confirmPasswordInput');
let phoneInput = document.getElementById('phoneInput');
let operatorSelect = document.getElementById('operatorSelect');

let inputFirstName = document.getElementById('inputFirstName');
let inputLastName = document.getElementById('inputLastName');
let numeroCarteNationale = document.getElementById('numeroCarteNationale');
let selectGenre = document.getElementById('selectGenre');
let dateNaissance = document.getElementById('dateNaissance');
let lieuNaissance = document.getElementById('LieuNaissance');
let step1 = document.getElementById('step1');
let step2 = document.getElementById('step2');
let step3 = document.getElementById('step3');
let compte = {}

//disable button 
disablede_button(createAccountButton)
disablede_button(validateButton)

// event listeners
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//  validation email format gmail.com
emailInput.addEventListener('keyup', function () {
    let format = "@gmail.com";
    let emailValue = emailInput.value;
    if (emailValue.endsWith(format)) {
        emailInput.classList.add("message-success-border")
        emailInput.classList.remove("message-error-border")
    }
    else {
        emailInput.classList.add("message-error-border")
        emailInput.classList.remove("message-success-border")
    }
    countSuccess(emailInput, confirmEmailInput, passwordInput, confirmPasswordInput, phoneInput, operatorSelect, createAccountButton)
});
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//  validation confirm email
confirmEmailInput.addEventListener('keyup', function () {
    if (confirmEmailInput.value === emailInput.value) {
        change_border_to_success(confirmEmailInput);
    } else {
        change_border_to_error(confirmEmailInput);
    }
    countSuccess(emailInput, confirmEmailInput, passwordInput, confirmPasswordInput, phoneInput, operatorSelect, createAccountButton)
});
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//  validation password length >8
passwordInput.addEventListener('keyup', function () {
    if (passwordInput.value.length >= 8) {
        change_border_to_success(passwordInput);
    } else {
        change_border_to_error(passwordInput);
    }
    countSuccess(emailInput, confirmEmailInput, passwordInput, confirmPasswordInput, phoneInput, operatorSelect, createAccountButton)
});
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//  validation confirm password
confirmPasswordInput.addEventListener('keyup', function () {
    if (confirmPasswordInput.value === passwordInput.value) {
        change_border_to_success(confirmPasswordInput);
    } else {
        change_border_to_error(confirmPasswordInput);
    }
    countSuccess(emailInput, confirmEmailInput, passwordInput, confirmPasswordInput, phoneInput, operatorSelect, createAccountButton)
});

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//  validation numero de telephone  length ==12 and commence par  212
phoneInput.addEventListener('keyup', function () {

    if (phoneInput.value.length === 12 && phoneInput.value.match(/^212[0-9]+$/)) {
        change_border_to_success(phoneInput);
    } else {
        change_border_to_error(phoneInput);
    }
    countSuccess(emailInput, confirmEmailInput, passwordInput, confirmPasswordInput, phoneInput, operatorSelect, createAccountButton)
});
// 
operatorSelect.addEventListener('change', function () {
    if (operatorSelect.value != "Opérateur")
        change_border_to_success(operatorSelect)
    countSuccess(emailInput, confirmEmailInput, passwordInput, confirmPasswordInput, phoneInput, operatorSelect, createAccountButton)
})
//  
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// validation des champs de la deuxieme étape

//validation prénom, nom >2 caractéres  
inputFirstName.addEventListener('keyup', function () {
    if (inputFirstName.value.length > 2) {
        change_border_to_success(inputFirstName);
    } else {
        change_border_to_error(inputFirstName);
    }
    countSuccess(inputFirstName, inputLastName, numeroCarteNationale, dateNaissance, lieuNaissance, selectGenre, validateButton)
});
//validation prénom, nom >2 caractéres
inputLastName.addEventListener('keyup', function () {
    if (inputLastName.value.length > 2) {
        change_border_to_success(inputLastName);
    } else {
        change_border_to_error(inputLastName);
    }
    countSuccess(inputFirstName, inputLastName, numeroCarteNationale, dateNaissance, lieuNaissance, selectGenre, validateButton)
});
// validation numero carte nationale  length ==8 commence par 2 lettres suivies de 6 chiffres
numeroCarteNationale.addEventListener('keyup', function () {
    if (numeroCarteNationale.value.length === 8 && numeroCarteNationale.value.match(/^[A-z]{2}[0-9]+$/)) {
        change_border_to_success(numeroCarteNationale);
    } else {
        change_border_to_error(numeroCarteNationale);
    }
    countSuccess(inputFirstName, inputLastName, numeroCarteNationale, dateNaissance, lieuNaissance, selectGenre, validateButton)

});
// validation date de naissance  année >1920 et age >=18ans
dateNaissance.addEventListener('change', function () {
    let dateNaissanceValue = new Date(dateNaissance.value);
    if (dateNaissanceValue.getFullYear() > 1920 && dateNaissanceValue.getFullYear() <= new Date().getFullYear() - 18) {
        change_border_to_success(dateNaissance);
    } else {
        change_border_to_error(dateNaissance);
    }
    countSuccess(inputFirstName, inputLastName, numeroCarteNationale, dateNaissance, lieuNaissance, selectGenre, validateButton)

});
// validation lieu de naissance >2 caractéres
lieuNaissance.addEventListener('keyup', function () {
    if (lieuNaissance.value.length > 2) {
        change_border_to_success(lieuNaissance);
    } else {
        change_border_to_error(lieuNaissance);
    }
    countSuccess(inputFirstName, inputLastName, numeroCarteNationale, dateNaissance, lieuNaissance, selectGenre, validateButton)

});
// validation genre selectionner une option
selectGenre.addEventListener('change', function () {
    if (selectGenre.value != 'Genre')
        change_border_to_success(selectGenre)
    countSuccess(inputFirstName, inputLastName, numeroCarteNationale, dateNaissance, lieuNaissance, selectGenre, validateButton)

})



// ///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// event listener pour le bouton createAccountButtonpremier étape 1
// valider les informations de l'étape 1

 
//
createAccountButton.addEventListener('click', function () {
    if (operatorSelect.value != "" && emailInput.value == confirmEmailInput.value && passwordInput.value == confirmPasswordInput.value ) {
        ajouterINformationEtape1()
        console.log(compte)
        changeVisibilite(step2, step1)
        document.getElementById("imgStep1").src = "../images/checked.png";
    }

    else {
        disablede_button(createAccountButton)
        alert("verifier les champs")
    }

});

// event listner pour button valide les informations de stpe 2
 // valider les informations de l'étape 2

validateButton.addEventListener('click', function () {
    let getElementByClassBorderSeccuss = document.getElementsByClassName("message-success-border")
    if (getElementByClassBorderSeccuss.length == 12) {
            // ajouter les information de l'étape 2 au compte
        ajouterINformationEtape2()
        console.log(compte)
        changeVisibilite(step3, step2)
        document.getElementById("imgStep2").src = "../images/checked.png"
        ajouterINformationEtape3();
    }
    else {
        disablede_button(validateButton)
        alert("verifier les champs");
    }
});
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// event listener pour le bouton finalizeButton
// finaliser la création du compte et générer les RIB

function finalizeButton() {
    document.getElementById("imgStep3").src = "../images/checked.png"
    compte.ribComptePrincipal = genereRIB(10000)
    compte.ribCompteEparne = genereRIB(0)
    creerCompteDansLLocalStorage()
// affichage les info de compte
    step3.innerHTML = `
                <table>
                        <thead>
                            <tr>
                                <th colspan="4" class="fs-5   text-center pb-3">Vos informations bancaires</th>
                            </tr>
                        </thead>
                        <tbody class="text-center fs-14"> 
                        <tr>
                            <td>code banque</td>
                            <td>code agence</td>
                            <td>numero compte</td>
                            <td>cle RIB</td>
                        </tr>
                        <tr>
                            <td>${compte.ribComptePrincipal.codeBanque}</td>
                            <td>${compte.ribComptePrincipal.codeLocalite}</td>
                            <td>${compte.ribComptePrincipal.numeroCompte}</td>
                            <td>${compte.ribComptePrincipal.cleRIB}</td>
                        </tr>
                        </tbody>
                    </table>
                `
}//




// event listener pour le bouton signupButton
signupButton.addEventListener('click', function () {
    // redirection vers la page login.html
    window.location.href = "login.html";
});





//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
/////////functions  pour change les style des bordures des champs de saisie    
// changer la bordure en rouge pour indiquer une erreur
function change_border_to_error(inputElement) {
    inputElement.classList.add("message-error-border");
    inputElement.classList.remove("message-success-border");
}

// changer la bordure en vert pour indiquer une réussite
function change_border_to_success(inputElement) {
    inputElement.classList.add("message-success-border");
    inputElement.classList.remove("message-error-border");
}

// réinitialiser la bordure (border color grey)
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
// disib
function changeVisibilite(cardVisible, cardInvisible) {
    cardInvisible.classList.add('d-none');
    cardVisible.classList.remove('d-none');
}
// compter les champte valider
function countSuccess(arg1, arg2, arg3, arg4, arg5, arg6, submitButton) {
    let successCount = 0;
    if (arg1.classList.contains("message-success-border")) {
        successCount++;
    }
    if (arg2.classList.contains("message-success-border")) {
        successCount++;
    }
    if (arg3.classList.contains("message-success-border")) {
        successCount++;
    }
    if (arg4.classList.contains("message-success-border")) {
        successCount++;
    }
    if (arg5.classList.contains("message-success-border")) {
        successCount++;
    }
    if (arg6.classList.contains("message-success-border")) {
        successCount++;
    }
    if (successCount === 6) {
        enable_button(submitButton);
    } else {
        disablede_button(submitButton);
    }
}

///////////////////////////////////////////////////////////////////
////////////////////////////traitement/////////////////////////////
//ajouter les donne au objet 
//pour le premier etape
function ajouterINformationEtape1() {
    compte.email = emailInput.value
    compte.password = passwordInput.value
    compte.telephone = phoneInput.value
    compte.operature = operatorSelect.value
}
// pour la deuxieme etape

function ajouterINformationEtape2() {
    compte.prenom = inputFirstName.value
    compte.nom = inputLastName.value
    compte.numeroCarteNationale = numeroCarteNationale.value
    compte.genre = selectGenre.value
    compte.dateNaissance = dateNaissance.value
    compte.lieuNaissance = lieuNaissance.value

}
// 3eme etape
function ajouterINformationEtape3() {

    step3.innerHTML = `
    <table class=" col-md-12  col-sm-12 col-lg-8 fs-12 ">
        <thead>
            <tr>
                <th colspan="4" class="fs-16  text-center p-3">vos informations personnelles</th>
            </tr>
        </thead>
        
        <tr>
        <td>Nom</td>
        <td>${compte.nom}</td>
        </tr>
        <tr>
        <td>Prénom</td>
        <td>${compte.prenom}</td>
        </tr>
        <tr>
        <td>Genre</td>
        <td>${compte.genre}</td>
        </tr>
        <tr>
        <td>Date de naissance</td>
        <td>${compte.dateNaissance}</td>
        </tr>
        <tr>
        <td>Lieu de naissance</td>
        <td>${compte.lieuNaissance}</td>
        </tr>
        <tr>
        <td>Numéro de carte nationale</td>
        <td>${compte.numeroCarteNationale}</td>
        </tr>
        <tr>
        <td>Téléphone</td>
        <td>${compte.telephone}</td>
        </tr>
        <tr>
        <td>Email</td>
        <td>${compte.email}</td>
        </tr>
    </table>


        <input class="border-1 button-background-orange col-sm-8 col-md-7 col-lg-6  " 
            type="button" value="confirmer vos informations" 
            onclick="finalizeButton()" id="finalizeButton">
    
    `;

}

// generer un rib

function genereRIB(sold) {

    let numeroCompte = ""
    for (let i = 0; i < 16; i++)
        numeroCompte += Math.floor(Math.random() * 10).toString();
    let rib = {
        codeBanque: "232",
        codeLocalite: "676",
        cleRIB: "37",
        numeroCompte: numeroCompte,
        sold:sold,
        etat:"active"
    }
    return rib;
}

//  sauvgarder dans localstorage
function creerCompteDansLLocalStorage() {
    localStorage.removeItem("compte");
    localStorage.setItem("compte", JSON.stringify(compte))
}

