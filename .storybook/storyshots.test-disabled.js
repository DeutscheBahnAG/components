/*
  TODO: re-enable storyshots by renaming this file to `storybook.test.js`

    we had to disable it as the tests crashed after upgrading to
    Storybook 5 probably due to some conflict between Babel and Jest.
    When we found a fix for this, we can enable it again by renaming
    this file to storyshots.test.js
*/

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
