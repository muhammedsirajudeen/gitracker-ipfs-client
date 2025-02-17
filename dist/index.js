"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const IpfsRoutes_1 = __importDefault(require("./routes/IpfsRoutes"));
const dirRoutes_1 = __importDefault(require("./routes/dirRoutes"));
const cors_1 = __importDefault(require("cors"));
const errorMiddleware_1 = require("./helper/errorMiddleware");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/", IpfsRoutes_1.default);
app.use("/dir", dirRoutes_1.default);
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(errorMiddleware_1.ErrorMiddleware);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
