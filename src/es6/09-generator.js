
function* iterator(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterator(['Andrés', 'Felipe', 'Guzmán', 'Giraldo']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
