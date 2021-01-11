import React from 'react';
import tokens from '@bahn-x/dbx-tokens/dist/deutsche-bahn.json';
import StyleguideCard from './styleguide-card';

const Colors = () => (
  <>
    <h2>DBX Colors</h2>
    <p className="sg-code-preview">background-color: dbx-color($name);</p>
    <div className="sg-section">
      <div className="sg-card-group sg-card-group--horizontal">
        {Object.keys(tokens.color).map((color) => (
          <div key={color} className="sg-card-group__item">
            <StyleguideCard
              name={color}
              value={tokens.color[color]}
              preview={
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    backgroundColor: tokens.color[color],
                  }}
                />
              }
            />
          </div>
        ))}
      </div>
    </div>
  </>
);

export default Colors;
