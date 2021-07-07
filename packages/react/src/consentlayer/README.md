# Consentlayer

This component can be used to display a dialogue for users to opt-in to various options concerning their data privacy on the website.
It can be used as a compliant way to get user consent to use technologies like cookies on your site (which you are obliged to do by the GDPR).

The options will be presented as a modal dialogue that can only be closed by selecting one of the two options _‘accept all’_ or _‘save my selection’_, the former being focused by default, so in case the user does not care and just hits return, all options will be accepted.

## Usage example

```js
import { Consentlayer } from '@bahn-x/react';
```

```jsx
const myOptionsArray = [
  {
    name: 'essential',
    label: 'Essential',
    description: 'Absolutely needed',
    required: true,
  },
  {
    name: 'localisation',
    label: 'Localisation',
    checked: true,
    description:
      'We would like to offer you personalized content by knowing your location.',
  },
  {
    name: 'analytics',
    label: 'Analytics',
    description: (
      <>
        <p>
          We use analytics to detect bugs and improve the functionality of the
          site.
        </p>
        <a
          href="https://www.gemeinsamgehtdas.de/en/tracking"
          target="_blank"
          rel="noopener noreferrer"
        >
          Information on analysis
        </a>
      </>
    ),
  },
];
const mySaveSelectionHandler = (selectedOptions) =>
  window.alert(
    `Cookie settings saved:\n\n${JSON.stringify(selectedOptions, null, 2)}`
  );

<Consentlayer
  options={myOptionsArray}
  onSave={mySaveSelectionHandler}
  privacyMessage={<a href="#privacy">Our privacy statement</a>}
  importantLinks={[<a href="#imprint">Imprint</a>]}
/>;
```

## Specifying the options

The options can be passed as an array of objects in the following form:

```js
{
  name: 'myOptionName', // the name to identify the option in the onSave callback function
  label: 'My option name', // the name that is displayed to the user (must not contain a link)
  description: 'What my option is about', // (optional) more details about the option, will
                                          // be displayed below the name
  required: true, // (optional) if set to true, the option will be checked and disabled, so
                  // it cannot be deactivated
  links: [<a href="#terms">Out Terms and Conditions</a>] // A list of links to documents mentioned in the `label`
}
```

The exact options are of course largely dependent on your service. **They should be closely coordinated with your data privacy officer**.

As a realistic example, you could have the following options:

- a required option for technical cookies that are required to run the site (e.g. to detect whether a user is logged in)
- an option for your analytics service
- an option for convenience features on your site (e.g. saving a journey locally)
- options for a social media services that you use or embed in your site

## Keep legal documents accessible

⚠️ To comply with the GDPR and German law, it is necessary that your imprint, legal terms and data privacy page are accessible BEFORE you have accepted the privacy options and close the dialogue.

The link to the privacy statement must be put on top of the buttons. Use `privacyMessage` including an `<a>` and it will be placed and formatted automatically.

Other (legally) important links can be put below the buttons. Use `importantLinks` including an array of `<a>` and it will be placed and formatted automatically.

**Be aware the URL target of those links _must not_ open the Consentlayer and _must not_ apply any tracking until the user gives consent.**

## Saving the user selection and knowing when to show the dialogue

Both possible user actions _‘accept all’_ or _‘save my selection’_ have their respective callback props `onAcceptAll` and `onSave`. The `onSave` callback receives a single argument with an object containing boolean values for all options, denoting whether they were selected or not, so you can act accordingly. When `onAcceptAll` is called, you know that all options were accepted and do not need to distinguish further.

It is up to you to implement the logic how to save and process these user settings and determine whether to render the Consentlayer component based on that information.

Typically, you would save the information, whether the user has responded to the dialogue and what options were selected, in a cookie itself with an appropriate duration (e.g. 1 year, **please check with your data privacy officer**). An easy-to-use and MIT-licensed library to do this is [js-cookie](https://github.com/js-cookie/js-cookie).

⚠️ **Please note that according to the GDPR, you are not allowed to collect any user data until the user has explicitly opted in!** That means for instance, that you cannot activate analytics on your site by default, but must only do it after the user has positively responded to the option in the dialogue.
