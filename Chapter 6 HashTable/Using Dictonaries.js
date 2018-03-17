let D = require('../Chapter 6 HashTable/Dictionary');
let Dictionary = D.Dictionary;

let dict = new Dictionary();

dict.set('Gandalf', 'gandalf@email.com');
dict.set('John', 'johnsnow@email.com');
dict.set('Tyrion', 'tyrion@email.com');

console.log(dict.has('Gandalf'));   //outputs true
console.log(dict.Size);   //outputs 3

console.log(dict.keys()); //outputs ["Gandalf", "John", "Tyrion"]
console.log(dict.values()); //outputs ["gandalf@email.com", "johnsnow@email.com", "tyrion@email.com"]
console.log(dict.get('Tyrion')); //outputs tyrion@email.com

dict.delete('John');

console.log(dict.keys()); //outputs ["Gandalf", "Tyrion"]
console.log(dict.values()); //outputs ["gandalf@email.com", "tyrion@email.com"]

console.log(dict.getItems()); //Object {Gandalf: "gandalf@email.com", Tyrion: "tyrion@email.com"}