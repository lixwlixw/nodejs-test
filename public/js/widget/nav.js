/**
 * Created by Max cheng on 2016/3/2.
 */

//var navSelect={
//    getNav:function(){
//        var obj=new Array();
//        var labArr =[];
//        var imgPathArr =[];
//
//    },
//    changeBg:function(){
//        //new code
//    }
//};
//Vue.filter('iconPath',function(val){
//    val='img/selects_new/'+val;
//    return val;
//});
//var obj=navSelect.getNav();
var selVm=new Vue({
    el:".m-navselect",
    data:{
        obj:{},
        liArr:[],
        liArrHover:[],
        states:true,

        states_0:true,
        states_1:true,
        states_2:true,
        states_3:true,
        hoverStates:[],
        next_index:[]
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
                    //var labels_length=json.data.length;
                    selVm.obj=json.data;
                    //console.log(json.data)
                    for(var i=0;i<json.data.length;i++){
                        if(i==0){
                            selVm.liArr.push('/img/navselects/images_03.png');
                            selVm.liArrHover.push('/img/navselects/images_05.png');
                            continue;
                        }
                        selVm.liArr.push(json.data[i].icon_web);
                        //console.log(json.data[i].icon_web)
                        selVm.liArrHover.push(json.data[i].icon_web_hover);
                    }
                    //console.log(selVm.liArr)
                    //console.log(selVm.liArrHover)
                }
            });
            //console.log(selVm.liArrHover)
            //console.log($('.m-navselect ul>li').eq(0).find('img'));


            //$('.m-navselect ul>li').eq(this.next_index[this.next_index.length-2]).find('img').attr({'src':this.liArr[this.next_index[this.next_index.length-2]],'mark':'0'});
        },
        selFun:function(e){
            switch(selectsType){
                case 'terminal':
                    this.next_index.push(1);
                    break;
                case 'credit':
                    this.next_index.push(3);
                    break;
                case 'space':
                    this.next_index.push(4);
                    break;
                case 'internet':
                    this.next_index.push(8);
                    break;
            }
            //console.log('this.next_index2:',this.next_index)
            var index=e.target.className.split('_')[1];
            this.next_index.push(index);
            //console.log('index',index)
            //console.log('this.next_index3:',this.next_index)
            var markVal=$('.m-navselect ul>li').eq(index).find('img').attr('mark');
            if(markVal==0){
                //console.log('this.liArrHover[index]',this.liArrHover[index])
                $('.m-navselect ul>li').eq(index).find('img').attr({'src':this.liArrHover[index],'mark':'1'});
                if(this.next_index[this.next_index.length-2]==undefined){
                    $('.m-navselect ul>li').eq(0).find('img').attr({'src':this.liArr[0],'mark':'0'});
                }else{
                    $('.m-navselect ul>li').eq(this.next_index[this.next_index.length-2]).find('img').attr({'src':this.liArr[this.next_index[this.next_index.length-2]],'mark':'0'});
                }
                //console.log(this.next_index[this.next_index.length-2]) ;
            }
        },
        sel:function(){
            if(selectsType==''){
                $('.m-navselect ul>li').eq(0).find('img').attr({'src':this.liArrHover[0],'mark':'0'})

            }else if(selectsType=='terminal'){
                $('.m-navselect ul>li').eq(0).find('img').attr({'src':this.liArr[0],'mark':'0'})
                $('.m-navselect ul>li').eq(1).find('img').attr({'src':this.liArrHover[1],'mark':'1'});

            } else if(selectsType=='baseStation'){
                $('.m-navselect ul>li').eq(0).find('img').attr({'src':this.liArr[0],'mark':'0'})

            } else if(selectsType=='credit'){
                $('.m-navselect ul>li').eq(0).find('img').attr({'src':this.liArr[0],'mark':'0'})
                $('.m-navselect ul>li').eq(3).find('img').attr({'src':this.liArrHover[1],'mark':'1'});

            } else if(selectsType=='space'){
                $('.m-navselect ul>li').eq(0).find('img').attr({'src':this.liArr[0],'mark':'0'})
                $('.m-navselect ul>li').eq(4).find('img').attr({'src':this.liArrHover[4],'mark':'1'});
            }
            else if(selectsType=='finance'){
                $('.m-navselect ul>li').eq(0).find('img').attr({'src':this.liArr[0],'mark':'0'})


            } else if(selectsType=='traffic'){
                $('.m-navselect ul>li').eq(0).find('img').attr({'src':this.liArr[0],'mark':'0'})

            }else if(selectsType=='weather'){
                $('.m-navselect ul>li').eq(0).find('img').attr({'src':this.liArr[0],'mark':'0'})

            }else if(selectsType=='internet'){
                $('.m-navselect ul>li').eq(0).find('img').attr({'src':this.liArr[0],'mark':'0'})
                $('.m-navselect ul>li').eq(8).find('img').attr({'src':this.liArrHover[8],'mark':'1'});
                this.next_index.push(8);

            } else if(selectsType=='life'){
                $('.m-navselect ul>li').eq(0).find('img').attr({'src':this.liArr[0],'mark':'0'})

            }else if(selectsType=='healthy'){
                $('.m-navselect ul>li').eq(0).find('img').attr({'src':this.liArr[0],'mark':'0'})

            } else if(selectsType=='match'){
                $('.m-navselect ul>li').eq(0).find('img').attr({'src':this.liArr[0],'mark':'0'})

            }
        }
        /*,
        selMove:function(e){
            //var index=e.target.className.split('_')[1];
            //console.log(index);var index=e.target.className.split('_')[1];
            //console.log(index);
        //    $('.m-navselect ul>li').eq(index).find('img').attr({'src':this.liArrHover[index],'mark':'1'});
        },
        selOut:function(e){
            //var index=e.target.className.split('_')[1];
            //console.log(index);
        //    //$('.m-navselect ul>li').eq(index).find('img').attr({'src':this.liArr[index],'mark':'0'});
        },
        li_enter:function(e){
            var $target=e.target;

            console.log($target)
            this.hoverStates[1]='1';
            this.hoverStates[0]='1';
        },
        li_leave:function(e){

            var index=e.target.className.split('_')[1];
            console.log(index)
            this.hoverStates.push(index,0);
        },
        li_click:function(e){
            var index=e.target.className.split('_')[1];
            console.log(index)
            this.hoverStates.push(index,0);
        }*/
    }
});
//selVm.$set('a',333);
//console.log(selVm.a)
selVm.start();
setTimeout("selVm.sel()",1000)

