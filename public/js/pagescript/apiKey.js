/**
 * Created by Max cheng on 2016/7/7.
 */
//
$(function(){


    var clipboard = new Clipboard('#copyKey');

    clipboard.on('success', function(e) {
        // console.info('Action:', e.action);
        // console.info('Text:', e.text);
        // console.info('Trigger:', e.trigger);
        alert('复制成功！');
        e.clearSelection();

    });

    clipboard.on('error', function(e) {
        // console.error('Action:', e.action);
        // console.error('Trigger:', e.trigger);
        alert('复制失败！');
    });

    // console.log('ssssyyyyyyyyyyyyyyyyyyyyyyyyy')
    // ZeroClipboard.config( { swfPath: '/js/zero/ZeroClipboard.swf' } );
    // // ZeroClipboard.config( { swfPath: '/plugin/ZeroClipboard.swf' } );
    // //D:\localrepo\datahub_web_new\public\plugin\ZeroClipboard.swf
    // var clip = new ZeroClipboard( document.getElementById("copyKey") );
    //
    //
    // clip.on( "ready", function() {
    //     clip.on( "aftercopy", function( event ) {
    //         //alert("Copied text to clipboard: " + event.data["text/plain"] );
    //         alert('复制成功！');
    //     } );
    // } );
});