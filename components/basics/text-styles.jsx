import React from 'react';
import clsx from 'clsx';
import dbxConstants from './dbx-constants';

const { textStyles } = dbxConstants;

const textStylePreviewText =
  'Wir bieten unserem Kunden ein nahtloses Online-Reiseerlebnis von Tür zu Tür: durch kundenrelevante Reiseinformationen, Entertainment Angebote und digitale Dienste entlang der Reisekette.';

const TextStyles = () => (
  <>
    <h2>DBX Text Styles</h2>
    <p className="sg-code-preview">@include dbx-text-style($name);</p>
    <div className="sg-section">
      {Object.keys(textStyles).map(textStyle => (
        <div key={textStyle}>
          <h3>{textStyle}</h3>
          <div className={clsx('sg-text-style', `sg-text-style--${textStyle}`)}>
            {textStylePreviewText}
          </div>
        </div>
      ))}
    </div>
  </>
);

export default TextStyles;
