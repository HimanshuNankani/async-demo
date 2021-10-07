
const p = new Promise((resolve, reject) => {

    resolve(1);
    // reject(new Error('message'));
});
p.then(result => console.log(result));



// const p1 = new Promise((resolve, reject) => {

//     reject(new Error('Something went wrong'));
// });

// p1.then(result => console.log(result))
//   .catch(err => console.log('Error: ', err.message));




// console.log('Loading result...')
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1);
//     }, 2000);
//     // reject(new Error('message'));
// });

// p2.then(result => console.log(result))
//   .catch(err => console.log(err.message));
