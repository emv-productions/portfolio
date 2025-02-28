fetch('../footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
        document.getElementById("yearSpan").textContent = new Date().getFullYear();
    })
    .catch(error => console.error('Error cargando el archivo:', error));