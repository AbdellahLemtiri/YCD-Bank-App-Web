if (localStorage.getItem("login") != "seccuss")
    window.location.href = "login.html";


let verementButtonSection = document.getElementById("VerementButtonSection")
let ajoutBeneficiaireButtonSection = document.getElementById("ajoutBeneficiaireButtonSection")
let gestionBeneficiaireButtonSection = document.getElementById("gestionBeneficiaireButtonSection")
let interfaceAjouteBenef = document.getElementById("interfaceAjouteBenef")
let interfaceVerement = document.getElementById("interfaceVerement")
let interfacegestionBenef = document.getElementById("interfacegestionBenef")

let choixcompteBeneficaire1 = document.getElementById('choixcompteBeneficaire1')
let choixcompteBeneficaire2 = document.getElementById('choixcompteBeneficaire2')
let formVerement1 = document.getElementById('formVerement1')
let formVerement2 = document.getElementById('formVerement2')

let choixBanqueYCD = document.getElementById('choixBanqueYCD')
let choixBanqueAutre = document.getElementById('choixBanqueAutre')
let formAjoutBeneficaire1 = document.getElementById('formAjoutBeneficaire1')
let formAjoutBeneficaire2 = document.getElementById('formAjoutBeneficaire2')
// 



verementButtonSection.addEventListener("click", function () {
    switchInterfaceSection(interfaceVerement, interfaceAjouteBenef, interfacegestionBenef)
    changebuttonSection(verementButtonSection, ajoutBeneficiaireButtonSection, gestionBeneficiaireButtonSection)
    uotadelisteBenef()
})
ajoutBeneficiaireButtonSection.addEventListener("click", function () {
    switchInterfaceSection(interfaceAjouteBenef, interfaceVerement, interfacegestionBenef)
    changebuttonSection(ajoutBeneficiaireButtonSection, verementButtonSection, gestionBeneficiaireButtonSection)

})
gestionBeneficiaireButtonSection.addEventListener("click", function () {
    switchInterfaceSection(interfacegestionBenef, interfaceVerement, interfaceAjouteBenef)
    changebuttonSection(gestionBeneficiaireButtonSection, verementButtonSection, ajoutBeneficiaireButtonSection)
    let listBeneficiaire = JSON.parse(localStorage.getItem('tabBeneficaires')) || []
    updatecart(listBeneficiaire)

})

choixcompteBeneficaire1.addEventListener("click", function () {
    switchInterfaceSection(formVerement1, formVerement2, formVerement2)
})
choixcompteBeneficaire2.addEventListener("click", function () {
    switchInterfaceSection(formVerement2, formVerement1, formVerement1)
})


choixBanqueYCD.addEventListener("click", function () {
    switchInterfaceSection(formAjoutBeneficaire1, formAjoutBeneficaire2, formAjoutBeneficaire2)
})
choixBanqueAutre.addEventListener("click", function () {
    switchInterfaceSection(formAjoutBeneficaire2, formAjoutBeneficaire1, formAjoutBeneficaire1)
})

function switchInterfaceSection(interfaceActive, interfacedesactive1, interfacedesactive2) {
    interfaceActive.classList.remove('d-none');
    interfacedesactive1.classList.add('d-none');
    interfacedesactive2.classList.add('d-none');
}
function changebuttonSection(interfaceActive, interfacedesactive1, interfacedesactive2) {
    interfaceActive.setAttribute('class', 'col-4 col-md-6 p-3 bg-orange text-white fs-14 text-center border-white-left');
    interfacedesactive1.setAttribute('class', 'col-4 col-md-3 p-3 bg-grey text-center fs-14 border-white-left');
    interfacedesactive2.setAttribute('class', 'col-4 col-md-3 p-3 bg-grey text-center fs-14 border-white-left');
}

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
// supprimer les champ
function vider_champ(inputElement) {
    inputElement.value = "";
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





 

chargeinfodecompte()
function chargeinfodecompte() {
    let idsalut = document.getElementById('idsalut')
    let sectionInfoCompte = document.getElementById('sectionInfoCompte')
    sectionInfoCompte.innerHTML = ""
    let compte = JSON.parse(localStorage.getItem('compte'))
    let nomcomplet = (compte.genre == "Homme" ? "Mr. " : "M. ") + compte.nom + " " + compte.prenom
    idsalut.innerText = "Bonjour " + nomcomplet
    document.getElementById('plafondquotidienaffiche').textContent = compte.plafondQuotidien
    document.getElementById('plafondoperationaffiche').textContent = compte.plafondOperation
    let div = document.createElement('div')
    div.setAttribute('class', 'd-flex justify-content-between align-items-center  pb-1')
    div.innerHTML = ` <div class=" ">
                    <div class="fs-12 fw-bold  text-orange">
                        compte de debiter
                    </div>
                    <div class="fs-12">
                        ${nomcomplet}
                    </div>
                    <div class="fs-12">
                        ${compte.ribComptePrincipal.numeroCompte}
                    </div>
                </div>
                <div class="align-self-end fs-12 fw-bold text-success">${compte.ribComptePrincipal.sold} DH</div>`
    sectionInfoCompte.appendChild(div)
}







