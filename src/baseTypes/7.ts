/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  MONDAY = 1,
  TUESDAY = 2,
  WEDNESDAY = 3,
  THURSDAY = 4,
  FRIDAY = 5,
  SATURDAY = 6,
  SUNDAY = 7,
}

function isWeekend(day: Day) {
  console.log(day);
  if (day >= 6) {
    console.log('Вихідний');
  } else {
    console.log('Робочий');
  }
}

isWeekend(Day.FRIDAY);
