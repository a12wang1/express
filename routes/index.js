var express = require('express');
var router = express.Router();
var sequelize = require('../module/sqlconnect')();

router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('index')
});
router.get('/caipu',function (req,res) {
  res.render('caipu')
})
router.get('/register',function (req,res) {
  res.render('register')
})
router.get('/daijinjuan',function (req,res) {
  res.render('daijinjuan')
})
router.get('/login',function (req,res) {
  res.render('login')
})
router.get('/qianbao',function (req,res) {
  res.render('qianbao')
})
router.get('/shezhi',function (req,res) {
  res.render('shezhi')
})
router.get('/shipin',function (req,res) {
  res.render('shipin')
})
router.get('/shoucang',function (req,res) {
  res.render('shoucang')
})
router.get('/wode',function (req,res) {
  res.render('wode')
})

router.post ('/login',function (req, res, next) {
  let sql = 'select password from customer where `username` = :username;';
  let password = req.body.password;
  sequelize.query(sql,{
    replacements: { username: req.body.username },
    type: sequelize.QueryTypes.SELECT
  }).then((rs) => {
    if(rs.length!=0){
      for (let i=0;i<rs.length;i++) {
        if(password==rs[i].password){
          res.send({
            "code":0,
            "message":"登录成功",
          })
          break;
        }
      }
    }else{
      res.send( {
        "code":2,
        "message":"用户名密码错误，登录失败"

      })
    }
  })
})

router.post('/register',function (req,res,next) {
  var sql='INSERT INTO customer(`username`,`age`,`password`, `tel`, `email`) VALUE (:username, :age,:password, :tel, :email);';
  sequelize.query(sql,{
    replacements: {
      username: req.body.username ,
      age : req.body.age,
      password : req.body.password,
      tel : req.body.tel,
      email : req.body.email
    },
    type: sequelize.QueryTypes.INSERT
  }).then((rs)=> {
    res.send({
      code : 0,
      message : "OK"
    })
  })
})


module.exports = router;
