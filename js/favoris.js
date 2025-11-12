document.addEventListener('DOMContentLoaded', () => {
    const lesfavoris = JSON.parse(localStorage.getItem('listfavoris')) || [];
    const favoris_cards = document.getElementById('favoris_cards');
    if (!favoris_cards) return;
    favoris_cards.innerHTML = '';
    if (lesfavoris.length === 0) {
        favoris_cards.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-star fs-1 text-muted mb-3 d-block"></i>
                <p class="text-muted fs-14">Aucun favori ajouté pour le moment.</p>
            </div>
        `;
        return;
    }
    lesfavoris.forEach((item,index) => {
        const col = document.createElement('div');
        col.className = 'col-6 col-md-4 col-lg-3';
        col.innerHTML = `
            <div class="favoris-card p-2 bg-white rounded shadow-sm h-100">
                <div class="p-3 d-flex align-items-center">
                    <div class="flex-grow-1">
                        <div class="d-flex align-items-center gap-2 mb-2">
                          ${item.image}
                            <span class="fw-bold text-orange">${item.typeRecharge || 'Type'}</span>
                        </div>
                        <p class="mb-1 fw-semibold">${item.alias}</p>
                        <p class="mb-0 text-muted small">${item.typeRecharge || ''}</p>
                    </div>
                    <!-- Bouton de suppression -->
                    <button class="btn btn-sm btn-outline-danger ms-2" 
                            onclick="supprimerFavori(${index})" 
                            title="Supprimer des favoris">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        `;

        favoris_cards.appendChild(col);
    });
});


function supprimerFavori(index) {

    let lesfavoris = JSON.parse(localStorage.getItem('listfavoris')) || [];
    lesfavoris.splice(index, 1);
    localStorage.setItem('listfavoris', JSON.stringify(lesfavoris));
    location.reload();
}