<template>

    <div  class="container main">
        <div class="topBox" >
            <div style="float:left;margin-top:30px;width:950px;">
                <div class="top_title">
                    <p>账户信息</p>
                </div>
                <div  class="top_main">
                    <div class="form-group" style="margin-bottom: 15px">
                        <label for="exampleInputEmail1">注册邮箱</label>
                        <input  type="email" v-model="email" disabled="disabled" class="form-control " id="exampleInputEmail1" placeholder="注册邮箱"
                                style="margin-bottom: 0px;width:480px;">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputTime">注册时间</label>
                        <input type="text" v-model="registTime" disabled="disabled" class="form-control" id="exampleInputTime" placeholder="注册时间">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputMember">会员级别</label>
                        <input type="text" v-model="userType" disabled="disabled" class="form-control" id="exampleInputMember" placeholder="会员级别" disabled="disabled">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputTime">截止时间</label>
                        <input type="text" v-model="invalidTime" disabled="disabled" class="form-control" id="exampleStopTime" placeholder="截止时间">
                    </div>
                </div>
            </div>
        </div>
        <div class="midBox">
            <div style="float:left;margin-top:30px;width:950px;">
                <div  class="mid_title">
                    <p>基本信息</p>
                </div>
                <div id="mid_alert" >
                    <p id="success">修改成功！</p>
                    <p id="error">提交失败！</p>
                    <p id="error_emptyName">名称不能为空</p>
                    <p id="error_emptyName2">昵称不能为空</p>
                    <p id="error_emptyName3">昵称已经存在</p>
                    <p id="error_emptyComment">简介不能为空</p>
                    <p id="error_allEmpty">输入内容不能为空</p>
                    <p id="error_limit">限使用英文字母、数字、“_”</p>
                    <!--做到这-->
                </div>
                <div  class="mid_main">

                    <div id="update_icon" @click="formUpdate">
                        <span class="span_icon"></span>
                    </div>

                    <div class="certificateCenter">
                        <div class="form-group" style="margin-bottom: 15px">
                            <label for="exampleInputEmail1">账号</label>
                            <input  type="email" v-model="email" disabled="disabled" class="form-control " placeholder="帐号"
                                    style="margin-bottom: 0px;width:480px;">
                        </div>
                        <div class="form-group">
                            <label>类型</label>
                            <div style="width: 200px;height: 40px;margin-right: 28px;background-color: #eee;border: 1px solid #cacaca;border-radius: 5px;line-height:40px;padding-left: 12px;" disabled="disabled">{{type}}</div>
                        </div>
                        <div class="form-group">
                            <label>状态</label>
                            <div style="width: 200px;height: 40px;margin-right: 28px;background-color: #eee;border: 1px solid #cacaca;border-radius: 5px;line-height:40px;padding-left: 12px;" disabled="disabled">{{userStatus}}</div>
                        </div>
                    </div>
                    <template v-if="type=='个人'">
                        <div class="form-group" style="width: 480px">
                            <label for="exampleInputName">个人姓名<span style="color: red">*<span id="nameAlert" style="float: right"> <img src="/img/images02_127.png" style="float: left;margin: 4px 5px;width: 12px;" />请输您的姓名</span></span></label>
                            <input v-model="userName"  type="email"  class="form-control " id="exampleInputName2" placeholder="个人姓名"
                                   style="margin-bottom: 0;width:480px;" disabled>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputName" style="float: left;width: 100%;margin-bottom: 0px">昵称</label>
                            <input  v-model="nickName" class="form-control"  id="exampleInputName" placeholder="昵称"
                                    style="margin-bottom: 0;width:480px;float: left;margin-bottom: 15px" disabled="disabled">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputBusiness" style="float: left;width: 100%;margin-bottom: 0px">所属行业</label>
                            <input v-model="industry"  class="form-control" id="exampleInputBusiness" placeholder="所属行业" disabled="disabled"
                                   style="margin-bottom: 0;width:480px;float: left;margin-bottom: 15px">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPhone" style="float: left;width: 100%;margin-bottom: 0px">手机号码</label>
                            <input v-model="tel"  class="form-control" id="exampleInputPhone" placeholder="手机号码" disabled="disabled"
                                   style="margin-bottom: 0;width:480px;float: left;margin-bottom: 15px">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputHome" style="float: left;width: 100%;margin-bottom: 0px">个人主页</label>
                            <input v-model="homepage"  class="form-control" id="exampleInputHome" placeholder="个人主页" disabled="disabled"
                                   style="margin-bottom: 0;width:480px;float: left;margin-bottom: 15px">
                        </div>

                        <div class="form-group">
                            <label for="exampleInputHome" style="float: left;width: 100%;margin-bottom: 0px">个人头像</label>
                            <div style="float: left;margin-bottom: 15px;width: 300px;">
                                <uploadavtoer :dis=dis></uploadavtoer>
                            </div>
                        </div>


                        <!--<div class="form-group">-->
                        <!--<label style="float: left;width: 100%;margin-bottom: 0px">个人头像</label>-->
                        <!--<div style="float:left;margin-bottom:15px">-->
                        <!--&lt;!&ndash;<div style="width: 150px;height: 100px;float: left;border: 1px solid #cacaca"></div>&ndash;&gt;-->
                        <!--<div class="col-lg-6" style="padding: 0;width: 600px; float: none;">-->
                        <!--<div class="input-group">-->
                        <!--<uploadpng detmsg="不符合要求,请修改后重新上传" :picid.sync=headPic v-bind:headers="xhrHeaders" action="/api/certification/upload"></uploadpng>-->
                        <!--</div>-->
                        <!--&lt;!&ndash;<span>图片大小500K以内，支持PNG/JPG格式</span>&ndash;&gt;-->
                        <!--</div>-->
                        <!--</div>-->
                        <!--</div>-->

                        <div class="form-group">
                            <label for="exampleInputTime" style="float: left;width: 100%;margin-bottom: 0px">个人简介</label>
                    <textarea  v-model="comment" id="personIntroduce"  class="form-control form-control-self" rows="6"
                               placeholder="基本情况介绍，100字以内"maxlength="100" style="width:480px;float:left;" disabled="disabled"></textarea>
                        </div>
                        <div style="width: 480px;float: left">
                            <button class="btn btn-default"  @click="formSubmit"  id="button01" type="submit" style="width: 100%;float: left;border: none;margin-top: 15px">修改</button>
                        </div>
                    </template>

                    <template v-if="type=='企业'">
                        <div class="form-group" style="width: 480px">
                            <label for="exampleInputName">公司名称<span style="color: red">*<span id="nameAlert" style="float: right"> <img src="/img/images02_127.png" style="float: left;margin: 4px 5px;width: 12px;" />请输公司名称</span></span></label>
                            <input v-model="userName"  type="email"  class="form-control " id="exampleInputName2" placeholder="公司名称"
                                   style="margin-bottom: 0;width:480px;" disabled>
                        </div>
                        <!--<div class="form-group">-->
                        <!--<label for="exampleInputName" style="float: left;width: 100%;margin-bottom: 0px">公司简介</label>-->
                        <!--<input  v-model="nickName" class="form-control"  id="exampleInputName" placeholder="公司简介"-->
                        <!--style="margin-bottom: 0;width:480px;float: left;margin-bottom: 15px" disabled="disabled">-->
                        <!--</div>-->
                        <div class="form-group">
                            <label for="exampleInputBusiness" style="float: left;width: 100%;margin-bottom: 0px">所属行业</label>
                            <input v-model="industry"  class="form-control" id="exampleInputBusiness" placeholder="所属行业" disabled="disabled"
                                   style="margin-bottom: 0;width:480px;float: left;margin-bottom: 15px">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputInterface" style="float: left;width: 100%;margin-bottom: 0px">业务接口人</label>
                            <input v-model="person"  class="form-control" id="exampleInputInterface" placeholder="业务接口人" disabled="disabled"
                                   style="margin-bottom: 0;width:480px;float: left;margin-bottom: 15px">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPhone" style="float: left;width: 100%;margin-bottom: 0px">业务接口电话</label>
                            <input v-model="tel"  class="form-control" id="exampleInputPhone" placeholder="手机号码" disabled="disabled"
                                   style="margin-bottom: 0;width:480px;float: left;margin-bottom: 15px">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputHome" style="float: left;width: 100%;margin-bottom: 0px">公司网址</label>
                            <input v-model="homepage"  class="form-control" id="exampleInputHome" placeholder="公司网址" disabled="disabled"
                                   style="margin-bottom: 0;width:480px;float: left;margin-bottom: 15px">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputHome" style="float: left;width: 100%;margin-bottom: 0px">公司LOGO</label>
                            <div style="float: left;margin-bottom: 15px;width: 300px;">
                                <uploadavtoer :dis=dis ></uploadavtoer>
                            </div>
                        </div>
                        <!--<div class="form-group">-->
                        <!--<label style="float: left;width: 100%;margin-bottom: 0px">公司LOGO</label>-->
                        <!--<div style="float:left;margin-bottom:15px">-->
                        <!--&lt;!&ndash;<div style="width: 150px;height: 100px;float: left;border: 1px solid #cacaca"></div>&ndash;&gt;-->
                        <!--<div class="col-lg-6" style="padding: 0;width: 600px; float: none;">-->
                        <!--<div class="input-group">-->
                        <!--<uploadpng detmsg="不符合要求,请修改后重新上传" :picid.sync=headPic v-bind:headers="xhrHeaders" action="/api/certification/upload"></uploadpng>-->
                        <!--</div>-->
                        <!--&lt;!&ndash;<span>图片大小500K以内，支持PNG/JPG格式</span>&ndash;&gt;-->
                        <!--</div>-->
                        <!--</div>-->
                        <!--</div>-->
                        <!--<div class="form-group">-->
                        <!--<label style="float: left;width: 100%;margin-bottom: 0px">个人头像</label>-->
                        <!--<div style="float:left;margin-bottom:15px">-->
                        <!--&lt;!&ndash;<div style="width: 150px;height: 100px;float: left;border: 1px solid #cacaca"></div>&ndash;&gt;-->
                        <!--<div class="col-lg-6" style="padding: 0;width: 600px; float: none;">-->
                        <!--<div class="input-group">-->
                        <!--<uploadpng detmsg="不符合要求,请修改后重新上传" :picid.sync=headPic v-bind:headers="xhrHeaders" action="/api/certification/upload"></uploadpng>-->
                        <!--</div>-->
                        <!--&lt;!&ndash;<span>图片大小500K以内，支持PNG/JPG格式</span>&ndash;&gt;-->
                        <!--</div>-->
                        <!--</div>-->
                        <!--</div>-->
                        <div class="form-group">
                            <label for="exampleInputTime" style="float: left;width: 100%;margin-bottom: 0px">公司简介</label>
                    <textarea  v-model="comment" id="personIntroduce"  class="form-control form-control-self" rows="6"
                               placeholder="基本情况介绍，100字以内"maxlength="100" style="width:480px;float:left;" disabled="disabled"></textarea>
                        </div>
                        <div style="width: 480px;float: left">
                            <button class="btn btn-default"  @click="formSubmit"  id="button01" type="submit" style="width: 100%;float: left;border: none;margin-top: 15px">修改</button>
                        </div>
                    </template>
                </div>
            </div>
        </div>


        <div class="underBox">
            <div style="float:left;margin-top:30px;width:950px;">
                <div class="under_title">
                    <p>资源状态</p>
                </div>
                <div  class="under_main">
                    <div  class="p_progress">
                        <p>免费资源下载量：<span>2000次/天</span></p>
                        <div class="pn_progress">
                            <div id="pullNum" class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" data-toggle='tooltip' data-placement="top">
                                <span class="sr-only">40% Complete (success)</span>
                            </div>
                        </div>
                    </div>
                    <div class="circle_group">
                        <div class="circle">
                            <div class="pie_left">
                                <div class="left"></div>
                            </div>
                            <div class="pie_right">
                                <div class="right"></div>
                            </div>
                            <div class="mask">
                                <div >
                                    <p>已用</p>
                                    <p id="usePublic"></p>
                                </div>
                            </div>
                            <p>开放Repository：<span></span></p>
                        </div>

                        <div class="circle1">
                            <div class="pie_left1">
                                <div class="left1"></div>
                            </div>
                            <div class="pie_right1">
                                <div class="right1"></div>
                            </div>
                            <div class="mask1">
                                <div >
                                    <p>已用</p>
                                    <p id="usePrivate"></p>
                                </div>
                            </div>
                            <p>私有Repository：<span></span></p>
                        </div>

                        <div class="circle2">
                            <div class="pie_left2">
                                <div class="left2"></div>
                            </div>
                            <div class="pie_right2">
                                <div class="right2"></div>
                            </div>
                            <div class="mask2">

                                <p>已用</p>
                                <p id="deposit"></p>

                            </div>
                            <p>托管空间：<span></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<style>

