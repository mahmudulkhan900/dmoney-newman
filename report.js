const newman = require('newman');

newman.run({
    collection:require('./collection/dmoney.json'),
    collection:'https://api.postman.com/collections/27427115-27deb545-5033-46e3-a64b-e81e3a78ab03?access_key=PMAT-01H14GETTGSN1RMGHHQ8W5SXHW',
    environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter:{
        htmlextra:{
            export:'./Reports/report.html',
        }
    }    
}, function (err) {
    if(err) { throw err; }
    console.log('collection run complete!');
});