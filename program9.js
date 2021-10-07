//Final

console.log('Before');

//Callbacks
// getUser(1, (user) => {
//     getRepositories(user.name, (repos) => {
//         getCommits(repos[0], (commits) => {
//             console.log(commits);
//         })
//     })
// });

//Promise
// getUser(1)
//     .then(user => getRepositories(user.name))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log('Commits ', commits))
//     .catch(err => console.log('Error ', err.message));

//Async-Await
async function displayCommits(){
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.name);
        const commits = await getCommits(repos[0]);
        console.log('Commits: ', commits);
    } catch (error) {
        console.log('Error: ', error.message);
    }
}

displayCommits();

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
            // resolve([1,2,3]);
            reject(new Error('Could not get repositories!'));
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