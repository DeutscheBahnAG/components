---
inject: true
to: "<%= section !== 'none' ? 'styleguide-sections.config.js' : null %>"
after: name:\s\'<%= section %>\',\n\s+components\:\sweb\(\[
skip_if: <%= name %>
---
          '<%= name %>',