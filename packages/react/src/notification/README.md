# Notification

```js
import { Notification, NotificationSeverities } from '@db-design/react';
```

```jsx
<Notification>Hello there!</Notification>
```

<!-- Auto-generated content following, DO NOT update by hand! -->
<!-- START props-table -->
## Props

<details>
  <summary class="db-props-toggle">Show/hide component props</summary>
  <table class="db-props-table">
    <thead>
      <tr>
        <th>Prop name</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>title</strong></td>
        <td><code>ReactNode</code></td>
        <td>false</td>
        <td>null</td>
        <td>the title will be displayed as bold text above the message</td>
      </tr>
    <tr>
        <td><strong>children</strong></td>
        <td><code>ReactNode</code></td>
        <td>false</td>
        <td>null</td>
        <td>the notification message to display</td>
      </tr>
    <tr>
        <td><strong>action</strong></td>
        <td><code>ReactNode</code></td>
        <td>false</td>
        <td>null</td>
        <td>optional action (Button or link)</td>
      </tr>
    <tr>
        <td><strong>className</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td></td>
        <td>optional className to add to the notification</td>
      </tr>
    <tr>
        <td><strong>global</strong></td>
        <td><code>boolean</code></td>
        <td>false</td>
        <td>false</td>
        <td>displays the notification overlaid on top of the page</td>
      </tr>
    <tr>
        <td><strong>severity</strong></td>
        <td><code>"informative" | "warning" | "error" | "success"</code></td>
        <td>false</td>
        <td></td>
        <td>the purpose of the notification, affects visual styling</td>
      </tr>
    <tr>
        <td><strong>onClose</strong></td>
        <td><code>() => void</code></td>
        <td>false</td>
        <td>null</td>
        <td>close button click handler, required to display the close button</td>
      </tr>
    <tr>
        <td><strong>labels</strong></td>
        <td><code>{ close: string; informative: string; warning: string; error: string; success: string; }</code></td>
        <td>false</td>
        <td></td>
        <td>custom translation strings</td>
      </tr>
    <tr>
        <td><strong>autofocusCloseButton</strong></td>
        <td><code>boolean</code></td>
        <td>false</td>
        <td>false</td>
        <td>whether to automatically focus the close button when the notification is displayed. Can be useful for global notifications as they are appended to the end of the DOM, so people would need to tab around a lot to reach them.</td>
      </tr>
    </tbody>
  </table>
</details>

<!-- END props-table -->

## Variants

```jsx
<Notification severity="informative">I am a notification.</Notification>
```

```jsx
<Notification severity="warning">I am a notification.</Notification>
```

```jsx
<Notification severity="error">I am a notification.</Notification>
```

```jsx
<Notification severity="success">I am a notification.</Notification>
```

## Closeable

```jsx
<Notification onClose={() => {}} severity="informative">
  I am a notification.
</Notification>
<Notification onClose={() => {}} severity="warning">
  I am a notification.
</Notification>
<Notification onClose={() => {}} severity="error">
  I am a notification.
</Notification>
<Notification onClose={() => {}} severity="success">
  I am a notification.
</Notification>
```

## Autofocus close button

```jsx
<Notification autofocusCloseButton onClose={() => {}}>
  My close button is focused.
</Notification>
```

## Action

```jsx
import { Button } from '@db-design/react';
<Notification
  onClose={() => {}}
  action={
    <Button variant="secondary" size="m">
      Do something
    </Button>
  }
>
  Somehing happened.
</Notification>;
```

## Global (popup)

```jsx static
<Notification global>A global Notification</Notification>
```

```jsx noeditor
import React, { useState } from 'react';
import { Button } from '@db-design/react';
const NotificationExample = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {isOpen && <Notification global>A global Notification</Notification>}
      <Button onClick={() => setOpen(!isOpen)}>
        {isOpen ? 'Hide Notification' : 'Show Notification'}
      </Button>
    </>
  );
};
return <NotificationExample />;
```

## ARIA live region

This demo shows four notifications appearing, each with a delay of four
seconds. Visit this site with a screenreader to hear how new notifications are
being read out. This example is to demonstrate the accessibility feature only.

```jsx noeditor
import React, { useState, useEffect } from 'react';
import { Button, Copy } from '@db-design/react';

const NotificationExample = () => {
  const [isOpen, setOpen] = useState(false);

  const LiveNotifications = () => {
    const [notifications, setNotifications] = useState([]);
    useEffect(() => {
      notificationSeverities.forEach((severity, index) => {
        setTimeout(() => {
          setNotifications((prevNotifications) => [
            ...prevNotifications,
            <Notification key={severity} severity={severity} global onClose={() => {}}>
              {`I am Notification number ${index + 1}`}
            </Notification>,
          ]);
        }, index * 4000 + 100);
      });
    }, []);
    return <div>{notifications}</div>;
  };

  return (
    <>
      {isOpen && <LiveNotifications />}
      <Button onClick={() => setOpen(!isOpen)}>
        {isOpen ? 'Stop showing Notifications' : 'Start showing Notifications'}
      </Button>
    </>
  );
};
return <NotificationExample />;
```

## With title

```jsx
<Notification severity="warning" title="Your testing period is expired.">
  Please purchase a copy to continue using this product.
</Notification>
```

## Multiline

```jsx
<Notification>
  This is a very long text with a whole lot of words and characters in order to
  demonstrate the behavior of the Notificiation component with multiple lines of text, so
  we can see that we get details like line heights and adjstument of the icon in relation
  to the text right. In fact, it is an anti-pattern to display very long texts in
  notifications, but technically we do not restrict the text length.
</Notification>
```
