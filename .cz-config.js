module.exports = {
  types: [
    {
      value: 'feat',
      name:
        'feat:     A new feature/visual update (build in JavaScript and/or CSS)',
    },
    {
      value: 'fix',
      name: 'fix:      A bug fix',
    },
    {
      value: 'docs',
      name: 'docs:     Documentation only changes',
    },
    {
      value: 'style',
      name:
        'style:    Changes that do not affect the meaning of the code\n' +
        '            (white-space, formatting, missing semi-colons, etc,\n' +
        '            THIS IS NOT ABOUT STYLING COMPONENTS WITH CSS)',
    },
    {
      value: 'refactor',
      name:
        'refactor: A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'perf',
      name: 'perf:     A code change that improves performance',
    },
    { value: 'test', name: 'test:     Adding missing tests' },
    {
      value: 'chore',
      name:
        'chore:    Changes to the build process or auxiliary tools\n' +
        '            and libraries such as documentation generation',
    },
    { value: 'revert', name: 'revert:   Revert to a commit' },
  ],

  scopes: [],

  allowTicketNumber: true,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'BDPP-',
  ticketNumberRegExp: '\\d{1,5}',

  messages: {
    type: 'Select the type of change that you’re committing.',
    scope: '\nDenote the SCOPE of this change – optional:',
    ticketNumber:
      'Enter the ticket number (without BDDP-’ prefix) – optional:\n',
    subject:
      'Commit title (SHORT (50 char), IMPERATIVE, starting titlecase):\n',
    editor:
      'Commit details (LONGER description of the change. ' +
      ' Use ‘|’ to break new line) – optional:\n',
    breaking: 'List any BREAKING CHANGES – optional:\n',
    footer:
      'List any ISSUES CLOSED by this change – optional. E.g.: #31, #34:\n',
    confirmCommit:
      'Are you sure you want to proceed with the commit above?\n' +
      '  (To add a commit body, press ‘e’)',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['scope', 'footer', 'body'],

  subjectLimit: 50,
  upperCaseSubject: true,
};
