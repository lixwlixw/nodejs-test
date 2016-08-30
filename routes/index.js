var express = require('express');
var router = express.Router();
var http = require('http'); 

router.get('/', function(req, res, next) {
 	res.render('index');
});

//需求列表
router.get('/rqselects', function(req, res, next) {
	var type="";
	res.render('rqselects',{type:type,title:'需求列表_广数交'});
});

//需求详情
router.get('/rqselects/:gid', function(req, res, next) {
	var gid=req.params.gid;
	res.render('rqdetails',{gid:gid,title:'需求详情_广数交'});
});

//单个需求详情
router.get('/singlerqselects/:gid', function(req, res, next) {
	var gid=req.params.gid;
	res.render('singlerqdetails',{gid:gid,title:'需求详情_广数交'});
});
//需求类型跳转
router.get('/rqselects/type/:type', function(req, res, next) {
	var type=req.params.type;
	res.render('rqselects',{type:type,title:'需求_长江大数据'});
});



//新闻资讯列表
router.get('/newsSelects', function(req, res, next) {
	var type="";
	res.render('newsSelects',{type:type,title:'新闻资讯列表_广数交'});
});

//新闻资讯详情
router.get('/newsSelects/:gid', function(req, res, next) {
	var gid=req.params.gid;
	res.render('newsDetails',{gid:gid,title:'新闻资讯详情_广数交'});
});

//新闻资讯类型跳转
router.get('/newsSelects/type/:type', function(req, res, next) {
	var type=req.params.type;
	res.render('newsSelects',{type:type,title:'新闻资讯列表_广数交'});
});

//广州数据精选
router.get('/gzselects', function(req, res, next) {
	var type="";
	res.render('gzselects',{type:type,title:'数据精选_广数交'});
});
//广州数据精选
router.get('/gzselects/:gid', function(req, res, next) {
	var gid=req.params.gid;
	res.render('gzdetails',{gid:gid,title:'精选分类详情_广数交'});
});

//激活邮件
router.get('/regmessage/:loginname/:vid', function(req, res, next) {
	var loginname=req.params.loginname;
	var vid=req.params.vid;
	res.render('regmessage',{loginname:loginname,vid:vid,title:'regmessage.datahub'});
});

//关于我们
router.get('/abouts', function(req, res, next) {
	res.render('abouts', {title: '关于我们_广数交' });
});
//活动1
router.get('/activity1', function(req, res, next) {
	res.render('activity1', {title: '大数据论坛和活动_广数交' });
});
//联系我们
router.get('/contact', function(req, res, next) {
	res.render('contact', {title: '联系我们_广数交' });
});
//帮助中心
router.get('/help', function(req, res, next) {
	res.render('help', {title: '帮助_广数交' });
});

//数据精选
router.get('/selects', function(req, res, next) {
	if(agent(req)){
		res.redirect('mobile/selectsPhone.html');
	}else{
		res.render('selects', {selectsType:'' ,title: '数据精选_广数交' });
	}
});
//数据精选
router.get('/selects/:selectsType', function(req, res, next) {
	var selectsType=req.params.selectsType;
	if(agent(req)){
		if(selectsType=="terminal"){
			//1
			selectsType=encodeURIComponent("终端数据");
		}
		if(selectsType=="finance"){
			//2
			selectsType=encodeURIComponent("金融理财");
		}
		if(selectsType=="traffic"){
			//3
			selectsType=encodeURIComponent("交通运输");
		}
		if(selectsType=="weather"){
			//4
			selectsType=encodeURIComponent("气象环保");
		}
		if(selectsType=="internet"){
			//5
			selectsType=encodeURIComponent("互联网");
		}
		if(selectsType=="baseStation"){
			//6
			selectsType=encodeURIComponent("基站信息");
		}
		if(selectsType=="credit"){
			//7
			selectsType=encodeURIComponent("个人征信");
		}
		if(selectsType=="life"){
			//8
			selectsType=encodeURIComponent("生活服务");
		}
		if(selectsType=="space"){
			//9
			selectsType=encodeURIComponent("时空数据");
		}
		if(selectsType=="healthy"){
			//10
			selectsType=encodeURIComponent("医疗健康");
		}
		if(selectsType=="match"){
			//11
			selectsType=encodeURIComponent("竞赛数据");
		}

		res.redirect('/mobile/selectsPhone.html?type='+selectsType);
	}else{
		res.render('selects', { selectsType:selectsType,title: '数据精选_广数交' });
	}
});
//数据精选左侧导航
router.get('/nav', function(req, res, next) {
	res.render('nav');
});
//item详情右侧item介绍信息
router.get('/iteminfo', function(req, res, next) {
	res.render('iteminfo');
});

