export const parseRecentSubmissions = (submissionCalendar: string) => {
  // Parse JSON
  const parsedData = JSON.parse(submissionCalendar);
  const dateObject = {} as { [date: string]: string };
  // Convert Unix timestamps to dates and print submission counts
  for (const timestamp in parsedData) {
    if (parsedData.hasOwnProperty(timestamp)) {
      const date = new Date(parseInt(timestamp) * 1000);
      const formattedDate = date.toISOString().split('T')[0];
      const count = parsedData[timestamp];
      dateObject[formattedDate] = count;
    }
  }
  return dateObject;
};
