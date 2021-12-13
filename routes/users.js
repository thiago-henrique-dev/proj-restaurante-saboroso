var conn = require('./../inc/db')

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  conn.query("SELECT * FROM tb_users ORDER BY name", (error, results) =>{

    if(error){

      res.send(error)
    }else {
      res.send(results)
    }
  })
});

module.exports = router;
////////