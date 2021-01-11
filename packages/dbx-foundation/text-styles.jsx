import React from 'react';
import clsx from 'clsx';
import tokens from '@bahn-x/dbx-tokens/dist/deutsche-bahn.json';

const textStylePreviewText =
  'Wir bieten unserem Kunden ein nahtloses Online-Reiseerlebnis von Tür zu Tür: durch kundenrelevante Reiseinformationen, Entertainment Angebote und digitale Dienste entlang der Reisekette.';

const TextStyles = () => (
  <>
    <h2>DBX Text Styles</h2>
    <p className="sg-code-preview">@include dbx-text-style($type, $size);</p>
    <div className="sg-section">
      {Object.keys(tokens.textsize)
        .filter((textStyle) => !textStyle.match(/\.desktop/))
        .map((textStyle) => {
          const fontSize = tokens.textsize[textStyle];
          const fontSizeLarge = tokens.textsize[`${textStyle}.desktop`];
          const lineHeight = tokens.lineheight[textStyle];
          const lineHeightRelative = (parseInt(lineHeight, 10) / parseInt(fontSize, 10)).toFixed(2);

          return (
            <div key={textStyle}>
              <h3>
                {textStyle}{' '}
                <span className="sg-text-style--infoRegular">
                  (
                  {`default: ${fontSize} | large: ${fontSizeLarge} | line-height: ${lineHeightRelative}`}
                  )
                </span>
              </h3>
              <p className="sg-code-preview">
                @include dbx-text-style(&apos;
                {textStyle.replace('.', "', '")}&apos;);
              </p>
              <div
                className={clsx('sg-text-style', `sg-text-style--${textStyle.replace(/\./g, '-')}`)}
              >
                {textStylePreviewText}
              </div>
            </div>
          );
        })}
    </div>
  </>
);

export default TextStyles;
