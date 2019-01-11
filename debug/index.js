let index = require('../dist/index');

index.handler({ foo: 'bar' }).then(result => console.log(result));