let buttonAjoutBeneficaireYCD = document.getElementById('buttonAjoutBeneficaireYCD')
let inputNumeroCompteBYCD = document.getElementById('inputNumeroCompteBYCD')
let inputNomCompteBYCD = document.getElementById('inputNomCompteBYCD')

 

inputNomCompteBYCD.addEventListener("keyup", function () {
    if (inputNomCompteBYCD.value.length > 5)
        change_border_to_success(inputNomCompteBYCD)
    else
        change_border_to_error(inputNomCompteBYCD)
})

inputNumeroCompteBYCD.addEventListener("keyup", function () {
    if (inputNumeroCompteBYCD.value.length === 16)
        change_border_to_success(inputNumeroCompteBYCD)
    else
        change_border_to_error(inputNumeroCompteBYCD)
})

buttonAjoutBeneficaireYCD.addEventListener("click", function () {
    if (inputNumeroCompteBYCD.value.length === 16 && inputNomCompteBYCD.value.length > 5) {
        if (confirm("vous voullez  ajoute ?")) {
            let tabBeneficaires = JSON.parse(localStorage.getItem('tabBeneficaires')) || []
            let xxx=creeBeneficaire(inputNomCompteBYCD.value, inputNumeroCompteBYCD.value,true)
            tabBeneficaires.push(xxx);
            localStorage.setItem('tabBeneficaires', JSON.stringify(tabBeneficaires))
        }
    }
    else
        alert('les info de champs invalide ')

})


// functions

 
function creeBeneficaire( nom, rib, bycd = true) {
    let datenow = new Date()
    let beneficaire = {}
    if (bycd == true) {
        beneficaire.nomcmplet = nom
        beneficaire.numerocompte = "232" + "676" + rib + "37"
        beneficaire.dateajout = datenow
        beneficaire.type = "YCD"
        beneficaire.etat = "active"
    }
    else {
        beneficaire.nomcmplet = nom
        beneficaire.numerocompte = rib
        beneficaire.dateajout = datenow
        beneficaire.type = "Autre"
        beneficaire.etat = "active"
    }

    return beneficaire
}

// ///////////////////////////////////////////////////////////////////////////////

let buttonAjoutBeneficaireRIB = document.getElementById('buttonAjoutBeneficaireRIB')
let inputNumeroRIB = document.getElementById('inputNumeroRIB')
let inputNomRIB = document.getElementById('inputNomRIB')


inputNomRIB.addEventListener("keyup", function () {
    if (inputNomRIB.value.length > 5)
        change_border_to_success(inputNomRIB)
    else
        change_border_to_error(inputNomRIB)
})

inputNumeroRIB.addEventListener("keyup", function () {
    if (inputNumeroRIB.value.length === 24)
        change_border_to_success(inputNumeroRIB)
    else
        change_border_to_error(inputNumeroRIB)
})

buttonAjoutBeneficaireRIB.addEventListener("click", function () {
    if (inputNumeroRIB.value.length === 24 && inputNomRIB.value.length > 5) {
        if (confirm("vous voullez  ajoute ?")) {
            let tabBeneficaires = JSON.parse(localStorage.getItem('tabBeneficaires')) || []
            tabBeneficaires.push(creeBeneficaire(inputNomRIB.value, inputNumeroRIB.value, false));
            localStorage.setItem('tabBeneficaires', JSON.stringify(tabBeneficaires))
        }
    }
    else
        alert('les info de champs invalide ')

})


 

// document.getElementById('formVerement1').addEventListener('click', function (e) {
//     console.log("e.target : ", e.target.id);
//     let alertConfirm = document.createElement("div");
//     alertConfirm.setAttribute("class", "row justify-content-between align-items-center ")
//     alertConfirm.innerHTML = ` <div class="col-12 d-flex flex-column   border-1 " style="width: auto;">
//                             <div class="d-flex justify-content-between p-1">
//                                 <span></span> <span role="button">X</span>
//                             </div>
//                             <div class="d-flex justify-content-center p-2">
//                                 <span class="text-dark">message jsdhjskhds dsjbd</span>
//                             </div>
//                             <div class="d-flex justify-content-around p-1">
//                                 <span class="bg-orange text-white p-1" role="button">ok</span> <span role="button"
//                                     class="bg-danger text-white p-1">nom</span>
//                             </div>
//                         </div>`
//     e.currentTarget.appendChild(alertConfirm);
// });