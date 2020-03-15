/* jshint esversion: 6 */
const easyDB = require('easydb-io');
      
const db = easyDB({
  database: 'ec07868c-487f-46cb-ab93-05ed4aad2a16',
  token: '5fcaacec-ddc0-4c87-a444-81d59c312b1b'
});

//Insert com callback
db.put('teste01', {val: '1'}, err => console.log(err));
db.put('teste02', {val: '2'}, err => console.log(err));

//db.get('teste01', (err,value) => console.log(value, err));

var i = 0;
while (i < 10) {
  db.put(i, { ['chave-'+1]: i });
  i++;
}

db.list((err, value) => console.log(value, err));
