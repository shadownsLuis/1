
class celular{
	constructor( color,peso,rdp,rdc,ram){
		this.color = color;
		this.peso = peso;
		this.tamano = rdp;
		this.resolucionDeCamara = rdc;
		this.memoriaRam = ram;
	    this.encendido = false;
	}
    presionarBotondeEncendido(){
    	if (this.encendido == false){
    		alert("celular encendido");
    		this.encendido = true;
    	} else {
    		alert("el celular ya esta encendido");
      
    
    	}
    }
    reiniciar(){
    	if (this.encendido == true){
    		alert("reiniciando celular");
    	} else {
    		alert("celular se esta apagando");
    	}
    } 
    tomarFotos(){
    	alert(`foto tomada a resolucion: ${this.resolucionDeCamara}`);
    }
    grabarVideo(){
    	alert(`grabando video a resolucion: ${this.resolucionDeCamara}`);
    }
    mobileInfo(){
    	return`
    	color: <b>${this.color}</b></br>
    	Peso: <b>${this.peso}</b></br>
    	Tamaño: <b>${this.tamano}</b></br>
    	Resolucion de Videos: <b>${this.resolucionDeCamara}</b></br>
    	Memoria Ram: <b>${this.memoriaRam}</b></br>
    	`;
    }

}

class celularAltaGama extends celular {
	constructor(color,peso,tamaño,rdc,ram,rdce){
	     super(color,peso,tamaño,rdc,ram);
	     this.resolucionDeCamaraExtra = rdce;
	 }
    grabarVideoLento(){
    	alert("estas grabando en camara lenta");
    }	     
    reconociomientoFacial(){
    	alert("vamos a iniciar reconociomiento Facial")
    }
    infoAlataGama(){
    	return this.mobileInfo() + `Resolucion de camara tracera: ${this.resolucionDeCamaraExtra} <br>`
    }
}



celular1 = new celular("rojo","150","5`","HD","1gb");

celular2 = new celular("negro","155","5.4`","full HD","2gb");

celular3 = new celular("blanco","140","5.2`","full HD","2gb");

celular4 = new celularAltaGama("negro","140","5","4k","4GB","HD");

celular5 = new celularAltaGama("blanco","130","6","4k","4GB","full HD");

document.write(`
	${celular1.mobileInfo()} <br>
	${celular2.mobileInfo()} <br>
	${celular3.mobileInfo()} <br> 
	${celular4.infoAlataGama()} <br>
	${celular5.infoAlataGama()} <br>
	`);



//celular1.presionarBotondeEncendido();
//celular1.tomarFotos();
//celular1.grabarVideo();
//celular1.reiniciar();
//celular1.presionarBotondeEncendido();
