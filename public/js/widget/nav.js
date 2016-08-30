/**
 * Created by Max cheng on 2016/3/2.
 */
var navSelect={
    getNav:function(){
        var obj=new Array();
        var labArr =[];
        var imgPathArr =[];
        $.ajax({
            url: "/api/select_labels",
            type: "get",
            cache:false,
            async:false,
            dataType:'json',
            success:function(json){
                var labels_length=json.data.length;
                obj=json.data;
            }
        });
        return obj;
    },
    changeBg:function(){
        //new code
    }
};

var obj=navSelect.getNav();
new Vue({
    el:".m-navselect",
    data:{
        obj:obj
    }
});
