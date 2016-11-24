var Jugador = require('./modules/jugador');
var Partida = require('./modules/partida');
const mongoClient=require('mongodb').MongoClient;
const assert=require('assert');
const config=require('./config.js');
const url=config.url;
// var counter=0;
// var interval = setInterval( function() {
//   console.log('Bar',counter);
//   counter++;

// }, 1000);
// 
var partidas=new Map();
var usuariosOnline=new Map();
// 
mongoClient.connect(url, function(err, db) {
	assert.equal(null, err);

	var coleccion = db.collection('partida');
	coleccion.find().toArray(function(err, data) {
		var partida;
		var player;
		console.log(data[0].jugadores[0]);

		for(var i=0;i<data.length;i++){
			partida= new Partida(data[i].nombre, data[i].tablero._columnas,data[i].tablero._filas);
			for(var j=0;j<data[i].jugadores.length;j++){
				for(var r=1;r<data[i].jugadores[j].length;r+2){
					player=new Jugador(data[i],jugadores[j][r]._nombre,data[i],jugadores[j][r]);
				}
			}
			console.log(partida);
			console.log(player);

			// partidas.set(i+1,partida);

		}
		db.close();
	});

})

function guardar(){
	for(i=0;i<partidas.length;i++){
		partidas[i].guardarPartida();
		console.log(partidas[i].nombre+" guardada");
	}
}

var interval = setInterval(function() {
	console.log(partidas);
	// var jugador = new Jugador('adri', 2);
	// // partidas[0].addJugador(jugador);
	// var batalla=new Partida(partidas[0].nombre,partidas[0].columnas,partidas[0].filas);
	// batalla.addJugadores(partidas[0].jugador)
	// console.log(partidas[0]);
	// var info={
	// 	nombre: 'gfgh',
 // 		tablero: {
 // 			f: 5,
 // 			c: 5
 // 		},
 // 		jugador: jugador
	// }
	// jugador.crearPartida(info,function(data){
	// 	partidas.push(data);
	// 	console.log(partidas);
	// 	guardar();

	// });
	
}, 3000);

// var jugador = new Jugador('sergio', 1);
// var info = {
// 		nombre: 'gfgh',
// 		tablero: {
// 			f: 5,
// 			c: 5
// 		},
// 		jugador: jugador
// 	}
// 	// console.log(info);

// var partida1;
// jugador.crearPartida(info, function(data) {
// 	partida1 = data;
// });

// var interval = setInterval(function() {
// 	var jug = new Jugador('daniel', 2);
// 	var parts = partida1.cargarPartidas();
// 	console.log(parts);

// }, 1000)

// console.log(partida1);
// partida1.cargarPartida("guille");
// var jug = new Jugador('daniel',2);
// partida1.addJugador(jug);
// // console.log(partida1);
// partida1.guardarPartida();


// jugador.crearTanque('aitor');
// console.log(jugador);
// jugador.crearTanque('denis');
// console.log(jugador);
// var recoger=jugador.buscarTanque('aitor');
// console.log(recoger);
// jugador.borrarTanque('denis');
// console.log(jugador.tanques[0][1]);