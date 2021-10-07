//Named Function

console.log('Before');
getUser(1, getRepos);
console.log('After');


function displayCommits(commits){
    console.log(commits);
}

function getReposCommits(repos){
    getCommits(repos[0], displayCommits);

}

function getRepos(user){
    getRepositories(user.name, getReposCommits);
}

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