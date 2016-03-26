function ubicacion_antipoda(posicion){
	var antipodes_lat = "";
	var antipodes_lng = "";

	antipodes_lat = -posicion.coords.latitude;
	antipodes_lng = (posicion.coords.longitude + 180);
	console.log("latitud antipodas: " + antipodes_lat + ", longitud antipodas: " + antipodes_lng);

	var mapDiv = document.getElementById("map_antipodas");

	var map_antip = new google.maps.Map(mapDiv, {
		center: {lat: antipodes_lat, lng: antipodes_lng},
		zoom: 15
	});
}

function ubicacion(posicion){
	var lat = "";
	var lng = "";

	lat = posicion.coords.latitude;
	lng = posicion.coords.longitude;
	console.log("latitud: "+ lat + ", longitud: " + lng);

	var mapDiv = document.getElementById("map_ubicacion");

	var map_ubic = new google.maps.Map(mapDiv, {
		center: {lat, lng},
		zoom: 15
	});

	ubicacion_antipoda(posicion);
}

function getLocalization(){

	if (Modernizr.geolocation) {
		console.log("geolocation ok");
		navigator.geolocation.getCurrentPosition(ubicacion, null);

	} else {
		alert("Error: Por favor compruebe que está conectado "+
		"a internet y habilite la opción permitir compartir ubicación física");
	}
}

getLocalization();