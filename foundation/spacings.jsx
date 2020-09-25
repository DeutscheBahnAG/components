import React from 'react';
import dbxConstants from './dbx-constants';
import StyleguideCard from './styleguide-card';

const { tokens } = dbxConstants;

const Spacings = () => (
  <>
    <h2>DBX Spacings</h2>
    <p className="sg-code-preview">margin: dbx-spacing($name);</p>
    <div className="sg-section">
      <div className="sg-card-group">
        {Object.keys(tokens.spacing).map((size) => (
          <div key={size} className="sg-card-group__item">
            <StyleguideCard
              name={size}
              value={tokens.spacing[size]}
              preview={
                <div
                  className="sg-spacing"
                  style={{
                    width: tokens.spacing[size],
                    height: tokens.spacing[size],
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

export default Spacings;
