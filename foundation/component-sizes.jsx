import React from 'react';
import dbxConstants from './dbx-constants';
import Logo from '../components/web/logo';
import Button from '../components/web/button';
import Textfield from '../components/web/textfield';

const { tokens } = dbxConstants;

const ComponentSizes = () => (
  <>
    <h2>DBX Component Sizes</h2>
    <div className="sg-section">
      <table className="sg-table">
        <thead>
          <th>Size</th>
          <th>Logo</th>
          <th>Button</th>
          <th>Secondary</th>
          <th>Solid</th>
          <th colSpan="2">Textfield</th>
        </thead>
        <tbody>
          {Object.keys(tokens.size).map(size => (
            <tr key={size}>
              <th>
                <code>
                  size.{size}
                  <br />
                  <small>{tokens.size[size]}</small>
                </code>
              </th>
              <td>
                <Logo size={size}>Logo</Logo>
              </td>
              <td>
                <Button size={size}>Button</Button>
              </td>
              <td>
                <Button variant={Button.variants.SECONDARY} size={size}>
                  Button
                </Button>
              </td>
              <td>
                <Button variant={Button.variants.SOLID} size={size}>
                  Button
                </Button>
              </td>
              <td>
                <Textfield size={size} value="Textfield" />
              </td>
              <td>
                <Textfield size={size} value="123" type="number" prefix="@" unit="€" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
);

export default ComponentSizes;
