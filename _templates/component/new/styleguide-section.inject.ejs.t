---
inject: true
to: "<%= files.includes('styleguide-section') && section !== 'none' ? 'packages/docs/styleguide-sections.config.js' : null %>"
after: name:\s\'<%= section %>\',\n\s+components\:\sweb\(\[
skip_if: <%= name %>
---
          '<%= name %>',