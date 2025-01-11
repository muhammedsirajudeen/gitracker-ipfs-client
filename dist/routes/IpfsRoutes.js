"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IpfsController_1 = __importDefault(require("@/controller/IpfsController"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// Example route
router.post('/ipfs', IpfsController_1.default.addMetadataToIpfs);
exports.default = router;
