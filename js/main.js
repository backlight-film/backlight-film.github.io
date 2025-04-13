//画像スライダー(1)
$(function(){
    var slidSpd1 = 1200;     //フェードの速度
    var count1 = -1;          //count番目の画像が表示される
 
    //画像の枚数を調べて<li>にidを付加
    var qua1 = $("#photo li").length;
    for(i=0; i<qua1; i++) {
        $("#photo li:eq("+i+")").attr("id", "list"+ i);
    }
 
    //画像をフェードさせる関数
    function photoFade1() {
        $("#photo li#list"+count1).appendTo('#photo');
        $('#photo li:last').css({ opacity:'0'})
        $('#photo li:last').stop(true, false).animate({ opacity:'1' }, slidSpd1 );
    }           
 
    //カウントを1増やす関数
    function countUp1(){
        if(count1>=qua1-1) {
            count1 = 0;
        } else {
            count1 ++;
        }
    }
 
    //カウントを1減らす関数
    function countDowm1(){
        if(count1 = -1) {
            count1 = qua1-2;
        } else if(count1 = 0) {
            count1 = qua1-1;
        } else {
            count1 --;
        }
    }
 
    //#next（次へ）ボタンがクリックされた時に実行される関数
    $("#next").click(function(){
        countUp1();
        photoFade1();
    });
 
    //#back（戻る）ボタンがクリックされた時に実行される関数
    $("#back").click(function(){
        countDowm1();
        photoFade1();
    });
 
});

//画像スライダー(2)
$(function(){
    var slidSpd = 1200;     //フェードの速度
    var slidTimer = 4000;   //スライドの間隔
    var count2 = -1;          //count番目の画像が表示される
 
    //画像の枚数を調べて<li>にidを付加
    var qua2 = $("#photo2 li").length;
    for(i=0; i<qua2; i++) {
        $("#photo2 li:eq("+i+")").attr("id", "2list"+ i);
    }
 
    //画像をフェードさせる関数
    function photoFade() {
        $("#photo2 li#2list"+count2).appendTo('#photo2');
        $('#photo2 li:last').css({ opacity:'0'})
        $('#photo2 li:last').stop(true, false).animate({ opacity:'1' }, slidSpd );
    }           
 
    //カウントを1増やす関数
    function countUp(){
        if(count2>=qua2-1) {
            count2 = 0;
        } else {
            count2 ++;
        }
    }
 
    //カウントを1減らす関数
    function countDowm(){
        if(count2<=0) {
            count2 = qua2 -1;
        } else {
            count2 --;
        }
    }
 
    //#next（次へ）ボタンがクリックされた時に実行される関数
    $("#next2").click(function(){
        countUp();
        photoFade();
    });
 
    //#back（戻る）ボタンがクリックされた時に実行される関数
    $("#back2").click(function(){
        countDowm();
        photoFade();
    });
 
});

$(function() {
    $(".galleryimg").colorbox({
    maxWidth:"90%",
    maxHeight:"90%",
    opacity: 0.7
  });
});



var linkTouchStart = function(){
thisAnchor = $(this);
touchPos = thisAnchor.offset().top;
moveCheck = function(){
nowPos = thisAnchor.offset().top;
if(touchPos == nowPos){
thisAnchor.addClass("hover");
}
}
setTimeout(moveCheck,100);
}
var linkTouchEnd = function(){
thisAnchor = $(this);
hoverRemove = function(){
thisAnchor.removeClass("hover");
}
setTimeout(hoverRemove,500);
}
$(document).on('touchstart mousedown','a',linkTouchStart);
$(document).on('touchend mouseup','a',linkTouchEnd);
