

//variables
const formulario = document.querySelector('#formulario')
let arrayturnos = [];

//funciones guardado en local storage como objeto

const CrearItem= (nombre, apellido, telefono, servicio, semana) => {
    
    let item = {
        nombre:nombre,
        apellido:apellido,
        telefono:telefono,
        servicio:servicio,
        semana:semana,   
    };

    arrayturnos.push(item);
    console.log(item);
    

    return item;

}
const guardarLS = () =>{
    localStorage.setItem('turnos', JSON.stringify(arrayturnos));
    
}
const leerDB = () =>{
    arrayturnos=JSON.parse(localStorage.getItem('turnos'));
   console.log(arrayturnos);
}



//Eventlistener
formulario.addEventListener('submit', (e) => {
  
  e.preventDefault();
  let nombreform = document.querySelector('#nombre').value;
  let apellidoform = document.querySelector('#apellido').value;
  let telefonoform = document.querySelector('#telef').value;
  let servicioform = document.querySelector('#servicio').value;
  let semanaform = document.querySelector('#semanadeservicio').value;
  
  CrearItem(nombreform,apellidoform,telefonoform,servicioform,semanaform);
  guardarLS();
  alert("su formulario se envio con éxito, en brevedad se comunicaran a su Whatsapp")
  formulario.reset();
} );
//cada vez que se recargue la página se autoguarda  
document.addEventListener('DOMContentLoaded',leerDB);