document.getElementById('idchangeone').addEventListener('change', function () {
    changedevise()
})
document.getElementById('idchangetow').addEventListener('change', function () {
    changedevise()
})
document.getElementById('idchaneentrer').addEventListener('keyup', function () {
    changedevise()
})
document.getElementById('idchanesorter').addEventListener('keyup', function () {
    changedevise()
})


let api_reversed_mad = {
    // 1 MAD = 0.0998 USD 
    "USD": {
        "code": "USD",
        "value": 0.0998
    },
    // 1 MAD = 0.0926  
    "EUR": {
        "code": "EUR",
        "value": 0.0926
    },
    // 1 MAD = 1.0000 MAD  
    "MAD": {
        "code": "MAD",
        "value": 1.0000
    }
}

function changedevise() {
    let selectSource = document.getElementById('idchangeone');
    let selectCible = document.getElementById('idchangetow');
    let inputMontantEntree = document.getElementById('idchaneentrer');
    let inputMontantSortie = document.getElementById('idchanesorter');
    let deviseSource = selectSource.value; // Ex: 'MAD' ou 'USD'
    let deviseCible = selectCible.value;   // Ex: 'EUR' ou 'MAD'
    let montantSource = parseFloat(inputMontantEntree.value);
    let tauxSource = api_reversed_mad[deviseSource].value; //  devise source vs MAD
    let tauxCible = api_reversed_mad[deviseCible].value;   // la devise cible vs MAD
    let montantConverti = montantSource * (tauxCible / tauxSource);
    inputMontantSortie.value = montantConverti;
}



