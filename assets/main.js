function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

const logo = document.getElementById('logo');

function mudarCorLogo() {

    if (logo.style.color === 'black'){
        logo.style.color = 'orange';
    } else {
        logo.style.color = 'black';
    }
}

setInterval(mudarCorLogo, 1000);