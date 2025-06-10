const fs = require('fs');
const assert = require('assert');

const html = fs.readFileSync('index.html', 'utf8');
assert(html.includes('Meilech') && html.includes('Tzippy'), 'index.html should mention the couple\'s names');

console.log('All tests passed');
