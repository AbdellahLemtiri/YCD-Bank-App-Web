let interfacelistbeneficaire = document.getElementById('interfacelistbeneficaire')


updatecart()

function updatecart() {
    let listBeneficiaire = JSON.parse(localStorage.getItem('tabBeneficaires'))
    listBeneficiaire.forEach(bebeficaire => {
        let div = document.createElement('div')
        div.setAttribute('class', ' col-11 col-sm-11 col-md-5 col-lg-3 d-flex flex-column justify-content-center align-items-center border-1')
        div.setAttribute('id', bebeficaire.idBeneficiare)
        div.innerHTML = `<span>${bebeficaire.nomcmplet}</span>
                    <span> ${bebeficaire.numerocompte}</span>
                    <span>${bebeficaire.etat}</span>
                    <button class="bg-opacity-0 border-0 align-self-end "><img src="../images/Collapse-icon.png"
                            alt=""></button>
                    <ul class="d-none list-group ls-none ">
                        <li class=""><a class="text-decoration-none text-dark fs-12 fw-bold" href="#" data-role="activer" > activer</a></li>
                        <li class=""><a class="text-decoration-none text-dark fs-12 fw-bold" href="#" data-role="modifer" > modifer</a></li>
                        <li class=""><a class="text-decoration-none text-dark fs-12 fw-bold" href="#" data-role="supprimer" > supprimer 3</a>
                        </li>
                    </ul>`
        interfacelistbeneficaire.appendChild(div)

    });
}

interfacelistbeneficaire.addEventListener('click', (e) => {
    let elementclik = e.target
    let idcard = elementclik.getAttribute('id');
    if (elementclik.tagName === "IMG") {
        let ner = elementclik.closest('div').lastChild.classList.toggle('d-none')
        console.log(ner)
    }
    if (elementclik.tagName === "A") {
        let action = elementclik.closest('A').getAttribute("data-role")
        if (action == "supprimer")
            supprimer(idcard)
    }

})


function supprimer(id) {
    let listebenef = JSON.parse(localStorage.getItem("tabBeneficaires")) || []
    let index = listebenef.findIndex((benef) => benef.idBeneficiare == id)
    if (confirm("suppp")) {
        listebenef.splice(index);
        localStorage.setItem('tabBeneficaires', JSON.stringify(listebenef))
        updatecart()
    }
}