$(document).ready(function() {
    $(".be-loader").fadeOut("slow");
    $('.js-activated').dropdownHover().dropdown();

//        console.log($("#innames").text().length);
//        var textLen=$("#innames").text().length
//        if(textLen>=11){
//            $("#innames").css({'display':'block','white-space':'nowrap','overflow':'hidden', 'text-overflow':'ellipsis'})
//        }
//        console.log($.cookie("token"))

    // style of member-center enter and leave
    $('body').on('mouseover mouseout','#sign-menu-box',function(event){

        if(event.type=='mouseover'){
            $('#sign-menu-box').addClass('open');
            $('#sign-gj .sign-member').css('color','#4e63aa');
            $('#sign-gj .sign-member .bg-icon').css('background','url("/img/indexNew/images_19.png") no-repeat right');
        }

           if(event.type=='mouseout'){
               // $('#sign-menu-box').removeClass('open')
               $('#sign-gj .sign-member .bg-icon').css('background','url("/img/indexNew/images_17.png") no-repeat right');
               $('#sign-gj .sign-member').css('color','#44bbf5');
           }

    });


    $('body').on('mouseover mouseout','#help-menu-box',function(event){

        if(event.type=='mouseover'){
            $('#help-menu-box').addClass('open')

        }
        if(event.type=='mouseout'){
//                $('#help-menu-box').removeClass('open')

        }
    })

    //style of sreach input
    $('#search-text').focus(function(){
        $('.nav-search .search_label').fadeOut();
    })
    $('#search-text').blur(function(){
        $('.nav-search .search_label').fadeIn();
    })

    //
    $('body').on('mouseover mouseout','#help-menu-box',function(event){

        if(event.type=='mouseover'){
            $('#help-menu-box').addClass('open')
        }
        // if(event.type=='mouseout'){
//                $('#help-menu-box').removeClass('open')
//         }
    })

    if($.cookie("token")!=null&&$.cookie("tname")!=null&&$.cookie("tname")!="null"&&$.cookie("tname")!="null"){
        $(".sign-nologin").hide();
        $(".sign-login").show();

        var tname=$.cookie("tname")
        var atname=tname.split('@');
        $("#innames").text(atname[0]);

        if(atname[0].length>=11){
            $("#innames").css({'display':'block','white-space':'nowrap','overflow':'hidden', 'text-overflow':'ellipsis'})
        }
    }else{
        $(".sign-nologin").show();
        $(".sign-login").hide();
    }

});
//大图切换
(function() {
    Slider.init({
        target: $('.slider'),
        time: 6000
    });
})();
// dropdown menu
$(document).on('keydown',"#search-text",function (e) {
    if (e.keyCode == 13) {
        var vals=$(this).val();
        vals=encodeURIComponent(vals);
        if(vals!=""){
            vals=vals.replace("\/","_*_");
        }
        if(pcorphone == 'pc'){
            location.href="/search/"+vals;
        }
        if(pcorphone == 'phone'){
            location.href="searchPhone.html?rtext="+vals;
        }
    }
});
// dropdown menu
$(document).on('click',"#search-btn",function (e) {
    var vals=$("#search-text").val();
    vals=encodeURIComponent(vals);
    if(vals!=""){
        vals=vals.replace("\/","_*_");
    }
    if(vals==""){
        location.href="search";
    }else{
        location.href="/search/"+vals;
    }
});


$(document).on('click','#logout',function(){
    $.cookie("tname",null,{path:"/"});
    $.cookie("token",null,{path:"/"});

    $.cookie("tuserid",null,{path:"/"}); // 必填: 该用户在您系统上的唯一ID
    $.cookie("tnickname",null,{path:"/"}); // 选填: 用户名
    $.cookie("tregtime",null,{path:"/"}); // 选填: 用户的注册时间，用Unix时间戳表示

    $.cookie("badgeHeader",null,{path:"/"}); //新消息提示

    location.href="/";
});
$(function(){
    //  nav menu sytle
    navSwitch();
})
var navIndex=0;
function navSwitch(){

    $('.nav>ul>li').on('click',function(e){
        navIndex=$(this).index();
        $('.nav>ul>li').eq(navIndex).children().addClass('nav-active')
        $('.nav>ul>li').eq(navIndex).siblings().children().removeClass('nav-active')
    })

    $('.nav>ul>li').on('mouseenter mouseleave',function(e){
        var index=$(this).index();
        if(e.type=='mouseenter'){
            $('.nav>ul>li').eq(index).children().addClass('nav-active')
            $('.nav>ul>li').eq(index).siblings().children().removeClass('nav-active')
        }
        if(e.type=='mouseleave'){
            $('.nav>ul>li').eq(navIndex).children().addClass('nav-active')
            $('.nav>ul>li').eq(navIndex).siblings().children().removeClass('nav-active')
        }
    })
}