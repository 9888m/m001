		function setTab(name,cursel){
			var cursel_0=cursel;
			for(var i=1; i<=3; i++){
				var menu = document.getElementById(name+i);
				var menudiv = document.getElementById("con_"+name+"_"+i);
				if(i==cursel){
					menu.className="hover";
					menudiv.style.display="block";
				}
				else{
					menu.className="";
					menudiv.style.display="none";
				}
			}
		}
		function Next(){
			cursel_0++;
			if (cursel_0>3)cursel_0=1
			setTab(name_0,cursel_0);
		}
		    +function(fn){fn(window.jQuery,window,document)}(function($,w,d){
        $(function(){
            goscroll();
            $(window).bind('scroll',goscroll);
            $(window).bind('resize',goscroll);
            function goscroll(e){
                setTimeout(function(){
                    $('.renzhen').each(function(){
                        var thisheight = $(this).height();
                        var winH = $(window).height();
                        var scroH = $(window).scrollTop();
                        var positions = (winH - thisheight)/2 +scroH-80;
                        $(this).stop(true).animate({'top':positions});

                    });
                },50);
            }

        $(".renzhen.r").hover(function (){
            $(".zhengshur").show("normal");
        },function (){
            $(".zhengshur").hide("normal");
        });
        $(".renzhen.l").hover(function (){
            $(".zhengshul").show("normal");
        },function (){
            $(".zhengshul").hide("normal");
        });

            $("#gotop").click(function(){
                $('html,body').stop().animate({
                    scrollTop: 0
                },200)
            });
        })
    });

        // var i=0;
        // setInterval(function(){
        //     i++;
        //     if(i%2==0){
        //         $('#span1').html("www.bc95.vip ");
        //     }else{
        //         $('#span1').html("www.bc95.net ");
        //     }
        // }, 1000);

// logo下导航
function iboxActive(id, key, num, max) {
		var menu = document.getElementById(id + "menu");
		(menu.getElementsByTagName("INPUT")[0]||{}).value = key;
		var main = menu.parentNode;
		var applyfilter;
		var menudivs = menu.getElementsByTagName("DIV");
	for (var i = 0; i < menudivs.length; i ++) {
			menudivs[i].className = id+"menuoff";
			(menudivs[i].getElementsByTagName("A")[0]||{}).className = "";
	}
		menudivs[num].className = id+"menuon"+(num % max);
		(menudivs[num].getElementsByTagName("A")[0]||{}).className = "active";
	try {
			applyfilter = main.filters && main.filters[0];
		if (applyfilter) {
			main.filters[0].apply();
		}
	} catch(e) {}
		var parent = menu.parentNode;
		var childs = parent.childNodes;
		var divs = [];
	for (var i = 0, c = childs.length; i < c; i ++) {
		if (childs[i].tagName == 'DIV') {
			if (divs.length) childs[i].style.display = 'none';
			divs[divs.length] = childs[i];
		}
	}
	divs[num+1].style.display = 'block';
	try {
		if (applyfilter) {
			main.filters[0].play();
		}
	} catch(e) {}
}