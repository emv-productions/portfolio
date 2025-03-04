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
