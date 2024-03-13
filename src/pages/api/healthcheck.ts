import { router } from '@/api-libs';

const healthcheck = router
  .clone()
  .get(async (_req, res) => {
    return res.status(200).send({ message: 'ok' });
  })
  .handler();

export default healthcheck;
