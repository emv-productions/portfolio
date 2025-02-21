document.addEventListener("DOMContentLoaded", function () {
    fetch("../DB/collections.json")
        .then(response => response.json())
        .then(data => mostrarCards(data))
        .catch(error => console.error("Error al cargar el JSON", error));
});

function mostrarCards(cards) {
    const container = document.getElementById("cards-container");

    cards.forEach(card => {
        const enlace = document.createElement("a");
        enlace.href = `collectionDetails.html?id=${card.id}`;
        enlace.classList.add("card-link");

        const cardElement = document.createElement("div");
        cardElement.classList.add("card");

        cardElement.innerHTML = `
            <div class="div-img">
                <img src="../Multimedia/Collections/${card.id}/1.jpg" alt="${card.title}" oncontextmenu="return false;">
            </div>
            <div class="div-text">
                <h3>${card.title}</h3>
            </div>
        `;

        // Agregar la card dentro del enlace
        enlace.appendChild(cardElement);

        // Agregar el enlace dentro del contenedor
        container.appendChild(enlace);
    });
}

//<p>${card.description}</p>