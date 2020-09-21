import express, { request } from 'express'
import filestream, { fstat } from 'fs'
import path from 'path'
import crypto from 'crypto'
import multer from 'multer';
import {Utils} from '../../../utils/utils'

const router = express.Router();

const upload=multer({
    //dest: path.join(__dirname,"../images/"),
});







router.post("/",upload.single('fingerImage'),function(req,res){
    //console.log(JSON.parse(req.headers));
    let filePath=path.join(__dirname,"../images/")+Utils.generateHexString()+".png"; 
    console.log(req.file.buffer.buffer,filePath);
    //console.log("this is a return="+scanner.findFingerPrintInDatabase(req.file.buffer.toString('ascii'),filePath));
    res.sendStatus(200);
});

export default router;