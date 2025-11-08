if (localStorage.getItem("login") != "seccuss")
    window.location.href = "login.html";

let idsalut = document.getElementById('idsalut')
let sectionInfoCompte = document.getElementById('sectionInfoCompte')

chargeinfodecompte()
function chargeinfodecompte() {
    let compte = JSON.parse(localStorage.getItem('compte'))
    let nomcomplet = (compte.genre == "Homme" ? "Mr. " : "M. ") + compte.nom + " " + compte.prenom
    idsalut.innerText = "Bonjour " + nomcomplet
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
                        ${compte.ribComptePrincipal.numeroCompte}
                    </div>
                </div>
                <div class="align-self-end fs-12 fw-bold text-success">${compte.ribComptePrincipal.sold} DH</div>`
    sectionInfoCompte.appendChild(div)
}