</style>

<script>

    var uploadpng = require('../reusable/uploadpng.vue');

    var uploadavtoer = require('../reusable/uploadavtoer.vue');

    export default {
        data:function(){
            return {
                xhrHeaders: {"Authorization" : "Token "+$.cookie("token")},
                email:$.cookie("tname").slice($.cookie("tname").indexOf("+")+1),
                href:"",
                userStatus:"",
                type:"",
                userName:"",
                nickName:"",
                industry:"",
                tel:"",
                homepage:"",
                headPic:"",
                person:"",
                comment:"",
                sregion:"",
                s:0,
                y:0,
                registTime:"",
                invalidTime:"",
                userType:"",
                dis:false
            }
        },
        ready: function () {

            $(document).ready(function(){

                $("#nameAlert").hide();
                $("#button01").hide();
                $("#update_icon").show();


                $(document).on('blur',"#exampleInputName2",function(){
                    if($(this).val()=="") {
                        //$("#exampleInputName2").focus();    // 如果内容为空，继续聚集焦点
                        $("#nameAlert").show();
                        $("#button01").attr("disabled", "disabled");
                    }else {

                        $("#nameAlert").hide();
                        $("#button01").removeAttr("disabled");
                    }

                })

                $(document).on('blur',"#exampleInputName",function(){
                    var val=$(this).val();
                    var reg= /^(([a-z]*)|(\w*\d*\w*)|(\w*\_\w*)|(\w*[a-z]\w*\d*\w*)|(\w*\_*\w*\d*\w*)|(\w*\_*\w*[a-z]*\w*)|(\w*\_*\w*[a-z]*\w*\d*\w*))$/i;
                    if(reg.test(val)){
                        $("#error_limit").siblings().finish().hide();
                        $('#error_limit').hide();
                        this.s=1;
                    }else{
                        $("#error_limit").text("限使用英文字母、数字、“_”").finish().hide();
                        $('#error_limit').show();
                        this.s=0;
                    }
                })



                $(document).on('blur',"#personIntroduce",function(){
                    var val=$(this).val();
                    if(val==null){
                        this.y=1;
                    }
                    else if(val.length<100&&val.length>=0){
                        $("#error_limit").siblings().finish().hide();
                        $('#error_limit').hide();
                        this.y=1;

                    }else{
                        $("#error_limit").text("已达最长字符数").siblings().finish().hide();
                        $('#error_limit').show();
                        this.y=0;
                    }
                })
            });




            var userStatus=this.userStatus;
            var type=this.type;
            var masssage=this.masssage;
            var userName=this.userName;
            var nickName=this.nickName;
            var industry=this.industry;
            var tel=this.tel;
            var homepage=this.homepage;
            var headPic=this.headPic;
            var person=this.person;
            var comment=this.comment;
            var sregion=this.sregion;
            var registTime=this.registTime;
            var invalidTime=this.invalidTime;
            var userType=this.userType;

            $.ajax({
                type: "get",
                url:"/api/users/"+$.cookie("tname"),
                cache:false,
                async:false,
                headers:{Authorization:"Token "+$.cookie("token")},
                success: function(msg){
                    console.log('msg:',msg)
                    userStatus=msg.data.userStatus;
                    type=msg.data.type;
                    masssage=msg.data.masssage;
                    userName=msg.data.userName;
                    nickName=msg.data.nickName;
                    industry=msg.data.industry;
                    tel=msg.data.tel;
                    homepage=msg.data.homepage;
                    headPic=msg.data.headPic;
                    person=msg.data.person;
                    comment=msg.data.comment;
                    sregion=msg.data.sregion;
                    registTime=msg.data.registTime;
                    invalidTime=msg.data.invalidTime;
                    userType=msg.data.userType;

                }
            });
            this.userStatus=userStatus;
            this.type=type;
            this.userName=userName;
            this.nickName=nickName;
            this.industry=industry;
            this.tel=tel;
            this.homepage=homepage;
            this.headPic=headPic;
            this.person=person;
            this.comment=comment;
            this.sregion=sregion;
            this.registTime=registTime;
            this.invalidTime=invalidTime;
            this.userType=userType;


//
//            console.log("-------"+this.type+"---------");
//
//            this.masssage=masssage;
//            console.log(this.masssage);
//            if(this.status==2){
//                this.statusbool=true;
//            }else{
//                this.statusbool=false;
//
//                if(this.status==5){
//                    this.statusauth=true;
//                }else{
//                    this.statusauth=false;
//                }
//
//
//            }

            if(this.type==0){
                this.type="未认证";
            }

            if(this.type==1){
                this.type="个人";
            }
            if(this.type==2){
                this.type="企业";
            }

            if(this.userStatus==1){
                this.userStatus="未激活";
            }
            if(this.userStatus==2){
                this.userStatus="激活";
            }
            if(this.userStatus==3){
                this.userStatus="认证";
            }
            if(this.userStatus==4){
                this.userStatus="等待审核";
            }
            if(this.userStatus==5){
                this.userStatus="审核未通过";
            }
            if(this.userStatus==7){
                this.userStatus="账号销毁";
            }

            if(this.userType==1){
                this.userType="注册用户";
            }
            if(this.userType==2){
                this.userType="管理员用户";
            }
            if(this.userType==3){
                this.userType="认证会员";
            }
            if(this.userType==4){
                this.userType="金卡会员";
            }
            if(this.userType==5){
                this.userType="钻石会员";
            }





        },
        computed: {
            // 一个计算属性的 getter
//            dhref: function () {
//                if(this.type=="企业"){
//                    return "/my/comCertifyNew"
//                }
//                if(this.type=="个人"){
//                    return  "/my/personCertify"
//                }
//            }
        },
        components: {
            uploadpng,uploadavtoer
        },
        watch:{
//            'kbisPic':function(val){
//                this.$parent.kbisPic=val;
//            },
            'headPic':function(val){
                this.$parent.headPic=val;
            }
        },
        methods:{
//            selected:function(e){
//                $(e.target).addClass('selected').siblings().removeClass();
//                if(e.target.id=='company'){
//                    this.href='/my/comCertifyNew';
//                }else{
//                    this.href='/my/personCertify';
//                }
//            },
//            test:function(){
//                console.log("-----")
//            },
//            next:function(e){
//                location.href=this.href;
//            },
//            nickName:function(val){
//                //var reg=new RegExp('/[A-Za-z0-9_-]/');/\_/
//                var reg= /^(([a-z]*)|(\w*\d*\w*)|(\w*\_\w*)|(\w*[a-z]\w*\d*\w*)|(\w*\_*\w*\d*\w*)|(\w*\_*\w*[a-z]*\w*)|(\w*\_*\w*[a-z]*\w*\d*\w*))$/i;
//                if(reg.test(val)){
//                    $("#error_limit").siblings().finish().hide();
//                    $('#error_limit').hide();
//                    this.s=1;
//                }else{
//                    $("#error_limit").text("限使用英文字母、数字、“_”").finish().hide();
//                    $('#error_limit').show();
//                    this.s=0;
//                }
//            },
//            comment:function(val){
//                if(val==null){
//                }
//                else if(val.length<100&&val.length>=0){
//                    $("#error_limit").siblings().finish().hide();
//                    $('#error_limit').hide();
//
//                    this.y=1;
//                }else{
//                    $("#error_limit").text("已达最长字符数").siblings().finish().hide();
//                    $('#error_limit').show();
//                    this.y=0;
//                }
//            },
            getInfo: function () {
                //以上是测试code
                getAjax('/api/users/' + $.cookie("tname"), headerToken, function (data) {
                    accountInfo.nickName=data.data.nickName;
                    accountInfo.userName=data.data.userName;
                    accountInfo.comment=data.data.comment;
                    accountInfo.regtime=data.data.registTime;
                    accountInfo.endTime=data.data.invalidTime;
                });

//                getAjax("/api/vip/"+$.cookie("tname"),headerToken,function(data){
//                    switch (data.data.userType)
//                    {
//                        case 1:
//                            accountInfo.membership="注册用户";
//                            break;
//                        case 2:
//                            accountInfo.membership="管理员用户";
//                            break;
//                        case 3:
//                            accountInfo.membership="认证会员";
//                            break;
//                        case 4:
//                            accountInfo.membership="金卡会员";
//                            break;
//                        case 5:
//                            accountInfo.membership="钻石会员";
//                            break;
//                    }
//                });

                //pull量信息
                $('[data-toggle="tooltip"]').tooltip({
                    placement:function(){
                        return "top";
                    }
                });
                getAjax('/api/quota/'+$.cookie("tname")+'/pullnum',headerToken,function(data){
                    var use=data.data.use;
                    var quota=data.data.quota;
                    $(".p_progress>p>span").html(quota+"次/天");
                    if(use<quota){
                        var pullNumB=(use/quota).toFixed(4);
                        var pullNumC=pullNumB.slice(2,4)+"."+pullNumB.slice(4,6)+"%";
                        $("#pullNum").css("width",pullNumC);
                    }else if(use==quota||use>quota){
                        $("#pullNum").css("width","100%");
                    }
                    //var quotaPercect=(((use/quota))*100)+'%';
                    //$("#pullNum").css("width",quotaPercect);
                    //$("#pullNum").attr("data-original-title","今天已Pull:"+use+"次");
                });
                //三个圆环信息
                getAjax("/api"+"/vip/"+$.cookie("tname"),headerToken,function(data){
                    $(".circle p span").text(data.data.repoPub+"个");
                    $(".circle1 p span").text(data.data.repoPri+"个");
                    $(".circle2 p span").text(data.data.deposit);
                });
                //repo配额
                getAjax("/api"+"/quota/"+$.cookie("tname")+"/repository",headerToken,function(data){
                    console.log(data.data);
                    var usePublic=parseFloat(data.data.usePublic);
                    var usePrivate=parseFloat(data.data.usePrivate);
                    var quotaPublic=parseFloat(data.data.quotaPublic);
                    var quotaPrivate=parseFloat(data.data.quotaPrivate);
                    $("#usePublic").text(usePublic);
                    $("#usePrivate").text(usePrivate);
                    $(".circle p span").text(quotaPublic+"个");
                    $(".circle1 p span").text(quotaPrivate+"个");
//第一个圆环
                    var uqc=parseFloat(usePublic/quotaPublic);
                    if(uqc==0){
                        $(".left").css("transform", "rotate()");
                        $(".right").css("transform", "rotate()");
                    }
                    if (uqc <= 0.5&&uqc>0) {
                        var leftNum = uqc * 360;
                        $(".left").css("transform", "rotate(-"+leftNum+"deg)");
                    }
                    if (uqc > 0.5) {
                        var rightNum = (uqc - 0.5) * 360;
                        $(".left").css("transform", "rotate(-180deg)");
                        $(".right").css("transform", "rotate(-" + rightNum + "deg)");
                    }
//第二个圆环
                    if(quotaPrivate==0)
                    {
                        $(".left1").css("transform", "rotate(deg)");
                        $(".right1").css("transform", "rotate(deg)");
                    }
                    if(quotaPrivate!=0)
                    {
                        var uqe=usePrivate/quotaPrivate;
                        if (uqe <= 0.5) {
                            var leftNum2 = uqe * 360;
                            $(".left1").css("transform", "rotate(-" + leftNum2 + "deg)");

                        }
                        if (uqe > 0.5) {
                            var rightNum2 = (uqe - 0.5) * 360;
                            $(".left1").css("transform", "rotate(-180deg)");
                            $(".right1").css("transform", "rotate(-" + rightNum2 + "deg)");
                        }
                    }
                });
//托管空间
                getAjax("/api"+"/quota/"+$.cookie("tname")+"/deposit",headerToken,function(data){
                    var use1 = data.data.use;//使用配额
                    var quota1 = data.data.quota;//托管配额
                    var use = use1.substring(0, (use1.length - 1));
                    var quota = quota1.substring(0, (quota1.length - 1));
                    uq = (use / quota).toFixed(2);

                    $("#deposit").text(use1);
                    $(".circle2 p span").text(quota1);
                    if(uq==0)
                    {
                        $(".left2").css("transform", "rotate(deg)");
                        $(".right2").css("transform", "rotate(deg)");
                    }
                    else if (uq>0&&uq<0.5){
                        var leftNum = uq * 360;
                        $(".left2").css("transform", "rotate(-" + leftNum + "deg)");
                    }
                    else if (uq > 0.5) {
                        var rightNum = (uq - 0.5) * 360;
                        $(".left2").css("transform", "rotate(-180deg)");
                        $(".right2").css("transform", "rotate(-" + rightNum + "deg)");
                    }
                });
            },

            formSubmit:function(){
                var mydata = {};

                mydata["username"] = this.userName;
                mydata["nickname"] = this.nickName;
                mydata["industry"] = this.industry;
                mydata["tel"] = this.tel;
                mydata["homepage"] = this.homepage;
                //mydata["headPic"] = this.headPic;
                mydata["person"] = this.person;
                mydata["comments"]=this.comment;
                mydata["sregion"] = this.sregion;
                mydata["registTime"] = this.registTime;
                mydata["invalidTime"] = this.invalidTime;
                mydata["usertype"]=this.userType;
                //alert("s:"+this.s+"*"+"y:"+this.y);



//                if((this.s)*(this.y)==1){
                if($("#exampleInputName2").val!=null){
                    console.log("!!!!!!!!!")

                    $("#button01").css("display","none");
                    $("#exampleInputName2").attr("disabled","disabled");
//                    $("#textComment").attr("disabled","disabled");
                    $.ajax({
                        url:"/api"+"/users/"+$.cookie("tname"),
                        type:"PUT",
                        cache:false,
                        async:false,
                        beforeSend:function(){
                            $('#button01').attr('disabled','disabled');
                            $('#button01').text('正在保存中');
                        },
                        complete:function(){
                            $('#button01').removeAttr('disabled');
                            $('#button01').text('提交');
                        },
                        headers:{Authorization:"Token "+$.cookie("token")},
                        datatype:'json',
                        contentType:"application/json",
                        data: JSON.stringify(mydata),
                        success:function(data){
                            if(data.code==0){
                                $("#update_icon").css("display","inline-block");
                                $("#success").siblings().finish().hide();
                                $("#success").show().fadeOut(4000);
                            }
                            if (data.code==8002)
                            {
                                $("#error_emptyName3").siblings().finish().hide();
                                $("#error_emptyName3").show().fadeOut(4000);
                            }
                        },
                        error:function(data){
                            if(data.code!=0){
                                $("#error").siblings().finish().hide();
                                $("#error").show().fadeOut(4000);
                            }
                        }
                    });
                }
            },
            formUpdate:function(){

                this.dis=true;

                $("#button01").show();
                $("#update_icon").hide();
                $("#personIntroduce").removeAttr("disabled");
                $("#exampleInputName").removeAttr("disabled");
                $("#exampleInputBusiness").removeAttr("disabled");
                $("#exampleInputPhone").removeAttr("disabled");
                $("#exampleInputHome").removeAttr("disabled");
                $("#exampleInputInterface").removeAttr("disabled");

                $(document).on('blur',"#exampleInputName",function(){
                    if($(this).val()=="") {
                        $("#button01").attr("disabled", "disabled");
                    }else {
                        $("#button01").removeAttr("disabled");
                    }

                })

            },
        }
    }



</script>