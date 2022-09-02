function calculateBusinessDays(date, businessDay) {
  const weekday = date.getDay();
  var addDays = weekday >= 3 ? 2 + parseInt(businessDay) : parseInt(businessDay);
  date.setDate(date.getDate() + addDays);
  return date;
}

function calculateWorkingHours(date, startWorkTime, offWorkTime) {
  const hour = date.getHours();
  if (hour >= startWorkTime && hour < offWorkTime) {
    return true;
  }
  return false;
}

function calculateDueDate(date) {
  if (calculateWorkingHours(date, 9, 17)) {
    return calculateBusinessDays(date, 2);
  }
  const errorMessage =
    "Sorry, but a problem can only be reported during working hours from 9AM to 5PM.";
  return errorMessage;
}

console.log(calculateDueDate(new Date()));
console.log(calculateDueDate(new Date("1995-12-17T00:24:00")));
console.log(calculateDueDate(new Date("December 17, 1995 03:24:00")));

