const recharge = document.querySelectorAll('recharge');
const container_recharge = document.getElementById('container_recharge');
const container_for_recharge = document.getElementById('container_for_recharge');
recharge.forEach( addEventListener('click') ,()=> {
     container_recharge.classList.add('d-none');
     container_for_recharge.classList.remove('d-none');
});