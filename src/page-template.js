// create array to hold all HTML elements as it is created
const htmlPage = [];

// createTeam(team) {}
const createTeam = team => {

    // generate html for manager
    // const createManager(manager) {return;}  
    const createManager = manager => {
        // use mailto for email link
        return`
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-title">${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="employee-info">
                    <li class="employee-info-item">ID: ${manager.getId()}</li>
                    <li class="employee-info-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="employee-info-item">Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `;
    };

    // generate html for engineer employee
    // same format as manager
    const createEngineer = engineer => {
        return`
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h3 class="card-title">${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="employee-info">
                    <li class="employee-info-item">ID: ${engineer.getId()}</li>
                    <li class="employee-info-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="employee-info-item">Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
        `;
    };

    // generate html for interns
    const createIntern = intern => {
        return`
        <div class="card">
            <div class=card-header>
                <h2 class="card-title">${intern.getName()}</h2>
                <h3 class="card-title">${intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="employee-info">
                    <li class="employee-info-item">ID: ${intern.getId()}</li>
                    <li class="employee-info-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="employee-info-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        `;
    };

    // filter through data and push created manager into HTML array
    htmlPage.push(team
        .filter(employee => employee.getRole() === "Manager")
        // generate manager html and passing in user input for manager info
        .map(manager => createManager(manager))
    );
    // filter through data and push created engineer into HTML array
    htmlPage.push(team
        .filter(employee => employee.getRole() === "Engineer")
        // generate engineer html and passing in user input for engineer info
        .map(engineer => createEngineer(engineer))
        // join back together into array
        .join("")
    );
    // filter through data and push created intern into HTML array
    htmlPage.push(team
        .filter(employee => employee.getRole() === "Intern")
        // generate intern HTML and passing in user input for intern info
        .map(intern => createIntern(intern))
        // join back together into array
        .join("")
    );
    
    // return joined html array filled with all cards needed
    return htmlPage.join("");
}

// export whole function to generate HTML
// bring in bootstrap for styling with css
module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">


    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-header">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                    ${createTeam(team)}
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
};