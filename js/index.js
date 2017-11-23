$(function () {
    // 轮播图
    var _index = 0;
    var lis=$(".list_on li").length-1;
    var time = setInterval(function () {
        $(".banner div").eq(_index).addClass("img_on").siblings().removeClass("img_on");
        $(".list_on li").eq(_index).addClass("on").siblings().removeClass("on");
        if (_index ==lis) {
            _index = 0;
        } else {
            _index++;
        }
    }, 1500)
    $(".list_on li").click(function () {
        clearInterval(time);
        _index = $(this).index();
        $(".banner div").eq(_index).addClass("img_on").siblings().removeClass("img_on");
        $(this).addClass("on").siblings().removeClass("on");
        time = setInterval(function () {
            $(".banner div").eq(_index).addClass("img_on").siblings().removeClass("img_on");
            $(".list_on li").eq(_index).addClass("on").siblings().removeClass("on");
            if (_index==lis) {
                _index = 0;
            } else {
                _index++;
            }
        }, 1500)
    })
    // 切换内容
    $(".information_nav li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
    })
    // 头部
    $("#menu li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    })
    // 图片切换
    var _ind = 0;
    var $width = $(".case_list li").width()+60;
    var $width_all= $width*$(".case_list li").length;
    $(".case_list").css("width",$width_all);
    var time_img = setInterval(function () {
        var $width_left = parseInt($(".case_list").css("left"));
        var $case_list_img=parseInt($(".case_list_img").width())+$width;
        var $sum=$width_all+$width_left;
        var min = $width_left - $width;
        $(".case_list").css("left", min);
        if ($sum<$case_list_img) {
            $(".case_list").css("left", "0");
        }
    }, 1500)
    $(".sanjiao_left").click(function () {
        var $width_left = parseInt($(".case_list").css("left"));
        var $case_list_img=parseInt($(".case_list_img").width())+$width;
        var $sum=$width_all+$width_left;
        clearInterval(time_img);
        var min = $width_left - $width;
        $(".case_list").css("left", min);
        if ($sum<$case_list_img) {
            $(".case_list").css("left", "0");
        }
        time_img = setInterval(function () {
            var $width_left = parseInt($(".case_list").css("left"));
            var $case_list_img=parseInt($(".case_list_img").width())+$width;
            var $sum=$width_all+$width_left;
            var min = $width_left - $width;
            $(".case_list").css("left", min);
            if ($sum<$case_list_img) {
                $(".case_list").css("left", "0");
            }
        }, 1500)
    })
    $(".sanjiao_right").click(function () {
        var $width_left = parseInt($(".case_list").css("left"));
        var $case_list_img=parseInt($(".case_list_img").width())+$width;
        var $sum=$width_all+$width_left;
        clearInterval(time_img);
        var min = $width_left + $width;
        $(".case_list").css("left", min);
        if ($width_left>-350) {
            console.log("a");
            $(".case_list").css("left", -$width_all+$width*3);
        }
        time_img = setInterval(function () {
            var $width_left = parseInt($(".case_list").css("left"));
            var $case_list_img=parseInt($(".case_list_img").width())+$width;
            var $sum=$width_all+$width_left;
            var min = $width_left - $width;
            $(".case_list").css("left", min);
            if ($sum<$case_list_img) {
                $(".case_list").css("left", "0");
            }
        }, 1500)
    })
    // 经过
    $(".case_list li").hover(function(){
        clearInterval(time_img);
    },function(){
        var $width_left = parseInt($(".case_list").css("left"));
        time_img = setInterval(function () {
            var $width_left = parseInt($(".case_list").css("left"));
            var $case_list_img=parseInt($(".case_list_img").width())+$width;
            var $sum=$width_all+$width_left;
            var min = $width_left - $width;
            $(".case_list").css("left", min);
            if ($sum<$case_list_img) {
                $(".case_list").css("left", "0");
            }
        }, 1500)
    })
    // 返回顶部
    $("#up").click(function () {
        $('body,html').animate({scrollTop:0},800);
        return false;  
    });
    $("#page1").click(function () {
        $('body,html').animate({scrollTop:0},800); 
    });
    $("#page2").click(function () {
        $('body,html').animate({scrollTop:600},800); 
    });
    $("#page3").click(function () {
        $('body,html').animate({scrollTop:2250},800); 
    });
    $("#page4").click(function () {
        $('body,html').animate({scrollTop:3750},800); 
    });
    $("#page5").click(function () {
        $('body,html').animate({scrollTop:4550},800); 
    });
    $("#page6").click(function () {
        $('body,html').animate({scrollTop:5250},800); 
    });
    $("#page7").click(function () {
        $('body,html').animate({scrollTop:5750},800); 
    });
    //滚动到一定的高度之后执行动画
    function gdjz(div,fun,offset){
        var a,b,c,d;
        d=$(div).offset().top;//元素相对于窗口的距离
        a=eval(d + offset);
        b=$(window).scrollTop();//监控窗口已滚动的距离;
        c=$(window).height();//浏览器窗口的高度
        if(b+c>a){
            fun()
        }
    }
    $(window).scroll(function() {
        gdjz(".shoujidiannao",function () {
            $(".app .shoujidiannao ul").css("opacity","1")
        },200)
        gdjz(".yaermei",function () {
            $(".yaermei").css("opacity","1")
        },200)
        gdjz(".shouji",function () {
            $(".shouji").css("opacity","1");
            $(".shouji_app").css({"animation":"myfirst 5s","-moz-animation":"myfirst 5s","-webkit-animation":"myfirst 5s","-o-animation":"myfirst 5s"})
        },400)
        gdjz(".wangzhanneirong",function () {
            $(".web_left").css("left","0")
            $(".web_right").css("right","0")
        },200)
    }) 
    //右侧悬浮
    $(".qq").hover(function(){
        $("#qq").css({"opacity":"1","top":"300px"})
    },function(){
        $("#qq").css({"opacity":"0","top":"280px"})
    })  
    $(".wx").hover(function(){
        $("#wx").css({"opacity":"1","top":"330px"})
    },function(){
        $("#wx").css({"opacity":"0","top":"280px"})
    }) 
    $(".rengong").hover(function(){
        $("#rengong").css({"opacity":"1","top":"450px"})
    },function(){
        $("#rengong").css({"opacity":"0","top":"430px"})
    })   
})