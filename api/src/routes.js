import { Router } from 'express';

const routes = Router();

routes.post('/certificates', async (request, response) => {
    console.log(request.producer);
    return response.status(200).json({ ok: "true"});
})

export default routes;
