var Router= require('koa-router');
var bodyParser = require('koa-body')();

module.exports = function(app){

    var router = new Router();

    //Welcome Routes
    var welcomeCtrl = require('./../controllers/WelcomeCtrl');
    var tpaheadCtrl=require('./../controllers/tpa_head');
    router.get('/home', welcomeCtrl.showHomePage);
    router.get('/tpAdd', tpaheadCtrl.showtpodetails);
    router.get('/tpaAdd', tpaheadCtrl.showtpadetails);
   // router.post('/tpaAdd1', tpaheadCtrl.assigntpodetails);
    router.post('/tpAdd1', tpaheadCtrl.uptpodetails);
    router.post('/tpAdd2', tpaheadCtrl.inserttpo);
    router.post('/tpoassign', tpaheadCtrl.assigntpodetails);
    
    return router.middleware();
}
