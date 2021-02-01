import { Router } from 'express';

const routes = Router();

routes.post('/certificates', async (request, response) => {
    const producer = request.producer;
    const consumer = request.consumer;
    console.log(request.producer);
    console.log(request.consumer);
    await producer.send({
        topic: 'test-topic',
        messages: [
            { value: 'Hello KafkaJS user!' },
        ],
    })
    await producer.disconnect()

    await consumer.connect()
    await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                value: message.value.toString(),
            })
        },
    })
    return response.status(200).json({ ok: "true" });
})

export default routes;
