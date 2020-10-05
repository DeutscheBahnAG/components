import parseTime from '../time/helper';

export const acceptableDelay = 5 * 60 * 1000;

export const isSlightlyDelayed = (dateTime: string, predictedDateTime: string): boolean =>
  parseTime(predictedDateTime) <= parseTime(dateTime) + acceptableDelay;
