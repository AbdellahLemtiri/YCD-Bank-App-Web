if (localStorage.getItem("login") != "seccuss")
    window.location.href = "login.html";

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
        localStorage.removeItem('listTransaction');
        localStorage.removeItem('listfavoris');
        localStorage.removeItem('tabBeneficaires');
        localStorage.removeItem("login");
        alert(" Déconnexion réussie !");
        window.location.href = "login.html"; //  page de connexion
    }
});
 
    chargeinfodecompte()
 
function chargeinfodecompte() {
    let compte = JSON.parse(localStorage.getItem('compte'))
    let nomcomplet = (compte.genre == "Homme" ? "Mr. " : "M. ") + compte.nom + " " + compte.prenom
    idsalut.innerText = "Bonjour " + nomcomplet
    let RIB = compte.ribComptePrincipal
    if (compte.typeactive != "Compte Principal")
        RIB = compte.ribCompteEparne

    let div = document.createElement('div')
    div.setAttribute('class', 'd-flex justify-content-between align-items-center  pb-1')
    div.innerHTML = ` <div class=" ">
                    <div class="fs-12 fw-bold  text-orange">
                        compte de debiter
                    </div>
                    <div class="fs-12">
                        ${nomcomplet}
                    </div>
                    <div class="fs-12">
                        ${RIB.numeroCompte}
                    </div>
                </div>
                <div class="align-self-end fs-12 fw-bold text-success">${RIB.sold} DH</div>`
    sectionInfoCompte.innerHTML = ""
    sectionInfoCompte.appendChild(div)
}