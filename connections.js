const mysql= require("mysql");

var mysqlConnection=mysql.createConnection({   //this is to create the connection object b/w node and database

  host: "localhost",
  user: "root",
  password: "navkar99",
  database : "carshowroom"


});

mysqlConnection.connect(function(err){
  if(!err)
  {
    console.log("Connection Established");
  }
  else
  {
    console.log("Connection Failed");
  }
});

module.exports=mysqlConnection;
