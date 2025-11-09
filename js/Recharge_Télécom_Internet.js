const recharges = document.querySelectorAll('.recharge');
const container_recharge = document.getElementById('container_recharge');
const container_for_recharge = document.getElementById('container_for_recharge');
recharges.forEach(recharge=>{
    recharge.addEventListener('click',function(){
     container_recharge.classList.add('d-none');
     container_for_recharge.classList.remove('d-none');
})});