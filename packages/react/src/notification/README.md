# Notification

```js
import { Notification } from '@db-design/react';
```

```jsx
<Notification>Hello there!</Notification>
```

## Variants

```jsx
<Notification severity={Notification.severities.INFORMATIVE}>
  I am a notification.
</Notification>
```

```jsx
<Notification severity={Notification.severities.WARNING}>
  I am a notification.
</Notification>
```

```jsx
<Notification severity={Notification.severities.ERROR}>
  I am a notification.
</Notification>
```

```jsx
<Notification severity={Notification.severities.SUCCESS}>
  I am a notification.
</Notification>
```

## Closeable

```jsx
<Notification onClose={() => {}} severity={Notification.severities.INFORMATIVE}>
  I am a notification.
</Notification>
<Notification onClose={() => {}} severity={Notification.severities.WARNING}>
  I am a notification.
</Notification>
<Notification onClose={() => {}} severity={Notification.severities.ERROR}>
  I am a notification.
</Notification>
<Notification onClose={() => {}} severity={Notification.severities.SUCCESS}>
  I am a notification.
</Notification>
```

## Autofocus close button

```jsx
<Notification autofocusCloseButton onClose={() => {}}>
  My close button is focused.
</Notification>
```

## Global (popup)

```jsx static
<Notification global>A global Notification</Notification>
```

```jsx noeditor
import React, { useState } from 'react';
import { Button } from '@db-design/react';
const [isOpen, setOpen] = useState(false);
<>
  {isOpen && <Notification global>A global Notification</Notification>}
  <Button onClick={() => setOpen(!isOpen)}>
    {isOpen ? 'Hide Notification' : 'Show Notification'}
  </Button>
</>;
```

## ARIA live region

This demo shows four notifications appearing, each with a delay of four
seconds. Visit this site with a screenreader to hear how new notifications are
being read out. This example is to demonstrate the accessibility feature only.

```jsx noeditor
import React, { useState, useEffect } from 'react';
import { Button, Copy } from '@db-design/react';
const [isOpen, setOpen] = useState(false);
const LiveNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    Object.values(Notification.severities).forEach((severity, index) => {
      setTimeout(() => {
        setNotifications((prevNotifications) => [
          ...prevNotifications,
          <Notification
            key={severity}
            severity={severity}
            global
            onClose={() => {}}
          >
            {`I am Notification number ${index + 1}`}
          </Notification>,
        ]);
      }, index * 4000 + 100);
    });
  }, []);
  return <div>{notifications}</div>;
};
<>
  {isOpen && <LiveNotifications />}
  <Button onClick={() => setOpen(!isOpen)}>
    {isOpen ? 'Stop showing Notifications' : 'Start showing Notifications'}
  </Button>
</>;
```

## With title

```jsx
<Notification
  severity={Notification.severities.WARNING}
  title="Your testing period is expired."
>
  Please purchase a copy to continue using this product.
</Notification>
```

## Multiline

```jsx
<Notification>
  This is a very long text with a whole lot of words and characters in order to
  demonstrate the behavior of the Notificiation component with multiple lines of
  text, so we can see that we get details like line heights and adjstument of
  the icon in relation to the text right. In fact, it is an anti-pattern to
  display very long texts in notifications, but technically we do not restrict
  the text length.
</Notification>
```
