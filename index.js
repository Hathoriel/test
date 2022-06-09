const { parse } = require('csv-parse');
const fs = require('fs');


const csvData = [];
fs.createReadStream('hall-of-fame.csv')
    .pipe(parse({ delimiter: ',' }))
    .on('data', function (csvrow) {
        if(csvrow[4] === 'ano') {
            console.log(`
                <tr>
                    <td><strong><strong>${csvrow[1]} ${csvrow[0]}</strong></strong></td>
                    <td><strong>${csvrow[3]}</strong></td>
                </tr>
            `);
    }
        //do something with csvrow
        csvData.push(csvrow);
    })
    .on('end', function () {
        //do something with csvData
       // console.log(csvData);
    });