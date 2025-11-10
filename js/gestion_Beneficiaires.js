let interfacelistbeneficaire = document.getElementById('interfacelistbeneficaire')


updatecart()

function updatecart() {
    let listBeneficiaire = JSON.parse(localStorage.getItem('tabBeneficaires'))
    interfacelistbeneficaire.innerHTML = ""
    listBeneficiaire.forEach(bebeficaire => {
        let etatcolor = "text-success"
        let etataction = "desactiver"
        if (bebeficaire.etat == "desactiver") {
            etatcolor = "text-danger"
            etataction = "activer"
        }
        let div = document.createElement('div')
        div.setAttribute('class', ' col-11 col-sm-11 col-md-5 col-lg-3 d-flex flex-column justify-content-center align-items-center border-1')
        div.setAttribute('id', bebeficaire.idBeneficiare)
        div.innerHTML = `<span>${bebeficaire.nomcmplet}</span>
                    <span> ${bebeficaire.numerocompte}</span>
                    <span class="${etatcolor}">${bebeficaire.etat}</span>
                    <button class="bg-opacity-0 border-0 align-self-end "><img src="../images/Collapse-icon.png"
                            alt=""></button>
                    <ul class="d-none list-group ls-none ">
                        <li class=""><a class="text-decoration-none text-dark fs-12 fw-bold" href="#" data-role="${etataction}" >${etataction}</a></li>
                        <li class=""><a class="text-decoration-none text-dark fs-12 fw-bold" href="#" data-role="modifier" >modifier</a></li>
                        <li class=""><a class="text-decoration-none text-dark fs-12 fw-bold" href="#" data-role="supprimer" >supprimer</a>
                        </li>
                    </ul>`
        interfacelistbeneficaire.appendChild(div)
    });
}

interfacelistbeneficaire.addEventListener('click', (e) => {
    let elementclik = e.target
    let idcard = elementclik.closest('div').getAttribute('id');  // gei id from card 
    console.log(idcard)
    if (elementclik.tagName === "IMG") {
        let ner = elementclik.closest('div').lastChild.classList.toggle('d-none')
        console.log(ner)
    }
    if (elementclik.tagName === "A") {
        let action = elementclik.closest('A').getAttribute("data-role")
        console.log(action)
        if (action == "supprimer")
            supprimer(idcard)
        if (action == "activer" || action == "desactiver")
            activerDesctever(idcard, action)
        if (action == "modifier")
            model_modification(idcard)

    }

})


function supprimer(id) {
    let listebenef = JSON.parse(localStorage.getItem("tabBeneficaires")) || []
    console.log(id)
    let index = listebenef.findIndex((benef) => benef.idBeneficiare == id)
    if (confirm("suppp")) {
        listebenef.splice(index, 1);
        localStorage.setItem('tabBeneficaires', JSON.stringify(listebenef))
        updatecart()
    }
}

function activerDesctever(id, etat) {
    let listebenef = JSON.parse(localStorage.getItem("tabBeneficaires")) || []
    if (confirm("voullez vous " + etat + " ce beneficaire")) {
        listebenef.map((benef) => {
            if (benef.idBeneficiare == id) {
                benef.etat = etat
            }
            return benef
        });
        localStorage.setItem('tabBeneficaires', JSON.stringify(listebenef))
        updatecart()
    }
}



// les domde modification option 
let typedemodifierselect = document.getElementById('typedemodifierselect')
let nommodifier = document.getElementById('nommodifier')
let comptenodifier = document.getElementById('comptenodifier')



function modifier(index, updateB) {
    let listebenef = JSON.parse(localStorage.getItem("tabBeneficaires")) || []
    if (confirm("voullez vous modifier ce beneficaire")) {
        listebenef[index] = updateB
        console.log(listebenef)
        localStorage.setItem('tabBeneficaires', JSON.stringify(listebenef))
        updatecart()
    }
}



function model_modification(id) {
    let model_modification = document.getElementById('model_modification')
    model_modification.classList.toggle('d-none')
    let listebenef = JSON.parse(localStorage.getItem("tabBeneficaires")) || []
    let index = listebenef.findIndex((benef) => benef.idBeneficiare == id)

    typedemodifierselect.value = listebenef[index].type
    nommodifier.value = listebenef[index].nomcmplet
    comptenodifier.value = listebenef[index].numerocompte

    document.getElementById('buttonclosemodel').addEventListener('click', function () {
        model_modification.classList.add('d-none')
    })

    document.getElementById('buttonsavemodification').addEventListener('click', function () {

        listebenef[index].type = typedemodifierselect.value
        listebenef[index].nomcmplet = nommodifier.value
        listebenef[index].numerocompte = comptenodifier.value
        modifier(index, listebenef[index])
    })

}



// function trierBeneficaireA_Z() {

//     let tabBeneficaires = JSON.parse(localStorage.getItem(tabBeneficaires)) || []

//     tabBeneficaires.sort((firstEl, secondEl) => {
//         return firstEl.localeCompare(secondEl, 'fr', { sensitivity: 'base' });
//     });
// }
