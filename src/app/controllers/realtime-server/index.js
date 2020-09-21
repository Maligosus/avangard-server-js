import WebSocket from 'ws';
import { target } from '../../../../webpack.dev.config';


const MAX_LISTENERS=32;



class RealTimeServer{
    scannerClients=[];
    clients=[];
    constructor(){
        this.server=new WebSocket.Server({port:8085,noServer:true});
        this.server.setMaxListeners(MAX_LISTENERS);
        this.server.on("connection", client =>{
            client.send("hello brother");
            client.on("message",data =>{
                console.log(JSON.parse(data));
            });
            this.scannerClients.push(client);
        });
    }
    clientConnection(client,request){
        
    }
    clientMessage(request){

    }
};



export default RealTimeServer;