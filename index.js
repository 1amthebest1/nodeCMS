const express=require('express');
const app=express();

const register=('./functions/register/register.js');
const login=('./functions/login/login.js');
const lms=('./functions/lms/lms.js');


app.use(express.static('./public'));


app.use('/register',register.routes);

app.use('/login',login.routes);

app.use('/cms',cms.routes)

app.get('/lms',lms.routes);

app.all('*',(req,res)=>{

    res.send(`Warning, this request has been logged`);

});

app.listen('8080',()=>{
    console.log(`server started on port 8080`);
});