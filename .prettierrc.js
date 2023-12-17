module.exports = {
  bracketSpacing: true,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      options: {
        parser: 'typescript',
      },
    },
    {
      files: ['*.md', '*.json', '*.yaml', '*.yml'],
      options: {
        tabWidth: 2,
      },
    },
  ],
};
