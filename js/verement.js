
//  
let inputMontant = document.getElementById('inputMontant')
let inputMotif = document.getElementById('inputMotif')
let listBeneficiaire = document.getElementById("listBeneficiaire")
let verementButton = document.getElementById('verementButton')

uotadelisteBenef();
textChangeEtatDeCompte();
inputMontant.addEventListener("keyup", function () {
    let compte = JSON.parse(localStorage.getItem('compte'))
    let sold = compte.ribComptePrincipal.sold
    if (inputMontant.value > 0 && inputMontant.value < sold)
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
    let compte = JSON.parse(localStorage.getItem('compte')) || {};
    if (compte.typeactive != "Compte Principal") {
        alert("Veuillez changer votre compte au compte Principal");
        return;
    }
    if (compte.ribComptePrincipal.etat != "active") {
        alert(" Veuillez activer votre compte.");
        return;
    }
    if (listBeneficiaire.value !== "NULL" && inputMotif.value.length > 3 && Number(inputMontant.value) > 0) {
        let listTransaction = JSON.parse(localStorage.getItem('listTransaction')) || [];
        let montantConsumerparmois = 0;
        listTransaction.forEach(element => {
            montantConsumerparmois += Number(element.montant);
        });
        let montantSaisi = Number(inputMontant.value);
        if (compte.plafondOperation && (montantConsumerparmois + montantSaisi > Number(compte.plafondOperation))) {
            alert('Vous avez dépassé le plafond mensuel autorisé.');
            return;
        }
        if (confirm("Voulez-vous ajouter cette transaction ?")) {
            listTransaction.push(creeTransaction());

            if (compte.ribComptePrincipal && compte.ribComptePrincipal.sold !== undefined) {
                compte.ribComptePrincipal.sold -= montantSaisi;
            }
            localStorage.setItem('compte', JSON.stringify(compte));
            localStorage.setItem('listTransaction', JSON.stringify(listTransaction));
            alert(' Transaction ajoutée avec succès !');
            inputMotif.value = "";
            inputMontant.value = "";
            listBeneficiaire.value = "NULL";
        }


    } else {
        alert("Veuillez remplir correctement tous les champs")
    }
});

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
    listBeneficiaire.innerHTML = ' <option value="NULL" disabled selected>choisir un beneficiaire</option>'

    if (tabBeneficaires.length > 0) {
        for (let i = 0; i < tabBeneficaires.length; i++) {
            if (tabBeneficaires[i].etat == "active") {
                let option = document.createElement('option')
                option.setAttribute('value', tabBeneficaires[i].idBeneficiare)
                option.innerText = tabBeneficaires[i].nomcmplet
                listBeneficiaire.appendChild(option)
            }
        }
    }
}

function textChangeEtatDeCompte() {
    let compte = JSON.parse(localStorage.getItem('compte')) || {};
    if (compte.typeactive == "Compte Principal")
        document.getElementById('typecomptetext').textContent = "Mon compte epargne"
    else
        document.getElementById('typecomptetext').textContent = "mon compte principal"
}

////////////////////////////////////////////////////////////////////////////////////////

let inputMontantamoi = document.getElementById('inputMontantamoi')
let verementButtonamoi = document.getElementById('verementButtonamoi')
inputMontantamoi.addEventListener("keyup", function () {
    let compte = JSON.parse(localStorage.getItem('compte'))
    let sold = compte.ribComptePrincipal.sold
    if (inputMontantamoi.value > 0 && inputMontantamoi.value < sold)
        change_border_to_success(inputMontantamoi)
    else
        change_border_to_error(inputMontantamoi)
})

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
function creeTransactionVersCompte() {
    let idTransaction = localStorage.getItem("idTransaction") || 1
    let transaction = {
        idTransaction: idTransaction,
        datetransaction: new Date(),
        beneficaire: getBeneficaire(listBeneficiaire.value),
        montant: -inputMontantamoi.value, // 
        motif: "transaction interne" //  
    }
    localStorage.setItem("idTransaction", ++idTransaction)
    return transaction
}

verementButtonamoi.addEventListener("click", function () {
    let montant = Number(inputMontantamoi.value);
    let compte = JSON.parse(localStorage.getItem('compte')) || {};
    if (montant > 0) {
        if (compte.typeactive == "Compte Principal") {
            if (montant > compte.ribComptePrincipal.sold) {
                alert("Solde insuffisant !");
                return;
            }
            if (confirm("Voulez-vous ajouter cette transaction vers votre compte épargne ?")) {
                let listTransaction = JSON.parse(localStorage.getItem('listTransaction')) || [];
                let compte = JSON.parse(localStorage.getItem('compte')) || {};
                listTransaction.push(creeTransaction()); //  

                compte.ribComptePrincipal.sold = Number(compte.ribComptePrincipal.sold) - montant;
                compte.ribCompteEparne.sold = Number(compte.ribCompteEparne.sold) + montant;

                localStorage.setItem('compte', JSON.stringify(compte));
                localStorage.setItem('listTransaction', JSON.stringify(listTransaction));
                alert("Virement effectué avec succès !");
                inputMontantamoi.value = "";
            }
        }
        else {
            if (montant > compte.ribCompteEparne.sold) {
                alert("Solde insuffisant !");
                return;
            }
            if (confirm("Voulez-vous ajouter cette transaction vers votre compte principal ?")) {
                let listTransaction = JSON.parse(localStorage.getItem('listTransaction')) || [];
                let compte = JSON.parse(localStorage.getItem('compte')) || {};

                listTransaction.push(creeTransactionVersCompte());

                compte.ribComptePrincipal.sold = Number(compte.ribComptePrincipal.sold) + montant; //   ADD to Principal
                compte.ribCompteEparne.sold = Number(compte.ribCompteEparne.sold) - montant;     //   

                localStorage.setItem('compte', JSON.stringify(compte));
                localStorage.setItem('listTransaction', JSON.stringify(listTransaction));
                alert("Virement effectué avec succès !");
                inputMontantamoi.value = "";
            }
        }
    } else {
        alert(" Montant invalide !");
    }
});

