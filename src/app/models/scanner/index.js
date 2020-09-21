import java from 'java';
import ws from 'ws';
import ip from 'ip';



export const Scanner_RequestMessageType={
    getState:200,
    getFingerPrint:201,
    stopFingerDetectionThread:202
};

export const Scanner_ResponseMessageType={
    active=100,
    state=300,
    fingerPrintImage=301,
    threadStoped=302
};

export const ScannerState={
    Inactive:-1,
    Active:0,
    WaitForFinger:1
};

export class FingerPrintScanner{
    scannerBuffer=[];
    constructor(scannerSocket,scannerIpAddres){
        this.socket=new WebSocket();
        this.ipAddres=scannerIpAddres;
        this.state=ScannerState.Active;
        this.busyState=null;
        this.socket.onmessage=this.scanRequestHandler;
    }
    executeScannerStateQuery(){
        const message=JSON.stringify({
            messageType : MessageType.getScannerState,
            ip: ip.address("public","ipv4"),
        });
    }
    setScannerUser(username){
        this.busyState=username;
    }
    scanRequestHandler(event){

    }
    isScannerBusy(){
        return busyState ? true:false;
    }
}