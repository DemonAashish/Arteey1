import Service from "./Services/Service.js";
const personTable=document.getElementById("person_table");
const paginationTable=document.getElementById("pagination_table");
const formDetails=document.querySelector(".myForm");


const initPersonTable=()=>{
    const row=personTable.insertRow(0);
    row.insertCell(0).innerHTML="Id"
    row.insertCell(1).innerHTML="FirstName"
    row.insertCell(2).innerHTML="LastName"
    row.insertCell(3).innerHTML="Email"
    row.insertCell(4).innerHTML="Actions"
}

const clearTables=()=>{
    let rowCount=personTable.rows.length-1;
    for(let i=0;i<rowCount;i++){
        personTable.deleteRow(1);
    }
    paginationTable.deleteRow(0);
}
const getPersons= async(page)=>{
    let persons= await Service.list(page);
    persons.data.map(person=>{
        const row= personTable.insertRow(-1);
        row.insertCell(0).innerHTML=person.id;
        row.insertCell(1).innerHTML=person.first_name;
        row.insertCell(2).innerHTML=person.last_name;
        row.insertCell(3).innerHTML=person.email;
        row.insertCell(4).innerHTML=`<a  href="">Edit</a> | <a href="">Delete</a>`
    });
    const row=paginationTable.insertRow(0);
    for(let i=1;i<=persons.total_pages;i++){
        row.insertCell(i-1).innerHTML=`<a href="">${i}</a>`
    }
}

const postData=async(model)=>{
    const fName=document.getElementById("firstName").value;
    const lName=document.getElementById("lastName").value;
    const email=document.getElementById("email").value;
    let person= await Service.create(model); 
        person.first_name=fName;
        person.last_name=lName;
        person.email=email;
}

document.addEventListener('click',(e)=>{
    e.preventDefault();
    if(e.target.className==='paginator'){
        clearTables();
       getPersons(e.target.text);
    }
    if(e.target.className==='update'){}
})

formDetails.addEventListener('submit',(e)=>{
    e.preventDefault();
    return postData(e.target.text);
   
})

initPersonTable();
getPersons(1)
postData();
