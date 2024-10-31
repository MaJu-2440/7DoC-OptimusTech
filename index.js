/* Esse arquivo foi criado para manipular o menu responsivo*/

const menu = document.querySelector('.menu')
const menuIcon = document.querySelector('.sideMenu svg')

menuIcon.addEventListener('click', function()
{
    // quando houver clique no ícone do menu
    menu.classList.toggle('active');
});