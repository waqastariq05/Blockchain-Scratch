// Get current date and time
let currentDate = new Date();

// Create an array of month names
let monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Get day, month, year, and time components
let day = currentDate.getDate();
let monthIndex = currentDate.getMonth();
let year = currentDate.getFullYear();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

// Format the date and time string
let formattedDate = monthNames[monthIndex] + " " + day + " " + year;
let formattedTime = hours + ":" + minutes + ":" + seconds;

// Construct the final string
let finalDateTimeString = formattedDate + " " + formattedTime;

module.exports = { finalDateTimeString };
