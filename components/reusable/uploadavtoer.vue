<template>
    {{msg}}

    <div class="container-cropbox">
        <div class="imageBox">
            <div class="thumbBox"></div>
            <!--<div class="spinner" style="display: none">Loading...</div>-->
        </div>
        <!--<div class="action">-->
            <!--&lt;!&ndash; <input type="file" id="file" style=" width: 200px">&ndash;&gt;-->
            <!--<div class="new-contentarea tc"> <a href="javascript:void(0)" class="upload-img">-->
                <!--<label for="upload-file">上传图像</label>-->
            <!--</a>-->
                <!--<input type="file" class="" name="upload-file" id="upload-file" />-->
            <!--</div>-->
            <!--&lt;!&ndash;<input type="button" id="btnCrop"  class="Btnsty_peyton" value="裁切">&ndash;&gt;-->
            <!--&lt;!&ndash;<input type="button" id="btnZoomIn" class="Btnsty_peyton" value="+"  >&ndash;&gt;-->
            <!--&lt;!&ndash;<input type="button" id="btnZoomOut" class="Btnsty_peyton" value="-" >&ndash;&gt;-->
        <!--</div>-->
        <div class="cropped"></div>
        <div class="cropped_bottom" style="top:160px">
            <input type="button" id="btnZoomIn" style="background-color: #f06f77;
	border: 0 solid #fff;
	border-radius: 3px;
	box-shadow: 0 0 5px #b0b0b0;
	color: #ffffff;
	cursor: pointer;
	display: inline-block;
	float: right;
	font-size: 14px;
	height: 30px;
	line-height: 30px;
	margin: 0 0px 5px;
	text-decoration: none;
	width: 77px;" value="+"  >
            <input type="button" id="btnZoomOut" style="background-color: #f06f77;
	border: 0 solid #fff;
	border-radius: 3px;
	box-shadow: 0 0 5px #b0b0b0;
	color: #ffffff;
	cursor: pointer;
	display: inline-block;
	float: right;
	font-size: 14px;
	height: 30px;
	line-height: 30px;
	margin: 0 0px 5px;
	margin-right: 6px;
	text-decoration: none;
	width: 77px;" value="-" >
            <input type="button" id="btnCrop"  class="Btnsty_peyton"style="background-color: #f06f77;
	border: 0 solid #fff;
	border-radius: 3px;
	box-shadow: 0 0 5px #b0b0b0;
	color: #ffffff;
	cursor: pointer;
	display: inline-block;
	float: right;
	font-size: 14px;
	height: 30px;
	line-height: 30px;
	margin: 0 0px 5px;
	text-decoration: none;
	width: 160px;" value="保存">
            <div class="new-contentarea tc scimage">
                <a style="cursor: pointer;display: block;width: 100%;color: #fff">上传图片</a>
                <!--<a href="javascript:void(0)" class="upload-img">-->
                    <!--<label for="upload-file">上传图像</label>-->
                <!--</a>-->
                <input type="file" name="upload-file" id="upload-file" :disabled=disables />
            </div>
        </div>
    </div>



</template>
<style>

