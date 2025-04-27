export interface IHelloService {
    sayHello(): string
}


export class HelloService implements IHelloService {
    sayHello() {
        return "Hello, world! from service"
    }
}