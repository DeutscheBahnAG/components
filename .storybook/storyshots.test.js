import initStoryshots from '@storybook/addon-storyshots';

/* 
 * storyshots is a addon to storybook, which reads all stories and
 * automatically creates Jest snapshot tests for them, so we do not
 * need to do it manually ✌️
 * https://github.com/storybooks/storybook/tree/master/addons/storyshots
 * 
 * read about Jest's snapshot testing feature here:
 * https://facebook.github.io/jest/docs/en/snapshot-testing.html
*/

initStoryshots();