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

// buttonAjoutBeneficaireYCD.addEventListener("click", function () {
//     if (inputNumeroCompteBYCD.value.length === 16 && inputNomCompteBYCD.value.length > 5) {
//         if (confirm("vous voullez  ajoute ?")) {
//             let tabBeneficaires = JSON.parse(localStorage.getItem('tabBeneficaires')) || []
//             let beneficaire = creeBeneficaire(inputNomCompteBYCD.value, inputNumeroCompteBYCD.value, true)
//             tabBeneficaires.push(beneficaire);
//             localStorage.setItem('tabBeneficaires', JSON.stringify(tabBeneficaires))
//             vider_champ(inputNomCompteBYCD)
//             vider_champ(inputNumeroCompteBYCD)
//             reset_border(inputNumeroCompteBYCD)
//             reset_border(inputNomCompteBYCD)
//             uotadelisteBenef()
//         }
//     }
//     else
//         alert('les info de champs invalide ')

// })


buttonAjoutBeneficaireYCD.addEventListener("click", function () {
    let nom = inputNomCompteBYCD.value.trim();
    let numero = Number(inputNumeroCompteBYCD.value);
    if (inputNumeroCompteBYCD.value.length === 16 && nom.length > 5) {
        if (confirm("Voulez-vous ajouter ce bénéficiaire ?")) {
            let tabBeneficaires = JSON.parse(localStorage.getItem('tabBeneficaires')) || [];
            let nouveauBeneficiaire = creeBeneficaire(nom, numero, true);
            nouveauBeneficiaire.id = Date.now();

            tabBeneficaires.push(nouveauBeneficiaire);
            localStorage.setItem('tabBeneficaires', JSON.stringify(tabBeneficaires));

            vider_champ(inputNomCompteBYCD);
            vider_champ(inputNumeroCompteBYCD);
            reset_border(inputNumeroCompteBYCD);
            reset_border(inputNomCompteBYCD);
            uotadelisteBenef();

            alert(" Bénéficiaire ajouté avec succès !");
        }
    } else {
        alert(" Les informations saisies sont invalides !");
    }
});



// functions
function creeBeneficaire(nom, rib, bycd = true) {
    let datenow = new Date()
    let idBeneficiare = localStorage.getItem("idBeneficiare") || 1
    let beneficaire = {}
    beneficaire.idBeneficiare = idBeneficiare
    beneficaire.nomcmplet = nom
    beneficaire.dateajout = datenow
    if (bycd == true) {
        beneficaire.numerocompte = "232" + "676" + rib + "37"
        beneficaire.type = "YCD"
        beneficaire.etat = "active"
    }
    else {
        beneficaire.numerocompte = rib
        beneficaire.type = "Autre"
        beneficaire.etat = "active"
    }
    localStorage.setItem("idBeneficiare", ++idBeneficiare)
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
        if (confirm("Voulez-vous ajouter ce bénéficiaire  ?")) {
            let tabBeneficaires = JSON.parse(localStorage.getItem('tabBeneficaires')) || []
            tabBeneficaires.push(creeBeneficaire(inputNomRIB.value, inputNumeroRIB.value, false));
            localStorage.setItem('tabBeneficaires', JSON.stringify(tabBeneficaires))
            vider_champ(inputNomRIB)
            vider_champ(inputNumeroRIB)
            reset_border(inputNumeroRIB)
            reset_border(inputNomRIB)
            uotadelisteBenef()
            alert(" Bénéficiaire ajouté avec succès !");
        }
    }
    else
        alert('Les informations saisies sont invalides !')
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