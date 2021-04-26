const Handlebars = require('handlebars');
const moment = require('moment');
const timeExample = `
***
{{name}}

***
Currentdate {{currentdate}} 

***
Currentdate Minus 3 Years:  {{currentdate -3 'years'}}

***
Currentdate plus 3 Years:  {{currentdate 3 'years'}}

`;

function placeholders(input) {
    if (!input.match(/({{\w+}})/gi)) {
        console.log('no placeholders found');
        return input;
    }

    Handlebars.registerHelper('currentdate', (amount, unit) => {
        const format = 'MMMM Do YYYY';

        if (!amount || !unit) {
            return moment().format(format);
        }

        const typeNumber = Math.sign(amount);

        switch (typeNumber) {
            case -1:
                return moment().subtract(Math.abs(amount), unit.toString()).format(format);
            case 1:
                return moment().add(Math.abs(amount), unit.toString()).format(format);
            default:
                return moment().format(format);
        }
    });

    const template = Handlebars.compile(input);
    const output = template({
        name: 'Nils',
    });

    console.log({ template: output });
}

placeholders(timeExample);
