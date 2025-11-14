if (localStorage.getItem("login") != "seccuss")
    window.location.href = "login.html";

const factures = document.querySelectorAll('.facture')
const formulairefacture = document.getElementById('formulairefacture');
const montantfacture = document.getElementById("montantfacture");
const infomontantfacture = document.getElementById('infomontantfacture');
const contrat = document.getElementById("contrat")
const infocontra = document.getElementById('infocontra');
const validef = document.getElementById('validef')
let btnclose = document.getElementById('btnclose');
btnclose.addEventListener('click', () => {
  formulairefacture.classList.add('d-none');
  contrat.value = ""
  montantfacture.value = ""
});

factures.forEach(facture => {
  facture.addEventListener('click', function () {
    formulairefacture.classList.remove('d-none');

  });
});

validef.addEventListener('click', (e) => {
  e.preventDefault();
  let erreur = false;

  let compte = JSON.parse(localStorage.getItem('compte'))
  let listTransaction = JSON.parse(localStorage.getItem('listTransaction')) || [];
  const numContrat = contrat.value.trim();
  const montant = parseFloat(montantfacture.value) || 0;

  infocontra.textContent = "";
  infomontantfacture.textContent = "";

  if (compte.typeactive !== "Compte Principal") {
    alert("Veuillez changer votre compte au compte Principal")
    erreur = true;
  }

  if (compte.ribComptePrincipal.etat !== "active") {
    alert("Veuillez activer votre compte !!")
    erreur = true;
  }

  if (Number(compte.ribComptePrincipal.sold) < montant) {
    alert('Solde insuffisant.');
    erreur = true;
  }

  if (numContrat === "" || numContrat.length < 6) {
    infocontra.textContent = "Numéro de contrat invalide !! (6)"
    infocontra.classList.add('text-orange');
    erreur = true;
  }

  if (montant < 50 || montant <= 0) {
    infomontantfacture.textContent = "Montant minimum: 50 DH";
    infomontantfacture.classList.add('text-orange');
    erreur = true;
  }
  let montantConsumerparmois = 0;
  listTransaction.forEach(element => {
    montantConsumerparmois += -1 * Number(element.montant);
  });

  if (compte.plafondOperation && (montantConsumerparmois + montant > Number(compte.plafondOperation))) {
    alert('Vous avez dépassé le plafond mensuel autorisé.');
    return;
  }

  if (!erreur) {
    if (!confirm(`Voulez-vous ajouter cette Paiement de ${montant} DH  !` )) {
      return;
    }

    compte.ribComptePrincipal.sold = Number(compte.ribComptePrincipal.sold) - Number(montant);

    let idTransaction = parseInt(localStorage.getItem("idTransaction")) || 1;

    let transaction = {
      idTransaction: idTransaction,
      motif: "Facture Eau électricité - " + numContrat,
      montant: -montant,
      datetransaction: new Date()
    };

    listTransaction.push(transaction);

    localStorage.setItem("listTransaction", JSON.stringify(listTransaction));
    localStorage.setItem("idTransaction", idTransaction + 1);
    localStorage.setItem("compte", JSON.stringify(compte));

    alert(`Paiement de ${montant} DH réussi !`)

    if (typeof chargeinfodecompte === 'function') {
      chargeinfodecompte();
    }

    formulairefacture.classList.add('d-none')
    contrat.value = "";
    montantfacture.value = "";
  }
});