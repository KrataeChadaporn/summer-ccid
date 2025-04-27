import { expect } from "chai";
import { HelloService } from "./src/services/hello_service"

describe("Test hello world service", () => {
    it("should return hello world", () => {
        const helloService = new HelloService();
        const result = helloService.sayHello();

        expect(result).to.equal("Hello, world! from service");
    })
});