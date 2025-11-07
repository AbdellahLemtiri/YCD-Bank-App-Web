
// les dom de
let inputMontant = document.getElementById('inputMontant')
let inputMotif = document.getElementById('inputMotif')
let listBeneficiaire = document.getElementById("listBeneficiaire")
let verementButton = document.getElementById('verementButton')

// 


let tabBeneficaires = JSON.parse(localStorage.getItem('tabBeneficaires')) || []
listBeneficiaire.innerHTML = ""
for (let i = 0; i < tabBeneficaires.length; i++) {
    let option = document.createElement('option')
    option.innerText = tabBeneficaires[i].nomcmplet
    listBeneficiaire.appendChild(option)
}

inputMontant.addEventListener("keyup", function () {
    if (inputMontant.value > 0 && inputMontant.value < 100000)
        change_border_to_success(inputMontant)
    else
        change_border_to_error(inputMontant)
})

inputMotif.addEventListener("keyup", function () {
    if (inputMotif.value.length > 3)
        change_border_to_success(inputMotif)
    else
        change_border_to_error(inputMotif)
})



verementButton.addEventListener("click", function () {

})


// functions

function creeBeneficaire() {
    let datenow = new Date()
    let beneficaire = {
        nomcmplet: inputNomCompteBYCD.value,
        numerocompte: inputNumeroCompteBYCD.value,
        dateajout: datenow,
        etat: "active"
    }
    return beneficaire
}



