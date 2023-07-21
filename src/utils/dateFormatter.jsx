/**
 * Date formatter utility that provides functions to format dates and times.
 */
export const dateFormatter = {
  /**
   * Format a date from a string to "YYYY-MM-DD".
   * @param {string} fullDate - The full date in string format, e.g., "2023-07-20T01:00".
   * @returns {string} The formatted date in "YYYY-MM-DD" format.
   */
  date: (fullDate) => {
    const dateObj = new Date(fullDate);
    return dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  },

  /**
   * Format time from a string to "HH:mm".
   * @param {string} fullDate - The full date in string format, e.g., "2023-07-20T01:00".
   * @returns {string} The formatted time in "HH:mm" format.
   */
  time: (fullDate) => {
    const dateObj = new Date(fullDate);
    const timeFormatter = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return timeFormatter.format(dateObj);
  },
};
