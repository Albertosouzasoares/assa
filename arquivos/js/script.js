//Menu
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active-menu');
}

btnMobile.addEventListener('click', toggleMenu);

//Pesquisa
const btnSearch = document.getElementById('search');

function toggleSearch() {
    const iconSearch = document.getElementById('search');
    iconSearch.classList.toggle('active-search');
    const search = document.getElementById('search-box');
    search.classList.toggle('active-search');
}

btnSearch.addEventListener('click', toggleSearch);

//Busca
function filter() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("ul");
    li = ul.getElementsByTagName("li");


    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (!input.value) {
            li[i].style.display = "none";
        } else if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }

    }
}