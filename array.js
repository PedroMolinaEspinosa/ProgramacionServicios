const array = [1,2,3,4,5,6];

for(var i = 0; i < array.length; i++){
   console.log(array[i]);
}
array.forEach(function(valor){
   console.log(valor);
});
function Person(name, subname){
   this.name = name;
   this.subname = subname
   this.sayName = function() {
      return this.name + ' ' + this.subname;
   }
}
var person1 = new Person('nombre1', 'apellido11 apellido12');
var person2 = new Person('nombre2', 'apellido12 apellido22');
console.log(person1.name + ' ' + person1.subname)

/*n
array.reverse();

console.log(array.sort());
console.log(array);
*/

