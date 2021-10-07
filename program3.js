//Callbacks

console.log('Before');

getUser(1, (user) => {
    console.log("User", user);
});

console.log('After');

function getUser(id, callback){

    setTimeout(() => {
        console.log('Loading some data...');
        callback({id: 1, name: 'Himanshu'});
    }, 2000);

}