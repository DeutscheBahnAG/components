# Icon overview

```jsx noeditor
import { useState } from 'react';
import Button from '../react/src/button';
import Notification from '../react/src/notification';
import * as Icons from '@db-design/react-icons';

const [message, setMessage] = useState(null);

const onClick = (event) => {
  const name = event.target.textContent;
  navigator.clipboard.writeText(name);
  setMessage(`‘${name}’ copied to clipboard`);
  setTimeout(() => setMessage(null), 2000);
};

<>
  {message && (
    <Notification variant="informative" global>
      {message}
    </Notification>
  )}
  <ol className="sg-icon-overview">
    {Object.keys(Icons).map((name) => {
      const Icon = Icons[name];
      return (
        <li>
          <Button
            size="m"
            variant="hover-only"
            icon={<Icon />}
            onClick={onClick}
            title="Click to copy"
          >
            {name}
          </Button>
        </li>
      );
    })}
  </ol>
</>;
```
