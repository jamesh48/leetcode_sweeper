import { query } from './graphql/userProfile';

export const userSubmissionCalendarFetch = async (username: string) => {
  const result = await fetch('https://leetcode.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Referer: 'https://leetcode.com',
    },
    body: JSON.stringify({
      query,
      variables: {
        username,
      },
    }),
  });
  const response = await result.json();
  return response.data.matchedUser;
};
