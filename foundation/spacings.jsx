import React from 'react';
import dbxConstants from './dbx-constants';
import StyleguideCard from './styleguide-card';

const { spacing } = dbxConstants;

const Spacings = () => (
  <>
    <h2>DBX Spacings</h2>
    <p className="sg-code-preview">margin: dbx-spacing($name);</p>
    <div className="sg-section">
      <div className="sg-card-group">
        {Object.keys(spacing).map(name => (
          <div key={name} className="sg-card-group__item">
            <StyleguideCard
              name={name}
              value={spacing[name]}
              preview={
                <div
                  style={{
                    position: 'absolute',
                    width: spacing[name],
                    height: spacing[name],
                    top: '50%',
                    left: '50%',
                    transform: 'translateX(-50%) translateY(-50%)',
                    backgroundColor: '#e1e6eb',
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
