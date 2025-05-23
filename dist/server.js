"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const hello_1 = __importDefault(require("./src/handlers/hello"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const helloHandler = new hello_1.default();
app.get('/', helloHandler.handle);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on htpp://localhost:${PORT}`);
});
