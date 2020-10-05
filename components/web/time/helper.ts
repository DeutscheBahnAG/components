export default (dateTime: string): number =>
  Date.parse(dateTime.includes('T') ? dateTime : `1970-01-01T${dateTime}`);
