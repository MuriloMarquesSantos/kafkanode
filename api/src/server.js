import express from 'express'
import { Kafka } from 'kafkajs'
import routes from './routes';

const app = express();

app.use(routes);

const kafka = new Kafka({
    clientId: 'api',
    brokers: ['kafka:9092']
})
const producer = kafka.producer();

app.use((req, res, next) => {
    req.producer = producer;

    return next();
})

async function run() {
    // await producer.connect();

    app.listen(3333);
}

run().catch(console.error);

