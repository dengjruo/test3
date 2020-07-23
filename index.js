//var a = 111;
//console.log(a);

$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    console.log(scrollTop);
    if(scrollTop>=700){
        $("#top_fix_button_box").addClass("fix_mv");
    } else if(scrollTop<1000){
        $("#top_fix_button_box").removeClass("fix_mv");
    }


    //第二栏数据
    if(scrollTop>=600&&scrollTop<=2000){
        $(".contaner3_infolist").addClass("contaner3_infolist_mv");

    } else if(scrollTop<300) {
        $(".contaner3_infolist").removeClass("contaner3_infolist_mv");

    }

    //杂志
    if(scrollTop>=900&&scrollTop<=1800){
        $(".contaner4_left").addClass("magazine_mv");
        $(".magnifier").addClass("magnifier_mv");
    } else if(scrollTop<800){
        $(".contaner4_left").removeClass("magazine_mv");
        $(".magnifier").removeClass("magnifier_mv");
    }

    //柱状图
    //柱体

    //if(scrollTop<=1700){
    //    var numBox = document.getElementById("left_millionen");
    //    numBox.innerHTML = 350;
    //}

    if(scrollTop>=1600&&scrollTop<=2600){
        $(".zhuzi1").addClass("zuozhu_mv");
        $(".zhuzi2").addClass("youzhu_mv");
        $(".millionen1").addClass("millionen1_mv");
        $(".millionen2").addClass("millionen2_mv");
        $(".bianxing_head").addClass("zhuhead_mv");
        $(".bianxing_body").addClass("zhubody_mv");
        $(".left_zhu_line").addClass("left_zhu_line_mv");
        $(".left_zhu_desc").addClass("left_zhu_desc_mv");
        // 运行
        var numBox = document.getElementById("left_millionen");

        console.log($(".millionen1").css("top"))

        if(numBox.innerHTML==300){
            return
        }else{

            setTimeout(function () {
                numRunFun(350, 300);
            }, 1200);
        }
    } else if(scrollTop<1700){
        $(".zhuzi1").removeClass("zuozhu_mv");
        $(".zhuzi2").removeClass("youzhu_mv");
        $(".bianxing_head").removeClass("zhuhead_mv");
        $(".bianxing_body").removeClass("zhubody_mv");
        $(".left_zhu_line").removeClass("left_zhu_line_mv");
        $(".left_zhu_desc").removeClass("left_zhu_desc_mv");
        $(".millionen1").removeClass("millionen1_mv");
        $(".millionen2").removeClass("millionen2_mv");
        var numBox = document.getElementById("left_millionen");
        numBox.innerHTML = 350;
    }

    //电脑修复
    if(scrollTop>=2500&&scrollTop<=3200){
           $(".pc_lanping").addClass("pc_lanping_mv");
           $(".pc_jinggao ").addClass("pc_jinggao_mv");
           $(".pc_jingzhi").addClass("pc_jingzhi_mv");
           $(".fix_bg").addClass("fix_bg_mv");
           $(".fix_chilun").addClass("fix_chilun_mv");
           $(".fix_banshou").addClass("fix_banshou_mv");
           $(".fix_over_bg").addClass("fix_over_bg_mv");
           //$(".fix_over_white").addClass("fix_over_white_mv");
           $(".fix_over_dun").addClass("fix_over_dun_mv");
           $(".fix_over_gou").addClass("fix_over_gou_mv");
       }else if(scrollTop<2000){
            $(".pc_lanping").removeClass("pc_lanping_mv");
            $(".pc_jinggao ").removeClass("pc_jinggao_mv");
            $(".pc_jingzhi").removeClass("pc_jingzhi_mv");
            $(".fix_bg").removeClass("fix_bg_mv");
            $(".fix_chilun").removeClass("fix_chilun_mv");
            $(".fix_banshou").removeClass("fix_banshou_mv");
            $(".fix_over_bg").removeClass("fix_over_bg_mv");
            //$(".fix_over_white").removeClass("fix_over_white_mv");
            $(".fix_over_dun").removeClass("fix_over_dun_mv");
            $(".fix_over_gou").removeClass("fix_over_gou_mv");
    }



    if(scrollTop>=2800&&scrollTop<=3700){
        $(".pc_play_outc").addClass("pc_play_outc_mv");
        //$(".pc_play_window").addClass("pc_play_window_mv");
        $(".pc_play_rocket").addClass("pc_play_rocket_mv");
        $(".line_body").addClass("line_body_mv");
        $(".line_head").addClass("line_head_mv");
    } else if(scrollTop<2900){
        $(".pc_play_outc").removeClass("pc_play_outc_mv");
        //$(".pc_play_window").removeClass("pc_play_window_mv");
        $(".pc_play_rocket").removeClass("pc_play_rocket_mv");
        $(".line_body").removeClass("line_body_mv");
        $(".line_head").removeClass("line_head_mv");
    }


    if(scrollTop>=4460&&scrollTop<=4800){
        $(".pinglun_right_button").addClass("pinglun_right_button_mv");
        $(".pinglun_left_button").addClass("pinglun_left_button_mv");


    } else if(scrollTop<2900){
        $(".pinglun_right_button").removeClass("pinglun_right_button_mv");
        $(".pinglun_left_button").removeClass("pinglun_left_button_mv");
    }



})



