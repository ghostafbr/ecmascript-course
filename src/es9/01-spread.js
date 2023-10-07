const user = { username: 'John', age: 30, country: 'CO' };
const {username, ...values } = user;
console.log(username); // John
console.log(values); // { age: 30 }
