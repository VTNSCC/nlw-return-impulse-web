import express from 'express'
import cors from 'cors'
import { routes } from './routes';


const app = express();


// Quais endereços de aplicações front podem acessar nosso back-end
app.use(cors({
    //origin: 'https://localhost:3000/'
}));
//Middleware vem antes da rota
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
    console.log('HTTP server running!');
});


