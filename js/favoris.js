
let favoris_cards= document.getElementById('favoris_cards');
let favoris =JSON.parse( localStorage.getItem("listfavoris"))
console.log(historique);

let card = document.createElement('div');

for (let i = 0; i < historique.length; i++) {
  
    const col = document.createElement('div');
    col.className = 'col fs-12';

    col.innerHTML = 
        '<div class="col fs-12">' +
            '<div class="card_his card border-1 shadow-sm rounded-3">' +
                '<div class="card-body p-2 d-flex align-items-center">' +
                    '<div class="flechbg ' + bg_card + ' bg-opacity-10 rounded-circle p-2 me-3 d-flex align-items-center justify-content-center">' +
                        '<i class="' + color_flech + ' fs-5"></i>' +
                    '</div>' +
                    '<div class="flex-grow-1">' +
                        '<div class="d-flex justify-content-between align-items-start">' +
                            '<div>' +
                                '<h6 class="mb-1 fw-14 ">' + historique[i].motif + '</h6>' +
                                '<p class="text-muted small mb-0">' +
                                    date.getFullYear() + '/' +
                                    String(date.getMonth() + 1).padStart(2, '0') + '/' +
                                    String(date.getDate()).padStart(2, '0') + ' ' +
                                    String(date.getHours()).padStart(2, '0') + ':' +
                                    String(date.getMinutes()).padStart(2, '0') +
                                '</p>' +
                            '</div>' +
                            '<span class="fs-14 fw-semibold ">' + 
                                historique[i].montant + ' DH' + 
                            '</span>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';

    favoris_cards.appendChild(col);
}