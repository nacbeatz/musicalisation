document.addEventListener("DOMContentLoaded", function () {
    var burgerMenu = document.querySelector("i");
    var menu = document.querySelector("nav ul");
    console.log(menu);

    burgerMenu.addEventListener("click", toggleMenu);

    function toggleMenu() {
        if (menu.style.display === 'block') {
            menu.style.transition = "all 2 s ease-in-out";
            menu.style.display = 'none';


        } else {
            menu.style.transition = "all 2s ease-in-out";
            menu.style.display = 'block';
        }

    }
});