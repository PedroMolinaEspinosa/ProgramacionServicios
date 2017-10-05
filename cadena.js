/*for(var i = 0; i < process.argv.length; i++){
   console.log('Argumento ' + i + ";" + process.argv[i]);
}*/

if(process.argv.length < 3){
   process.exit(1);
}
console.log('Cadena leída: ' + process.argv[2]);
const cadena = process.argv[2];
function procesarCadena(valorCadena){
   var _cadena = valorCadena;
   return {
      longitudCadena   : function(){return _cadena.length;},
      cadenaEsNumero   : function(){return !isNaN(_cadena);},
      cadenaEnMayuscula: function(){return _cadena.toUpperCase();},
      cadenaAlReves    : function(){return _cadena.split('').reverse().join('');},
      esPalindromo     : function(){return _cadena === this.cadenaAlReves();}
   };
}
const cadena1 = procesarCadena(cadena);
console.log('Cadena: ' + cadena + ' es: ' + cadena1.longitudCadena());
console.log('La cadena es: ' + cadena + ' es numero: ' + cadena1.cadenaEsNumero());
console.log('La cadena es: ' + cadena + ' en mayúscula:  ' + cadena1.cadenaEnMayuscula());
console.log('Cadena al revés: ' + cadena1.cadenaAlReves());
console.log('Es palíndromo: ' + cadena1.esPalindromo());
