export class LoggingService {
 
    logInfoMessage(msg:string):void{
        console.log("Info : "+msg);        
    }

    logDebugMessage(msg:string):void{
        console.log("Debug : "+msg);        
    }

    logErrorMessage(msg:string):void{
        console.log("Error : "+msg);        
    }
    
}