/**
 * Created by fmn on 16/6/28.
 */

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
    console.log(val);
    var textLeng = 100;
    if (val.length > textLeng) {
        val = val.substring(0, textLeng) + "..."
    }
    return val;
});
Vue.filter('str_str',function(val){
    console.log(val);
    var textLeng = 20;
    if (val.length > textLeng) {
        val = val.substring(0, textLeng) + "..."
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
        selectstitle:"行业新闻",
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
                url:"https://cdn.contentful.com/spaces/hwoyc1162pu2/entries?access_token=50482076566ce3d6253c9011d909f2d005ea1d6199d76dc93c2e77e148129554&content_type=industry_news&limit=5",
                type: "get",
                cache:true,
                data:{},
                async:false,
                success:function(json){

                    pagetotal=json.total;
                    datacon=json.items;

                },
                error:function(json){

                }
            });

            this.pageTotal=pagetotal;
            this.datacon=datacon;

        }else{
            if(type=="industry_news"){
                this.type('pro')
            }
            if(type=="company_news"){
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
            var content_type_src="&content_type=industry_news";
            var content_type="";
            if(this.typeContent=='product'){
                content_type='industry_news'
                content_type_src="&content_type="+content_type;
            }
            if(this.typeContent=='solution'){
                content_type='company_news';
                content_type_src="&content_type="+content_type;
            }

            $.ajax({
                url:"https://cdn.contentful.com/spaces/hwoyc1162pu2/entries?access_token=50482076566ce3d6253c9011d909f2d005ea1d6199d76dc93c2e77e148129554"+content_type_src+"&order=sys.createdAt&limit=5&skip="+((e-1)*5),
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
                type="product";
                this.selectstitle="行业新闻";
                this.url="https://cdn.contentful.com/spaces/hwoyc1162pu2/entries?access_token=50482076566ce3d6253c9011d909f2d005ea1d6199d76dc93c2e77e148129554&order=sys.createdAt&limit=5"
            }
            if(e=='pro'){
                type="product";
                this.selectstitle="行业新闻";
                this.url="https://cdn.contentful.com/spaces/hwoyc1162pu2/entries?access_token=50482076566ce3d6253c9011d909f2d005ea1d6199d76dc93c2e77e148129554&content_type=industry_news&limit=5";
            }
            if(e=='sol'){
                type="solution";
                this.selectstitle="公司资讯";
                this.url="https://cdn.contentful.com/spaces/hwoyc1162pu2/entries?access_token=50482076566ce3d6253c9011d909f2d005ea1d6199d76dc93c2e77e148129554&content_type=company_news&limit=5";
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