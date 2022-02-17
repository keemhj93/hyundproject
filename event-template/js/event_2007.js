'use strict';
(function (global) {
    var
        $window = $(window),
        html = document.documentElement,
        $html = $(html),
        body,
        $body;

	var newtro0710 = function newtro() {

		var idx,
		$menuLinks,
		$sections,
		$userAgent,
		$_header,
        positionTops = [];

		$userAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
        var _rouletteStart = (function(){
            var _btn, pArr, _roulette;
            function init(){
                _btn = $('#_rouletteBtn');
                pArr = ["0","1","2","3","4:꽝","5","6","7","8","9"];
                _roulette = $('#_roulette');
                eventBind();
            }
            function eventBind(){
                _btn.on('click', function(){
                    _roulette.rotate({
                        angle:0, 
                        animateTo:360 * 5 + randomize(0, 360),
                        easing: easeOutCirc,                        
                        duration:4000
                     });
                })
            }
            function randomize($min, $max){
                return Math.floor(Math.random() * ($max - $min + 1)) + $min;
            }
            var easeOutCirc = function (x, t, b, c, d) {
                return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
            };
            return {
                init:init
            }
        })();
        _rouletteStart.init();
	}

	global.hiphoperEvent = {       

        'roulette2007' : roulette2007,
	};

})(this);

// 함수 호출
hiphoperEvent.roulette2007();




