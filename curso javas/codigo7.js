let trabajo = "240 minutos de trabajo";
let estudio = "100 minutos de estudio";
let tp = "100 minutos de trabajo practico";
let homework = "30 minutos trabajo de hogar";
let descanso = "10 minutos de descanso";

console.log("TAREAS");
for (var i = 0; i < 14 ; i++) {
	if (i == 0){
		console.group("semana 1")
	}
console.groupCollapsed("dia " + (i+1));
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(homework);
if (i == 7){
	
		console.groupEnd();
		console.groupCollapsed("semana 2");
	}
}


console.groupEnd();
console.groupEnd();



