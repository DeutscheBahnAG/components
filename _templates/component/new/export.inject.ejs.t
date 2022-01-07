---
inject: true
to: "<%= files.includes('export') ? 'packages/react/src/index.ts' : null %>"
append: true
skip_if: <%= name %>
---
export { default as <%= Name %> } from './<%= name %>';