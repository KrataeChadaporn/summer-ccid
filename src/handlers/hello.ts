import { Request, Response } from 'express';
import { HelloService } from '../services/hello_service';

class HelloHandler {
    


    handle(req: Request, res: Response) {
        const helloService = new HelloService(); // Create new service if not provided
        const hello = helloService.sayHello();
        res.send(hello)
    }
    
}

export default HelloHandler;