//item详情
router.get('/itemdet/:reponame/:itemname', function(req, res, next) {
	var reponame=req.params.reponame;
	var itemname=req.params.itemname;
	if(agent(req)){
		res.redirect('/mobile/itemDetailsPhone.html?repname='+reponame+'&itemname='+itemname);
	}else{
		res.render('itemdetails',{reponame:reponame,itemname:itemname,discuss:'',title:reponame+"/"+itemname+'_广数交'});
	}	
});
//item详情
router.get('/itemdet/:reponame/:itemname/:discuss', function(req, res, next) {
	var reponame=req.params.reponame;
	var itemname=req.params.itemname;
	var discuss=req.params.discuss;
	if(agent(req)){
		res.redirect('/mobile/itemDetailsPhone.html?repname='+reponame+'&itemname='+itemname+"&discuss="+discuss);
	}else{
		res.render('itemdetails',{reponame:reponame,itemname:itemname,discuss:discuss,title:reponame+"/"+itemname+'_广数交'});
	}	
});
//repo详情
router.get('/repodet/:thisReponame', function(req, res, next) {	
	var thisReponame=req.params.thisReponame;
	if(agent(req)){
		res.redirect('/mobile/repDetailsPhone.html?repname='+thisReponame);		
	}else{
		res.render('repodetails',{ thisReponame:thisReponame,title:thisReponame+'_广数交' });
	}
});
//拥有方详情
router.get('/userdet/:snames', function(req, res, next) {	
	var snames=req.params.snames;	
	if(agent(req)){
		res.redirect('/mobile/dataOfDetailsPhone.html?username='+snames+"&type=type");		
	}else{
		res.render('userdetails', { sname:snames,title:snames+'_广数交' });
	}
});
//搜索结果
router.get('/search', function(req, res, next) {
	if(agent(req)){
		res.redirect('/mobile/searchPhone.html');
	}else{
		res.render('search', { sname:"",title:'搜索结果_广数交' });
	}	
});
//搜索结果

router.get('/search/:snames', function(req, res, next) {
	var snames=req.params.snames;
	snames=snames.replace("_*_","/");
	if(agent(req)){
		res.redirect('/mobile/searchPhone.html?rtext='+snames);
	}else{
		res.render('search', { sname:snames,title:'搜索结果_广数交' });
	}
});
//监控中心
router.get('/monitor', function(req, res, next) {
	res.render('monitor',{ title:'监控中心_广数交' });
});
//忘记密码
router.get('/forgetpw/:tname/:resetId', function(req, res, next) {
	var tname=req.params.tname;
	var resetId=req.params.resetId;
	res.render('forgetpw',{tname:tname,resetId:resetId,title:'忘记密码_广数交'});
});
//测试
router.get('/test', function(req, res, next) {
 	res.render('test',{title:'GZBDEX'});
});
//测试
router.get('/test1', function(req, res, next) {
	res.render('publicRepoList');
});
router.get('/model/:names', function(req, res, next) {
	var names=req.params.names;
 	res.render('model'+names);
});
router.get('/model/:names/:rnames', function(req, res, next) {
	var names=req.params.names;
 	res.render('model'+names);
});
//工具页面
router.get('/clientDownload', function(req, res, next) {
	res.render('clientDownload',{title:'clientDownload.GZBDEX' });
});
router.get('/clientToolDownload', function(req, res, next) {
	res.render('clientToolDownload',{title:'工具_广数交' });
});


