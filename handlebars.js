/**
 * testing handlebars.js
 * Alexis, Roehrling, 14.04.2021
 * source: https://handlebarsjs.com/
 */
const Handlebars = require('handlebars');

const string = 'Name: {{name}}';

if (!string.match(/({{\w+}})/gi)) {
    console.log('no placeholders found');
    return;
}

const template = Handlebars.compile(string);

console.log({
    string: template({ name: 'Nils' }),
});
