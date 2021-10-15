var mysql      = require('mysql');
var productsCategoriesDB = mysql.createConnection({
  host     : 'localhost',
  user     : 'shandy',
  password : 'passpass',
  database : 'productcategory_db'
});
 
productsCategoriesDB.connect();

module.exports = productsCategoriesDB