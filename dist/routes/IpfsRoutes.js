"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IpfsController_1 = __importDefault(require("../controller/IpfsController"));
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const router = express_1.default.Router();
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage: storage });
// Example route
router.post('/ipfs', IpfsController_1.default.addMetadataToIpfs);
//currently no security but dont forget to secure the endpoints
router.post('/upload', upload.single('profileImage'), IpfsController_1.default.uploadImage);
router.post('/attachments', upload.array('attachments'), IpfsController_1.default.uploadImages);
exports.default = router;
