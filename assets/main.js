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



function darkMode () {

const body = document.body;
const checkbox = document.getElementById('darkMode');
const contato = document.getElementById('contato');
const produtos = document.getElementById('produtos');
const footer = document.getElementById('footer');
const secao1 = document.getElementById('secao1');
const quemSomos = document.getElementById('quemsomos');
const nav = document.getElementById('nav');


if (checkbox.checked) {
    body.classList.add('dark-mode');
    contato.classList.add('dark-mode');
    produtos.classList.add('dark-mode');
    footer.classList.add('dark-mode');
    quemSomos.classList.add('dark-mode');
    secao1.classList.add('dark-mode');
    nav.classList.add('dark-mode');
} else {
    body.classList.remove('dark-mode');
    contato.classList.remove('dark-mode');
    produtos.classList.remove('dark-mode');
    footer.classList.remove('dark-mode');
    secao1.classList.remove('dark-mode');
    quemSomos.classList.remove('dark-mode');
    nav.classList.remove('dark-mode');
}
}