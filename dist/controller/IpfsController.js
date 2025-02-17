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
const HttpStatus_1 = require("../lib/HttpStatus");
const IpfsService_1 = __importDefault(require("../service/IpfsService"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.configDotenv)();
// src/controller/IpfsController.ts
const cloudinary_1 = require("cloudinary");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
class IpfsController {
    constructor(IpfsService) {
        this.addMetadataToIpfs = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.body) {
                    res.status(HttpStatus_1.HttpStatus.BAD_REQUEST).json({ message: HttpStatus_1.HttpStatusMessage[HttpStatus_1.HttpStatus.BAD_REQUEST] });
                    return;
                }
                const hashString = yield this._IpfsService.uploadMetadata(req.body);
                res.status(HttpStatus_1.HttpStatus.OK).json({ message: HttpStatus_1.HttpStatusMessage[HttpStatus_1.HttpStatus.OK], hash: hashString });
            }
            catch (error) {
                console.log(error);
                res.status(HttpStatus_1.HttpStatus.INTERNAL_SERVER_ERROR).json({ message: HttpStatus_1.HttpStatusMessage[HttpStatus_1.HttpStatus.INTERNAL_SERVER_ERROR] });
            }
        });
        this.uploadImage = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const file = req.file;
                if (!file) {
                    res.status(HttpStatus_1.HttpStatus.BAD_REQUEST).json({ message: HttpStatus_1.HttpStatusMessage[HttpStatus_1.HttpStatus.BAD_REQUEST] });
                    return;
                }
                cloudinary_1.v2.config({
                    cloud_name: 'dp0f5mdrj',
                    api_key: '749492575184253',
                    api_secret: process.env.CLOUDINARY_SECRET // Click 'View API Keys' above to copy your API secret
                });
                console.log(file);
                const result = (0, fs_1.writeFileSync)(path_1.default.join(__dirname, "../public", file.originalname), file.buffer);
                const uploadResult = yield cloudinary_1.v2.uploader
                    .upload(path_1.default.join(__dirname, "../public", file.originalname), {
                    public_id: file.originalname,
                })
                    .catch((error) => {
                    console.log(error);
                });
                if (!uploadResult) {
                    res.status(HttpStatus_1.HttpStatus.INTERNAL_SERVER_ERROR).json({ message: HttpStatus_1.HttpStatusMessage[HttpStatus_1.HttpStatus.INTERNAL_SERVER_ERROR] });
                    return;
                }
                res.status(HttpStatus_1.HttpStatus.OK).json({ message: HttpStatus_1.HttpStatusMessage[HttpStatus_1.HttpStatus.OK], url: uploadResult.secure_url });
            }
            catch (error) {
                console.log(error);
                res.status(HttpStatus_1.HttpStatus.INTERNAL_SERVER_ERROR).json({ message: HttpStatus_1.HttpStatusMessage[HttpStatus_1.HttpStatus.INTERNAL_SERVER_ERROR] });
            }
        });
        this.uploadImages = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.files || req.files.length === 0 || !Array.isArray(req.files)) {
                    res.status(HttpStatus_1.HttpStatus.BAD_REQUEST).json({ message: HttpStatus_1.HttpStatusMessage[HttpStatus_1.HttpStatus.BAD_REQUEST] });
                    return;
                }
                cloudinary_1.v2.config({
                    cloud_name: 'dp0f5mdrj',
                    api_key: '749492575184253',
                    api_secret: process.env.CLOUDINARY_SECRET // Click 'View API Keys' above to copy your API secret
                });
                //test
                for (let image of req.files) {
                    (0, fs_1.writeFileSync)(path_1.default.join(__dirname, "../public", image.originalname), image.buffer);
                }
                const uploadPromises = req.files.map((file) => {
                    return new Promise((resolve, reject) => {
                        const upload = cloudinary_1.v2.uploader.upload(path_1.default.join(__dirname, "../public", file.originalname), {
                            public_id: file.originalname
                        }).then((result) => {
                            resolve(result.secure_url);
                        }).catch((error) => {
                            reject(error);
                        });
                    });
                });
                console.log(uploadPromises);
                const results = yield Promise.all(uploadPromises);
                res.status(HttpStatus_1.HttpStatus.OK).json({ message: HttpStatus_1.HttpStatusMessage[HttpStatus_1.HttpStatus.OK], urls: results !== null && results !== void 0 ? results : [] });
            }
            catch (error) {
                console.log(error);
                res.status(HttpStatus_1.HttpStatus.INTERNAL_SERVER_ERROR).json({ message: HttpStatus_1.HttpStatusMessage[HttpStatus_1.HttpStatus.INTERNAL_SERVER_ERROR] });
            }
        });
        this._IpfsService = IpfsService;
    }
}
exports.default = new IpfsController(IpfsService_1.default);
