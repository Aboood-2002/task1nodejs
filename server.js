const express = require("express");
const mongoose = require("mongoose");



let server1 = express();



//connect to mongo server --> local db

/*
mongoose.connect("mongodb://localhost:27017",(err)=>{
    if(!err) console.log("DB is connected");
    else console.log(err)
})*/


async function connect(){
    let connection = await
     mongoose.connect("mongodb://0.0.0.0:27017");
    if(!connection){
        console.log("Not connected db")
    }else{
        console.log("DB is connected")
    }
}; 

connect()


// schema

const studentschema = new mongoose.Schema({
    name : String,
    age : Number,
    password : String,
    phone : String,
    address : String,
    studyear : String,

});


const courseschema = new mongoose.Schema({
    name : String,
    description : String,
    totalmark : String,
    

});



// convert schema to model (class)

let studentmodel = new mongoose.model("students",studentschema);

let student1 = new studentmodel(
    {
        name : "Abdo ahmed aly",
        age : 21,
        phone :"01295867412",
        password :"12345",
        studyear : "third year",
        address  : "18 alnozha st. cairo",

    }
).save();

let student2 = new studentmodel(
    {
        name : "ibrahim mostafa ayman",
        age : 21,
        phone :"01005667312",
        password :"54321",
        studyear : "third year",
        address  : " 20 elshark st. portsaid",

    }
).save();

let student3 = new studentmodel(
    {
        name : "Eman khaled ali",
        age : 20,
        phone :"01296987413",
        password :"98745601",
        studyear : "third year",
        address  : "4 alshikh zayed st. ismailea",

    }
).save();

let student4 = new studentmodel(
    {
        name : "hassan mohamed emad",
        age : 21,
        phone :"01095689522",
        password :"65987412",
        studyear : "third year",
        address  : "15 elshohada st. mansora",

    }
).save();

let student5 = new studentmodel(
    {
        name : "nour ayman wael",
        age : 21,
        phone :"01295867412",
        password :"6655234",
        studyear : "third year",
        address  : "9 alsalam st. damitta",

    }
).save();


let coursemodel = new mongoose.model("courses",courseschema);

let course1 = new coursemodel(
    {
        name : "OOP",
        description : "Talking about classes & objects and concepts like : inhertance, abstraction and more ",
        Totalmark : "100 marks",
    }
).save();


let course2 = new coursemodel(
    {
        name : "Data structures",
        description : "how to store and retrive data & information in flexiable ways",
        totalmark : "120 marks",

    }
).save();


let course3 = new coursemodel(
    {
        name : "Web development",
        description : "frontend and backend web development and how websites & web apps work ",
        totalmark : "100 marks",
    }
).save();

let course4 = new coursemodel(
    {
        name : "Security",
        description :"some concepts about cyber security in genral and for web development in particular",
        totalmark : "100 marks" ,


    }
).save();


let course5 = new coursemodel(
    {
        name : "Databases",
        description : "databases,which all information of a program is stored in,and their concepts ",
        totalmark : "120 mark",
    }
).save();











server1.listen(3000,function(){
    console.log("server is opened now")
});