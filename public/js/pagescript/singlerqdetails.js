
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
        datacon:{}//集合
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
            return imgchange(this.datacon.news_pic1[0].sys.id );
        },
        imgurlpic2:function(){
            return imgchange(this.datacon.news_pic2[0].sys.id );
        },
        imgurlpic3:function(){
            return imgchange(this.datacon.news_pic3[0].sys.id );
        },
        imgurlcompic:function(){
            return imgchange(this.datacon.comdescpic[0].sys.id);
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
        $.ajax({
            url:"https://cdn.contentful.com/spaces/hs67vd4fylc8/entries/"+gid+"?access_token=d2bf0d154905ef9cbe3d5d9cb6f33244da039a5fff876717d9dfbcd8355f8dfe",
            type: "get",
            cache:true,
            data:{},
            async:false,
            success:function(json){
                datacon=json.fields;
            },
            error:function(json){

            }
        });
        this.datacon=datacon;

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
        url:"https://cdn.contentful.com/spaces/hs67vd4fylc8/assets/"+val+"?access_token=d2bf0d154905ef9cbe3d5d9cb6f33244da039a5fff876717d9dfbcd8355f8dfe",
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
        url:"https://cdn.contentful.com/spaces/hs67vd4fylc8/assets/"+val+"?access_token=d2bf0d154905ef9cbe3d5d9cb6f33244da039a5fff876717d9dfbcd8355f8dfe",
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