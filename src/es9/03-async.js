async function* anotherGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const other = anotherGenerator();
other.next().then(({ value }) => console.log(value)); // 1
other.next().then(({ value }) => console.log(value));
other.next().then(({ value }) => console.log(value));
