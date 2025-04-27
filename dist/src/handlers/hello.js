"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_service_1 = require("../services/hello_service");
class HelloHandler {
    handle(req, res) {
        const helloService = new hello_service_1.HelloService(); // Create new service if not provided
        const hello = helloService.sayHello();
        res.send(hello);
    }
}
exports.default = HelloHandler;
