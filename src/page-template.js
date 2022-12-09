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
                    <li class="employee-info-item>Office Number: ${manager.getOfficeNumber()}</li>
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
                    <li class="employee-info-item>Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
        `;
    };

    // generate html for interns
    const createIntern = intern => {
        return`
        <div class="card">
            <div class=interneader">
                <h2 class="card-title">${intern.getName()}</h2>
                <h3 class="card-title">${intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="employee-info">
                    <li class="employee-info-item">ID: ${intern.getId()}</li>
                    <li class="employee-info-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="employee-info-item>School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        `;
    };

    // filter through data and push created manager into HTML array
    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        // generate manager html and passing in user input for manager info
        .map(manager => generateManager(manager))
    );
    // filter through data and push created engineer into HTML array
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        // generate engineer html and passing in user input for engineer info
        .map(engineer => generateEngineer(engineer))
        // join back together into array
        .join("")
    );
    // filter through data and push created intern into HTML array
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        // generate intern HTML and passing in user input for intern info
        .map(intern => generateIntern(intern))
        // join back together into array
        .join("")
    );
    
    // return joined html array filled with all cards needed
    return html.join("");

}