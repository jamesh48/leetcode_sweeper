import { router } from '@/api-libs';
import { parseRecentSubmissions } from '@/api-libs/parseRecentSubmissions';
import { userSubmissionCalendarFetch } from '@/api-libs/userSubmissionCalendarFetch';

const getRecentSubmissions = router
  .clone()
  .get(async (req, res) => {
    try {
      const [leetCodeUserName, dateToFind] = req.query.slug as string[];
      const { submissionCalendar } = await userSubmissionCalendarFetch(
        leetCodeUserName,
        '1'
      );

      console.log(submissionCalendar);

      const dateObject = parseRecentSubmissions(submissionCalendar);

      const result = dateObject[dateToFind] || 0;
      return res.send(result);
    } catch (err) {
      console.log(err);
      return res.status(429).send({ error: 'Rate Limit Exceeded' });
    }
  })
  .handler();

export default getRecentSubmissions;
