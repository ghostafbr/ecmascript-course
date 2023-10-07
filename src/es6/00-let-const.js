var lastName = 'Bolaños';
lastName = 'test';
console.log(lastName);

let fruit = 'apple';
fruit = 'orange';
console.log(fruit);

const PI = 3.1416;
console.log(PI);

const fruits = () => {
    if (true) {
        var fruit1 = 'apple'; // function scope
        let fruit2 = 'orange'; // block scope
        const fruit3 = 'banana'; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();
