/* 1. Crear la estructura de datos mediante arreglos y objetos. Debe crear 1 arreglo por
cada listado (Radiología, Traumatología y Dental) y 1 objeto por cada fila de
información que contengan los listados, considerando las propiedades establecidas
en la descripción. */
let radiologia = [
    { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
    { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE' },
    { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
    { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
    { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' },
];

let traumoatologia = [
    { hora: '08:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA' },
    { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
    { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' },
];

let dental = [
    { hora: '08:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
    { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
    { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
    { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' },
];

//Función para recorrer cada arreglo y mostrar en una tabla.
const mostrarConsultas = (consultas)=>{    
    //cabecera de la tabla
    let tabla = `
        <table>
            <tr>
                <th><p>Hora</p></th>
                <th><p>Especialista</p></th>
                <th><p>Paciente</p></th>
                <th><p>Rut</p></th>
                <th><p>Prevision</p></th>
            </tr>
    `;
    //datos de la tabla por cada objeto
    for(let i=0; i < consultas.length; i++){
        tabla += `
            <tr>
                <th>${consultas[i].hora}</th>
                <th>${consultas[i].especialista}</th>
                <th>${consultas[i].paciente}</th>
                <th>${consultas[i].rut}</th>
                <th>${consultas[i].prevision}</th>
            </tr>
        `;
    }
    tabla += `</table>`
    document.write(tabla);
};

document.write('<h1>Estadisticas centro médico Ñuñoa</h1>');

/* 2. Mostrar por pantalla la primera y última atención de cada listado, desplegando el
nombre del paciente junto con la previsión, separados por un guión (utilizar índices
de arreglos para esto). */
document.write('<h3>Radiología</h3>');
document.write (`<p>Primera atención: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length - 1].paciente} ${radiologia[radiologia.length - 1].prevision} .</p> <br>`);

document.write('<h3>Traumoatología</h3>');
document.write (`<p>Primera atención: ${traumoatologia[0].paciente} - ${traumoatologia[0].prevision} | Última atención: ${traumoatologia[traumoatologia.length - 1].paciente} ${traumoatologia[traumoatologia.length - 1].prevision} .</p> <br>`);

document.write('<h3>Dental</h3>');
document.write(`<p>Primera atención: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length - 1].paciente} ${dental[dental.length - 1].prevision} .</p> <br>`);

/* 3. Recorrer el arreglo y mostrar su contenido en una tabla. */
document.write('<h3>Radiología</h3>');
mostrarConsultas(radiologia);

document.write('<h3>Traumoatología</h3>');
mostrarConsultas(traumoatologia);

document.write('<h3>Dental</h3>');
mostrarConsultas(dental);