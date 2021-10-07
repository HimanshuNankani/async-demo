//Dealing with Async code

console.log('Before');

const user = getUser(1);

console.log(user);

console.log('After');

function getUser(id){

    setTimeout(() => {
        console.log('Loading some data...');
        return {id: 1, name: 'Himanshu'};
    }, 2000);

}