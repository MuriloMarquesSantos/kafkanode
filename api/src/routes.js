import { Router } from 'express';

const routes = Router();

routes.post('/certificates', async (request, response) => {
    const producer = request.producer;
    const requestData = JSON.stringify(request.body)
    const messageResponse = await producer.send({
        topic: 'test-topic',
        messages: [
            { value: requestData },
        ],
    })

    console.log(messageResponse)

    return response
        .status(200)
        .json(
            `Message posted in ${messageResponse[0].topicName} at position ${messageResponse[0].baseOffset}`
        );
})

export default routes;
