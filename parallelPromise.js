
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async Operation1 completed');
        resolve(1);
    }, 3000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async Operation2 completed');
        resolve(2);
    }, 2000);
});

// Promise.all([p1,p2])
//         .then(result => console.log(result))
//         .catch(err => console.log('Error: ', err));
        
Promise.race([p1,p2])
        .then(result => console.log(result))
        .catch(err => console.log('Error: ', err));