---
to: "<%= files.includes('styles') ? `packages/styles/components/${name}.scss` : null %>"
---
.db-<%= name %> {
  /* TODO: edit <%= Name %> component styles */
    @include db-text-style('title', 'l');

    background: db-palette-color('dbrot');
    border-radius: db-border-radius('l');
    color: db-palette-color('white');
    padding: db-spacing('l');
}
