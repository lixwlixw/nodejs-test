
Vue.filter('time',function(val){
    var time="";

    if(val!=undefined) {
        if(val.indexOf("T")!="-1"){
            var b=val.indexOf("T");
            time=val.slice(0,b);
        }else{
            time=val;
        }
    }

    return time;
});
Vue.filter('str',function(val){
    if(val!=undefined) {
        var textLeng = 100;
        if (val.length > textLeng) {
            val = val.substring(0, textLeng) + "..."
        }
    }
    return val;
});
Vue.filter('str_str',function(val){
    if(val!=undefined) {
        var textLeng = 20;
        if (val.length > textLeng) {
            val = val.substring(0, textLeng) + "..."
        }
    }
    return val;
});

var headerToken={};
if($.cookie('token')!=null&&$.cookie('token')!='null'){
    headerToken={Authorization:"Token "+$.cookie("token")};
}

new Vue({
    el:'#newsSelects',
    data:{
        datacon:"",
        selectstitle:"数据需求",
        url:"",
        pageTotal:0,
        page:"",
        typeContent:""
    },
    ready:function(){

        if(type==""){
            var datacon=this.datacon;
            var pagetotal=this.pageTotal;
            $.ajax({
                url:"https://cdn.contentful.com/spaces/hs67vd4fylc8/entries?access_token=d2bf0d154905ef9cbe3d5d9cb6f33244da039a5fff876717d9dfbcd8355f8dfe&content_type=data_demand&limit=5&order=-fields.pub_date",
                type: "get",
                cache:true,
                data:{},
                async:false,
                success:function(json){

                    console.log(json);
                    pagetotal=json.total;
                    datacon=json.items;
                    //pageTotal=json.data.total;
                },
                error:function(json){

                }
            });

            this.pageTotal=pagetotal;
            this.datacon=datacon;
        }else{
            if(type=="data_demand"){
                this.type('pro')
            }
            if(type=="solution_demand"){
                this.type('sol')
            }

        }

        $(".page").pagination(this.pageTotal, {
            maxentries:this.pageTotal,
            items_per_page:5,
            num_display_entries:5,
            num_edge_entries:5,
            prev_text:"上一页",
            next_text:"下一页",
            ellipse_text:"...",
            link_to:"javascript:void(0)",
            callback:this.callBackFun,
            load_first_page:false
        });


    },
    watch:{

    },
    methods:{

        callBackFun:function(e){
            var e=e+1;
            console.log(e);
            var datacon=this.datacon;
            var pagetotal=this.pageTotal;
            var content_type_src="&content_type=data_demand";
            var content_type="";
            if(this.typeContent=='data_demand'){
                content_type='data_demand'
                content_type_src="&content_type="+content_type;
            }
            if(this.typeContent=='solution_demand'){
                content_type='solution_demand';
                content_type_src="&content_type="+content_type;
            }
            $.ajax({
                url:"https://cdn.contentful.com/spaces/hs67vd4fylc8/entries?access_token=d2bf0d154905ef9cbe3d5d9cb6f33244da039a5fff876717d9dfbcd8355f8dfe"+content_type_src+"&order=-fields.pub_date&limit=5&skip="+((e-1)*5),
                type: "get",
                cache:true,
                data:{},
                async:false,
                success:function(json){

                    pagetotal=json.total;
                    datacon=json.items;

                    console.log("------"+datacon);

                },
                error:function(json){

                }
            });

            this.pageTotal=pagetotal;
            this.datacon=datacon;
            $('body,html').animate({ scrollTop: 0 }, 500);
        },

        selected:function(e){
            $(e.target).addClass('selected').siblings().removeClass();
            if(e.target.id=='company'){
                this.href='/my/comCertify';
            }else{
                alert('暂未开通该功能！');
            }
        },
        type:function(e){
            var type="";
            var datacon="";
            this.datacon="";
            var pagetotal=this.pageTotal;
            if(e=='all'){
                type="data_demand";
                this.selectstitle="全部分类";
                this.url="https://cdn.contentful.com/spaces/hs67vd4fylc8/entries?access_token=d2bf0d154905ef9cbe3d5d9cb6f33244da039a5fff876717d9dfbcd8355f8dfe&limit=5&order=-fields.pub_date"
            }
            if(e=='pro'){
                this.typeContent="data_demand";
                type="data_demand";
                this.selectstitle="数据需求";
                this.url="https://cdn.contentful.com/spaces/hs67vd4fylc8/entries?access_token=d2bf0d154905ef9cbe3d5d9cb6f33244da039a5fff876717d9dfbcd8355f8dfe&content_type="+type+"&limit=5&order=-fields.pub_date";
            }
            if(e=='sol'){
                this.typeContent="solution_demand";
                type="solution_demand";
                this.selectstitle="技术/方案需求";
                this.url="https://cdn.contentful.com/spaces/hs67vd4fylc8/entries?access_token=d2bf0d154905ef9cbe3d5d9cb6f33244da039a5fff876717d9dfbcd8355f8dfe&content_type="+type+"&limit=5&order=-fields.pub_date";
            }



            $.ajax({
                url:this.url,
                type: "get",
                cache:true,
                data:{},
                async:false,
                beforeSend:function(){
                    $(".loading").show();
                },
                success:function(json){
                    $(".loading").hide();
                    datacon=json.items;
                    pagetotal=json.total;
                },
                error:function(json){

                }
            });

            this.datacon=datacon;
            this.pageTotal=pagetotal;


            $(".page").pagination(this.pageTotal, {
                maxentries:this.pageTotal,
                items_per_page:5,
                num_display_entries:5,
                num_edge_entries:5,
                prev_text:"上一页",
                next_text:"下一页",
                ellipse_text:"...",
                link_to:"javascript:void(0)",
                callback:this.callBackFun,
                load_first_page:false
            });

        }
    }
});


$(document).ready(function(){
    $("#footer").hide();
});