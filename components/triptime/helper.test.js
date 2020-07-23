import { isSlightlyDelayed } from './helper';

const now = '12:00';
const soon = '12:05';
const later = '12:06';

describe('Time helper', () => {
  it('should not mark small delayes as delay', () => {
    expect(isSlightlyDelayed(now, soon)).toEqual(true);
  });
  it('should mark large delayes as delay', () => {
    expect(isSlightlyDelayed(now, later)).toEqual(false);
  });
});
