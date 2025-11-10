const recharges = document.querySelectorAll('.recharge');
const container_recharge = document.getElementById('container_recharge');
const container_for_recharge = document.getElementById('container_for_recharge');
recharges.forEach(recharge => {
    recharge.addEventListener('click', function () {
        container_recharge.classList.add('d-none');
        container_for_recharge.classList.remove('d-none');
    })
});
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
imgsucces = document.getElementById('imgsucces');
let cmptR = 0;
FavorisR.addEventListener('click', () => {
    container_alias.classList.remove('d-none');
    FavorisR.classList.add('d-none');
})
valideR.addEventListener('click', () => {
    if (phoneR.value.length > 10 || phoneR.value.length < 10) {
        infonum.innerHTML = 'N° de phone invalide ! '
    }
    else if (aliasR.value.length > 20) {
        infoalias.innerHTML = 'Pas plus de 20 caracteres';
    }
    else if (aliasR.value.length < 2) {
        infoalias.innerHTML = 'Pas moins de 2 caracteres'
    }
    else {

        infonum.innerHTML = '';
        infoalias.innerHTML = '';
        imgsucces.classList.remove('d-none');
    }
  
});





