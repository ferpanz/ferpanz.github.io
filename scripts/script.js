alert("Página en remodelación... algunas cosas pueden no verse bien o no funcionar")

// Función para cargar fragmentos de html
function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

// Cargar la Navbar y el Footer
loadComponent('navbar', 'assets/navbar.html');
loadComponent('footer', 'assets/footer.html');

