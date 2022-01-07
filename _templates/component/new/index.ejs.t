---
to: "<%= files.includes('index') ? `packages/react/src/${name}/index.ts` : null %>"
---
export * from './<%= name %>';
export { default } from './<%= name %>';
