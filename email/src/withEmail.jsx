import React from 'react';
import Email from './email/email';

const withEmail = storyFn => <Email preview="storybook preview">{storyFn()}</Email>;

export default withEmail;
