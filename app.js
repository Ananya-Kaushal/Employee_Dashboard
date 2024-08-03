let addUserBtn=document.querySelector("#addUser");

let Removable=document.getElementById("removable");
let errorMsg=document.getElementById("error-msg");

let employeeCount=0;
if(employeeCount==0)
    {
        Removable.innerText='You have 0 Employees.';
    }
let employees=[];
addUserBtn.addEventListener("click",()=>{
    let name=document.getElementById("name");
    const nameValue=name.value;
    let profession=document.getElementById("profession");
    const professionValue=profession.value;
    let age=document.getElementById("age");
    const ageValue=age.value;
    let errorMsg=document.getElementById("error-msg");

    if(nameValue && professionValue && ageValue)
    {
        const newEmployee={
            id:++employeeCount,
            name:nameValue,
            profession:professionValue,
            age:parseInt(ageValue)
        }

        employees.push(newEmployee);
        if(employeeCount>0)
            {
                Removable.innerText='';
            }
        displayEmployees();
        errorMsg.innerText="Success : Employee Added!";
        errorMsg.style.color='#43FF78';

        document.getElementById('name').value = '';
        document.getElementById('profession').value = '';
        document.getElementById('age').value = '';

    }

    else{

        errorMsg.innerText="Error : Please Make sure All the fields are filled before adding in an employee !";
        errorMsg.style.color='#FF4343';
        errorMsg.style.backgroundColor='black';
        return;
    }
})

function displayEmployees() {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';

    employees.forEach(employee => {
        const employeeDiv = document.createElement('div');
        employeeDiv.className = 'employee';
        employeeDiv.innerHTML = `
            <span style="border:1px solid white">${employee.id}.     Name : ${employee.name}     Profession : ${employee.profession}     Age : ${employee.age}</span>
            <button class="delete-button" onclick="deleteEmployee(${employee.id})" style="border-radius:25px">Delete User</button>

        `;
        //employeeDiv.style.border='1px solid white';
        employeeList.appendChild(employeeDiv);
    });
}

function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    employeeCount--;
    if(employeeCount==0)
        {
            Removable.innerText='You have 0 Employees.';
            errorMsg.innerHTML='';
        }
    displayEmployees();
}
