var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

var conString = "postgres://zqfjxetg:TKqwtJGM_Mad8rzoCL0ia6O6di4a_kz5@rosie.db.elephantsql.com:5432/zqfjxetg";
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
  });
  client.query('SELECT id as id, name as name from test', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(JSON.stringify(result));
    console.log(result.rows[0].id);
    console.log(result.rows[0].name);
  });
});
