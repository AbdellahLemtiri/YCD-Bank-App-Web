const factures = document.querySelectorAll('.facture');
const formulairefacture = document.getElementById('formulairefacture');
const montantfacture = document.getElementById("montantfacture");
const infomontantfacture = document.getElementById('infomontantfacture');
const contrat = document.getElementById("contrat");
const infocontra = document.getElementById('infocontra');
const validef = document.getElementById('validef');
let btnclose = document.getElementById('btnclose');
btnclose.addEventListener('click', () => {
  formulairefacture.classList.add('d-none');
  contrat.value = "";
  montantfacture.value = "";
})

factures.forEach(facture => {
  facture.addEventListener('click', function () {

    const nomF = this.querySelector('p').textContent.trim();
    formulairefacture.classList.remove('d-none');
  });
});


validef.addEventListener('click', () => {

  let erreur = false;
  const numContrat = contrat.value.trim();
  const montant = montantfacture.value.trim();

  if (numContrat === "" || numContrat.length < 6) {
    infocontra.textContent = "Veuillez entrer un numéro de contrat valide !";
    infocontra.classList.add('text-orange');
    erreur = true;
  }

  if (montant < 50 || montant <= 0) {
    infomontantfacture.textContent = "Veuillez entrer un montant valide";
    infomontantfacture.classList.add('text-orange');
    erreur = true;
  }
  if (erreur === false) {

    
    if (compte.ribComptePrincipal) {
        compte.ribComptePrincipal.sold = Number(compte.ribComptePrincipal.sold) - Number(montant);
    }
    alert(`Paiement de ${montant} DH pour le contrat ${numContrat} validé !`);
    formulairefacture.classList.add('d-none');
    let tabhistorique = JSON.parse(localStorage.getItem("listTransaction")) || [];
    let idTransaction = JSON.parse(localStorage.getItem("idTransaction")) || 1;
    let transaction = {
      idTransaction: idTransaction,
      motif: "Facure Eua electicite",
      montant: -montantfacture.value,
      datetransaction: new Date()
    }
    tabhistorique.push(transaction);
    localStorage.setItem("listTransaction", JSON.stringify(tabhistorique))
    localStorage.setItem("idTransaction", ++idTransaction)
  }
  contrat.value = "";
  montantfacture.value = "";
});






