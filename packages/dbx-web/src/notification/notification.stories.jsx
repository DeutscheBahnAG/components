import React, { useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import Notification from './notification';
import readme from './README.md';

const message = 'I am a Notification.';
const closeMessage = 'Please donʼt close me.';

const StatefulNotification = (props) => {
  const [isOpen, setOpen] = useState(true);
  return isOpen ? <Notification {...props} onClose={() => setOpen(false)} /> : null;
};

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
  .add('Closable', () => (
    <>
      <StatefulNotification variant={Notification.variants.INFO} message={closeMessage} />
      <StatefulNotification variant={Notification.variants.WARNING} message={closeMessage} />
      <StatefulNotification variant={Notification.variants.ERROR} message={closeMessage} />
      <StatefulNotification variant={Notification.variants.SUCCESS} message={closeMessage} />
    </>
  ))
  .add('Autofocus Close Button', () => {
    return (
      <Notification
        autofocusCloseButton
        message="My close button is focused."
        // eslint-disable-next-line no-alert
        onClose={() => alert('Close Button Clicked.')}
      />
    );
  })
  .add('Global', () => {
    const loremIpsum =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repellendus adipisci eos maxime, dignissimos mollitia, minima rerum dolor ipsum ducimus facilis vel voluptate possimus fugit odio voluptas est ex suscipit.';

    return (
      <>
        <Notification
          global
          variant={Notification.variants.ERROR}
          message="Keyboard not found. Press any key to continue."
        />
        <p>{loremIpsum}</p>
        <p>{loremIpsum}</p>
        <p>{loremIpsum}</p>
        <StatefulNotification
          global
          variant={Notification.variants.SUCCESS}
          message="Your account was deleted successfully."
        />
      </>
    );
  })
  .add('ARIA Live Region', () => {
    const LiveNotifications = () => {
      const [notifications, setNotifications] = useState([]);
      useEffect(() => {
        Object.values(Notification.variants).forEach((variant, index) => {
          setTimeout(() => {
            setNotifications((prevNotifications) => [
              ...prevNotifications,
              <Notification
                key={variant}
                variant={variant}
                global
                message={`Ich bin Meldung Nummer ${index + 1}`}
              />,
            ]);
          }, (index + 1) * 4000);
        });
      }, []);
      return <div>{notifications}</div>;
    };

    return (
      <>
        <LiveNotifications />
        <p>This demo shows four notifications appearing, each with a delay of four seconds.</p>
        <p>Visit this site with a screenreader to hear how new notifications are being read out.</p>
      </>
    );
  });
