import IpfsController from '@/controller/IpfsController';
import express, { Request, Response } from 'express';
import multer from "multer"
const router = express.Router();
const storage=multer.memoryStorage()
const upload = multer({ storage: storage });

// Example route
router.post('/ipfs' ,IpfsController.addMetadataToIpfs);

//currently no security but dont forget to secure the endpoints
router.post('/upload', upload.single('profileImage'),IpfsController.uploadImage)

router.post('/attachments',upload.array('attachments'),IpfsController.uploadImages)

export default router;