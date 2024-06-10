function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

const logo = document.getElementById('logo');
const menutoggle = document.getElementById('menutoggle');

function mudarCorLogos() {

    if (logo.style.color === 'black') {
        logo.style.color = 'orange';
        menutoggle.style.color = 'orange';
    } else {
        logo.style.color = 'black';
        menutoggle.style.color = 'black';
    }
}

setInterval(mudarCorLogos, 2000);
