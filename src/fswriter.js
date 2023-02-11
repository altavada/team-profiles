const fs = require('fs');

const head = `<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <style> .membercard {width: 250px;} </style>
    </head>
    <body>
        <header class="bg-primary">
            <h1 class="p-3 text-white">
                DevMates Team Profiles
            </h1>
        </header>
        <main>
            <div class="container mt-5 text-center">
                <div class="row mt-4">`;
                
const foot = `
                </div>
            </div>
        </main>
    </body>
</html>`;

const buildPage = (manager, engineers, interns) => {
    fs.writeFile('./dist/index.html', `${head}${createManager(manager)}${createEngineers(engineers)}${createInterns(interns)}${foot}`, (err) => err ? console.log(err) : null);
    console.log('File ready.');
}

const createManager = (manager) => {
    return `
                    <div class="membercard card mx-auto my-3 text-dark">
                        <div class="card-header text-center text-white bg-danger">
                            Manager
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${manager.name}</li>
                            <li class="list-group-item">ID#${manager.id}</li>
                            <li class="list-group-item"><a href="mailto:${manager.email}">${manager.email}</a></li>
                            <li class="list-group-item">Office Number: ${manager.officeno}</li>
                        </ul>
                    </div>`;
}

const createEngineers = (engineer) => {
    let inputarray = [];
    for(const i in engineer) {
        let member = engineer[i];
        let card = `
                    <div class="membercard card mx-auto my-3 text-dark">
                        <div class="card-header text-center text-white bg-warning">
                            Engineer
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${member.name}</li>
                            <li class="list-group-item">ID#${member.id}</li>
                            <li class="list-group-item"><a href="mailto:${member.email}">${member.email}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${member.github}" target="_blank">${member.github}</a></li>
                        </ul>
                    </div>`;
        inputarray.push(card);
    }
    return inputarray.join('');
}

const createInterns = (intern) => {
    let inputarray = [];
    for(const i in intern) {
        let member = intern[i];
        let card = `
                    <div class="membercard card mx-auto my-3 text-dark">
                        <div class="card-header text-center text-white bg-success">
                            Intern
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${member.name}</li>
                            <li class="list-group-item">ID#${member.id}</li>
                            <li class="list-group-item"><a href="mailto:${member.email}">${member.email}</a></li>
                            <li class="list-group-item" target="_blank">${member.school}</li>
                        </ul>
                    </div>`;
        inputarray.push(card);
    }
    return inputarray.join('');
}

module.exports = { buildPage, createManager, createEngineers, createInterns };
