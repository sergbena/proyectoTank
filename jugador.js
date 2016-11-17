'use strict';
var Partida=require('./partida.js');
var Elemento=require('./elemento.js');

class Jugador{

	constructor(nombre,id){
		this._nombre=nombre;
		this._id=id;
		this._tanques= new Map();
	}

	set nombre(nombre){
		this._nombre=nombre;
	}

	get nombre(){
		return this._nombre;
	}

	set id(id){
		this._id=id;
	}

	get id(){
		return this._id;
	}

	get tanques(){
		// return Array.from(this._tanques);
		return this._tanques;
	}

	crearPartida(inf){
		
		var partida = new Partida(inf.nombre,inf.tablero.c,inf.tablero.f);
		// console.log(partida);
		partida.addJugador(this);
		return partida;
	}

	unirse(){

	}

	salir(){

	}

	crearTanque(nombre){
		var nuevoTanque= new Elemento.tanque(nombre);
		this._tanques.set(nombre,nuevoTanque);
	}

	opciones(){

	}

	buscarTanque(nombre){
		return this._tanques.get(nombre);
	}

	borrarTanque(nombre){
		this._tanques.delete(nombre);
	}

	cargarJugador(){
		
	}
}

module.exports=Jugador;