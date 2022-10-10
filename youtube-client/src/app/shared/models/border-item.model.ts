export enum ColorsBorder {
  red = '#EB5757',
  yellow = '#F2C94C',
  green = '#27AE60',
  blue = '#2F80ED',
}

export enum Period {
  days = 7,
  month = 30,
  halfYear = month * 6,
}

enum ConvertOnDay {
  msec = 1000,
  sec = 60,
  min = 60,
  hours = 24,
}

export const DAY =
  ConvertOnDay.msec * ConvertOnDay.sec * ConvertOnDay.min * ConvertOnDay.hours;
