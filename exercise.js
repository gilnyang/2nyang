$("documnet").ready(function(){
    var $bg_nav_list = $(".bg_nav ul li"),
        $bg_nav = $(".bg_nav"),
        $bottom_text = $(".bg_nav ul li .bottom_text"),
        $bottom_line = $(".bg_nav ul li .bottom_line"),
        $bg_width = $bg_nav_list.width(),
        $top_img =$(".bg_nav ul li .top_img"),
        $bg_slider = $(".bg_slider ul li"),
        $bg_length = $bg_slider.length -1,
        $arrow = $(".arrow a"),
        $bg_timer = setInterval(bg_timer, 4000),
        idx = 0,
        b = 0,
        c = 1,
        d = 2,
        con = false,
        ww = $(window).width(),
        cw = $bg_nav.width()

    function add(select, num, Tselect, ad){
        $(select).eq(num).find(Tselect).addClass(ad)
    }

    function remove(select, Tselect, rd){
        $(select).find(Tselect).removeClass(rd)
    }

    function bg_timer(){
        $bottom_line.css("width", "0");
        idx++;

        if(idx > $bg_length){
            idx = 0;
        }

        $(".length_txt span").eq(0).text(idx + 1);
        $(".length_txt span").eq(1).text("/");
        $(".length_txt span").eq(2).text($bg_length+1);

        clearInterval($bg_timer);
        $bg_timer = setInterval(bg_timer, 4000);

        for(var i = 0; i < $bg_length +1; i++){
            ww = $(window).width();
            cw = $bg_nav.width();

            $bottom_line.css("width", "0");
            var l = $bg_nav_list.eq(i).offset().left;
            console.log(l)
            if(l < 0){
                l = ($bg_width * 5);
                $bg_nav_list.eq(i).css("left", l+"px");
            }
            $bg_nav_list.stop().animate({
                left: "-=" + $bg_width + "px"
            }, 300)
        }//for end
        remove($bg_nav_list, $bottom_text, "hover");
        remove($bg_nav_list, $top_img, "active");

            $bg_slider.hide().eq(idx).fadeIn(500);
            $bottom_line.eq(idx).animate({
                width: "100%"
            }, 4000, "linear")
            add($bg_nav_list, idx, $bottom_text, "hover")
            add($bg_nav_list, idx, $top_img, "active")
        b = idx;
    }

    $bottom_line.eq(0).stop().animate({
        width: "100%"
    }, 4000, "linear")

    add($bg_nav_list, 0, $bottom_text, "hover")
    add($bg_nav_list, 0, $top_img, "active")

    $(".length_txt span").eq(0).text(idx+1);
    $(".length_txt span").eq(1).text("/");
    $(".length_txt span").eq(2).text($bg_length+1);

    $bg_nav_list.hover(function(){
        var i  = $(this).index();
        console.log(i)
        console.log(idx)
        clearInterval($bg_timer);
        $bottom_line.stop();
        add(this, "", $bottom_text, "hover")
        add(this, "", $top_img, "active")

    }, function(){
        var i =$(this).index();
        var width = $bottom_line.eq(idx).width();


        var per = Math.floor(width / 228 * 100),
            time =Math.floor(4000 * per) / 100,
            total = 4000 - time;
        console.log(per, time, total)

        $bottom_line.eq(idx).animate({
            width: "100%"
        }, total, "linear")
        $bg_timer = setInterval(bg_timer, total)

        if(idx != i){
            remove(this, $bottom_text, "hover")
            remove(this, $top_img, "active")
        }
    })//hover end
    $bg_nav_list.click(function(){
        var i = $(this).index();
        clearInterval($bg_timer);
        console.log(i)
        setTimeout(function(){
            $bottom_line.stop()
        }, 1)
                if(con == true){
            return;
        }
        setTimeout(function(){
            con =false;
        }, 500)
        con = true;
        if(i - idx == 1 || i - idx == -1 || i - idx == -5){
            idx++;
            if(idx > $bg_length){idx = 0;}
            for(var i = 0; i < $bg_length +1; i++){
                ww = $(window).width();
                cw = $bg_nav.width();
                $bottom_line.css("width", "0");
                var l = $bg_nav_list.eq(i).offset().left;
                if(l < 0){
                    l = ($bg_width * 5);
                    $bg_nav_list.eq(i).css("left", l+"px");
                }
                $bg_nav_list.stop().animate({
                    left: "-=" + $bg_width + "px"
                }, 300)
            }//for end
            remove($bg_nav_list, $bottom_text, "hover");
            remove($bg_nav_list, $top_img, "active");

            $bg_slider.hide().eq(idx).fadeIn(500);
                $bottom_line.eq(idx).animate({
                    width: "100%"
                }, 4000, "linear")
                add($bg_nav_list, idx, $bottom_text, "hover")
                add($bg_nav_list, idx, $top_img, "active")
            $(".length_txt span").eq(0).text(idx +1);
        $(".length_txt span").eq(1).text("/");
        $(".length_txt span").eq(2).text($bg_length+1);
        }else if(i - idx == 2 || i - idx == -2 || i - idx == 4 || i - idx == -4){
           clearInterval($bg_timer);
            idx++;
            if(idx > $bg_length){idx = 0;}

             for(var i = 0; i < $bg_length +1; i++){
                 var c = i + 1;
                if(c == 6){ c = 0}
                else if(c == 7){c = 1}

                ww = $(window).width();
                cw = $bg_nav.width();
                $bottom_line.css("width", "0");
                var l = $bg_nav_list.eq(i).offset().left;
                if(l <  0){
                     l = ($bg_width * 5);
                     $bg_nav_list.eq(i).css("left", l+"px");
                    $bg_nav_list.eq(c).css("left", $bg_width * 6 +"px");

                }



                $bg_nav_list.stop().animate({
                    left: "-=" + $bg_width * 2 + "px"
                }, 300)
            }//for end
            remove($bg_nav_list, $bottom_text, "hover");
            remove($bg_nav_list, $top_img, "active");


            var b = $(this).index();
            console.log(b)
        $bg_slider.hide().eq(b).fadeIn(500);
                $bottom_line.eq(b).animate({
                    width: "100%"
                }, 4000, "linear")
                add($bg_nav_list, b, $bottom_text, "hover")
                add($bg_nav_list, b, $top_img, "active")
            idx = b;
            $(".length_txt span").eq(0).text(b + 1);
        $(".length_txt span").eq(1).text("/");
        $(".length_txt span").eq(2).text($bg_length+1);
        }

    })
    $arrow.click(function(){
        setTimeout(function(){
            $bottom_line.stop()
        }, 1)
        var i = $(this).index();
        if(con == true){
            return;
        }
        setTimeout(function(){
            con =false;
        }, 500)
        con = true;

        if(i == 0 ){
            //왼쪽 클릭
            idx--;
            if(idx < 0){idx = $bg_length;}
            for(var i = 0; i < $bg_length + 1; i++){
                ww = $(window).width();
                cw = $bg_nav.width();
                $bottom_line.css("width", "0");
                var l = $bg_nav_list.eq(i).offset().left;


                if(l > ($bg_width * 4)){
                    l = -$bg_width * 2;
                    $bg_nav_list.eq(i).css("left", l+"px");
                }
                $bg_nav_list.stop().animate({
                    left: "+=" + $bg_width + "px"
                }, 300)
            }//for end

            remove($bg_nav_list, $bottom_text, "hover");
            remove($bg_nav_list, $top_img, "active");


                $bg_slider.hide().eq(idx).fadeIn(500);
                $bottom_line.eq(idx).animate({
                    width: "100%"
                }, 4000, "linear")
                add($bg_nav_list, idx, $bottom_text, "hover")
                add($bg_nav_list, idx, $top_img, "active")

        }else{
            //오른쪽클릭
            idx++;
            if(idx > $bg_length){idx = 0;}

            for(var i = 0; i < $bg_length +1; i++){
                ww = $(window).width();
                cw = $bg_nav.width();
                $bottom_line.css("width", "0");
                var l = $bg_nav_list.eq(i).offset().left;
                if(l < 0){
                    l = ($bg_width * 5);
                    $bg_nav_list.eq(i).css("left", l+"px");
                }
                $bg_nav_list.stop().animate({
                    left: "-=" + $bg_width + "px"
                }, 300)
            }//for end
            remove($bg_nav_list, $bottom_text, "hover");
            remove($bg_nav_list, $top_img, "active");


                $bg_slider.hide().eq(idx).fadeIn(500);
                $bottom_line.eq(idx).animate({
                    width: "100%"
                }, 4000, "linear")
                add($bg_nav_list, idx, $bottom_text, "hover")
                add($bg_nav_list, idx, $top_img, "active")


        }

        $(".length_txt span").eq(0).text(idx +1);
        $(".length_txt span").eq(1).text("/");
        $(".length_txt span").eq(2).text($bg_length+1);

    })//arrow.click end

    $arrow.hover(function(){
        clearInterval($bg_timer);
        $bottom_line.stop();
    }, function(){


     var width = $bottom_line.eq(idx).width();

        var per = Math.floor(width / 228 * 100),
            time = Math.floor(4000 * per) / 100,
            total = 4000 - time;
        $bottom_line.eq(idx).animate({
            width: "100%"
        }, total, "linear");
        $bg_timer = setInterval(bg_timer, total);
    })


})//jquery end
