// Toggle Class = Active
const navbar_nav = document.querySelector('.navbar_nav');

// Saat HambMenu Di Klik (Mode Selain Desktop)
document.querySelector('#hamb_menu').onclick = () => {
    navbar_nav.classList.toggle('actives');
}

// Klik Di Luar Sidebar Untuk Close
const hamb_menu = document.querySelector('#hamb_menu');
document.addEventListener('click', function(e) {
    if (!hamb_menu.contains(e.target) && !navbar_nav.contains(e.target)) {
        navbar_nav.classList.remove('actives');
    }
});