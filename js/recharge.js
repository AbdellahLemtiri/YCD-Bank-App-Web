const recharges = document.querySelectorAll('.recharge');
const container_recharge = document.getElementById('container_recharge');
const container_for_recharge = document.getElementById('container_for_recharge');
const typeR = document.getElementById("typeR");
const montantR = document.getElementById("montantR");
const infomontant = document.getElementById('infomontant');
const phoneR = document.getElementById("phoneR");
const infonum = document.getElementById('infonum');
const valideR = document.getElementById('valideR');
const FavorisR = document.getElementById('FavorisR');
const container_alias = document.getElementById('container_alias');
const infoalias = document.getElementById('infoalias');
const aliasR = document.getElementById('aliasR');
const imgsucces = document.getElementById('imgsucces');
const buttonaccuile = document.getElementById('buttonaccuile');
const favorisnav = document.getElementById('favoris');
const rechargesnav = document.getElementById('rechargesnav');
const formulairefav = document.getElementById('formulairefav');
const infotele = document.getElementById('infotele');
const container_favoris_et_form = document.getElementById('container_favoris_et_form');
const container_recharge_et_form = document.getElementById('container_recharge_et_form');
const recharge_nav = document.getElementById('recharge_nav1');
const favoris_nav = document.getElementById('favoris_nav1');
const btnclosefr = document.getElementById('btnclosefr');
const montantRfav = document.getElementById('montantRfav');
const validefav = document.getElementById('validefav');
const phoneRfav = document.getElementById('phoneRfav');
validefav.addEventListener('click',()=>{
    let ereouef = false;
    if(phoneRfav.length > 10 ){
        infonum.innerHTML="'N° de téléphone invalide !";
        ereouef = true;
    }
    let montantConsumerparmois = 0;
    listTransaction.forEach(element => {
        montantConsumerparmois += Number(element.montant);
    });
    let montantSaisi = Number(montantR.value);
    if (compte.plafondOperation && (montantConsumerparmois + montantSaisi > Number(compte.plafondOperation))) {
        alert('Vous avez dépassé le plafond mensuel autorisé.');
        erreur = true;
    }
    if (compte.typeactive != "Compte Principal") {
        alert("Veuillez changer votre compte au compte Principal");
        ereouef = true;
    }
    if (compte.ribComptePrincipal.etat != "active") {
        alert(" Veuillez activer votre compte.");
        ereouef=true;
    }
    if(ereouef === false){
let tabhistorique = JSON.parse(localStorage.getItem("listTransaction")) || [];
let idTransaction = localStorage.getItem("idTransaction") || 1;
let transaction = {
    idTransaction: idTransaction,
    motif: "recharge",
    montant: montantRfav.value,
    datetransaction: new Date()
}
compte.ribComptePrincipal.sold = Number(compte.ribComptePrincipal.sold) - Number(montantRfav.value);
tabhistorique.push(transaction);
localStorage.setItem("listTransaction", JSON.stringify(tabhistorique))
localStorage.setItem("idTransaction", ++idTransaction)
localStorage.setItem("compte", JSON.stringify(compte))
chargeinfodecompte()
    }
})

btnclosefr.addEventListener('click', () => {
    container_alias.classList.add('d-none');
    FavorisR.classList.remove('d-none');
    container_for_recharge.classList.add('d-none');
    phoneR.value = '';
    aliasR.value = "";

})
favoris_nav.addEventListener('click', () => {
    container_favoris_et_form.classList.add('d-none');
    container_recharge_et_form.classList.remove('d-none');
})


recharge_nav.addEventListener('click', () => {
    console.log('RECHARGE1');
    container_recharge_et_form.classList.add('d-none');
    container_favoris_et_form.classList.remove('d-none');
})
let btnclose = document.getElementById('btnclose');
btnclose.addEventListener('click', () => {
    formulairefav.classList.add('d-none');
    contrat.value = "";
    montantfacture.value = "";
})
let btn_acheter_autre_racharge = document.getElementById('btn_acheter_autre_racharge');
let nomR = "";
let imgRecharge = ""
recharges.forEach(recharge => {
    recharge.addEventListener('click', function () {
        nomR = this.querySelector('h6').textContent;
        imgRecharge = this.querySelector('img').getAttribute('src')

        console.log('ertyui');

        container_for_recharge.classList.remove('d-none');

    })
});

let cmptR = 0;
let Favoris = 0;
btn_acheter_autre_racharge.addEventListener('click', () => {
    imgsucces.classList.add('d-none');
    container_for_recharge.classList.add('d-none');
    container_alias.classList.add('d-none');
    FavorisR.classList.remove('d-none');
    Favoris = 0;
    phoneR.value = '';
    aliasR.value = "";

})

buttonaccuile.addEventListener('click', () => {
    Window.location.href = "dashboard.html"
});


FavorisR.addEventListener('click', () => {
    container_alias.classList.remove('d-none');
    FavorisR.classList.add('d-none');
    Favoris = 1;
});




