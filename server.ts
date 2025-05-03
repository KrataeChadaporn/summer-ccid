import express from 'express';
import cors from 'cors';
import HelloHandler from './src/handlers/hello';


const app = express();
app.use(cors());

const helloHandler = new HelloHandler();

app.get('/',helloHandler.handle);



app.get('/', (req, res) => {
    res.send('Hello World!');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on htpp://localhost:${PORT}`);
}
);  