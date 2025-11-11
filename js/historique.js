
let historique_cards= document.getElementById('historique_cards');
let historique =JSON.parse( localStorage.getItem("listTransaction"))
console.log(historique);
 card = document.createElement('div');
historique_cards.innerHTML = '';
for(let i=0;i<historique.length;i++){
    let date = new Date(historique[i].datetransaction);
 const col = document.createElement('div');
 col.className = 'col fs-12';
 col.innerHTML =    '<div class="col fs-12">'+
                  '<div class=" card_his card border-1 shadow-sm rounded-3  ">'+
                     '<div class="card-body p-2 d-flex align-items-center">'+
                        '<div'+
                        'class="flechbg bg-danger bg-opacity-10 rounded-circle p-2 me-3 d-flex align-items-center justify-content-center">'+
                           '<i class="bi bi-arrow-up-right text-danger"></i>'+
                        '</div>'+
                        '<div class="flex-grow-1">'+
                           '<div class="d-flex justify-content-between align-items-start">'+
                              '<div>'+
                            '<h6 class="mb-1  ff">'+historique[i].motif+'</h6>'+
                                 '<p class="text-muted">'+date.getFullYear() +"/"+ date.getMonth()+ "/" + date.getDay()+ " "+ date.getHours()+ ":" +date.getUTCMinutes()+'</p>'+
                              '</div>'+
                              '<span class=" fs-14">'+historique[i].montant+" "+ "dh"+'</span>'+
                           '</div>'+
                        '</div>'+
                     '</div>'+
                  '</div>'+
               '</div>';

               historique_cards.appendChild(col);
}






