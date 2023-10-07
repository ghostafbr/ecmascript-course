// arrays destructuring
const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
const [first, second] = fruits;
console.log(first, second, fruits[1]); // apple banana [ 'orange', 'grape', 'mango' ]

// objects destructuring
const person = {
    name: 'John',
    age: 30,
}
const { name, age } = person;
console.log(name, age); // John 30

// spread operator
const country = 'COLOMBIA';
const data = {...person, country};
console.log(data); // { name: 'John', age: 30, country: 'COLOMBIA' }

// rest operator

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15
