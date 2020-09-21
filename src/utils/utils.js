import JavaBridge from 'java'
import crypto from 'crypto'

export class Utils{
        static generateHexString() {
        const currentDate = new Date().valueOf().toString();
        const random = Math.random().toString();
        return crypto
          .createHash('sha1')
          .update(currentDate + random)
          .digest('hex');
      }
      static toJavaByteArray(data){
          const jsByteArray=new Uint8Array(data);
          let arr=[];
          arr.push(...data);
          JavaBridge.newArray("byte",arr);
      }
}