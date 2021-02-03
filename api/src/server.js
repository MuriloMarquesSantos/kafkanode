import express from 'express'
import { Kafka } from 'kafkajs'
import routes from './routes';

const app = express();

app.use(express.json())

const kafka = new Kafka({
    clientId: 'api',
    brokers: ['localhost:9092']
})
const producer = kafka.producer();

app.use((request, response, next) => {
    request.producer = producer;

    return next();
})

app.use(routes);

async function run() {
    await producer.connect();
    console.log("connected")

    app.listen(3333);
}

run().catch(console.error);
