
const obtenerInformacion = (materia)=> {
	materias = {
		fisica:["Perez","pedro","pepito","cofla", "maria"],
		programacion:["Martinez","pedro","juan","pepito"],
		logica:["Perez","pedro","juan","pepito","cofla","maria"],
		quimica:["Belmonte","pedro","juan","pepito","cofla","maria"]
	}
	if (materias[materia]!== undefined){
		return [materias[materia],materia,materias];
	}  else {
		return materias;
	}
}

const mostrarInformacion = (materia)=>{
let informacion = obtenerInformacion(materia);

if (informacion !== false){
let profesor = obtenerInformacion(materia)[0][0];
alumnos = obtenerInformacion(materia)[0];
alumnos.shift();
document.write(`alumnos presentes en:<b>${informacion[1]}</b>:
 <b style ="color:red">${profesor}</b><Br>
los alumnos son: <b style = "color:blue">${alumnos}</b><BR><BR>;`);
  }
}

const cantidadDeClase = (alumnos)=>{
	let informacion = obtenerInformacion();
  let cantidadTotal = 0;
  for (info in informacion){
  	if(informacion[info].includes(alumnos)){
  		cantidadTotal++;
  	}
  }
  return `<b style = "color:blue">${alumnos}</b> esta en:<b> ${cantidadTotal} Clase</b>`;
}
mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

document.write(cantidadDeClase("cofla"))
