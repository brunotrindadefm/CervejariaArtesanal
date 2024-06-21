function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

function darkMode() {

    const body = document.body;
    const checkbox = document.getElementById('darkMode');
    const contato = document.getElementById('contato');
    const produtos = document.getElementById('produtos');
    const footer = document.getElementById('footer');
    const secao1 = document.getElementById('secao1');
    const quemSomos = document.getElementById('quemsomos');
    const nav = document.getElementById('nav');
    const sobreImagem = document.getElementById('sobreImagem');
    const membros = document.getElementsByClassName('membros');
    const produtosGrid = document.getElementsByClassName('produtosgrid');
    const logo = document.getElementById('logo');
    const darklight = document.getElementById('dark-light');


    if (checkbox.checked) {
        contato.classList.add('dark-mode');
        produtos.classList.add('dark-mode');
        footer.classList.add('dark-mode');
        quemSomos.classList.add('dark-mode');
        secao1.classList.add('dark-mode');
        nav.classList.add('dark-mode');
        sobreImagem.classList.add('dark-mode')
        logo.style.color = 'white';

        darklight.textContent = 'LightMode'
        for (let i = 0; i < membros.length; i++) {
            membros[i].classList.add('dark-mode');
        }
        for (let i = 0; i < produtosGrid.length; i++) {
            produtosGrid[i].classList.add('dark-mode');
        }
        const menuItems = nav.querySelectorAll('.menu p');
        menuItems.forEach(item => {
            item.style.color = 'white';
        });
    } else {
        contato.classList.remove('dark-mode');
        produtos.classList.remove('dark-mode');
        footer.classList.remove('dark-mode');
        secao1.classList.remove('dark-mode');
        quemSomos.classList.remove('dark-mode');
        nav.classList.remove('dark-mode');
        logo.style.color = 'black'
        sobreImagem.classList.remove('dark-mode')

        darklight.textContent = 'DarkMode'
        for (let i = 0; i < membros.length; i++) {
            membros[i].classList.remove('dark-mode');
        }
        for (let i = 0; i < produtosGrid.length; i++) {
            produtosGrid[i].classList.remove('dark-mode');
        }
        const menuItems = nav.querySelectorAll('.menu p');
        menuItems.forEach(item => {
            item.style.color = 'black';
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
const submitForm = document.getElementById('botaoForm');    


submitForm.addEventListener('click', () => {
    const mensagem = document.getElementById('mensagem').value;
    const email = document.getElementById('email').value;
    const nome = document.getElementById('nome').value;

    if (nome.length > 0 && email.length > 0 && mensagem.length > 0) {
        alert('Formulário enviado ^-^');
    } else {
        alert('Preencha todos os campos *-*');
    }

});
});