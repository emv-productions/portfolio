document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const idColeccion = params.get("id");

    if (!idColeccion) {
        window.location.href = "collections.html";
        return;
    }

    fetch("../DB/Collections/collections.json")
        .then(response => {
            if (!response.ok) throw new Error(window.location.href = "collections.html");
            return response.json();
        })
        .then(colecciones => {
            if (!colecciones[idColeccion-1]) {
                window.location.href = "collections.html";
                return;
            }

            const imagesQty = colecciones[idColeccion-1].images_qty;
            const container = document.getElementById("collection-container");

            for (let i = 1; i < imagesQty; i++) {
                const img = document.createElement("img");
                img.src = `../Multimedia/Collections/${idColeccion}/${i}.jpg`;
                img.alt = `Imagen ${i}`;
                // Bloquear clic derecho
                img.oncontextmenu = (event) => event.preventDefault();
                // Bloquear arrastrar la imagen
                img.ondragstart = (event) => event.preventDefault(); 
                img.onerror = () => console.warn(`No se encontró la imagen: ${img.src}`);
                container.appendChild(img);
            }

            // Agregar los botones de "Prev" y "Next"
            const buttonsContainer = document.createElement("div");
            buttonsContainer.classList.add("buttons-container");

            // Botón "Prev" (si hay colecciones anteriores)
            if (idColeccion > 1) {
                const prevButton = document.createElement("button");
                prevButton.classList.add("btn-prev");
                prevButton.textContent = "< Previous";
                prevButton.onclick = () => {
                    window.location.href = `collectionDetails.html?id=${idColeccion - 1}`;
                };
                buttonsContainer.appendChild(prevButton);
            }

            // Botón "Next" (si hay colecciones siguientes)
            if (idColeccion < colecciones.length) {
                const nextButton = document.createElement("button");
                nextButton.classList.add("btn-next");
                nextButton.textContent = "Next >";
                nextButton.onclick = () => {
                    window.location.href = `collectionDetails.html?id=${parseInt(idColeccion) + 1}`;
                };
                buttonsContainer.appendChild(nextButton);
            }

            // Agregar el contenedor de botones al DOM
            container.appendChild(buttonsContainer);
        })
        .catch(error => {
            console.error("Error al cargar las colecciones:", error);
        });
});