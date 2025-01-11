"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const form_data_1 = __importDefault(require("form-data"));
class IpfsService {
    constructor() {
        this.ipfsEndpoint = 'http://43.204.251.65:5001/api/v0/add';
    }
    uploadMetadata(metadata) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const jsonBuffer = Buffer.from(JSON.stringify(metadata));
                const formData = new form_data_1.default();
                formData.append('file', jsonBuffer, { filename: 'data.json' });
                const response = yield axios_1.default.post(this.ipfsEndpoint, formData, {
                    headers: Object.assign({}, formData.getHeaders()),
                });
                console.log("ipfs response", response.data.Hash);
                return `http://43.204.251.65:8080/ipfs/${response.data.Hash}`;
            }
            catch (error) {
                console.error('Error uploading metadata to IPFS:', error);
                throw error;
            }
        });
    }
}
exports.default = new IpfsService();
