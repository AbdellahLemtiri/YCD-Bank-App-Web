

// ===============pour affichier ou disaffichier le solde

const nonaffichier_solde = document.getElementById('nonaffichier_solde');
const affichier_solde = document.getElementById('affichier_solde');
let  noeye = document.getElementById('noeye');
let eye = document.getElementById('eye');
eye.addEventListener('click',function(){
    nonaffichier_solde.classList.add('d-none');
    affichier_solde.classList.remove('d-none');
});
noeye.addEventListener('click',function(){
    nonaffichier_solde.classList.remove('d-none');
    affichier_solde.classList.add('d-none');
});


// ===============pour affichier ou disaffichier le solde



const nonaffichier_solde2 = document.getElementById('nonaffichier_solde2');
const affichier_solde2 = document.getElementById('affichier_solde2');
let  noeye2 = document.getElementById('noeye2');
let eye2 = document.getElementById('eye2');
eye2.addEventListener('click',function(){
    nonaffichier_solde2.classList.add('d-none');
    affichier_solde2.classList.remove('d-none');
});
noeye2.addEventListener('click',function(){
    nonaffichier_solde2.classList.remove('d-none');
    affichier_solde2.classList.add('d-none');
});



//========== pour change le compte 
let  pointsc1 = document.getElementById('pointsc1');
let compte1= document.getElementById('compte1');
let pointsc2 = document.getElementById('pointsc2');
let compte2 = document.getElementById('compte2');
pointsc1.addEventListener('click',function(){
    compte1.classList.add('d-none');
    compte2.classList.remove('d-none');
})
pointsc2.addEventListener('click',function(){
    compte1.classList.remove('d-none');
    compte2.classList.add('d-none');
})