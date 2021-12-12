// Write your solution in this file!
const employee = {
    name: "Kenny",
    streetAddress: "123 Fake Street", 
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj ={...employee};

    newObj[key] = value;

    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newObj = {...employee, key};
    delete newObj.name;
    return newObj;
}


function destructivelyDeleteFromEmployeeByKey(){
    delete employee.name;
    return employee;
}
