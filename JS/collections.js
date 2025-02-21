fetch('collections_content.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('collections_content').innerHTML = data;
    })
    .catch(error => console.error('Error cargando el archivo:', error));