//$(".container7_right_play").click(function(){
//    console.log(111111);
//})


//红色按钮鼠标移入事件
$(".rightbutton_body").mouseenter(function(){
    $(".rightbutton_body2").css("display","block");
    $(".rightbutton_body2").addClass("button_mv");
    $(".rightbutton_body").css("display","none");
});
$(".rightbutton_body2").mouseleave(function(){
    $(".rightbutton_body2").css("display","none");
    $(".rightbutton_body").css("display","block");

});



//红色按钮鼠标移入事件2
$(".right_list_button").mouseenter(function(){
    $(".right_list_button2").css("display","block");
    $(".right_list_button").css("display","none");
    $(".right_list_button2").addClass("button_mv");
});
$(".right_list_button2").mouseleave(function(){
    $(".right_list_button2").css("display","none");
    $(".right_list_button").css("display","block");

});




function numRunFun(num, maxNum){
    var numBox = document.getElementById("left_millionen");
    if(numBox.innerHTML==300){
        //console.log(11111)
        return
    }
    var num = num;
    var maxNum = maxNum;
    var timer = setInterval(function(){
        //num++; // 调节速度
        num--; // 调节速度
        if(num >= maxNum){
            numBox.innerHTML = num;
            //clearInterval(timer);
        } else {
            numBox.innerHTML = ~~(maxNum);
            clearInterval(timer);
        }
    },15); // 也可以调节速度
}