</style>
<script>
    export default{
        data(){
            return{
                msg:''
            }
        },
        props: {
            dis: Boolean
        },
        computed: {
            // 仅读取，值只须为函数
            disables: function () {
                var disables;
                if(this.dis){
                    disables=false;
                }else{
                    disables=true;
                }
                return disables;
            }
        },
        ready(){

            //请求图片
            var headPic;
            var picsrc;
            $.ajax({
                url: '/api/users/' + $.cookie("tname"),
                type: "get",
                cache:false,
                async:false,
                dataType: "json",
                success: function (data) {
                    headPic=data.data.headPic;
                    if(headPic!=""){
                        $.ajax({
                            url: '/api/certification/download?picId='+headPic,
                            type: "get",
                            cache:false,
                            async:false,
                            headers:{Authorization:"Token "+$.cookie("token")},
                            dataType: "json",
                            success: function (data) {
                                picsrc=data.pic;
                            },
                            error: function () {
                                console.log("error");
                            }
                        });


                    }

                },
                error: function () {
                    console.log("error");
                }
            });


            var options =
            {
                thumbBox: '.thumbBox',
                spinner: '.spinner',
                imgSrc: 'data:image;base64,'+picsrc
            }


            var cropper = $('.imageBox').cropbox(options);
            $('#upload-file').on('change', function(){



                var reader = new FileReader();
                reader.onload = function(e) {
                    options.imgSrc = e.target.result;
                    cropper = $('.imageBox').cropbox(options);
                }




                reader.readAsDataURL(this.files[0]);

                //this.files = [];
            })
            $('#btnCrop').on('click', function(){
                var img = cropper.getDataURL();

                sumitImageFile(img);

                $('.cropped').html('');
//                $('.cropped').append('<img src="'+img+'" align="absmiddle" style="width:64px;margin-top:4px;border-radius:64px;box-shadow:0px 0px 12px #7E7E7E;" ><p>64px*64px</p>');
                $('.cropped').append('<img src="'+img+'" align="absmiddle" style="width:128px;margin-top:15px;border-radius:128px;box-shadow:0px 0px 12px #7E7E7E;"><p>128px*128px</p>');
//                $('.cropped').append('<img src="'+img+'" align="absmiddle" style="width:180px;margin-top:4px;border-radius:180px;box-shadow:0px 0px 12px #7E7E7E;"><p>180px*180px</p>');
                $
            })
            $('#btnZoomIn').on('click', function(){
                cropper.zoomIn();
            })
            $('#btnZoomOut').on('click', function(){
                cropper.zoomOut();
            })

            /**
             * @param base64Codes
             *            图片的base64编码
             */
            function sumitImageFile(base64Codes){
                var form=document.forms[0];

                var formData = new FormData(form);   //这里连带form里的其他参数也一起提交了,如果不需要提交其他参数可以直接FormData无参数的构造函数
                //convertBase64UrlToBlob函数是将base64编码转换为Blob
                formData.append("pic",convertBase64UrlToBlob(base64Codes));  //append函数的第一个参数是后台获取数据的参数名,和html标签的input的name属性功能相同

                //ajax 提交form
                $.ajax({
                    url : '/api/certification/upload',
                    type : "POST",
                    data : formData,
                    dataType:"json",
                    processData : false,         // 告诉jQuery不要去处理发送的数据
                    contentType : false,        // 告诉jQuery不要去设置Content-Type请求头
                    headers:{Authorization:"Token "+$.cookie("token")},
                    success:function(data){

                        var picid=data.picId;
                        var mydata = {};
                        mydata["headPic"] = picid;
                        mydata["username"] = $.cookie("tname");

                        $.ajax({
                            url: '/api/users/' + $.cookie("tname"),
                            type: "PUT",
                            data:  JSON.stringify(mydata),
                            cache:false,
                            async:false,
                            dataType: "json",
                            contentType:"application/json",
                            headers: {Authorization: "Token " + $.cookie("token")},
                            success: function (data) {
                                console.log("success");
                            },
                            error: function () {
                                console.log("error");
                            }
                        });


                    },
                    xhr:function(){            //在jquery函数中直接使用ajax的XMLHttpRequest对象
                        var xhr = new XMLHttpRequest();

                        xhr.upload.addEventListener("progress", function(evt){
                            if (evt.lengthComputable) {
                                var percentComplete = Math.round(evt.loaded * 100 / evt.total);
                                console.log("正在提交."+percentComplete.toString() + '%');        //在控制台打印上传进度
                            }
                        }, false);

                        return xhr;
                    }

                });
            }

            /**
             * 将以base64的图片url数据转换为Blob
             * @param urlData
             *            用url方式表示的base64图片数据
             */
            function convertBase64UrlToBlob(urlData){

                var bytes=window.atob(urlData.split(',')[1]);        //去掉url的头，并转换为byte

                //处理异常,将ascii码小于0的转换为大于0
                var ab = new ArrayBuffer(bytes.length);
                var ia = new Uint8Array(ab);
                for (var i = 0; i < bytes.length; i++) {
                    ia[i] = bytes.charCodeAt(i);
                }

                return new Blob( [ab] , {type : 'image/png'});
            }





        },
        components:{

        },
        methods:{

        }
    }
</script>
