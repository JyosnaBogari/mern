//create HTTP server
//Import express module
import exp from 'express';
import {userApp} from './API/useAPI.js'
import {productApp} from './API/productAPI.js'; //for named export use {}
//create server
const app=exp();

//Assigning port number
app.listen(3000,()=>console.log("Http server listening on port 3000"));

//body parsing middlewarw
app.use(exp.json());

app.use('/user-api',userApp);
app.use('/product-api',productApp);









//create a custom middlewarw
/*
function middleware1(req,res,next)
{
console.log("middlwware 1 executed")
//send response
//res.json({message:"res from middlewarw"})
next();
}

function middleware2(req,res,next)
{
console.log("middlwware 2 executed")
//send response
//res.json({message:"res from middlewarw"})
next();
}
// if we need to execute for evey incoming req

app.use(middleware2);
app.use(middleware1);
*/



