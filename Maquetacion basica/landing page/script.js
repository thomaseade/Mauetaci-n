


let informacion = [];

function guardarInformacion() {
  
  let nombre = document.getElementById("nombre").value;
  let origen = document.getElementById("origen").value;
  let destino = document.getElementById("destino").value;
  let personas = document.getElementById("personas").value;
  let fecha = document.getElementById("fecha").value;



  let informacionViaje = {
    nombre: nombre,
    origen: origen,
    destino: destino,
    personas: personas,
    fecha: fecha
  };



  informacion.push(informacionViaje);
  console.log(informacion);
}









function filtrarInformacion() {
    let destinosFiltrados = informacion.filter((informacionViaje) => {
      let destino = informacionViaje.destino.toLowerCase();
      return destino === "canarias" || destino === "mallorca" || destino === "galicia";
    });
  
    console.log(destinosFiltrados);
  }