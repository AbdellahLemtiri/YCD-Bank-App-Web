if (localStorage.getItem("login") != "seccuss")
    window.location.href = "login.html";

let idsalut = document.getElementById('idsalut')
let sectionInfoCompte = document.getElementById('sectionInfoCompte')


chargeinfodecompte()
function chargeinfodecompte() {
    let compte = JSON.parse(localStorage.getItem('compte'))
    let nomcomplet = (compte.genre == "Homme" ? "Mr. " : "M. ") + compte.nom + " " + compte.prenom
    idsalut.innerText = "Bonjour " + nomcomplet
    document.getElementById('idTypedeCompte').textContent = compte.typeactive

    if (compte.typeactive == "Compte Principal") {
        document.getElementById('soldiddashboard').textContent = compte.ribComptePrincipal.sold
        document.getElementById('idRIBCompte').textContent = compte.ribComptePrincipal.numeroCompte

    } else {
        document.getElementById('soldiddashboard').textContent = compte.ribCompteEparne.sold
        document.getElementById('idRIBCompte').textContent = compte.ribCompteEparne.numeroCompte
    }
}


const nonaffichier_solde = document.getElementById('nonaffichier_solde');
const affichier_solde = document.getElementById('affichier_solde');
let noeye = document.getElementById('noeye');
let eye = document.getElementById('eye');
eye.addEventListener('click', function () {
    nonaffichier_solde.classList.add('d-none');
    affichier_solde.classList.remove('d-none');
});
noeye.addEventListener('click', function () {
    nonaffichier_solde.classList.remove('d-none');
    affichier_solde.classList.add('d-none');
});







//========== pour change le compte  
let pointsaction = document.getElementById('pointsaction');
let compte1 = document.getElementById('compte1');
pointsaction.addEventListener('click', function () {
    let compte = JSON.parse(localStorage.getItem('compte'))
    if (compte.typeactive == "Compte Principal") {
        if (confirm("Voulez-vous passer au Compte Épargne ?")) {
            compte.typeactive = "Compte Eparne"
            localStorage.setItem("compte", JSON.stringify(compte))
            pointsaction.classList.toggle('flex-row-reverse')
        }
    } else {
        if (confirm("Voulez-vous passer au Compte Principal ? ")) {
            compte.typeactive = "Compte Principal"
            localStorage.setItem("compte", JSON.stringify(compte))
            pointsaction.classList.toggle('flex-row-reverse')
        }
    }
    chargeinfodecompte()
})
document.getElementById('navbar-button').addEventListener('click', function () {
    document.getElementById('navlist').classList.toggle('d-none')
})

document.getElementById('DeconnexionButton').addEventListener('click', function () {
    if (confirm("Voulez-vous vous déconnecter ?")) {
        let listComptes = JSON.parse(localStorage.getItem('listComptes')) || [];
        let compte = JSON.parse(localStorage.getItem('compte')) || {};
        let index = listComptes.findIndex(compt => compt.idcompte == compte.idcompte);
        listComptes[index] = compte;
        localStorage.setItem('listComptes', JSON.stringify(listComptes));
        localStorage.removeItem('compte');
        localStorage.removeItem("login");
        alert(" Déconnexion réussie !");
        window.location.href = "login.html"; //  page de connexion
    }
});