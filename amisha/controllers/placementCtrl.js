var sessionUtils = require('../utils/sessionUtils');
var util=require('util');
var databaseUtils = require('../utils/databaseUtils');
module.exports = {
    placementDetails: function* (next) {
        var placement=this.request.body.placement;
        console.log(placement);
        if(placement==1){
            var queryString ='select * from edu_detail where placed=1';
            var query=util.format(queryString);
            var res1=yield databaseUtils.executeQuery(query);
            console.log(res1);
           
        }
        else{
            var queryString ='select * from edu_detail where placed=1';
            var query=util.format(queryString);
            var res1=yield databaseUtils.executeQuery(query);
            console.log(res1);
        }
        yield this.render('placement',{
            res1:res1,
            });
    }
};
