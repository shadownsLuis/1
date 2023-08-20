alert ("hola")

let free = false;
const validarCliente = (time)=>{
	let edad = prompt("cual es tu edad");
	if (edad > 18) {
		if (time >= 2 && time < 7 && free == false) {
			alert ("podes pasar gratis. por sos la primera persosna de las 2 am ");
			free = true;
		} else {
			alert (`son la ${time}: podes pasar pero tenes pagar`);
		}
	}else {
		alert("mira sos menor no podes pasa");
	}
}
validarCliente(23);
validarCliente(24);
validarCliente (0.2);
validarCliente (0.6);
validarCliente (1);
validarCliente (2);
validarCliente (2.4);
validarCliente (3);