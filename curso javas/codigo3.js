const sumar = (num1,num2)=>{
	return parseInt(num1) + parseInt(num2)
}
const restar = (num1,num2)=>{
	return parseInt(num1) - parseInt(num2)
}
const dividir = (num1,num2)=>{
	return parseInt(num1) / parseInt(num2)
}
const multipicar = (num1,num2)=>{
	return parseInt(num1) * parseInt(num2)
}

alert("que operacion deseas realizar? ");

let operacion = Prompt("1: suma, 2: resta, 3: dividir, 4: multipicar");

if (operacion == 1) {
	let numero1 = Prompt("primer numero para sumar");
	let numero2 = Prompt("segundo numero para sumar");
	resultado = sumar(numero1,numero2);
	alert(`tu resultado es: &{resultado} `);

} else if (operacion == 2) {
    let numero1 = Prompt("primer numero para restar");
	let numero2 = Prompt("segundo numero para restar");
	resultado = restar(numero1,numero2);
	alert(`tu resultado es: &{resultado} `);


} else if (operacion == 3) {
    let numero1 = Prompt("primer numero para dividir");
	let numero2 = Prompt("segundo numero para dividir");
	resultado = dividir(numero1,numero2);
	alert(`tu resultado es: &{resultado} `);


} else if (operacion == 4) {
    let numero1 = Prompt("primer numero para multipicar");
	let numero2 = Prompt("segundo numero para multipicar");
	resultado = multipicar(numero1,numero2);
	alert(`tu resultado es: &{resultado} `);

} else {
	
	alert("no se encuentra la operacion");
}


