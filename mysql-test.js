const mysql = require('mysql');
const read = require('read');
let connection;

const getPassword = ()=>
    new Promise((resolve, reject)=>{
        read({
            prompt: "Enter the MySQL Password for root user: ", 
            silent: true
        },(err,password)=>{
            resolve(password);
        })
});

//TODO: Create a wrapper function for mysql which promisifies query 

getPassword().then(pw=>{

    connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : pw,
    });

    connection.connect();

});

//FIXME: This is happening at the wrong time ? it must be something to do with Promises
process.exit(0);

//TODO: implement these queries sequentially using Promise syntax

    //DROP DATABASE IF EXISTS MyPromises
    //CREATE DATABASE MyPromises
    //USE MyPromises
    //CREATE TABLE Users(user_id char(8) NOT NULL, name varchar(255) NOT NULL, PRIMARY KEY(user_id))
    //INSERT INTO Users VALUES ("12345678", "Simon")
    //SELECT * FROM Users



