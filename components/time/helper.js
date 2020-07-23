export default dateTime => Date.parse(dateTime.includes('T') ? dateTime : `1970-01-01T${dateTime}`);
