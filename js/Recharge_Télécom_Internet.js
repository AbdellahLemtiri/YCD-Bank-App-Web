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
// const iam = document.getElementById('iam');
// const inwi = document.getElementById('iam');
// const orange = document.getElementById('iam');
// const miditel = document.getElementById('iam');
// const afriqia = document.getElementById('iam');
// const stm = document.getElementById('iam');
// const yoxo = document.getElementById('iam');
// console.log(iam);
// console.log(inwi);
// console.log(yoxo);
let btn_acheter_autre_racharge = document.getElementById('btn_acheter_autre_racharge');
let nomR = "";
let imgRecharge = ""
recharges.forEach(recharge => {
    recharge.addEventListener('click', function () {
    nomR = this.querySelector('h6').textContent;
    imgRecharge = this.querySelector('img').getAttribute('src')
        container_recharge.classList.add('d-none');
        container_for_recharge.classList.remove('d-none');
   
    })
});
let cmptR = 0;
let Favoris = 0;
btn_acheter_autre_racharge.addEventListener('click', () => {
    container_recharge.classList.remove('d-none');
    imgsucces.classList.add('d-none');
    container_for_recharge.classList.add('d-none');
    container_alias.classList.add('d-none');
    FavorisR.classList.remove('d-none');
    Favoris = 0;
    phoneR.value = '';
    aliasR.value = "";

})
buttonaccuile.addEventListener('click', () => {
    Window.location.href = 'future/dashboard_1.html'
});


FavorisR.addEventListener('click', () => {
    container_alias.classList.remove('d-none');
    FavorisR.classList.add('d-none');
    Favoris = 1;
});

valideR.addEventListener('click', () => {
    infonum.innerHTML = '';
    infoalias.innerHTML = '';
    imgsucces.classList.add('d-none');

console.log(nomR);

    let erreur = false;
    if (phoneR.value.length !== 10) {
        infonum.innerHTML = 'N° de téléphone invalide !';
        erreur = true;
    }

    //  important
    // if(montantR > solde){
    //     erreur = true;
    //     infomontant.innerHTML = "Votre solde est insuffisant !";
    // }

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
        num: phoneR.value  ,
        image : imgRecharge   
        };
    tabfavoris.push(favori);
    localStorage.setItem("listfavoris", JSON.stringify(tabfavoris));
    localStorage.setItem("idF", idF + 1); 
}
        imgsucces.classList.remove('d-none');
    }
    let tabhistorique = JSON.parse(localStorage.getItem("listTransaction")) || [] ;
    let idTransaction = localStorage.getItem("idTransaction") || 1 ;
    let transaction = {
        idTransaction: idTransaction,
        motif: nomR,
        montant: montantR.value,
        datetransaction: new Date()
    }
    tabhistorique.push(transaction);
    localStorage.setItem("listTransaction", JSON.stringify(tabhistorique))
    localStorage.setItem("idTransaction", ++idTransaction)
});

