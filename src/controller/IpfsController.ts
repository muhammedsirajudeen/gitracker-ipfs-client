import { HttpStatus, HttpStatusMessage } from '@/lib/HttpStatus';
import IpfsService, { IIpfsService } from '@/service/IpfsService';
import { Request, Response } from 'express';

// src/controller/IpfsController.ts


interface IIpfsController {
    addMetadataToIpfs(req: Request, res: Response): void;
}

class IpfsController implements IIpfsController {
    _IpfsService:IIpfsService
    constructor(IpfsService:IIpfsService){
        this._IpfsService=IpfsService
    }
    addMetadataToIpfs=async (req: Request, res: Response)=> {
        try {
            if(!req.body){
                res.status(HttpStatus.BAD_REQUEST).json({message:HttpStatusMessage[HttpStatus.BAD_REQUEST]})
                return
            }
            
            const hashString=await this._IpfsService.uploadMetadata(req.body)
            res.status(HttpStatus.OK).json({message:HttpStatusMessage[HttpStatus.OK],hash:hashString})
        } catch (error) {
            console.log(error)
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message:HttpStatusMessage[HttpStatus.INTERNAL_SERVER_ERROR]})
        }
    }
}

export default new IpfsController(IpfsService)