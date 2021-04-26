/**
 * testing mustache.js
 * Alexis, Roehrling, 14.04.2021
 * source: https://github.com/janl/mustache.js/
 */
const Mustache = require('mustache');
Mustache.tags = ['$', '$'];

const template = 'Name: $name.first$ and is $age$ years old';

const view = {
    name: {
        first: 'Michael',
        last: 'Jackson',
    },
    age: '80',
};

if (!template.match(/(\$\w+\$)/gi)) {
    console.log('no placeholders found');
    return;
}

console.log({
    result: Mustache.render(template, view),
});
