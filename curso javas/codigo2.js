alert("hola luis")

let cantidad = prompt(" cunatos alunnos son ?")
let alumnosTotales = [0];

for (i = 0; i < cantidad; i++){
	alumnosTotales[i] = [prompt("nombre del alunnos "+(i+1)), 0]
}
const tomarAsistencia =(nombre,p) =>{
	let presencia = prompt(nombre);
	if (presencia == "p" || presencia == "p" ){
		alumnosTotales[p][1]++;
	}
}

for (i = 0; i < 30 ; i++) {
	for (alumnos in alumnosTotales){
		tomarAsistencia(alumnosTotales[alumnos][0],alumnos)
	}
}

for (alumnos in alumnosTotales){
	let resultado = `${alumnosTotales[alumnos][0]}:<br>
	________Presente: ${alumnosTotales[alumnos][1]} <br>
	________Ausencias: ${30 - parseInt(alumnosTotales[alumnos][1])}
	`;

if (30 - alumnosTotales[alumnos][1]> 18){
	resultado += "<b style=`color:red`>REPROBADO EL SEMESTERE</b><br><br>";
}else {
	resultado += "<br><br>"
  }
  document.write(resultado);
}