valideR.addEventListener('click', () => {
let erreur = false;
    let compte = JSON.parse(localStorage.getItem('compte')) || {};
    let listTransaction = JSON.parse(localStorage.getItem('listTransaction')) || [];
    if (compte.typeactive != "Compte Principal") {
        alert("Veuillez changer votre compte au compte Principal");
       erreur = true;
    }
    if (compte.ribComptePrincipal.etat != "active") {
        alert(" Veuillez activer votre compte.");
        erreur = true;
    }

    infonum.innerHTML = '';
    infoalias.innerHTML = '';
    imgsucces.classList.add('d-none');

    
    if (phoneR.value.length !== 10) {
        infonum.innerHTML = 'N° de téléphone invalide !';
        erreur = true;
    }

    let montantConsumerparmois = 0;
    listTransaction.forEach(element => {
        montantConsumerparmois += Number(element.montant);
    });
    let montantSaisi = Number(montantR.value);
    if (compte.plafondOperation && (montantConsumerparmois + montantSaisi > Number(compte.plafondOperation))) {
        alert('Vous avez dépassé le plafond mensuel autorisé.');
        erreur = true;
    }


    if (Favoris === 1) {
        if (aliasR.value.length < 2) {
            infoalias.innerHTML = 'Pas moins de 2 caractères';
            erreur = true;
        }

        else if (aliasR.value.length > 20) {
            infoalias.innerHTML = 'Pas plus de 20 caractères';
            erreur = true;
        }

    }

    if (erreur === false) {
        if (Favoris === 1) {

            let idF = parseInt(localStorage.getItem("idF")) || 0;
            let tabfavoris = JSON.parse(localStorage.getItem("listfavoris")) || [];
            let favori = {
                idF: idF + 1,
                alias: aliasR.value,
                typeRecharge: nomR,
                num: phoneR.value,
                image: imgRecharge
            };


            const doublons = tabfavoris.filter(fav =>
                fav.num === favori.num || fav.alias.toLowerCase() === favori.alias.toLowerCase()
            );

            if (doublons.length > 0) {
                infoalias.innerHTML = "Ce favori existe déjà !";
                return;
            }

            tabfavoris.push(favori);
            localStorage.setItem("listfavoris", JSON.stringify(tabfavoris));
            localStorage.setItem("idF", idF + 1);
        }
 let tabhistorique = JSON.parse(localStorage.getItem("listTransaction")) || [];
    let idTransaction = localStorage.getItem("idTransaction") || 1;
    let transaction = {
        idTransaction: idTransaction,
        motif: nomR,
        montant: montantR.value,
        datetransaction: new Date()
    }
    compte.ribComptePrincipal.sold = Number(compte.ribComptePrincipal.sold) + Number(montantR.value);
    tabhistorique.push(transaction);
    localStorage.setItem("listTransaction", JSON.stringify(tabhistorique))
    localStorage.setItem("idTransaction", ++idTransaction)
    localStorage.setItem("compte", JSON.stringify(compte))
    chargeinfodecompte()
        imgsucces.classList.remove('d-none');
    }

   

});


document.addEventListener('DOMContentLoaded', () => {
    const lesfavoris = JSON.parse(localStorage.getItem('listfavoris')) || [];
    const favoris_cards = document.getElementById('favoris_cards');
    if (!favoris_cards) return;
    favoris_cards.innerHTML = '';
    if (lesfavoris.length === 0) {
        favoris_cards.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-star fs-1 text-muted mb-3 d-block"></i>
                <p class="text-muted fs-14">Aucun favori ajouté pour le moment.</p>
            </div>
        `;
        return;
    }

    document.getElementById('favoris_cards').addEventListener('click', function (e) {
        if (e.target.closest('button')) return;
        const card = e.target.closest('.favoris-card');
        if (card) {
            formulairefav.classList.remove('d-none');
        }
    });

    lesfavoris.forEach((item, index) => {
        const col = document.createElement('div');
        col.className = 'col-6 col-md-4 col-lg-3';
        col.innerHTML = `
            <div class="border-1  favoris-card p-1 bg-white rounded-5 shadow-sm ">
                <div class="p-3 d-flex align-items-center">
                    <div class="flex-grow-1">
                        <div class="d-flex align-items-center gap-2 mb-2">
                    <img class="w-25" src="${item.image}" alt="">      
                        </div>
                        <p class="mb-1 fw-semibold">${item.alias}</p>
                        <p class="m-0 text-muted small">${item.num || ''}</p>
                    </div>
                    
                    <button class="btn rounded-4 btn-sm btn-outline-danger ms-2" 
                            onclick="supprimerFavori(${index})" 
                            title="Supprimer des favoris">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        `;

        favoris_cards.appendChild(col);
    });
});



function supprimerFavori(index) {

    let lesfavoris = JSON.parse(localStorage.getItem('listfavoris')) || [];
    lesfavoris.splice(index, 1);
    localStorage.setItem('listfavoris', JSON.stringify(lesfavoris));
    location.reload();
}
ajouter_fav();