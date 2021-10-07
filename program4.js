//Callback Hell

console.log('Before');

getUser(1, (user) => {
    getRepositories(user.name, (repos) => {
        getCommits(repos[0], (commits) => {
            console.log(commits);
        })

    })
});

console.log('After');

function getUser(id, callback){

    setTimeout(() => {
        console.log('Loading some data...');
        callback({id: 1, name: 'Himanshu'});
    }, 2000);
}

function getRepositories(reqname, callback){

    setTimeout(() => {
        console.log('Loading Repos...');
        callback([1,2,3]);
    }, 2000);
}

function getCommits(repo, callback){
    setTimeout(() => {
        console.log('Loading Commits...');
        callback(['commit1','commit2']);
    }, 2000);
}