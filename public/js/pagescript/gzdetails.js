
var gz=new Vue({
    el:'.m-container',
    data:{
    	datacon:{}//集合
    },
    computed: {
        time: function () {
        	var time="";
        	var val=this.datacon.pubdate;
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
        	return imgchange(this.datacon.casepic1[0].sys.id );
        },
        imgurlpic1two:function(){
        	return imgchange(this.datacon.casepic1[1].sys.id );
        },
        imgurlpic2:function(){
        	return imgchange(this.datacon.casepic2[0].sys.id );
        },
        imgurlpic2two:function(){
        	return imgchange(this.datacon.casepic2[1].sys.id );
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
        var soldesc="";
        var feature="";
        var range="";
        var case1="";
        var case2="";
        var comdesc="";
    	$.ajax({
            url:"/gzapi/hb6df7rxvqfj/entries/"+gid+"?access_token=4a8d819fa51b568e23f5f8611b17de43f16d980887d3f4699b5a3af283a40a1a",
            type: "get",
            cache:true,
            data:{},
            async:false,
            success:function(json){
            	datacon=json.fields;
                if(datacon.soldesc!=undefined){
                    soldesc=marked(datacon.soldesc);
                }
                if(datacon.feature!=undefined){
                    feature= marked(datacon.feature);
                }
                if(datacon.range!=undefined){
                    range=marked(datacon.range);
                }
                if(datacon.case1!=undefined){
                    case1=marked(datacon.case1);
                }
                if(datacon.case2!=undefined){
                    case2=marked(datacon.case2);
                }
                if(datacon.comdesc!=undefined){
                    comdesc=marked(datacon.comdesc);
                }
            },
            error:function(json){
            	
            }
        });
    	this.datacon=datacon;
        this.soldesc=soldesc;
        this.feature=feature;
        this.range=range;
        this.case1=case1;
        this.case2=case2;
        this.comdesc=comdesc
    	
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
		url:"/gzapi/hb6df7rxvqfj/assets/"+val+"?access_token=4a8d819fa51b568e23f5f8611b17de43f16d980887d3f4699b5a3af283a40a1a",
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
		url:"/gzapi/hb6df7rxvqfj/assets/"+val+"?access_token=4a8d819fa51b568e23f5f8611b17de43f16d980887d3f4699b5a3af283a40a1a",
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




