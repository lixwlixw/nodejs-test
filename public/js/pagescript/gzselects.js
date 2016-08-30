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

new Vue({
    el:'#gzselects',
    data:{
        datacon:"",
        selectstitle:"产品",
        url:"",
        pageTotal:0,
        page:"",
        typeContent:""
    },
    ready:function(){
        if(type=="") {
            var datacon = this.datacon;
            var pagetotal = this.pageTotal;
            $.ajax({
                url: "/gzapi/hb6df7rxvqfj/entries?access_token=4a8d819fa51b568e23f5f8611b17de43f16d980887d3f4699b5a3af283a40a1a&content_type=product&limit=5&order=-fields.pubdate",
                type: "get",
                cache: true,
                data: {},
                async: false,
                success: function (json) {
                    datacon = json.items;
                    pagetotal = json.total;
                },
                error: function (json) {

                }
            });
            this.pageTotal = pagetotal;
            this.datacon = datacon;
        }else{
            if(type=="product"){
                this.type('pro')
            }
            if(type=="solution"){
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
            var content_type_src="&content_type=product";
            var content_type="";
            if(this.typeContent=='product'){
                content_type='product'
                content_type_src="&content_type="+content_type;
            }
            if(this.typeContent=='solution'){
                content_type='solution';
                content_type_src="&content_type="+content_type;
            }
            $.ajax({
                url:"https://cdn.contentful.com/spaces/hb6df7rxvqfj/entries?access_token=4a8d819fa51b568e23f5f8611b17de43f16d980887d3f4699b5a3af283a40a1a"+content_type_src+"&order=-fields.pubdate&limit=5&skip="+((e-1)*5),
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
        		type="product";
        		this.selectstitle="全部分类";
        		this.url="/gzapi/hb6df7rxvqfj/entries?access_token=4a8d819fa51b568e23f5f8611b17de43f16d980887d3f4699b5a3af283a40a1a&order=sys.createdAt&limit=5&order=-fields.pubdate"
        	}
        	if(e=='pro'){
                this.typeContent="product";
        		type="product";
        		this.selectstitle="产品";
        		this.url="/gzapi/hb6df7rxvqfj/entries?access_token=4a8d819fa51b568e23f5f8611b17de43f16d980887d3f4699b5a3af283a40a1a&content_type="+type+"&limit=5&order=-fields.pubdate"
        	}
        	if(e=='sol'){
                this.typeContent="solution";
        		type="solution";
        		this.selectstitle="解决方案";
        		this.url="/gzapi/hb6df7rxvqfj/entries?access_token=4a8d819fa51b568e23f5f8611b17de43f16d980887d3f4699b5a3af283a40a1a&content_type="+type+"&limit=5&order=-fields.pubdate";
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