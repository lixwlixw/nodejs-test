/**
 * Created by Max cheng on 2016/3/21.
 */
var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var vm0=new Vue({
    el:'#test',
    data:{
        msg:'',
        ready:false
    },
    watch:{
        msg:function(val){
            if (this.msg==""){
                //$("#message").siblings().finish().hide();
                //$("#message").finish().show().fadeOut(3000);
                vm0.ready=false;
            }else if (!reg.test(this.msg)) {
                //$("#message2").siblings().finish().hide();
                //$("#message2").finish().show().fadeOut(3000);
                vm0.ready=false;
            }else{
                //$("#message2").hide();
                vm0.ready=true;
            }
        }
    },
    methods:{
        msgReady:function(){
            if (this.msg==""){
                $("#message").siblings().finish().hide();
                $("#message").finish().show().fadeOut(3000);
                //vm0.ready=false;
            }else if (!reg.test(this.msg)) {
                $("#message2").siblings().finish().hide();
                $("#message2").finish().show().fadeOut(3000);
                //vm0.ready=false;
            }else{
                $("#message2").hide();
                //vm0.ready=true;
            }
        },
        tt:function(){
            if (this.msg==""){
                $("#message").siblings().finish().hide();
                $("#message").finish().show().fadeOut(3000);
                vm0.ready=false;
            }else if (!reg.test(this.msg)) {
                $("#message2").siblings().finish().hide();
                $("#message2").finish().show().fadeOut(3000);
                vm0.ready=false;
            }else{
                $("#message2").hide();
                vm0.ready=true;
            }
            if (vm0.ready==true) {
                var loginname =this.msg;
                $.ajax({
                    //sending email
                    url: "/api" + "/users/" + loginname + "/forget/pwd",
                    type: "PUT",
                    contentType: "application/json",
                    cache: false,
                    async: false,
                    dataType: 'json',
                    success: function (json) {
                        if (json.code == 0) {

                        }
                    }
                });
            }
        }
    }
});
