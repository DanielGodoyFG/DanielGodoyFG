// 1. DICCIONARIO DE CONTENIDOS
const baseDeDatos = {
    // --- MENÚ PRINCIPAL ---
    proyectos: `
        <h2>> Directorio_Proyectos</h2>
        <p>Selecciona un ejecutable para ver los detalles técnicos:</p>
        
        <div class="proyecto-retro" style="cursor: pointer; transition: 0.2s;" onmouseover="this.style.borderColor='#00ffff'" onmouseout="this.style.borderColor='#005f5f'" onclick="abrirProyecto('fisicas')">
            <h3 style="margin-top:0; color: #00ffff;">Sistema_Fisicas.exe</h3>
            <p>Implementación de físicas custom y colisiones.</p>
            <p style="color: #008b8b; font-size: 0.9em; margin-bottom: 0;">> [ CLIC PARA EJECUTAR ]</p>
        </div>

        <div class="proyecto-retro" style="cursor: pointer; transition: 0.2s;" onmouseover="this.style.borderColor='#00ffff'" onmouseout="this.style.borderColor='#005f5f'" onclick="abrirProyecto('combate')">
            <h3 style="margin-top:0; color: #00ffff;">Sistema_Combate.exe</h3>
            <p>Máquina de estados para combos y animaciones.</p>
            <p style="color: #008b8b; font-size: 0.9em; margin-bottom: 0;">> [ CLIC PARA EJECUTAR ]</p>
        </div>
    `,
    habilidades: `
        <h2>> Habilidades_Tecnicas</h2>
        <p>Cargando árbol de habilidades del jugador...</p>
    `,
    sobreMi: `
        <h2>> Perfil_Usuario.txt</h2>
        <div class="proyecto-retro">
            <p>Soy un programador enfocado en la lógica interna y arquitectura de videojuegos. Mi entorno de trabajo principal se basa en solucionar problemas complejos de gameplay utilizando C# y C++.</p>
            <p>Actualmente desarrollo proyectos técnicos integrando estos sistemas directamente en Unreal Engine y Unity.</p>
        </div>
    `,
    contacto: `
        <h2>> Ping_Red</h2>
        <p>Abriendo puertos de comunicación...</p>
    `,

    // --- SUB-PÁGINAS DE LOS PROYECTOS (Lo nuevo) ---
    proyecto_fisicas: `
        <h2>> Directorio_Proyectos_Sistema_Fisicas.exe</h2>
        <button onclick="volverAProyectos()" style="background: transparent; border: 1px solid #00ffff; color: #00ffff; font-family: inherit; font-weight: bold; padding: 5px 15px; cursor:pointer; margin-bottom: 20px;">
            < VOLVER AL DIRECTORIO
        </button>

        <div class="proyecto-retro">
            <h3 style="margin-top:0; color: #ffffff;">Físicas Custom (Unity / C#)</h3>
            <p>El motor de físicas por defecto generaba cuellos de botella al instanciar cientos de proyectiles. Diseñé un sistema de colisiones basado en Raycasts paralelos que mejoró el rendimiento un 40%.</p>
            <br>
            <p style="color: #008b8b;">[ Aquí podrías poner un vídeo .webm del sistema funcionando ]</p>
        </div>
    `,
    proyecto_combate: `
        <h2>> Directorio_Proyectos_Sistema_Combate.exe</h2>
        <button onclick="volverAProyectos()" style="background: transparent; border: 1px solid #00ffff; color: #00ffff; font-family: inherit; font-weight: bold; padding: 5px 15px; cursor:pointer; margin-bottom: 20px;">
            < VOLVER AL DIRECTORIO
        </button>

        <div class="proyecto-retro">
            <h3 style="margin-top:0; color: #ffffff;">Combate Hack & Slash (Unreal / C++)</h3>
            <p>Creación de un componente de combate reutilizable. Utilicé AnimNotifies en Unreal para sincronizar las cajas de daño (hitboxes) exactamente con los frames clave de la animación de ataque de la espada.</p>
            <br>
            <p style="color: #008b8b;">[ Enlace al repo de GitHub o bloques de código C++ aquí ]</p>
        </div>
    `
};

// 2. REFERENCIAS A LA INTERFAZ
const pantalla = document.getElementById('pantalla-principal');

const btnProyectos = document.getElementById('btn-proyectos');
const btnHabilidades = document.getElementById('btn-habilidades');
const btnSobreMi = document.getElementById('btn-sobremi');
const btnContacto = document.getElementById('btn-contacto');

// 3. EVENTOS DEL MENÚ LATERAL
btnProyectos.addEventListener('click', () => {
    pantalla.innerHTML = baseDeDatos.proyectos;
});

btnHabilidades.addEventListener('click', () => {
    pantalla.innerHTML = baseDeDatos.habilidades;
});

btnSobreMi.addEventListener('click', () => {
    pantalla.innerHTML = baseDeDatos.sobreMi;
});

btnContacto.addEventListener('click', () => {
    pantalla.innerHTML = baseDeDatos.contacto;
});

// 4. FUNCIONES DE NAVEGACIÓN DE PROYECTOS (Lo nuevo)
// Esta función lee el ID que le pasamos al hacer clic y busca ese proyecto en la base de datos
function abrirProyecto(idProyecto) {
    if (idProyecto === 'fisicas') {
        pantalla.innerHTML = baseDeDatos.proyecto_fisicas;
    } else if (idProyecto === 'combate') {
        pantalla.innerHTML = baseDeDatos.proyecto_combate;
    }
}

// Función simple para el botón de "Volver"
function volverAProyectos() {
    pantalla.innerHTML = baseDeDatos.proyectos;
}
