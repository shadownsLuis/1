
class app {	
	constructor (descarga,puntuacion,peso){
	this.descarga = descarga;
	this.puntuacion = puntuacion; 
	this.peso = peso;
	this.iniciada = false;
	this.instalada = true;
    }


abrir (){
	if(this.iniciada == false){
		this.iniciada=true;
		alerte("app iniciada");
	}
}
cerrar (){
	if (this.iniciada == true){
		this.iniciada = false;
		alert("app cerrada");
	}
}

instalar (){
	if(this.instalada == false){
		this.instalada=true;
		if (this.instalada = true){
			alerte("app instalada correctamente");
		} else {
			alert ("no se instalo correctamente");
		}
	}
}
desintalar (){
	if (this.instalada == true){
		this.instalada = false;
		if (this.instalada = false){
			alert("app desintalada correctamente");
		}else (this.instalada = true){
			alert("no se desintalo el app");
		}

	}
}	

	appinfo(){
		retrun `
		descarga: <b>${this.descarga}</b> </br>
		puntuacion: <b>${this.puntuacion}</b></br>
		peso: <b>${this.peso}</b></br>
		`
	}
}

app = new App( "16.000","5 estrellas","900mb");
app1 = new App( "14.000","5 estrellas","700mb");
app2 = new App( "16.000","4 estrellas","900mb");
app3 = new App( "17.000","5 estrellas","800mb");
app4 = new App( "18.000","2 estrellas","950mb");
app5 = new App( "16.000","5 estrellas","1000mb");
app6 = new App( "16.600","3 estrellas","900mb");
app7 = new App( "16.000","5 estrellas","950mb");

app.instalar()
app.abrir()
app.cerrar()
app.desintalar()

