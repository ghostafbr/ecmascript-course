const Promise1 = new Promise((reject) => reject('reject'));
const Promise2 = new Promise((resolve) => resolve('resolve'));
const Promise3 = new Promise((resolve) => resolve ('resolve2'));

Promise.allSettled([Promise1, Promise2, Promise3])
    .then((result) => console.log(result));
