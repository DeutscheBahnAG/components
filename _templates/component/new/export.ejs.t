---
inject: true
to: packages/react/src/index.ts
append: true
skip_if: <%= name %>
---
export { default as <%= Name %> } from './<%= name %>';
