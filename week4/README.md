### steps to create backend

Generate package.json
npm --node package manager 
npm init -y  
   it is node library librarian
  -y means accepting default values by yes(-y) giving

in package.json 
type:module use this because we use imports and exports if we use commonjs its not possible

2.create HTTP server
    a.Install & import "express" module 
    npm install express 

        when we install any module it searche for node_modules if not it creates it and downloada ll modules in to that.
        dependencies: what modules used directly check here
     
    b.import the module
       
      import exp from 'express' 
        if not mention path it searches in the node_modules

package.json version of express 
dependencies": 
    "express": "^5.2.1" // here the ^ represnts the the versions before 5.2.1 are supported


HTTP REQ types
GET-Read a resource(products,user)
POST =create resource
put-update a resource
delete-delete a resource

for any server running in the local computer the ip address is 127.0.0.1 fixed 
http://127.0.0.1 if use this it can able to point http server and db server so for that 

USER API:

 GET http://127.0.0.1:3000/users
 POST http://127.0.0.1:3000/user
 PUT http://127.0.0.1:3000/user/<id>
 DELETE http://127.0.0.1:3000/user/<id>

instead if ip address use :  http://localhost:3000/user/<id> domain name

Rest client is act like a postman to test the Routers 
download from the extensions : Rest client 
next: create a file anyname.http in the give the path of the router

if an error occurs then the express default behaviour by sending the error in HTML



//create database 

> use db-name // if db not there it creates and use it 2. if already there it will use db;

//Read databases
>show databases

//create collection

db.createCollection(collection-name) //in this db refers to current database

//cls--to clear

//create documents
db.users.insertOne({name:"jyosna",age:20,city:"hyd"})
{
  acknowledged: true,
  insertedId: ObjectId('697c80d3e38ad718c9440537')
}
db.users.insertMany([{name:"sadiya",age:20,city:"hyd"},{name:"manasa",age:21,city:"hyd"}])
acknowledged: true,
  insertedIds: {
    '0': ObjectId('697c81cae38ad718c9440538'),
    '1': ObjectId('697c81cae38ad718c9440539')
  }

db.users.findOne()
db.users.find()

db.users.updateOne(condition,update)
$set is an operator is used to update 
it has 5 properties