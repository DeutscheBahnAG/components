export default trackString => {
  const [fullName, prefix, number, fragment, sectionStart, sectionEnd] = trackString
    .trim()
    .match(/([^\d].*?)? ?(\d+) ?([a-z])? ?(?:([A-Z]) ?[-–—] ?([A-Z]))?/);
  return { fullName, prefix, number, fragment, sectionStart, sectionEnd };
};
