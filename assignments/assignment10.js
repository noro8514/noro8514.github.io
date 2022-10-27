let employee1 = {
    "name":"Sam",
    "department" : "Tech",
    "designation" : "Manager",
    "salary" : "40000",
    "raise" : "true"
}

let employee2 = {
    "name":"Mary",
    "department" : "Finance",
    "designation" : "Trainee",
    "salary" : "18500",
    "raise" : "true"
}

let employee3 = {
    "name":"Bill",
    "department" : "HR",
    "designation" : "Executive",
    "salary" : "21200",
    "raise" : "false"
}

console.log("Problem 1:");
console.log(employee1);
console.log(employee2);
console.log(employee3);

let company = {
    "companyName" : "Tech Stars",
    "website" : "www.techstars.site",
    "employees" : [
        employee1,
        employee2,
        employee3
    ]
}

console.log("Problem 2:");
console.log(company);

let employee4 = {
    "name":"Anna",
    "department" : "Tech",
    "designation" : "Executive",
    "salary" : "25600",
    "raise" : "false"
}
company.employees[3] = employee4;

console.log("Problem 3:");
console.log(company);

let totalSalary = 0;

for(let i = 0; i <=3; i++){
totalSalary += parseInt(company.employees[i].salary);
}

console.log("Problem 4:");
console.log(totalSalary);

for(let i = 0; i <=3; i++){
    if(company.employees[i].raise === 'true'){
        company.employees[i].salary = parseInt(company.employees[i].salary)*1.1;
        company.employees[i].raise = 'false';
    }
}

console.log("Problem 5:");
console.log(company);

let wfhArray = ['Anna','Sam'];

for(let i = 0; i <=3; i++){
    if(company.employees[i].name === wfhArray[0] || company.employees[i].name === wfhArray[1]){
        company.employees[i].wfh = 'true';
    }
    else{
        company.employees[i].wfh = 'false';
    }
}

console.log("Problem 6:");
console.log(company);