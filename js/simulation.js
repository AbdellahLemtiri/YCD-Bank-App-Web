document.getElementById('rangeTouxSimulation').addEventListener('click', function () {
    document.getElementById('inputTouxSimulation').value = this.value + "%"
    calculSimulation()
})
document.getElementById('rangeMontantSimulation').addEventListener('click', function () {
    document.getElementById('inputMontantSimulation').value = this.value + " MAD"
    calculSimulation()
})
document.getElementById('rangeDureeSimulation').addEventListener('click', function () {
    document.getElementById('inputDureeSimulation').value = this.value + "Moins"
    calculSimulation()
})


calculSimulation()
function calculSimulation() {

    let rangeTaux = document.getElementById('rangeTouxSimulation');
    let rangeMontant = document.getElementById('rangeMontantSimulation');
    let rangeDuree = document.getElementById('rangeDureeSimulation');
    let resultatDiv = document.getElementById('resultatSimulation');
    // Mensualités = [capital x (taux/12)] / [1 – (1 + (taux/12))^(-nombre d'années de remboursement x 12)].
    let mensualite = ((rangeMontant.value) * (rangeTaux.value / 12)) / (1 - ((1 + (rangeTaux.value / 12)) ** (- rangeDuree.value)))
    resultatDiv.innerText = "mensualite "+parseInt(mensualite) +"DH"



}