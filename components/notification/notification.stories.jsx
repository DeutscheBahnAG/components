import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import Notification from './notification';
import readme from './README.md';

const message = 'I am a Notification.';

storiesOf('Components / Notification', module)
  .addDecorator(withReadme(readme))
  .add('All', () => (
    <>
      <Notification variant={Notification.variants.INFO} message={message} />
      <Notification variant={Notification.variants.WARNING} message={message} />
      <Notification variant={Notification.variants.ERROR} message={message} />
      <Notification variant={Notification.variants.SUCCESS} message={message} />
    </>
  ))
  .add('Multiline', () => (
    <Notification
      variant={Notification.variants.INFO}
      message="This is a very long text with a whole lot of words and characters in order to demonstrate the behavior of the notificiation component with multiple lines of text, so we can see that we get details like line heights and adjstument of the icon in relation to the text right. In fact, it is an anti-pattern to display very long texts in notifications, but technically we do not restrict the text length."
    />
  ))
  .add('with Title', () => (
    <Notification
      variant={Notification.variants.WARNING}
      title="Your testing period is expired."
      message="Please purchase a copy to continue using this product."
    />
  ))
  .add('Global', () => (
    <Notification
      global
      variant={Notification.variants.SUCCESS}
      message="Your account was deleted successfully."
    />
  ));
