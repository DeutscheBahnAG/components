# Modal

Modals are used to focus the users’ attention to a certain information or decision. This Component extends [react-modal](https://www.npmjs.com/package/react-modal), additional properties are inherited from it.

```jsx
import { Button, Copy } from '@db-design/react';
const { primaryActions } = Modal;

<Modal title="Modal" primaryButton={<Button {...primaryActions}>OK</Button>} isOpen>
  <Copy>Modal content</Copy>
</Modal>;
```

## Highlights

- ♿️ **Accessible** by using aria properties. Find out more about it in the [accessibility](#accessibility) chapter.
- 🖨 **Printer friendly** by special print styling.
- 💪​ **Highly customizable** by allowing to use a blank dialogue with content only
- 🍼 **Easy to use** by using recommended defaults.
- 👩‍⚖️​ **Legal** by supporting requirements of the GDPR settings.
- 📱 **Responsive** behaviour by default with the option to [tweak](#responsive-design).

## Recommended usage

Use Modals with care and as infrequent as possible. In many cases there are better ways to fulfil the users’ needs and apps’ requirements.

Keep Modals brief and easy to use.

### Common example: Unsaved document

The following case might not be necessary if unsaved data in your app would always be saved as draft. In that case the user would just see a _toast notification_ or _snack bar_ to get informed about the saved draft. If you want to follow this route, then take a look to our Notification component.

If the app doesn’t offer a draft folder or it would be too confusing for the user in that particular situation, the following Modal dialogue could be a solution:

```jsx
import { Button, Copy } from '@db-design/react';
const { primaryActions, secondaryActions } = Modal;
const saveAs = alert;
const discardEdit = alert;
const closeModal = alert;
const openState = true;

<Modal
  title="You’re closing an unsaved document."
  primaryButton={
    <Button {...primaryActions} onClick={saveAs}>
      Save as
    </Button>
  }
  secondaryButton={
    <Button variant={Button.variants.SECONDARY} {...secondaryActions} onClick={discardEdit}>
      Discard
    </Button>
  }
  onClose={closeModal}
  isOpen={openState}
  appId="root"
>
  <Copy>
    If you decide to discard the unsaved document, you will lose all changes and you will not be
    able to recover your data.
  </Copy>
</Modal>;
```

_index.html:_

```html
[...]
<body>
  <div id="root"></div>
  <div id="modal-portal"></div>
</body>
[...]
```

The Modal dialogue above demonstrates the most important properties for a common case.

- It contains a `title` that briefly describes what happens right now and why the Modal dialogue just appeared.
- The Modal component surrounds content (aka property `children`), which can be anything. In the shown case it's an explanation about the consequences of the offered decisions.
- The user should decide to save the document by using the `primaryButton` which contains the `PrimaryButton` component to execute its `onClick` action. Because we assume that it’s better to save the unsaved document than to lose data, we initially focus the primary button by using the property `data-autofocus`. Keep in mind that the user might accidentally trigger a key or doesn’t really know what’s the best decision. So, the focus informs the user of the recommended action.
- The `secondaryButton` reflects the secondary recommended action to perform and contains the `SecondaryButton` component to trigger its `onClick` call-back function. In the shown case the document changes would be discarded.
- The Modal dialogue should always offer an exit that leads to the same situation like before the Modal dialogue appeared. In our example case, the user gets back to the edit mode by clicking the close button, the area around the dialogue or hitting the escape key. These three actions trigger the same call-back function `onClose`.
- By default, the Modal dialogue appears in medium size. In our case we know that the content amount is limited, and the readability of the explanation would be worse in one long line. So we don’t use the property `size`.
- It is strongly recommended to use the `appId` and `portalId` property for accessibility optimization. Please read [React portal](#react-portal) for more information.

## Accessibility

Always keep in mind, that Modal dialogues are not that easy to use for some people. There are many aspects to be aware of:

- **Is it really necessary to force the users to interact with an element, they might not have expected to pop up?** Psychologically Modal dialogues are shouting to the users and might stress them to make decisions they need to think about and might make them feel uncomfortable. Some people might not have the cognitive capacities to make the right decisions or act in a stressful environment like a hurry on the go in a crowded city.
- **Are you aware that there are users, who are not using common devices like screen, touch input, mouse and keyboard?** Today’s technology evolves fast and, in the future, there may be devices with input and output features you didn’t imagine before - maybe you even don’t know about every already existing one. Additionally, many devices and tools exist to help special target groups to use web applications with the help of screen readers, voice-over features, special browsers, digital magnifiers, braille keyboards and other solutions. Concerning these aspects, Modal dialogues might be difficult to read, understand and use.
- **What does the 20 of the 80/20 rule really mean concerning accessibility?** The 80/20 rule says, that 80 percent of your users only use 20 percent of the product features. So, you might conclude, that 80 percent of the product features are not that important. Although the 80 percent of features might be used in rare cases compared to the 20 percent main features, this doesn’t mean that they are not important. As most of your users won’t be using most accessibility-specific features of your product, it doesn’t mean, that you don’t have to pay attention about those features. In fact, people, who use screen readers, use the screen reader specific features all the time. So, it’s better to classify accessibility ‘features’ not as features, but as the right use of web technology. Concerning your product backlog, accessibility has to be part of the definition of done for every feature and not a feature on its own.
- **Did you implement the Modal in a way, that search engines don’t crawl them?** Usually Modal dialogues are not intended to be crawled by a search engine. If contextual information will appear in a search result, this might confuse and mislead users. Besides it might reduce the page ranks of your site.

### Accessibility considerations

**Title:** You should always set a short and descriptive `title`, which informs the user about the reason of the Modal appearance and the purpose of the dialogue. By default, the `ariaLabelledBy` property refers to this title, which has the identifier `modal-title`.

```jsx static
<Modal title="Modal dialogue" open>
  ... some content
</Modal>
```

If you decide not to use the `title` property, you should use `ariaLabelledBy` and set the `id` property of your HTML element, which contains the label text of the Modal.

```jsx static
<Modal ariaLabelledBy="my-modal-title" open>
  <h3 id="my-modal-title">Custom Modal label</h3>
  ... some content
</Modal>
```

Another helpful addition for accessibility is the `ariaDescribedBy` property. Pass the HTML identifier of an abstract paragraph.

```jsx static
<Modal title="Modal dialogue" ariaDescribedBy="modal-desc" open>
  <p id="modal-desc">
    This Modal dialogue demonstrates the technical use of `ariaDescribedBy` the property.
  </p>
  ... some content
</Modal>
```

**Close button label:** The visually unlabelled close button has an invisible label text, which will be used by screen readers to describe the close interaction. You can change this invisible text by setting the `closeText` property, i.e. for text translations or specific use cases. The default value is ‘Close the dialogue’.

**Close behaviour:** If you set the `enableCloseButton` property to `false` the close functionality is completely inactive, and you have to implement a Modal close behaviour on your own. It is very important to follow the accessibility principles for this implementation. **Note:** The `onClose` call-back will be ignored completely and all default close triggers, namely the close button, the outside dialogue click and the escape key, are removed.

**Large content:** Informative Modal dialogues might offer a close button as the single dialogue interaction. If the Modal dialogue content is large, you should consider to additionally set an action button to close the Modal.

**Action buttons:** Modal dialogues for decisions should provide at least one action button. If you use two action buttons you have to define which action is the primary and which is the secondary action. This can be done by using the properties `primaryButton` which contains the `PrimaryButton` component with its callback call-back function and the `secondaryButton`. See [Action buttons](#action-buttons) below for examples.

**Auto focus:** In addition to the action buttons, you should consider which interaction element should get an initial focus by setting `data-autofocus` for the action buttons. You can also focus any other interaction element inside the Modal dialogues’ `children` by attaching the `data-autofocus` attribute to the interaction element. By default, the Modal dialogue itself gets focused. If you don’t want to use auto focus, you can switch off this behaviour by setting `autoFocus` to `false`.

### React portal

The Modal component uses [React portals](https://reactjs.org/docs/portals.html) to move the DOM of the Modal dialogue to the last child of the body container, which leads to visual and accessibility optimizations.

The visual optimization relates to the potential risk of a parent container which has limited dimensions in combination with an _overflow-hidden_ behaviour. If the Modal stays inside that kind of container, it will not appear as suggested and might be cropped in an inaccessible way. This would be a potential accessibility issue for all users.

#### General screen reader support

It is **strongly** recommended to use the `appId` property to improve the accessibility. Screen readers need to focus on the Modal dialogue and are not supposed to scan through the underlying rest of the page. This functionality activates easily by passing the identifier of the React app container to `appId`. In common cases this container identifier is called `root` as tools like [Create React App](https://create-react-app.dev/) use that name by default, so set `appId="root"`.

#### Pop-up support for screen readers

If your app pops up the Modal automatically without a direct interaction from the user, the property `portalId` allows you to improve the accessibility furthermore. It allows screen readers to announce the, from the user’s point of view, unintended appearance of the Modal dialogue. Default Modal dialogues will be announced after a potential reading in progress is finished. Alert Modal dialogues, set by `kind="alert"`, will interrupt the potential reading in progress to announce the alert immediately.

To use this feature, you need to add the Modal portal container manually as a sibling of your app root container and set an identifier for it. The example source code snippet for _index.html_ [above](#common-example-unsaved-document), shows two sibling containers: One, you already use for the React app (here: `#root`) and one for the Modal portal which is identified by `#modal-portal` in the example above. In that case, just set `portalId="modal-portal"`.

## Variants and common cases

- You can set different dialogue sizes with the `size` property.
- Another common case is a transactional Modal dialogue, like described [above](#common-example-unsaved-document).
- It is also possible to force a users’ decision, i.e. to fulfil the GDPR (General Data Protection Regulation) of the European Union.
- You might set up informative Modals, which only contains a `title`, `close button` and `children`. Consider to use our Notification component for that case instead.
- The Modal dialogue is designed without required properties to offer many possible use cases. You might use the `children` only without any other user interface element to set up a custom dialogue layout. This should be an exceptional usage of the Modal component. Consider to use our Notification component for that case instead.

## Action Buttons

You can customise possible user actions with the `primaryButton` and `secondaryButton` props. The former takes a single rendered `PrimaryButton` element, the latter one or two secondary Button elements.

```jsx static
import { Modal, Button } from '@db-design/react';
const { primaryActions, secondaryActions } = Modal;

<Modal
  primaryButton={<Button {...primaryActions}>Oh hey!</Button>}
  secondaryButton={
    <Button variant={Button.variants.Secondary} {...secondaryActions}>
      Don’t mind me
    </Button>
  }
/>;
```

There are two ways to get these components:

1. They are available as named exports in the Modal package:

   ```jsx static
   import { Modal } from '@db-design/react';
   const { PrimaryButton, SecondaryButton } = Modal;
   // ...
   <Modal
     primaryButton={<PrimaryButton>Oh hey!</PrimaryButton>}
     secondaryButton={<SecondaryButton>Don’t mind me.</SecondaryButton>}
   />;
   ```

2. They are exported as properties of the default export:

   ```jsx static
   import { Modal } from '@db-design/react';
   // ...
   <Modal
     primaryButton={<Modal.PrimaryButton>This also works.</Modal.PrimaryButton>}
     secondaryButton={[
       <Modal.SecondaryButton>Here is a secondary Button.</Modal.SecondaryButton>,
       <Modal.SecondaryButton>And another one.</Modal.SecondaryButton>,
     ]}
   />;
   ```

These components internally render the DB `Button` component with some settings pre-set.
See the corresponding Button documentation to find the available props.

## Responsive design

The action buttons can change their positions and widths for specific viewport width breakpoints.

You can centre action buttons for viewport widths up to a given size via the property `centerActions`.

You can set action buttons to full width for viewport widths up to the given size via the property `fullActionSize`.

By default, no special responsive behaviour is used. Both properties are set to `none` by default.

Both properties can be set to `s` for small, `m` for medium and `l` for large breakpoint width.

Consider the size of the action buttons, the size of the Modal dialogue and the appearance in common viewport dimensions: `primaryButton`, `secondaryButton`, `size` with `centerActions` and `fullArtionsSize`.

Take a look into Modal sizes to try out different property combinations.

**Note:** The breakpoints relate to the viewport and not to the size of the Modal dialogue.
