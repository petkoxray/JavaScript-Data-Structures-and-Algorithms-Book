let hashTableSeparateChaining = new HashTable();

hashTableSeparateChaining.add('Gandalf', 'gandalf@email.com');
hashTableSeparateChaining.add('John', 'johnsnow@email.com');
hashTableSeparateChaining.add('Tyrion', 'tyrion@email.com');
hashTableSeparateChaining.add('Aaron', 'aaron@email.com');
hashTableSeparateChaining.add('Donnie', 'donnie@email.com');
hashTableSeparateChaining.add('Ana', 'ana@email.com');
hashTableSeparateChaining.add('Jonathan', 'jonathan@email.com');
hashTableSeparateChaining.add('Jamie', 'jamie@email.com');
hashTableSeparateChaining.add('Sue', 'sue@email.com');
hashTableSeparateChaining.add('Mindy', 'mindy@email.com');
hashTableSeparateChaining.add('Paul', 'paul@email.com');
hashTableSeparateChaining.add('Nathan', 'nathan@email.com');

console.log('**** Printing Hash **** ');

hashTableSeparateChaining.print();

console.log('**** Get **** ');

console.log(hashTableSeparateChaining.get('Jamie'));
console.log(hashTableSeparateChaining.get('Sue'));
console.log(hashTableSeparateChaining.get('Jonathan'));
console.log(hashTableSeparateChaining.get('Loiane'));

console.log('**** Remove **** ');

console.log(hashTableSeparateChaining.remove('Gandalf'));
console.log(hashTableSeparateChaining.get('Gandalf'));
hashTableSeparateChaining.print();

console.log(hashTableSeparateChaining.remove('Sue'));
hashTableSeparateChaining.print();

console.log(hashTableSeparateChaining.remove('Jamie'));
hashTableSeparateChaining.print();

console.log(hashTableSeparateChaining.remove('Donnie'));
hashTableSeparateChaining.print();