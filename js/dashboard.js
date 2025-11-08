if (localStorage.getItem("login") != "seccuss")
    window.location.href = "login.html";


let sectionInfoCompte = document.getElementById('sectionInfoCompte')
chargeinfodecompte()
function chargeinfodecompte() {
    let compte= JSON.parse(localStorage.getItem('compte'))
    let div = document.createElement('div')
    div.setAttribute('class', 'd-flex justify-content-between align-items-center  pb-1')
    div.innerHTML = ` <div class=" ">
                    <div class="fs-12 fw-bold  text-orange">
                        compte de debiter
                    </div>
                    <div class="fs-12">
                        ${compte.nom}
                    </div>
                    <div class="fs-12">
                        ${compte.ribComptePrincipal.numeroCompte}
                    </div>
                </div>
                <div class="align-self-end fs-12 fw-bold">${compte.sold} </div>`
    sectionInfoCompte.appendChild(div)
}