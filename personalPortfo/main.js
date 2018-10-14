$(function () {

    //navBar Hide and Show
    $(window).on("scroll", function(e){
        let navOld = $(this).scrollTop();
        console.log ("scroll working")
        console.log (navOld);
        let navNew; 
        setTimeout(function(e){
            navNew = $(this).scrollTop();
            //scrollDown or stop
            if (navNew >= navOld && navNew > 100){
                $("nav").css("background-color", "rgba(255,255,255, 0)")
                $(".nav-link").css("text-shadow", "0 0 7px #FFFFFF")
            // scrollup or stay at top 
            } else if (navNew < navOld || navNew <= 100){
                $("nav").css("background-color", "rgba(255,255,255, 0.5)")
                $(".nav-link").css("text-shadow", "0 0 0")
            } 
        }, 100);
    })

    //for manipulating albums at #works section
    function allAlbum(alpha) {
        let imgLen = $(`#album${alpha} .albumContent img`).length;

        function imgHS(num) {
            let n = num.toString();
            for (i = 0; i < imgLen; i++) {
                if ($(`#album${alpha} .albumContent img:nth-child(${i + 1})`).attr("alt") === n) {
                    console.log($(`#album${alpha} .albumContent img:nth-child(${i + 1})`).attr("alt"));
                    $(`#album${alpha} .albumContent img:nth-child(${i + 1})`).show();
                } else {
                    console.log($(`#album${alpha} .albumContent img:nth-child(${i + 1})`).attr("alt"));
                    $(`#album${alpha} .albumContent img:nth-child(${i + 1})`).hide();
                }
            }
        }

        $(`#album${alpha} .bigOverlay`).click(function () {
            $(`#album${alpha}`).css("display", "none");
            $(`#album${alpha} .button button`).remove();
            $("body").css("overflow", "auto");
        });

        $(`#${alpha}`).click(function () {
            $(`#album${alpha}`).css("display", "block");
            imgLen = $(`#album${alpha} .albumContent img`).length;
            for (i = 0; i < imgLen; i++) {
                $(`#album${alpha} .button`).append(
                    `<button class="btn" id="${i + 1}">${i + 1}</button>`
                )
            }
            imgHS(1);
            $("body").css("overflow", "hidden");
        }
        )

        $(document).delegate(`#album${alpha} .button button`, 'click', function (e) {
            imgHS(e.target.innerText);
        })
    }

    allAlbum("a");allAlbum("b");allAlbum("c");allAlbum("d");allAlbum("e");allAlbum("f");allAlbum("g");
    
    //customized hover effect at #work section
    $(".overlay").on("mouseover", function(){
        $(this).fadeOut(500);
    }).on("mouseleave", function(){
        $(this).fadeIn(500);
    });

    //effects at contact section
    $(".pitch").on("mouseenter", function(){
        $("#pitch").fadeOut("fast");
        $(".icon").fadeIn("fast");
    });

    // $("#pitch, .pitch").on("mouseout", function(){
    //     $(this).fadeIn(500);
    //     setTimeout(function(){
    //         $(this).css("z-index", "2");
    //         $(".icon").css("display", "none");
    //     }, 700)
    // });

    $(".icon a").on("mouseover", function(){
        console.log ("mouseover working")
        $(this).animate({
            fontSize: "6vw",
        }, 300);        
    });
    
    // $(".icon").on("mouseover", function(){
    //     $("#pitch").css("display", "none")
    // })

    $(".pitch").on("mouseleave", function(){
        $(".icon").fadeOut("fast");
        $("#pitch").fadeIn("")
    })

    $(".icon a").on("mouseleave", function(){
        console.log ("mouseover working")
        $(this).animate({
            fontSize: "4vw",
        }, 300)
    });

})