
// les dom de
let inputMontant = document.getElementById('inputMontant')
let inputMotif = document.getElementById('inputMotif')
let listBeneficiaire = document.getElementById("listBeneficiaire")
let verementButton = document.getElementById('verementButton')

uotadelisteBenef();

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
listBeneficiaire.addEventListener("keyup", function () {
    if (listBeneficiaire.value != "NULL")
        change_border_to_success(inputMotif)
    else
        change_border_to_error(inputMotif)
})

 
verementButton.addEventListener("click", function () {
    if (listBeneficiaire.value != "NULL" && inputMotif.value.length > 3 && inputMontant.value > 0) {
        if (confirm("vous voullez  ajoute ?")) {
            let listTransaction = JSON.parse(localStorage.getItem('listTransaction')) || []
            listTransaction.push(creeTransaction());
            localStorage.setItem('listTransaction', JSON.stringify(listTransaction))
        }
    }
    else alert("error")
})

function getBeneficaire(id) {
    let tabBeneficaires = JSON.parse(localStorage.getItem('tabBeneficaires')) || []
    let beneficaire = {}
    tabBeneficaires.forEach(b => {
        if (b.idBeneficiare == id)
            beneficaire = b
    });
    return beneficaire
}

function creeTransaction() {
    let idTransaction = localStorage.getItem("idTransaction") || 1
    let transaction = {
        idTransaction: idTransaction,
        datetransaction: new Date(),
        beneficaire: getBeneficaire(listBeneficiaire.value),
        montant: inputMontant.value,
        motif: inputMotif.value
    }
    localStorage.setItem("idTransaction", ++idTransaction)
    return transaction
}

// functions

function uotadelisteBenef() {
    let tabBeneficaires = JSON.parse(localStorage.getItem('tabBeneficaires')) || []
    if (tabBeneficaires.length > 0) {
        listBeneficiaire.innerHTML = ' <option value="NULL" disabled selected>choisir un beneficiaire</option>'
        for (let i = 0; i < tabBeneficaires.length; i++) {
            let option = document.createElement('option')
            option.setAttribute('value', tabBeneficaires[i].idBeneficiare)
            option.innerText = tabBeneficaires[i].nomcmplet
            listBeneficiaire.appendChild(option)
        }
    }
}



////////////////////////////////////////////////////////////////////////////////////////

let inputMontantamoi = document.getElementById('inputMontantamoi') 
let verementButtonamoi = document.getElementById('verementButtonamoi')
inputMontantamoi.addEventListener("keyup", function () {
    if (inputMontantamoi.value > 0 && inputMontantamoi.value < 100000)
        change_border_to_success(inputMontantamoi)
    else
        change_border_to_error(inputMontantamoi)
})