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
        {Object.keys(tokens)
          .filter(key => key.match(/^spacing\./))
          .map(name => (
            <div key={name} className="sg-card-group__item">
              <StyleguideCard
                name={name.replace('spacing.', '')}
                value={tokens[name]}
                preview={
                  <div
                    style={{
                      position: 'absolute',
                      width: tokens[name],
                      height: tokens[name],
                      top: '50%',
                      left: '50%',
                      transform: 'translateX(-50%) translateY(-50%)',
                      background:
                        'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="8px" height="8px"><style>path{stroke-antialiasing:true;fill:red;stroke:%23fcd0d0;stroke-linecap:square;stroke-width:3px}</style><path d="M4 0 0 4"/><path d="M8 4 4 8"/></svg>\')',
                      border: '1px #E21617 solid',
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
