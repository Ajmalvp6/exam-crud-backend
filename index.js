const jsonServer = require("json-server");


const server = jsonServer.create();




const middlewares = jsonServer.defaults();

const router = jsonServer.router("db.json");


const cors=require('cors')

server.use(cors())


server.use(middlewares)
server.use(router)


const PORT=8000
server.listen(PORT,()=>{
    console.log(`server is running started at port number ${PORT}`);
})







server.use(middlewares);
server.use(router);
