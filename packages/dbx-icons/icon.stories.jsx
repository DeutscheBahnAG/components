import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
// eslint-disable-next-line import/extensions
import StyleguideCard from '@bahn-x/dbx-foundation/styleguide-card.jsx';
import * as Icons from './dist';
import readme from './README.md';

storiesOf('Components / Icon', module)
  .addDecorator(withReadme(readme))
  .add('Overview', () => (
    <div>
      <h2>Icons</h2>
      <div className="sg-section">
        <div className="sg-card-group sg-card-group--icons">
          {Object.entries(Icons).map(([name, Component]) => {
            return (
              <div key={name} className="sg-card-group__item">
                <StyleguideCard
                  name={name}
                  preview={
                    <span className="sg-card-group__icon">
                      <Component title={`<Icon.${name} />`} titleId={`icon-title-${name}`} />
                    </span>
                  }
                  value=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  ))
  .add('Adopt parent color', () => (
    <div style={{ color: '#fff', backgroundColor: '#000', padding: '16px' }}>
      <Icons.TransportAirplane />
      <p>
        The icons use the currentColor feature of CSS, so that they adopt the text color from their
        parent.
      </p>
    </div>
  ))
  .add('With title', () => (
    <div>
      <Icons.TicketBahncard title="BahnCard" titleId="icon-bahncard-title" />
      <p>
        For accessibility reasons, icons should always have a textual representation. If you do not
        want a visible text next to the icon (such as on a button), you can set a title that is read
        by screenreader programs and will be visible when you hover over the icon.
      </p>
    </div>
  ));
