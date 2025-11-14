if (localStorage.getItem("login") != "seccuss")
    window.location.href = "login.html";


let interfacelistbeneficaire = document.getElementById('interfacelistbeneficaire')




function updatecart(listBeneficiaire) {

    interfacelistbeneficaire.innerHTML = ""
    listBeneficiaire.forEach(bebeficaire => {
        let etatcolor = "text-success"
        let etataction = "desactive"
        if (bebeficaire.etat == "desactive") {
            etatcolor = "text-danger"
            etataction = "active"
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
                        <li class=""><a class="text-decoration-none text-dark fs-12 " href="#" data-role="${etataction}" >${etataction}</a></li>
                        <li class=""><a class="text-decoration-none text-dark fs-12  " href="#" data-role="modifier" >modifier</a></li>
                        <li class=""><a class="text-decoration-none text-dark fs-12  " href="#" data-role="supprimer" >supprimer</a>
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
        elementclik.closest('div').lastChild.classList.toggle('d-none')

    }
    if (elementclik.tagName === "A") {
        let action = elementclik.closest('A').getAttribute("data-role")
        console.log(action)
        if (action == "supprimer")
            supprimer(idcard)
        if (action == "active" || action == "desactive")
            activerDesctever(idcard, action)
        if (action == "modifier")
            model_modification(idcard)

    }

})


function supprimer(id) {
    let listebenef = JSON.parse(localStorage.getItem("tabBeneficaires")) || []
    console.log(id)
    let index = listebenef.findIndex((benef) => benef.idBeneficiare == id)
    if (confirm("Voulez-vous vraiment supprimer ce bénéficiaire ?")) {
        listebenef.splice(index, 1);
        localStorage.setItem('tabBeneficaires', JSON.stringify(listebenef))
        updatecart(listebenef)
        alert("Bénéficiaire supprimé avec succès.");
    }
}

function activerDesctever(id, etat) {
    let listebenef = JSON.parse(localStorage.getItem("tabBeneficaires")) || []
    if (confirm("voullez vous " + etat + " ce beneficaire")) {
        listebenef.forEach((benef) => {
            if (benef.idBeneficiare == id) {
                benef.etat = etat;
            }
        });
        console.log(",,,,,,,,,,,,,,,")
        localStorage.setItem('tabBeneficaires', JSON.stringify(listebenef))
        updatecart(listebenef)
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
        localStorage.setItem('tabBeneficaires', JSON.stringify(listebenef))
        document.getElementById('model_modification').classList.toggle('d-none')
        updatecart(listebenef)

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
    // nommodifier.addEventListener('keyup', function () {
    //     if (nommodifier.value.lenght >3)
    //         change_border_to_success(nommodifier)
    //     else
    //         change_border_to_error(nommodifier)
    // })
    document.getElementById('buttonsavemodification').addEventListener('click', function () {
        // if (nommodifier.value.lenght > 3 && comptenodifier.value.lenght == 24) {
            listebenef[index].type = typedemodifierselect.value
            listebenef[index].nomcmplet = nommodifier.value //? lentht >3
            listebenef[index].numerocompte = comptenodifier.value // ?len  ===24
            modifier(index, listebenef[index])
        // } else alert('Le numéro de compte RIB doit comporter exactement 24 chiffres.')
    })
}




selectTrier.addEventListener('change', function () {
    let tabBeneficaires = JSON.parse(localStorage.getItem('tabBeneficaires')) || [];
    switch (selectTrier.value) {
        case "az": // A-Z
            tabBeneficaires.sort((a, b) => a.nomcmplet.localeCompare(b.nomcmplet));
            break;
        case "za": // Z-A
            tabBeneficaires.sort((a, b) => b.nomcmplet.localeCompare(a.nomcmplet));
            break;

        case "pr": // Plus récents 
            tabBeneficaires.sort((a, b) => new Date(b.dateajout) - new Date(a.dateajout));
            break;

        case "pa": // Plus anciens
            tabBeneficaires.sort((a, b) => new Date(a.dateajout) - new Date(b.dateajout));
            break;
    }
    updatecart(tabBeneficaires);
});





let filtrerid = document.getElementById('filtrerid');

filtrerid.addEventListener('change', function () {
    let tabBeneficaires = JSON.parse(localStorage.getItem('tabBeneficaires')) || [];
    let resultatFiltre = [];

    if (filtrerid.value === "YCD") {
        resultatFiltre = tabBeneficaires.filter(beneficaire => beneficaire.type === "YCD");
    }
    else if (filtrerid.value === "Autre") {
        resultatFiltre = tabBeneficaires.filter(beneficaire => beneficaire.type === "Autre");
    }
    else {
        // Si "tous" ou autre option, on affiche tout
        resultatFiltre = tabBeneficaires;
    }
    updatecart(resultatFiltre);
});



document.getElementById('inputRecherche').addEventListener('keyup', function () {
    let recherche = document.getElementById('inputRecherche').value.trim().toLowerCase();
    let tabBeneficaires = JSON.parse(localStorage.getItem('tabBeneficaires')) || [];
    if (recherche === "") {
        updatecart(tabBeneficaires);
        return;
    }
    let resultatRecherche = tabBeneficaires.filter(beneficaire =>
        beneficaire.nomcmplet.toLowerCase().includes(recherche)
    );
    updatecart(resultatRecherche);
});


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
