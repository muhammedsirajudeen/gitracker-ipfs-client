import DirControllerInstance from '@/controller/dirController';
import IpfsController from '@/controller/IpfsController';
import express, { Request, Response } from 'express';

const router = express.Router();

// Example route
router.post('/structure', DirControllerInstance.getDirStructure);
router.post('/summary', DirControllerInstance.getTextSummary);


export default router;