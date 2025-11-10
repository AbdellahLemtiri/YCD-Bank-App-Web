if (localStorage.getItem("login") != "seccuss")
    window.location.href = "login.html";

let idsalut = document.getElementById('idsalut')
let sectionInfoCompte = document.getElementById('sectionInfoCompte')
let moncarte = document.getElementById('moncarte')

chargeinfodecompte(false)
function chargeinfodecompte(etat) {
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
    sectionInfoCompte.innerHTML = ""
    sectionInfoCompte.appendChild(div)

    let divcarte = document.createElement('div')
    divcarte.setAttribute('class', 'card d-flex flex-column gap-4 p-4 text-white m-2')

    if (compte.ribComptePrincipal.etat == "active") {
        document.getElementById('bloquedebloque').classList.add('justify-content-end')
        divcarte.classList.add('bg-carte')
        document.getElementById('etatdecarte').textContent = "carte debloquee"

    } else {
        compte.ribComptePrincipal.etat = 'active'
        document.getElementById('bloquedebloque').classList.remove('justify-content-end')
        document.getElementById('etatdecarte').textContent = "carte bloquee"
        divcarte.classList.add('bg-grey')
    }

    moncarte.innerHTML = ""
    divcarte.innerHTML = ` <span class="fw-bold">YCD Bank</span>
                    <span class=""> ${compte.ribComptePrincipal.numeroCompte}</span>
                    <div class="d-flex justify-content-between gap-4 fs-14">
                        <div class="d-flex flex-column">
                            <span>Card Holder Name</span>
                            <span>  ${nomcomplet}</span>
                        </div>
                        <div class="d-flex flex-column">
                            <span>Expired Date</span>
                            <span>10/28</span>
                        </div>
                        <div>
                            <img src="../images/MasterCard.png" alt="MasterCard">

                        </div>
                    </div>`
    moncarte.append(divcarte)
}

document.getElementById('bloquedebloque').addEventListener('click', function () {
    if (confirm('Voulez-vous vraiment changer l\'état du compte principal ')) {
        let compte = JSON.parse(localStorage.getItem('compte'))
        if (compte.ribComptePrincipal.etat == 'active')
            compte.ribComptePrincipal.etat = 'desacive'
        else compte.ribComptePrincipal.etat = 'active'
        localStorage.setItem('compte', JSON.stringify(compte))
        chargeinfodecompte(true)
    }
})

let interfacedegestiondescarte = document.getElementById('interfacedegestiondescarte')
interfacedegestiondescarte.addEventListener('click', (e) => {
    let elementclik = e.target
    console.log(elementclik)
    let idcard = elementclik.closest('div.border-1').getAttribute('id');  // gei id from card 
    if (elementclik.tagName === "IMG") {
        let ner = elementclik.closest('div.border-1').querySelector('ul').classList.toggle('d-none');
        console.log(ner)
    }


})









