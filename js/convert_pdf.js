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

let sectionRIB = document.getElementById('sectionRIB')

document.getElementById('exporterPdf').addEventListener('click', function () {
    if (sectionRIB) {
        let date = new Date()
        let fenetreImpression = window.open('');
        fenetreImpression.document.write('<html><head><title> RIB//: YCD Banue</title>');
        fenetreImpression.document.write(' <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"  integrity = "sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin = "anonymous" >   ');
        fenetreImpression.document.write(' <style>.fs-16 {font-size: 16px;}.fs-14 {font-size: 14px;}.fs-12 {  font-size: 12px;}</style>');

        fenetreImpression.document.write('</head><body>');
        fenetreImpression.document.write(sectionRIB.outerHTML);

        fenetreImpression.document.write(`<table class="table fs-12"><tr><td colspan="2">3. IDENTIFICATION DE LA BANQUE ET DU COMPTE (IBAN/BIC)</td></tr><tr><td>Nom de la Banque</td><td>LA YOU CODE BANQUE </td></tr><tr><td>Adresse de l'Agence</td><td>Agence de l'Opéra, 12 Place de l'Opéra, SAFI</td></tr><tr><td>Code IBAN Complet</td><td>FR76 3000 2005 5000 00157845 287</td></tr><tr><td>Code BIC / SWIFT</td><td>GBNFRPPXXX</td></tr></table><p class="fs-12 text-orange">Fait le ${date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear() + '    /' + date.getHours() + ':' + date.getMinutes()}.</p>`);
        fenetreImpression.document.write('</body></html>');
        fenetreImpression.print();
        fenetreImpression.close();

    } else {
        alert("error");
    }

})











function afficheRIB() {

    let compte = JSON.parse(localStorage.getItem('compte'))
    let nomcomplet = (compte.genre == "Homme" ? "Mr. " : "M. ") + compte.nom + " " + compte.prenom
    let div = document.createElement('div')
    let date = new Date(compte.datecreation)
    let RIB = compte.ribComptePrincipal
    if (compte.typeActive != "ComptePrincipal")
        RIB = compte.ribCompteEparne
    div.innerHTML = `
                <h2 class="fs-16">
                    ATTESTATION DE RELEVÉ D'IDENTITÉ BANCAIRE (RIB)
                </h2>

                <table class="table fs-12">
                    <tr>
                        <td colspan="2">
                            1. TITULAIRE DU COMPTE
                        </td>
                    </tr>
                    <tr>
                        <td>Nom & Prénom(s)</td>
                        <td>${nomcomplet} </td>
                    </tr>
                    <tr>
                        <td>Adresse</td>
                        <td>${compte.lieuNaissance}</td>
                    </tr>
                    <tr>
                        <td>Ouverture du Compte</td>
                        <td> ${date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear() + '    /' + date.getHours() + ':' + date.getMinutes()} </td>
                    </tr>
                </table>

                <table class="table fs-12">
                    <tr>
                        <td colspan="4">
                            2. INFORMATIONS BANCAIRES NATIONALES (RIB)
                        </td>
                    </tr>
                     <tr>
                        <td ">
                            Type de Compte
                        </td> 
                        <td colspan="3">
                             ${compte.typeactive}
                        </td>
                    </tr>
                    <tr>
                        <td>Code Banque</td>
                        <td>Code Guichet</td>
                        <td>Numéro de Compte</td>
                        <td>Clé RIB</td>
                    </tr>
                    <tr>
                        <td>${RIB.codeBanque} </td>
                        <td>${RIB.codeLocalite} </td>
                        <td>${RIB.numeroCompte} </td>
                        <td>${RIB.cleRIB} </td>
                       
                    </tr>
                </table>
                 `

    sectionRIB.append(div)
}

afficheRIB()