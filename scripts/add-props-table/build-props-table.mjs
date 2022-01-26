const removeLineBreaks = (string) => string.replace(/(\r\n|\n|\r)/gm, ' ');

const escapeHTML = (string) => {
  // replace all non backtick-quoted angle brackets with quoted ones
  return string.replace(/(?<![\`\>])</g, '`<').replace(/>(?!\`)/g, '>`').replaceAll('>`<', '><');
};

const buildPropsTable = (props) => (
  `## Props

${props.length > 0
    ? `<details>
  <summary class="db-props-toggle">Show/hide component props</summary>
  <table class="db-props-table">
    <thead>
      <tr>
        <th>Prop name</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
  ${props
      .map(
        (prop) => `    <tr>
        <td><strong>${prop.name}</strong></td>
        <td><code>${prop.type.name}</code></td>
        <td>${prop.required}</td>
        <td>${prop.defaultValue && prop.defaultValue.value !== 'undefined' ? prop.defaultValue.value : ''
          }</td>
        <td>${escapeHTML(removeLineBreaks(prop.description))}</td>
      </tr>`
      )
      .join('\n')}
    </tbody>
  </table>
</details>`
    : '<p>This component has no props.</p>'
  }
`);
export default buildPropsTable;
