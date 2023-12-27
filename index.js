//import json-server
const jsonServer= require('json-server')

//create aa server application using jsonserver

const restServer =jsonServer.create()

//setup path for db.json

const router =jsonServer.router()

//return a middleware used by json server
const middleware =jsonServer.defaults()
//setup port
const port=3001
//use in server
restServer.use(middleware)
restServer.use(router)

//to run a port
restServer.listen(port,()=>{
    console.log('Rest server listening on port' +port);
})