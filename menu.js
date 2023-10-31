document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const menuList = document.querySelector(".menu-list");

    burgerMenu.addEventListener("mouseenter", function () {
        // Inverse la visibilité du menu lorsque le bouton du burger est cliqué
        menuList.classList.toggle("visible");
    });

    burgerMenu.addEventListener("click", function () {
        // Inverse la visibilité du menu lorsque le bouton du burger est cliqué
        menuList.classList.toggle("visible");
    });

    // Gérer la fermeture du menu lorsque l'utilisateur clique à l'extérieur
    document.addEventListener("click", function (event) {
        if (!menuList.contains(event.target) && !burgerMenu.contains(event.target)) {
            menuList.classList.remove("visible");
        }
    });

    // Gérer la fermeture du menu lorsqu'un élément du menu est cliqué
    menuList.addEventListener("click", function () {
        menuList.classList.remove("visible");
    });
});