//自动轮播效果
function auto(){
    var left_num=$(".pinglun_body").css('left')
    console.log(left_num)
    $("img").attr("width","180");
    if(left_num=="0px"){
        $(".big_head_body").css("left","-152px");
        $(".big_head_body").addClass("trans_style");
        $(".pinglun_body").addClass("trans_style");
        $(".pinglun_body").css("left","-510px");
        //$(".big_head").css("background",'url("images/customer_de_88.png") no-repeat');
        //$(".big_head").css("background-size",'contain');
        $(".head1").css("background",'url("images/PCMAG-editchoice.png") no-repeat');
        $(".head2").css("background",'url("images/harold_barr_476.png") no-repeat');
        $(".head3").css("background",'url("images/hishaam_salasa_240.png") no-repeat');
        $(".head4").css("background",'url("images/carlos_alexandre_verissimo_670.png") no-repeat');
        $(".head1").css("background-size",'contain');
        $(".head2").css("background-size",'contain');
        $(".head3").css("background-size",'contain');
        $(".head4").css("background-size",'contain');

    }else if(left_num=="-510px"){
        $(".big_head_body").css("left","-304px");
        $(".pinglun_body").css("left","-1020px");
        //$(".big_head").css("background",'url("images/harold_barr_476.png") no-repeat');
        //$(".big_head").css("background-size",'contain');
        $(".head1").css("background",'url("images/PCMAG-editchoice.png") no-repeat');
        $(".head2").css("background",'url("images/customer_de_88.png") no-repeat');
        $(".head3").css("background",'url("images/hishaam_salasa_240.png") no-repeat');
        $(".head4").css("background",'url("images/carlos_alexandre_verissimo_670.png") no-repeat');
        $(".head1").css("background-size",'contain');
        $(".head2").css("background-size",'contain');
        $(".head3").css("background-size",'contain');
        $(".head4").css("background-size",'contain');
    }else if(left_num=="-1020px"){
        $(".big_head_body").css("left","-456px");
        $(".pinglun_body").css("left","-1530px");
        //$(".big_head").css("background",'url("images/hishaam_salasa_240.png") no-repeat');
        //$(".big_head").css("background-size",'contain');
        $(".head1").css("background",'url("images/PCMAG-editchoice.png") no-repeat');
        $(".head2").css("background",'url("images/customer_de_88.png") no-repeat');
        $(".head3").css("background",'url("images/harold_barr_476.png") no-repeat');
        $(".head4").css("background",'url("images/carlos_alexandre_verissimo_670.png") no-repeat');
        $(".head1").css("background-size",'contain');
        $(".head2").css("background-size",'contain');
        $(".head3").css("background-size",'contain');
        $(".head4").css("background-size",'contain');

    }else if(left_num=="-1530px"){
        $(".big_head_body").css("left","-608px");
        $(".pinglun_body").css("left","-2040px");
        //$(".big_head").css("background",'url("images/carlos_alexandre_verissimo_670.png") no-repeat');
        //$(".big_head").css("background-size",'contain');
        $(".head1").css("background",'url("images/PCMAG-editchoice.png") no-repeat');
        $(".head2").css("background",'url("images/customer_de_88.png") no-repeat');
        $(".head3").css("background",'url("images/harold_barr_476.png") no-repeat');
        $(".head4").css("background",'url("images/hishaam_salasa_240.png") no-repeat');
        $(".head1").css("background-size",'contain');
        $(".head2").css("background-size",'contain');
        $(".head3").css("background-size",'contain');
        $(".head4").css("background-size",'contain');
    } else if(left_num=="-2040px"){
        $(".big_head_body").css("left","-760px");
        $(".pinglun_body").css("left","-2550px");
        //$(".big_head").css("background",'url("images/PCMAG-editchoice.png") no-repeat');
        //$(".big_head").css("background-size",'contain');
        $(".head1").css("background",'url("images/carlos_alexandre_verissimo_670.png") no-repeat');
        $(".head2").css("background",'url("images/customer_de_88.png") no-repeat');
        $(".head3").css("background",'url("images/harold_barr_476.png") no-repeat');
        $(".head4").css("background",'url("images/hishaam_salasa_240.png") no-repeat');
        $(".head1").css("background-size",'contain');
        $(".head2").css("background-size",'contain');
        $(".head3").css("background-size",'contain');
        $(".head4").css("background-size",'contain');
    }else if(left_num=="-2550px"){
        $(".big_head_body").css("left","0px");
        $(".pinglun_body").css("left","0px");
        $(".pinglun_body").removeClass("trans_style");
        $(".big_head_body").removeClass("trans_style");
        //$(".big_head").css("background",'url("images/PCMAG-editchoice.png") no-repeat');
        //$(".head1").css("background",'url("images/customer_de_88.png") no-repeat');
        //$(".head2").css("background",'url("images/harold_barr_476.png") no-repeat');
        //$(".head3").css("background",'url("images/hishaam_salasa_240.png") no-repeat');
        //$(".head4").css("background",'url("images/carlos_alexandre_verissimo_670.png") no-repeat');
        //$(".head1").css("background-size",'contain');
        //$(".head2").css("background-size",'contain');
        //$(".head3").css("background-size",'contain');
        //$(".head4").css("background-size",'contain');
        //$(".big_head").css("background-size",'contain');
    }
}

$(".pinglun_right_button").click(function(){
    auto();
})

$(".pinglun_left_button").click(function(){
    auto();
})
//setInterval(auto, 5000);




function buy_num(num1,num2){
    document.getElementById("num1").innerHTML=num1;
    document.getElementById("num2").innerHTML=num2;
    var num1=num1
    var num2=num2
    var timer = setInterval(function(){
        num2--
        if(num2<0){
            num1-=1
            num2=9
        }

        if(num1<0){
            num1=9
        }
        document.getElementById("num1").innerHTML=num1;
        document.getElementById("num2").innerHTML=num2;
    },1000);

}

buy_num(9,9);

