const factures = document.querySelectorAll('.facture');
const formulairefacture = document.getElementById('formulairefacture');
const montantfacture = document.getElementById("montantfacture");
const infomontantfacture = document.getElementById('infomontantfacture');
const contrat = document.getElementById("contrat");
const infocontra = document.getElementById('infocontra');
const validef = document.getElementById('validef');


factures.forEach(facture => {
  facture.addEventListener('click', function () {
    
    const nomF = this.querySelector('p').textContent.trim();
    
    
    formulairefacture.classList.remove('d-none');
    
  
    console.log("Facture sélectionnée :", nomF);
  });
});


validef.addEventListener('click', () => {
 
   let erreur = false;
  const numContrat = contrat.value.trim();
  const montant = montantfacture.value.trim();
  
  if (numContrat === "" ) {
    infocontra.textContent = "Veuillez entrer le numéro de contrat";
    infocontra.classList.add('text-orange');
    erreur = true;
  }
//   if(montantR > solde){
//      erreur = true;
//      infomontant.innerHTML = "Votre solde est insuffisant !";
//  }
  if (!montant || montant <= 0) {
    infomontantfacture.textContent = "Veuillez entrer un montant valide";
    infomontantfacture.classList.add('text-orange');
     erreur = true;
  }
if( erreur === false){
      alert(`Paiement de ${montant} DH pour le contrat ${numContrat} validé !`);
  formulairefacture.classList.add('d-none');
  contrat.value = "";
  montantfacture.value = "";

   let tabhistorique = JSON.parse(localStorage.getItem("listTransaction")) || [];
    let idTransaction = JSON.parse(localStorage.getItem("idTransaction")) || 1;
    let transaction = {
        idTransaction: idTransaction ,
        motif: "Facure Eua electicite",
        montant: montantfacture.value,
        datetransaction: new Date()
    }
    tabhistorique.push(transaction);
    localStorage.setItem("listTransaction", JSON.stringify(tabhistorique))
    localStorage.setItem("idTransaction", ++idTransaction)
}
});












// valideR.addEventListener('click', () => {
//     infonum.innerHTML = '';
//     infoalias.innerHTML = '';
//     imgsucces.classList.add('d-none');

//     console.log(nomR);

//     let erreur = false;
//     if (phoneR.value.length !== 10) {
//         infonum.innerHTML = 'N° de téléphone invalide !';
//         erreur = true;
//     }

//     //  important


//     // if(montantR > solde){
//     //     erreur = true;
//     //     infomontant.innerHTML = "Votre solde est insuffisant !";
//     // }

//     if (Favoris === 1) {
//         if (aliasR.value.length < 2) {
//             infoalias.innerHTML = 'Pas moins de 2 caractères';
//             erreur = true;
//         }

//         else if (aliasR.value.length > 20) {
//             infoalias.innerHTML = 'Pas plus de 20 caractères';
//             erreur = true;
//         }

//     }

//     if (erreur === false) {
//         if (Favoris === 1) {
//             let idF = parseInt(localStorage.getItem("idF")) || 0;
//             let tabfavoris = JSON.parse(localStorage.getItem("listfavoris")) || [];

//             let favori = {
//                 idF: idF + 1,
//                 alias: aliasR.value,
//                 typeRecharge: nomR,
//                 num: phoneR.value,
//                 image: imgRecharge
//             };


//             const doublons = tabfavoris.filter(fav =>
//                 fav.num === favori.num || fav.alias.toLowerCase() === favori.alias.toLowerCase()
//             );

//             if (doublons.length > 0) {
//               infoalias.innerHTML = "Ce favori existe déjà !";
//                 return;
//             }

            


//             tabfavoris.push(favori);
//             localStorage.setItem("listfavoris", JSON.stringify(tabfavoris));
//             localStorage.setItem("idF", idF + 1);
//         }

//         imgsucces.classList.remove('d-none');
//     }

//     let tabhistorique = JSON.parse(localStorage.getItem("listTransaction")) || [];
//     let idTransaction = localStorage.getItem("idTransaction") || 1;
//     let transaction = {
//         idTransaction: idTransaction,
//         motif: nomR,
//         montant: montantR.value,
//         datetransaction: new Date()
//     }
//     tabhistorique.push(transaction);
//     localStorage.setItem("listTransaction", JSON.stringify(tabhistorique))
//     localStorage.setItem("idTransaction", ++idTransaction)
// });

