import { router } from '@/api-libs';
import { parseRecentSubmissions } from '@/api-libs/parseRecentSubmissions';
import axios from 'axios';

const getRecentSubmissions = router
  .clone()
  .get(async (req, res) => {
    try {
      const [leetCodeUserName, dateToFind] = req.query.slug as string[];
      const { data } = await axios(
        `https://alfa-leetcode-api.onrender.com/${leetCodeUserName}/calendar`
      );
      const dateObject = parseRecentSubmissions(data);

      const result = dateObject[dateToFind] || 0;
      return res.send(result);
    } catch (err) {
      return res.status(429).send({ error: 'Rate Limit Exceeded' });
    }
  })
  .handler();

export default getRecentSubmissions;
