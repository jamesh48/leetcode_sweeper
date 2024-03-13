export const query = `query getUserProfile($username: String!) {
  matchedUser(username: $username) {
      username
      submissionCalendar
  }
}`;
