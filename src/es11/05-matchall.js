const regex = /\b(Apple)+\b/g;
const str = 'Apple, Apple and more Apple, Orange, etc.';

for (const match of str.matchAll(regex)) {
  console.log(match);
}

