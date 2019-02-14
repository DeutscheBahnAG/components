import React from 'react';
import dbxConstants from './dbx-constants';
import StyleguideCard from './styleguide-card.jsx';

const { colors } = dbxConstants;

const Colors = () => (
  <>
    <h2>DBX Colors</h2>
    <p className="sg-code-preview">background-color: dbx-color($name);</p>
    {Object.keys(colors).map(category => (
      <div className="sg-section" key={category}>
        <h3 className="sg-section__heading">{category}</h3>
        <div className="sg-card-group">
          {Object.keys(colors[category]).map(color => (
            <div key={color} className="sg-card-group__item">
              <StyleguideCard
                name={color}
                value={colors[category][color]}
                preview={
                  <div
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      top: 0,
                      left: 0,
                      backgroundColor: colors[category][color],
                    }}
                  />
                }
              />
            </div>
          ))}
        </div>
      </div>
    ))}
  </>
);

export default Colors;
