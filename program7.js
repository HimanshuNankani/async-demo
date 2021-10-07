//Promise

console.log('Before');

// getUser(1, (user) => {
//     getRepositories(user.name, (repos) => {
//         getCommits(repos[0], (commits) => {
//             console.log(commits);
//         })

//     })
// });

// //1. Just consuming first promise
const p = getUser(1);
p.then(user => console.log(user));

// //2. Consume all promise
// getUser(1)
//     .then(user => getRepositories(user.name))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log('Commits ', commits))
//     .catch(err => console.log('Error ', err.message));

console.log('After');

function getUser(id){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Loading some data...');
            resolve({id: 1, name: 'Himanshu'});
        }, 2000);
    });
    
}

function getRepositories(reqname){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Loading Repos...');
            resolve([1,2,3]);
        }, 2000);
    });
}

function getCommits(repo){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Loading Commits...');
            resolve(['commit1','commit2']);
        }, 2000);
    });
}