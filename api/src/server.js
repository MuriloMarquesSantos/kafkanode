import express from 'express'
import { Kafka } from 'kafkajs'
import routes from './routes';

const app = express();

const kafka = new Kafka({
    clientId: 'api',
    brokers: ['localhost:9092']
})
const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'test-group' });

app.use((request, response, next) => {
    request.producer = producer;
    request.consumer = consumer;

    return next();
})

app.use(routes);

async function run() {
    await producer.connect();
    console.log("connected")

    app.listen(3333);
}

run().catch(console.error);

