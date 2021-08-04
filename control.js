let Patients = 
{
    Name : "", 
    Age : "",
    Mobile : "",
    Gender : "" ,
    location : ""
}


const P1 = (e) =>
{
    e.preventDefault()
    let x,name,age,gender,mobile;
    name = document.getElementById("name").value;
    age = document.getElementById("age").value;
    mobile = document.getElementById("mobile").value;
    x = document.getElementById("gender").selectedIndex;
    gender = document.getElementsByTagName("option")[x].value;
    console.log(name,age,mobile,gender);
    Patients.Name = name
    Patients.Age = age
    Patients.Mobile = mobile
    Patients.Gender = gender
    Patients.location = "Office"
    
}

const P2 = (e) =>
{
    e.preventDefault()
    let x,name,age,gender,mobile;
    name = document.getElementById("name").value;
    age = document.getElementById("age").value;
    mobile = document.getElementById("mobile").value;
    x = document.getElementById("gender").selectedIndex;
    gender = document.getElementsByTagName("option")[x].value;
    console.log(name,age,mobile,gender);
    Patients.Name = name
    Patients.Age = age
    Patients.Mobile = mobile
    Patients.Gender = gender
    Patients.location = "Chamber1"
}

const P3 = (e) =>
{
    e.preventDefault()
    let x,name,age,gender,mobile;
    name = document.getElementById("name").value;
    age = document.getElementById("age").value;
    mobile = document.getElementById("mobile").value;
    x = document.getElementById("gender").selectedIndex;
    gender = document.getElementsByTagName("option")[x].value;
    console.log(name,age,mobile,gender);
    Patients.Name = name
    Patients.Age = age
    Patients.Mobile = mobile
    Patients.Gender = gender
    Patients.location = "Chamber2"
}

const D1 = (e) =>
{
    e.preventDefault();
}

const show1 = () =>
{
    document.getElementById("onen").style.display = "block";
    document.getElementById("oneo").style.display = "none";
    AOS.init();
}

const show2 = () =>
{
    document.getElementById("onen").style.display = "none";
    document.getElementById("oneo").style.display = "block";
    AOS.init();
}

/*let MyData = JSON.stringify(Patients)
console.log(MyData)

const xhr = new XMLHttpRequest();
xhr.open("POST", "basic.php");
xhr.setRequestHeader("Content-Type", "applicatopn/json")
xhr.send(MyData)*/