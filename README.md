## Kafka JS Project

- This is a simple NodeJs project that uses kafka to send messages from one service to another.

## How to RUN

- Run in both services: ```yarn install```

- Run in root directory: ```docker-compose up -d```

- Make a request:  ```curl --location --request POST 'http://localhost:3333/certificates' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "hello"
}' ```