import IpfsController from '@/controller/IpfsController';
import express, { Request, Response } from 'express';

const router = express.Router();

// Example route
router.post('/ipfs', IpfsController.addMetadataToIpfs);



export default router;