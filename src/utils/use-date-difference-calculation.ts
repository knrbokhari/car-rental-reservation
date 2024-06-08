const useDateDifferenceCalculation = ({ start, end }: any) => {
  // let startDate: any = new Date(start);
  // let endDate: any = new Date(end);

  // Calculate the difference in milliseconds
  // let timeDifference = endDate - startDate;
  let timeDifference = end - start;

  // Calculate the difference in days
  let totalDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  // Calculate weeks and days
  let weeks = Math.floor(totalDays / 7);
  let days = totalDays % 7;

  return { duration: `${weeks} ${weeks > 1 ? "weeks" : 'week' } and ${days} days`, weeks, days };
};

export default useDateDifferenceCalculation;
