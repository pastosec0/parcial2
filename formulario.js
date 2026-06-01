// COMMIT 2 - Formulario dinámico
// Este script construye el formulario y lo inserta en el div#formulario

document.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("formulario");

    contenedor.innerHTML = `
        <div class="form-group">
            <label class="form-label">Web:</label>
            <input type="text" class="form-input" placeholder="https://accounts.google.com/SignUp" id="inputWeb">
        </div>

        <div class="form-row">
            <div class="form-fields">
                <div class="form-group">
                    <label class="form-label">Nombre:</label>
                    <input type="text" class="form-input" placeholder="Juan" id="inputNombre">
                </div>

                <div class="form-group">
                    <label class="form-label">Apellido:</label>
                    <input type="text" class="form-input" placeholder="Pablo" id="inputApellido">
                </div>
            </div>

            <button class="btn-buscar" onclick="buscar()">Buscar</button>
        </div>
    `;
});

function buscar() {
    const web = document.getElementById("inputWeb").value;
    const nombre = document.getElementById("inputNombre").value;
    const apellido = document.getElementById("inputApellido").value;

    if (nombre || apellido || web) {
        alert("Buscando: " + nombre + " " + apellido + "\nWeb: " + web);
    } else {
        alert("Por favor llena al menos un campo.");
    }
}
