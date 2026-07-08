// 1. DICCIONARIO DE CONTENIDOS
const baseDeDatos = {
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
        
        <div class="proyecto-retro">
            <h3 style="margin-top:0; color: #ffffff;">Arquitectura Modular y Sistemas Base</h3>
            <p>Trabajo bajo la filosofía de construir un núcleo (Core Framework) extremadamente sólido antes de escalar. Al desarrollar sistemas base robustos e independientes, garantizo que la fase de producción de contenido final sea mucho más rápida, iterativa y libre de bugs en cadena.</p>
        </div>

        <div class="proyecto-retro">
            <h3 style="margin-top:0; color: #ffffff;">Herramientas y Lenguajes</h3>
            <p>> <strong>Unity / C#</strong> (Físicas custom, Máquinas de Estado, ScriptableObjects)</p>
            <p>> <strong>Unreal Engine / C++</strong> (Componentes modulares, AnimNotifies, Blueprints híbridos)</p>
        </div>
    `,
    sobreMi: `
        <h2>> Perfil_Usuario.txt</h2>
        <div class="proyecto-retro">
            <p>Soy un programador enfocado en la lógica interna y arquitectura de videojuegos. Mi entorno de trabajo principal se basa en solucionar problemas complejos de gameplay utilizando C# y C++.</p>
            <p>Actualmente desarrollo proyectos técnicos integrando estos sistemas directamente en Unreal Engine y Unity.</p>
        </div>
    `,
    contacto: `
        contacto: `
        <h2>> Protocolo_Conexion // Contacto</h2>
        
        <div class="proyecto-retro">
            <h3 style="margin-top:0; color: #ffffff;">Canales de Comunicación</h3>
            <p><strong>> GMAIL:</strong> <a href="mailto:danielg.personal@gmail.com" style="color: #00ffff; text-decoration: none;">tu.email@gmail.com</a></p>
            <p><strong>> TELÉFONO:</strong> <span style="color: #c4f5f5;">+34 600 00 00 00</span></p>
        </div>

        <div class="proyecto-retro" style="border-color: #008b8b;">
            <h3 style="margin-top:0; color: #00ffff;">Estudio de Campo & Referencias</h3>
            <p><strong>> STEAM PROFILE:</strong> <a href="https://steamcommunity.com/id/exxyo/" target="_blank" style="color: #ffffff; background: #005f5f; padding: 2px 8px; border: 1px solid #00ffff; text-decoration: none; font-size: 0.9em; font-weight: bold;">[ ABRIR_ENLACE.EXE ]</a></p>
            <p style="font-size: 0.95em; color: #c4f5f5; margin-top: 15px; line-height: 1.5;">
                ¿Quieres comprobar de primera mano cuántas horas le dedico a analizar mecánicas, Game Design y Game Feel de forma empírica? Curiosea mi perfil y mi biblioteca de juegos.
            </p>
        </div>
    `,
    `,
    proyecto_fisicas: `
        <h2>> Directorio_Proyectos_Sistema_Fisicas.exe</h2>
        <button onclick="volverAProyectos()" style="background: transparent; border: 1px solid #00ffff; color: #00ffff; font-family: inherit; font-weight: bold; padding: 5px 15px; cursor:pointer; margin-bottom: 20px;">
            < VOLVER AL DIRECTORIO
        </button>

        <div class="proyecto-retro">
            <h3 style="margin-top:0; color: #ffffff;">Físicas Custom (Unity / C#)</h3>
            <p>El motor de físicas por defecto generaba cuellos de botella al instanciar cientos de proyectiles. Diseñé un sistema de colisiones basado en Raycasts paralelos que mejoró el rendimiento un 40%.</p>
        </div>
    `,
    proyecto_combate: `
        <h2>> Directorio_Proyectos_Sistema_Combate.exe</h2>
        <button onclick="volverAProyectos()" style="background: transparent; border: 1px solid #00ffff; color: #00ffff; font-family: inherit; font-weight: bold; padding: 5px 15px; cursor:pointer; margin-bottom: 20px;">
            < VOLVER AL DIRECTORIO
        </button>

        <div class="proyecto-retro">
            <h3 style="margin-top:0; color: #ffffff;">Combate Hack & Slash (Unreal / C++)</h3>
            <p>Creación de un componente de combate reutilizable. Utilicé AnimNotifies en Unreal para sincronizar las hitboxes exactamente con los frames clave de la animación.</p>
        </div>
    `
};

// 2. REFERENCIAS A LA INTERFAZ
const pantalla = document.getElementById('pantalla-principal');
const btnProyectos = document.getElementById('btn-proyectos');
const btnHabilidades = document.getElementById('btn-habilidades');
const btnSobreMi = document.getElementById('btn-sobremi');
const btnContacto = document.getElementById('btn-contacto');

// 3. LA CORRUTINA DE TEXTO (Efecto Máquina de Escribir)
function efectoEscribirTerminal() {
    const h2 = pantalla.querySelector('h2');
    if (!h2) return; // Si por algún motivo no hay h2, sale de la función
    
    const textoFinal = h2.innerText; 
    h2.innerHTML = ''; // Borra el texto instantáneamente
    
    let iterador = 0;
    const velocidad = 20; // Milisegundos entre cada letra (muy rápido)

    const intervalo = setInterval(() => {
        // En cada "frame", añade una letra más y le pega el cursor al final
        h2.innerHTML = textoFinal.substring(0, iterador) + '<span class="cursor-terminal">_</span>';
        iterador++;

        if (iterador > textoFinal.length) {
            clearInterval(intervalo); // Termina la animación
        }
    }, velocidad);
}

// 4. FUNCIÓN DE TRANSICIÓN MAESTRA
function cambiarPantallaConZoom(nuevoContenido, idBotonSeleccionado) {
    // A. Lógica visual de los botones del menú
    document.querySelectorAll('.boton-ovalo').forEach(btn => {
        btn.classList.remove('boton-activo'); // Levanta todos los botones
    });
    
    // Si pasamos un ID de botón, lo hunde y lo ilumina
    if (idBotonSeleccionado) {
        document.getElementById(idBotonSeleccionado).classList.add('boton-activo');
    }

    // B. Lógica de animación de la pantalla
    pantalla.classList.add('efecto-apagado');
    
    setTimeout(() => {
        pantalla.innerHTML = nuevoContenido;
        pantalla.classList.remove('efecto-apagado');
        
        // C. Disparamos la máquina de escribir justo al "encender" la pantalla
        efectoEscribirTerminal(); 
    }, 200); 
}

// 5. EVENTOS DEL MENÚ LATERAL
btnProyectos.addEventListener('click', () => cambiarPantallaConZoom(baseDeDatos.proyectos, 'btn-proyectos'));
btnHabilidades.addEventListener('click', () => cambiarPantallaConZoom(baseDeDatos.habilidades, 'btn-habilidades'));
btnSobreMi.addEventListener('click', () => cambiarPantallaConZoom(baseDeDatos.sobreMi, 'btn-sobremi'));
btnContacto.addEventListener('click', () => cambiarPantallaConZoom(baseDeDatos.contacto, 'btn-contacto'));

// 6. EVENTOS DE LOS PROYECTOS INDIVIDUALES
function abrirProyecto(idProyecto) {
    if (idProyecto === 'fisicas') {
        cambiarPantallaConZoom(baseDeDatos.proyecto_fisicas, 'btn-proyectos');
    } else if (idProyecto === 'combate') {
        cambiarPantallaConZoom(baseDeDatos.proyecto_combate, 'btn-proyectos');
    }
}

function volverAProyectos() {
    cambiarPantallaConZoom(baseDeDatos.proyectos, 'btn-proyectos');
}

// 7. INICIO AUTOMÁTICO
// Simulamos que el usuario hace clic en "Proyectos" nada más abrir la web
window.onload = () => {
    efectoEscribirTerminal();
};
