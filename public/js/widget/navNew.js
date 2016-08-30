/**
 * Created by Max cheng on 2016/3/2.
 */
var selVm=new Vue({
    el:".m-navselect",
    data:{
        obj:{},
        states:true,
        overall_index:0,
        index:0
    },
    methods:{
        start:function(){
            $.ajax({
                url: "/api/select_labels",
                type: "get",
                cache:false,
                async:false,
                dataType:'json',
                success:function(json){
                    selVm.obj=json.data;
                }
            });

        },
        selFun:function(e){
            if(e!=undefined||e!='undefined'){
                this.overall_index=$(e.target).index();
            }

            $('.m-navselect ul li').eq(this.overall_index).addClass('active');
            $('.m-navselect ul li').eq(this.overall_index).siblings().removeClass('active');
            // $('.m-navselect ul li').eq(overall_index).css({'cursor':'pointer', 'background-color': '#44bbf5','color':'white'})
        },
        selFunEnter:function(e){
            this.index=$(e.target).index()
            console.log('enter')
            console.log('this.overall_index:'+this.overall_index)
            console.log('this.index:'+this.index)
            this.index=e.target.className.split('img_')[1];
            $('.m-navselect ul li').eq(this.index).addClass('active');
            $('.m-navselect ul li').eq(this.index).siblings().removeClass('active');

        },
        selFunLeave:function(e){

            $('.m-navselect ul li').eq(this.overall_index).addClass('active');
            $('.m-navselect ul li').eq(this.overall_index).siblings().removeClass('active');
            // $('.m-navselect ul li').eq(this.index).removeClass('active');
            // alert('111')
            e.stopPropagation();

        },
        selChildFun:function(e){
            this.overall_index=$(e.target).parent().index();
            $('.m-navselect ul li').eq(this.overall_index).addClass('active');
            $('.m-navselect ul li').eq(this.overall_index).siblings().removeClass('active');
            // e.stopPropagation();
            // alert('222')

        }
    }
});

selVm.start();
$(function () {
    $('.m-navselect ul li').eq(0).addClass('active');
    $('.m-navselect ul li').eq(0).siblings().removeClass('active');


})