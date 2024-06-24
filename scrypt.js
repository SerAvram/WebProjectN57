let menuMobIcon = document.querySelector('.menu-mobicon');
let menu = document.querySelector('.nav ul');

menuMobIcon.addEventListener('click', function(){
    menuMobIcon.style.display = 'none';
    menu.style.display = 'block';
})