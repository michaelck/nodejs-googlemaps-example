var express = require('express'),
    router = express.Router();

router.get('/',function(req,res){
  res.render('pizza', { title: 'Pizza Shops in Philadelphia', subtitle: 'Node.js / Google Maps Example with the help of the Express, Path, and Jade modules' });
});

module.exports = router;
