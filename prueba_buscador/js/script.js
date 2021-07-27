var madroñoTxt = document.getElementById('madroños');

function buscarMadroño (argument){
	
	if (madroñoTxt.value=="") {
		alert('La caja de texto esta limpia');
	} else{
		buscarApi(madroñoTxt.value);
	}
	
}
var especie
var estado

function buscarApi(idNombre){

fetch('localhost:3000'+idNombre)
.then(response => response.json())
.then(function buscar(madroño){
			console.log(madroño);

			
			especie=document.getElementById('especie').innerHTML=(madroño.especie)
			estado=document.getElementById('estado').innerHTML=(madroño.estado)
			


		})


.catch(err=>console.log(err));
}