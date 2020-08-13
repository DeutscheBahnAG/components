# Privacyoptions

This component can be used to display a dialogue for users to opt-in to various options concerning their data privacy on the website.
It can be used as a compliant way to get user consent to use technologies like cookies on your site (which you are obliged to do by the GDPR).

The privacy options will be presented as a modal dialogue that can only be closed by selecting one of the two options _‘accept all’_ or _‘save my selection’_, the former being focused by default, so in case the user does not care and just hits return, all options will be accepted.

## Usage example

```js
import { Privacyoptions } from '@bahn-x/dbx-web';
```

```jsx
<Privacyoptions
  // see "Specifying the options" below
  options={myOptionsArray}
  // see "Saving the user selection and knowing when to show the dialogue" below
  onAcceptAll={myAcceptAllHandler}
  onSave={mySaveSelectionHandler}
  // see "Keep legal documents accessible" below
  footer={<MyCustomFooter />}
/>
```

## Specifying the options

The options can be passed as an array of objects in the following form:

```js
{
  name: 'myOptionName', // the name to identify the option in the onSave callback function
  label: 'My Option Name', // the name that is displayed to the user
  description: 'What my option is about', // (optional) more details about the option, will be displayed below the name
  required: true // (optional) if set to true, the option will be checked and disabled, so it cannot be deactivated
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

For that reason, you can (and must) provide a footer area in the dialogue that contains links to these pages.
This area can hold any content, so it is up to you how to implement it:

- you can either add links or an accordion that open the documents inline inside the dialogue (the dialogue content can be scrolled, see an example story here: [With custom footer](?path=/story/components-privacyoptions--with-custom-footer))
- or you add links to the respective pages in the footer and deliberately not render the Privacyoptions component on these pages, so that people can access the content of these documents on your site

## Saving the user selection and knowing when to show the dialogue

Both possible user actions _‘accept all’_ or _‘save my selection’_ have their respective callback props `onAcceptAll` and `onSave`. The `onSave` callback receives a single argument with an object containing boolean values for all options, denoting whether they were selected or not, so you can act accordingly. When `onAcceptAll` is called, you know that all options were accepted and do not need to distinguish further.

It is up to you to implement the logic how to save and process these user settings and determine whether to render the Privacyoptions component based on that information.

Typically, you would save the information, whether the user has responded to the dialogue and what options were selected, in a cookie itself with an appropriate duration (e.g. 1 year, **please check with your data privacy officer**). An easy-to-use and MIT-licensed library to do this is [js-cookie](https://github.com/js-cookie/js-cookie).

⚠️ **Please note that according to the GDPR, you are not allowed to collect any user data until the user has explicitly opted in!** That means for instance, that you cannot activate analytics on your site by default, but must only do it after the user has positively responded to the option in the dialogue.
