import { HttpStatus, HttpStatusMessage } from '@/lib/HttpStatus';
import IpfsService, { IIpfsService } from '@/service/IpfsService';
import { configDotenv } from 'dotenv';
import { Request, Response } from 'express';
configDotenv()
// src/controller/IpfsController.ts
import { v2 as cloudinary } from 'cloudinary';
import { writeFileSync } from 'fs';
import path from 'path';


interface IIpfsController {
    addMetadataToIpfs(req: Request, res: Response): void;
    uploadImage(req:Request,res:Response):void
}

class IpfsController implements IIpfsController {
    _IpfsService: IIpfsService
    constructor(IpfsService: IIpfsService) {
        this._IpfsService = IpfsService
    }
    addMetadataToIpfs = async (req: Request, res: Response) => {
        try {
            if (!req.body) {
                res.status(HttpStatus.BAD_REQUEST).json({ message: HttpStatusMessage[HttpStatus.BAD_REQUEST] })
                return
            }

            const hashString = await this._IpfsService.uploadMetadata(req.body)
            res.status(HttpStatus.OK).json({ message: HttpStatusMessage[HttpStatus.OK], hash: hashString })
        } catch (error) {
            console.log(error)
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: HttpStatusMessage[HttpStatus.INTERNAL_SERVER_ERROR] })
        }
    }
    uploadImage = async (req: Request, res: Response) => {
        try {
            const file = req.file
            if (!file) {
                res.status(HttpStatus.BAD_REQUEST).json({ message: HttpStatusMessage[HttpStatus.BAD_REQUEST] })
                return
            }
            cloudinary.config({ 
                cloud_name: 'dp0f5mdrj', 
                api_key: '749492575184253', 
                api_secret: process.env.CLOUDINARY_SECRET // Click 'View API Keys' above to copy your API secret
            });
            console.log(file)
            const result=await writeFileSync(path.join(__dirname,"../public",file.originalname),file.buffer)
            const uploadResult = await cloudinary.uploader
            .upload(
                path.join(__dirname,"../public",file.originalname), {
                    public_id: file.originalname,
                }
            )
            .catch((error) => {
                console.log(error);
            });
            if(!uploadResult){
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: HttpStatusMessage[HttpStatus.INTERNAL_SERVER_ERROR] })
                return
            }
            res.status(HttpStatus.OK).json({ message: HttpStatusMessage[HttpStatus.OK],url:uploadResult.secure_url})
        } catch (error) {
            console.log(error)
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: HttpStatusMessage[HttpStatus.INTERNAL_SERVER_ERROR] })
        }
    }
}

export default new IpfsController(IpfsService)