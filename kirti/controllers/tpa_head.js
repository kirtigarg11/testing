var sessionUtils = require('../utils/sessionUtils');
var util=require('util');
var databaseUtils = require('../utils/databaseUtils');
module.exports = {
    showtpodetails: function* (next) {
   
        var queryString ='select * from tb_user,tb_tpo where tb_tpo.uid=tb_user.useid and role=2';
        var query=util.format(queryString);
        var res=yield databaseUtils.executeQuery(query);
       
        yield this.render('tpAdd',{
        res:res,
        });
    },
    // name,cont_num,user_id,active,gender,cur_add,course,email
    uptpodetails:function*(next){
        var name=this.request.body.name1;
        var user_id=this.request.body.user_id1;
        var course=this.request.body.course1;
        var email=this.request.body.email1;
          
        var active=this.request.body.active1;
       
        var cont_num=this.request.body.cont_num1;
     var gender=this.request.body.gender1;
        var cur_add=this.request.body.cur_add1;
       var tpoid=this.request.body.updatetpo1;

        var queryString='select uid from tb_tpo where tpoid=%s';
        
        var query=util.format(queryString,tpoid);
        var res=yield databaseUtils.executeQuery(query);
        var uid=res[0].uid;
        console.log(name,user_id,course,email,active,cont_num,gender,cur_add,tpoid);
        var queryString='update tb_tpo set course="%s",email="%s" where tpoid=%s';
        var query=util.format(queryString,course,email,tpoid);
        var res1=yield databaseUtils.executeQuery(query);
        var queryString='update tb_user set name="%s",user_id="%s",active=%s,cont_num="%s",gender="%s",cur_add="%s" where useid=%s ';
        var query=util.format(queryString,name,user_id, active,cont_num,gender,cur_add,uid);
        var res1=yield databaseUtils.executeQuery(query);

        this.redirect('/app/tpAdd');
    },
    inserttpo:function*(next){
        var name=this.request.body.fields.name;
         
        var cont_num=this.request.body.fields.cont_num;
        var user_id=this.request.body.fields.user_id;
        var pass=this.request.body.fields.pass;
        var gender=this.request.body.fields.gender;
        var cur_add=this.request.body.fields.cur_add;
        var per_add=this.request.body.fields.per_add;
       
        var course=this.request.body.fields.course;
        var email=this.request.body.fields.email;
        var role=2;
        var queryString='insert into tb_user(name,cont_num,user_id,pass,role,gender,cur_add,per_add) values("%s","%s","%s","%s",%s,"%s","%s","%s")';
        var query=util.format(queryString,name,cont_num,user_id,pass,role,gender,cur_add,per_add);
        var re2=yield databaseUtils.executeQuery(query);

       var uid=re2.insertId;
       
        var queryString='insert into tb_tpo(uid,course,email) values(%s,"%s","%s")';
        var query=util.format(queryString,uid,course,email);
        var res1=yield databaseUtils.executeQuery(query);
        this.redirect('/app/tpAdd');

    },
    showtpadetails:function*(next){
        var queryString='select * from tb_tpa,tb_user where useid=uid and role=1';
        var query=util.format(queryString);
        var res1=yield databaseUtils.executeQuery(query);
        yield this.render('tpaAdd',{
            res:res1,
            });
    },
    assigntpodetails:function*(next){
        console.log(1);
        var course=this.request.body.cour;
        console.log(course);
        var queryString=' select tpoid,name from tb_user,tb_tpo where tb_user.useid=tb_tpo.uid and course="btech"';
        var query=util.format(queryString);
        

        var res1=yield databaseUtils.executeQuery(query);
        console.log(res1);
       this.body=res1;
    }
}
