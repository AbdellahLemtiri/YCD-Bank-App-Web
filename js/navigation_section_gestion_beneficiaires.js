let verementButtonSection = document.getElementById("VerementButtonSection")
let ajoutBeneficiaireButtonSection = document.getElementById("ajoutBeneficiaireButtonSection")
let gestionBeneficiaireButtonSection = document.getElementById("gestionBeneficiaireButtonSection")
let interfaceAjouteBenef = document.getElementById("interfaceAjouteBenef")
let interfaceVerement = document.getElementById("interfaceVerement")
let interfacegestionBenef = document.getElementById("interfacegestionBenef")



// 

verementButtonSection.addEventListener("click", function () {
 switchInterfaceSection(interfaceVerement,interfaceAjouteBenef,interfacegestionBenef)
 changebuttonSection(verementButtonSection,ajoutBeneficiaireButtonSection,gestionBeneficiaireButtonSection)
 console.log("hhhh")
})
ajoutBeneficiaireButtonSection.addEventListener("click", function () {
 switchInterfaceSection(interfaceAjouteBenef,interfaceVerement,interfacegestionBenef)
 changebuttonSection(ajoutBeneficiaireButtonSection,verementButtonSection,gestionBeneficiaireButtonSection)

})
gestionBeneficiaireButtonSection.addEventListener("click", function () {
 switchInterfaceSection(interfacegestionBenef,interfaceVerement,interfaceAjouteBenef)
  changebuttonSection(gestionBeneficiaireButtonSection,verementButtonSection,ajoutBeneficiaireButtonSection)


})

function switchInterfaceSection(interfaceActive,interfacedesactive1,interfacedesactive2){
    interfaceActive.classList.remove('d-none');
    interfacedesactive1.classList.add('d-none');
    interfacedesactive2.classList.add('d-none');
}
function changebuttonSection(interfaceActive,interfacedesactive1,interfacedesactive2){
    interfaceActive.setAttribute('class', 'col-4 col-md-6 p-3 bg-orange text-white fs-14 text-center border-white-left');
    interfacedesactive1.setAttribute('class','col-4 col-md-3 p-3 bg-grey text-center fs-14 border-white-left');
    interfacedesactive2.setAttribute('class','col-4 col-md-3 p-3 bg-grey text-center fs-14 border-white-left');
}