//登录后
router.get('/my/*',function(req,res,next){
	if (req.cookies["token"]!=null&&req.cookies["tname"]!=null&&req.cookies["tname"]!="null"&&req.cookies["tname"]!="null") {
    	next();
  	} else {
    	res.render('index');
  	}
});
//个人中心--会员升级
router.get('/my/member', function(req, res, next) {
	res.render('memberupgrade',{title:'会员升级_广数交' });
});
//个人中心--修改密码
router.get('/my/pwd',function(req,res,next){
	res.render('pwd',{title:'修改密码_广数交' });
});
//个人中心--基本信息
router.get('/my/basicInfovue',function(req,res,next){
	res.render('basicInfovue',{title:'基本信息_广数交' });
});
//个人中心--账务中心
router.get('/my/myaccount', function(req, res, next) {
	res.render('myaccount', {title:'账务中心_广数交' });
});
// 我的发布Item列表
router.get('/my/items/:snames', function(req, res, next) {
	var snames=req.params.snames;
	res.render('myItems', { sname:snames,title:'我的发布_广数交' });
});
//pull记录、账务中心、我的订单组件模板
router.get('/my/queriesList', function(req, res, next) {
	res.render('queriesList', {title:'我的订单_广数交' });
});

//我的发布
router.get('/my/publish', function(req, res, next) {
	res.render('mypublish',{myOrder:'',title:'我的发布_广数交' });
});
//我的发布
router.get('/my/publish/:myOrder', function(req, res, next) {
	var myOrder=req.params.myOrder;
	res.render('mypublish',{myOrder:myOrder,title:'我的发布_广数交' });
});
//我的订购
router.get('/my/mysub', function(req, res, next) {
	res.render('mysubscribe',{title:'我的订购_广数交' });
});

//我的发布item
router.get('/my/itemDetails/:repnames/:itemnames', function(req, res, next) {
	var repnames=req.params.repnames;
	var itemnames=req.params.itemnames;
	res.render('myitemDetails',{repnames:repnames,itemnames:itemnames,title:'我的发布_广数交' });
});
//markdown编辑
router.get('/my/mark/:rep/:item/:type', function(req, res, next) {
	var rep=req.params.rep;
	var item=req.params.item;
	var type=req.params.type;
	res.render('mymark',{rep:rep,item:item,type:type,title:'mark.GZBDEX' });
});
//消息中心
router.get('/my/msgreq', function(req, res, next) {
	res.render('mymsgreq',{title:'消息中心_广数交' });
});
//认证
//router.get('/my/ca', function(req, res, next) {
//	res.render('certificateCenter',{title:'certificateCenter.GZBDEX' });
//});
//router.get('/my/comCertify', function(req, res, next) {
//	res.render('companycertify',{title:'companycertify.GZBDEX' });
//});

//认证中心
router.get('/my/ca', function(req, res, next) {
	res.render('certificateCenter',{title:'认证中心_广数交' });
});
//企业认证
router.get('/my/comCertify', function(req, res, next) {
	res.render('companycertify',{title:'企业认证_广数交' });
});
//企业认证new
router.get('/my/comCertifyNew', function(req, res, next) {
	res.render('companycertifynew',{title:'企业认证_广数交' });
});
//个人认证
router.get('/my/personCertify', function(req, res, next) {
	res.render('personcertify',{title:'个人认证_广数交' });
});


//注册
router.get('/reg', function(req, res, next) {
//	var sregion = process.env.REGION || "" ;
//	
//	console.log("test-----"+sregion+"-----test");
	var sregion="GZ";
	if(sregion==""){
		res.render('reg',{title:'注册_广数交',sregion:"" });
	}else{
		res.render('reg',{title:'注册_广数交',sregion:sregion });
	}

});

router.get('*', function (req, res) {
	res.render('error', { title: '，请重新输入地址' });
});


var agent=function(req){
	var b=false;
	var deviceAgent = req.headers['user-agent'].toLowerCase(); 
	var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/); 
	if(agentID){ 
		b=true; 
	}
	return b;
}




module.exports = router;
