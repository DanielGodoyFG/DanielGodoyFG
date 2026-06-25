
// 1. DICCIONARIO DE CONTENIDOS (Como un ScriptableObject con tus textos)
const baseDeDatos = {
    proyectos: `
        <h2>> Directorio_Proyectos</h2>
        <div class="proyecto-retro">
            <h3 style="margin-top:0; color: #00ffff;">Sistema_Fisicas.exe</h3>
            <p>Cargando datos de colisiones y rigidbodies...</p>
        </div> 
    `,
    habilidades: `
        <h2>> Habilidades_Tecnicas</h2>
        <p>Cargando árbol de habilidades del jugador...</p>
    `,
    sobreMi: `
        <h2>> Perfil_Usuario.txt</h2>
        <p>Iniciando volcado de memoria personal...</p>
        <div class="proyecto-retro">
            <p>Soy un programador enfocado en la lógica interna y arquitectura de videojuegos. Mi entorno de trabajo principal se basa en solucionar problemas complejos de gameplay, físicas y sistemas interactivos utilizando C# y C++.</p>
            <p>Actualmente desarrollo proyectos técnicos integrando estos sistemas directamente en motores como Unreal Engine y Unity.</p>
        </div>
    `,
    contacto: `
        <h2>> Ping_Red</h2>
        <p>Abriendo puertos de comunicación...</p>
    `
};

// 2. REFERENCIAS A LA INTERFAZ (Como hacer GetComponent)
const pantalla = document.getElementById('pantalla-principal');

const btnProyectos = document.getElementById('btn-proyectos');
const btnHabilidades = document.getElementById('btn-habilidades');
const btnSobreMi = document.getElementById('btn-sobremi');
const btnContacto = document.getElementById('btn-contacto');

// 3. LÓGICA DE BOTONES (Como el evento OnClick de la UI)
// Al hacer clic, inyectamos el HTML de la base de datos en la pantalla
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
