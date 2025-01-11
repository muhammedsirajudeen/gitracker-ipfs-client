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
const HttpStatus_1 = require("@/lib/HttpStatus");
const IpfsService_1 = __importDefault(require("@/service/IpfsService"));
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
        this._IpfsService = IpfsService;
    }
}
exports.default = new IpfsController(IpfsService_1.default);
