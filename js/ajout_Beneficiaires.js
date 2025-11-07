let buttonAjoutBeneficaireYCD = document.getElementById('buttonAjoutBeneficaireYCD')
let inputNumeroCompteBYCD = document.getElementById('inputNumeroCompteBYCD')
let inputNomCompteBYCD = document.getElementById('inputNomCompteBYCD')


buttonAjoutBeneficaireYCD.addEventListener("click", function () {
    let tabBeneficaires = JSON.parse(localStorage.getItem('tabBeneficaires')) || []
    console.log(tabBeneficaires)

})

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
        if (confirm("bbbbbbbb")) {
            let tabBeneficaires = JSON.parse(localStorage.getItem('tabBeneficaires')) || []
            tabBeneficaires.push(creeBeneficaire());
            localStorage.setItem('tabBeneficaires', JSON.stringify(tabBeneficaires))
        }
    }
    else
        alert('dfghj')

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

