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

var wh=new Vue({
    el:'.m-container',
    data:{
        datacon:{},//集合
        news_content1:"",
        news_content2:"",
        news_content3:"",
        news_content4:""
    },
    computed: {
        time: function () {
            var time="";
            var val=this.datacon.pub_date;
            if(val.indexOf("T")!="-1"){
                var b=val.indexOf("T");
                time=val.slice(0,b);
            }else{
                time=val;
            }
            return time;
        },
        imgurltitle:function(){
            return imgchange(this.datacon.comlogo.sys.id);
        },
        imgurlpic1:function(){
            return imgchange(this.datacon.news_pic1.sys.id );
        },
        imgurlpic2:function(){
            return imgchange(this.datacon.news_pic2.sys.id );
        },
        imgurlpic3:function(){
            return imgchange(this.datacon.news_pic3.sys.id );
        },
        imgurlcompic:function(){
            return imgchange(this.datacon.comdescpic.sys.id);
        },
        namechange:function(){
            if(this.datacon.case2!=null){
                return "案例一";
            }else{
                return "案例";
            }
        },
    },
    created:function(){
        var datacon={};
        var news_content1="";
        var news_content2="";
        var news_content3="";
        var news_content4="";
        $.ajax({
            url:"https://cdn.contentful.com/spaces/hwoyc1162pu2/entries/"+gid+"?access_token=50482076566ce3d6253c9011d909f2d005ea1d6199d76dc93c2e77e148129554",
            type: "get",
            cache:true,
            data:{},
            async:false,
            success:function(json){
                datacon=json.fields
                if(datacon.news_content1!=undefined){
                    news_content1=marked(datacon.news_content1);
                }
                if(datacon.news_content2!=undefined){
                    news_content2=marked(datacon.news_content2);
                }
                if(datacon.news_content3!=undefined){
                    news_content3=marked(datacon.news_content3);
                }
                if(datacon.news_content4!=undefined){
                    news_content4=marked(datacon.news_content4);
                }
            },
            error:function(json){

            }
        });
        this.datacon=datacon;
        this.news_content1=news_content1;
        this.news_content2=news_content2;
        this.news_content3=news_content3;
        this.news_content4=news_content4;

    },
    watch:{

    },
    methods:{
        type:function(e){

        }
    }
});

Vue.filter('img',function(val){
    var url="";
    $.ajax({
        url:"https://cdn.contentful.com/spaces/hwoyc1162pu2/assets/"+val+"?access_token=50482076566ce3d6253c9011d909f2d005ea1d6199d76dc93c2e77e148129554",
        type: "get",
        cache:true,
        data:{},
        async:false,
        success:function(json){
            url=json.fields.file.url;
        },
        error:function(json){

        }
    });

    return "https:"+url;
});

function imgchange(val){
    var url="";
    $.ajax({
        url:"https://cdn.contentful.com/spaces/hwoyc1162pu2/assets/"+val+"?access_token=50482076566ce3d6253c9011d909f2d005ea1d6199d76dc93c2e77e148129554",
        type: "get",
        cache:true,
        data:{},
        async:false,
        success:function(json){
            url=json.fields.file.url;
        },
        error:function(json){

        }
    });

    return "https:"+url;
}



$(document).ready(function(){
    $("#footer").show();
});