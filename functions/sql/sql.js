//This file creates a connection with the Database

const express=require('express');
const mysql=require('mysql');

function connect(){
    
    //initialises variables required to connect to the Database
    const con=mysql.createConnection({
        host:"localhost",
        user:"pma",
        password:"pmapass",
        database:"nodeCMS"
    });
    
    con.connect((err)=>{
        if(err){
            console.log(`error occured while connecting to the Database` + err);
        }
        else{
            console.log(`No error, should be connected`);
        }
    });

}

module.exports={connect};