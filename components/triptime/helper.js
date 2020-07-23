import parseTime from '../time/helper';

export const acceptableDelay = 5 * 60 * 1000;

export const isSlightlyDelayed = (dateTime, predictedDateTime) =>
  parseTime(predictedDateTime) <= parseTime(dateTime) + acceptableDelay;
