import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const EmailButton = ({ children, href, target, centered }) => {
  const Container = centered ? 'center' : React.Fragment;

  return (
    <Container>
      <table
        className={clsx('dbx-email-button', 'button', 'radius', { 'float-center': centered })}
        align={centered ? 'center' : null}
      >
        <tr>
          <td>
            <table>
              <tr>
                <td>
                  <a href={href} target={target}>
                    {children}
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </Container>
  );
};

EmailButton.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  centered: PropTypes.bool,
};

EmailButton.defaultProps = {
  target: undefined,
  centered: false,
};

export default EmailButton;
