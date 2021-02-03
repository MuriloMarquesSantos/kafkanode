const { Kafka } = require('kafkajs')

async function run() {
    const kafka = new Kafka({
        clientId: 'api',
        brokers: ['localhost:9092']
    })
    const consumer = kafka.consumer({ groupId: 'test-group' });
    await consumer.connect()
    
    await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                value: message.value.toString(),
            })
        },
    })
}

run().catch(error => console.error(error));

