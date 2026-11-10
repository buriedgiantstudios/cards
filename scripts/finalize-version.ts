const fs = require('fs-extra');
const md5 = require('md5-file');
const nodeCrypto = require('crypto');

const jsonFiles = [
  'cards.json',
  'cards.min.json',
  'changelog.json',
  'errata.json',
  'faq.json',
  'meta.json',
  'everything.json',
  ...fs
    .readdirSync('./dist/i18n')
    .filter((file) => file.endsWith('.json'))
    .map((file) => `i18n/${file}`),
].sort();

const files = Object.fromEntries(
  jsonFiles.map((file) => [file, md5.sync(`dist/${file}`)]),
);

fs.writeJsonSync('dist/version.json', {
  release: nodeCrypto
    .createHash('sha256')
    .update(JSON.stringify(files))
    .digest('hex'),
  cards: files['cards.json'],
  meta: files['meta.json'],
  files,
});
