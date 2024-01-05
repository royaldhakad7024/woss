// fill in javascript code here
let myForm = document.querySelector('form');
let name1 = document.getElementById('name');
let empID1 = document.getElementById('empID');
let specialization1 = document.getElementById('dept');
let exp1 = document.getElementById('exp');
let email1 = document.getElementById('email');
let mbl1 = document.getElementById('mbl');
let tbody = document.querySelector('tbody');

let AllTask = [];

myForm.addEventListener('submit',function(e)
{
    e.preventDefault();
    let Data = {};
Data.name = name1.value;
Data.empID = empID1.value;
Data.specialization = specialization1.value;
Data.exp = exp1.value;
Data.email = email1.value;
Data.mbl = mbl1.value;

AllTask.push(Data);
tbody.innerText = "";
AllTask.map((ele)=>{
    let row = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let td6 = document.createElement('td');
    let td7 = document.createElement('td');
    let td8 = document.createElement('button');

    td1.innerText = ele.name;
    td2.innerText = ele.empID;
    td3.innerText = ele.specialization;
    td4.innerText = ele.exp;
    td5.innerText = ele.email;
    td6.innerText = ele.mbl;
    if(td4.innerText > 3){
        td7.innerText = "Senior";
    }
    else if (td4.innerText >= 2) {
        td7.innerText = "Junior";
    } else if(Number(td4.innerText) <= 1){
        td7.innerText = "Trainee";
    }
    td8.style.color = "white";
    td8.style.backgroundColor = "black";
    td8.innerText = "DELETE"
    row.append(td1,td2,td3,td4,td5,td6,td7,td8);
    if(td4.innerText <= 2){
        button.addEventListener('click', function(){
            row.innerText = null;
        })
    }
    tbody.append(row);
})
});



