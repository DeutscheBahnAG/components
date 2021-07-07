interface ParseTrackResult {
  fullName?: string;
  prefix?: string;
  number?: string;
  fragment?: string;
  sectionStart?: string;
  sectionEnd?: string;
}

export default (trackString: string): ParseTrackResult => {
  const [fullName, prefix, number, fragment, sectionStart, sectionEnd] =
    trackString.trim().match(/(\D.*?)? ?(\d+) ?([a-z])? ?(?:([A-Z]) ?[–—-] ?([A-Z]))?|^.+?$/) ?? [];
  return { fullName, prefix, number, fragment, sectionStart, sectionEnd };
};
