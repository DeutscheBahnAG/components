import React from 'react';
import dbxConstants from './dbx-constants';
import StyleguideCard from './styleguide-card';

const { tokens } = dbxConstants;

const Colors = () => (
  <>
    <h2>DBX Colors</h2>
    <p className="sg-code-preview">background-color: dbx-color($name);</p>
    <div className="sg-section">
      <div className="sg-card-group">
        {Object.keys(tokens)
          .filter(key => key.match(/^color\./))
          .map(color => (
            <div key={color} className="sg-card-group__item">
              <StyleguideCard
                name={color.replace('color.', '')}
                value={tokens[color]}
                preview={
                  <div
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      top: 0,
                      left: 0,
                      backgroundColor: tokens[color],
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
