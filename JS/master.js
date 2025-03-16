document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("#header .links a");
    const currentPage = window.location.pathname.split("/").pop(); // Obtiene la página actual

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

function toggleMenu() {
    let menu = document.querySelector('.links');
    menu.classList.toggle('active');
}

document.addEventListener('click', function (event) {
    let menu = document.querySelector('.links');
    let menuIcon = document.querySelector('.menu-icon');

    // Si el clic NO es en el menú ni en el icono de hamburguesa, cerrar el menú
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove('active');
    }
});

document.addEventListener("scroll", function () {
    const title = document.querySelector(".title");

    if (window.scrollY > 450) {
        title.classList.add("active");
        title.classList.remove("hidden");
    } else {
        title.classList.remove("hidden");
        title.classList.remove("active");
    }
});