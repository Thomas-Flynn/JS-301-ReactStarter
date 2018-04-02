const capitalize = require('./capitalize');
const fs=require('fs');


fs.readFile('./users.json', 'utf8',(err, data) => {
    const pmyfile = JSON.parse(data);
    console.log(pmyfile[0]);

})

