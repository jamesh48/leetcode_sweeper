import { query } from './graphql/userProfile';

export const userSubmissionCalendarFetch = async (username: string) => {
  const result = await fetch(
    'https://alfa-leetcode-api.onrender.com/' + username + '/calendar'
  );
  const response = await result.json();
  return response.submissionCalendar;
};
