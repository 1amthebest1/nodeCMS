const fs=require('fs');
const crypto=require('crypto');
const jwt=require('jsonwebtoken');

function createJWT(){

    const key=crypto.randomBytes(32).toString('hex');

    fs.writeFileSync('./functions/authentication/key.txt',key,(err)=>{

        if(err){

            console.log("Warning error occured while creating JWT:" + err);

        }
        else{

            console.log(`jwt secret key has been created`);

        }
    });
}

function assignJWT(email, password){

    const payload=[email, password];

    const secretKey=fs.readFileSync('./functions/authentication/key.txt','utf8') //reads file as utf8 to return a string, and not binary data

    const token=jwt.sign(payload, secretKey);

    return token;
}

function checkIntegrity(token){

    try{

    const secretKey=fs.readFileSync('./functions/authentication/key.txt','utf8');

    const decodedToken=jwt.verify(token,secretKey);
    
    return token;
    
    }

    catch(error){

        const invalidToken="invalid token";

        return invalidToken;

    };
}

module.exports={createJWT, assignJWT, checkIntegrity};