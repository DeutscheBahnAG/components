import { marked } from 'marked';

const escapeHtml = (string) => {
  return string
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
};

const buildPropsTable = (props) =>
  `## Props

${
  props.length > 0
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
        (prop) => `      <tr>
        <td><strong>${prop.name}</strong></td>
        <td><code>${escapeHtml(prop.type.name)}</code></td>
        <td>${prop.required}</td>
        <td>${
        prop.defaultValue && prop.defaultValue.value !== 'undefined'
          ? prop.defaultValue.value
          : ''
        }</td>
        <td>${marked.parse(prop.description, { sanitize: true, silent: true }).trim()}</td>
      </tr>`
    )
      .join('\n')}
    </tbody>
  </table>
</details>`
    : '<p>This component has no props.</p>'
}
`;
export default buildPropsTable;
