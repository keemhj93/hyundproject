'use strict';

(function(global){
	var
		$window = $(window),
		html = document.documentElement,
		$html = $(html),
		body,
		$body;

    var eventClearanceslide = function eventClearanceslide() {
        var $event_view = $('.event_view'),
            $eventClearanceslide = $event_view.find('.eventClearanceslide');

        $eventClearanceslide.slick({
            prevArrow: '<a href="javascript:void(0);" class="clearance_left_slide"></a>',
            nextArrow: '<a href="javascript:void(0);" class="clearance_right_slide"></a>',
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnDotsHover: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '10',
            variableWidth: true,
            speed: 250,
            //respondTo : 'window',
            // responsive: [
            //     {breakpoint:1024,
            //     settings: {slidesToShow:1,slidesToScroll:1,dots:true,arrows:false,pauseOnDotsHover:true,touchMove:true,}
            //     }
            // ]
        }).each(function (i, el) {
            if (el.slick.slideCount <= 1) {
                $(el).slick('unslick');
            }
        });

        var $a_link = $('.eventClearanceslide').find('a');
        $a_link.on('click', function (e) {
            e.stopPropagation();
        });


				// var tipToggle = function () {
				// 	var $btn_tip_toggle = $('.button_tip_toggle'),
				// 		$cont_tip_toggle = $('.cont_tip_toggle');

				// 	$btn_tip_toggle.off().on('click', function(e) {
				// 		e.preventDefault();

				// 		$(this).toggleClass('on');
				// 		$(this).next().toggle();

				// 		//console.log($(this));

				// 	});
				// }
				// tipToggle();
    }
    var eventContentSlider = function eventContentSlider(){
        var $eventView = $('.event_view'),
            $slide_wrap = $eventView.find('.slide_wrap');
            $slide_wrap.not('.slick-initialized').slick({            
                    prevArrow: '<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전</span></button>',
                    nextArrow: '<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음</span></button>',
                    autoplay: false,
                    centerMode: false,
                    speed: 500,
                    fade:true,
                    infinite: true,
                    cssEase: 'linear',
                    //respondTo : 'window',
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                prevArrow: '<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전</span></button>',
                                nextArrow: '<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음</span></button>',
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                dots: false,
                                pauseOnDotsHover: false,
                                touchMove: true,
                                centerMode: true,
                            }
                        }
                    ]
                }).each(function (i, el) {
                    if (el.slick.slideCount <= 1) {
                        $(el).slick('unslick');
                    }
                });
    }
    var prizewinnerlayerOpen = function prizewinnerlayerOpen(){
        var $eventView = $('.event_view'),
            $button = $eventView.find('.btn_layer_open').children('a'),
            $close = $eventView.find('.button_layer_close');

            $button.on('click', function(e){                
                e.preventDefault();
                var $href = $(this).attr('data-layer-id');
                layer_popup($href);
            });
            function layer_popup(el){
                var $el = $(el);
                $el.show();
                $el.on('click', function(){
                    $el.hide();
                });
            }
            $close.on('click', function(e){
                e.preventDefault();
                $(this).parents('.layer_popup').hide();
            });
            
            
    }
    var mobileTabUiAction = function mobileTabUiAction(){
        var $eventView = $('.event_view'),
            $eventTabs = $('.slide_tab').find('li').children('a'),
            $eventTabs2 = $('.slide_tab2').find('li').children('a'),
            $eventContent = $('.lookbook_content'),
            $eventContent2 = $('.lookbook_content2');

            $eventTabs.on('click', function(e){
                e.preventDefault();
                $eventTabs.parent('li').removeClass('on');
                $(this).parent('li').addClass('on');
                var currnetContent = $(this).parent('li').index() + 1;
                $('.lookbook_content').hide();
                $('.lookbook_content_00' + currnetContent).show();                
            });
            $eventTabs2.on('click', function (e) {
                e.preventDefault();
                $eventTabs2.parent('li').removeClass('on');
                $(this).parent('li').addClass('on');
                var currnetContent2 = $(this).parent('li').index() + 4;
                $('.lookbook_content2').hide();
                $('.lookbook_content_00' + currnetContent2).show();
            });
    }
    var eventSliderMultiple = function eventSliderMultiple(){
        var $event_view = $('.event_view'),
            $event_slider = $event_view.find('._slider_wrapper');
            $event_slider.not('.slick-initialized').slick({            
                    prevArrow: '<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전</span></button>',
                    nextArrow: '<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음</span></button>',
                    autoplay: false,
                    centerMode: false,
                    speed: 500,
                    fade:true,
                    dots:true,
                    infinite: true,
                    cssEase: 'linear',
                    //respondTo : 'window',
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                arrows: false,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                fade: true,
                                infinite: true,
                                dots: true,
                                pauseOnDotsHover: true,
                                touchMove: true,
                                centerMode: false,
                                cssEase: 'linear',
                            }
                        }
                    ]
                }).each(function (i, el) {
                    if (el.slick.slideCount <= 1) {
                        $(el).slick('unslick');
                    }
                });            
    }
    var flexslide_0114 = function flexslide_0114(){
        var idx,
            $event_view = $('.event_view'),
            $event_slider = $event_view.find('.slider_wrap');
            $('.slider_wrap ._item').each(function (i) {                
                if ($(this).hasClass('on')) {
                    idx = i;
                    
                }
            });

            $event_slider.not('.slick-initialized').slick({            
                prevArrow: '<a type="button" class="slick-prev pos_center_after pos_center v"><img src="https://hhp-site-common-resource.s3.ap-northeast-2.amazonaws.com/0114_flexweek/flex_slide_before.png" alt=""><span class="s_out">이전</span></a>',
                nextArrow: '<a type="button" class="slick-next pos_center_after pos_center v"><img src="https://hhp-site-common-resource.s3.ap-northeast-2.amazonaws.com/0114_flexweek/flex_slide_next.png" alt=""><span class="s_out">다음</span></a>',
                    autoplay: false,
                    centerMode: false,
                    initialSlide: idx,
                    speed: 500,
                    fade:true,
                    dots:true,
                    infinite: true,
                    cssEase: 'linear',
                    //respondTo : 'window',
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                arrows: false,
                                initialSlide: idx,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                fade: true,
                                infinite: true,
                                dots: true,
                                pauseOnDotsHover: true,
                                touchMove: true,
                                centerMode: false,                                
                            }
                        }
                    ]
                }).each(function (i, el) {
                    if (el.slick.slideCount <= 1) {
                        $(el).slick('unslick');
                    }
                });  
    }    



    var flexslide_0212 = function flexslide_0212(){
        function initSlick(num,timeSet){
            console.dir($('.slider_wrap').eq(num)) 
            var targetEle = $('.slider_wrap').eq(num);
            $('.tabcont > .con_box').eq(num).show().siblings().hide();

            $('.tabmenu > ul > li').eq(num).addClass('on').siblings().removeClass('on');	

           
            if(!targetEle.hasClass('slick-initialized')){
                //console.log('슬릭 되라고 ')
                //슬릭 되어야 할 대상자가 클래스를 보여하고 있지 않다면 = 작동하라
                targetEle.slick({
                    prevArrow: '<a type="button" class="slick-prev pos_center_after pos_center v"><img src="https://hhp-site-common-resource.s3.ap-northeast-2.amazonaws.com/0212_flexweek/pc/arrow_prev.png" alt=""><span class="s_out">이전</span></a>',
                    nextArrow: '<a type="button" class="slick-next pos_center_after pos_center v"><img src="https://hhp-site-common-resource.s3.ap-northeast-2.amazonaws.com/0212_flexweek/pc/arrow_next.png" alt=""><span class="s_out">다음</span></a>',
                    autoplay: false,
                    centerMode: false,
                    initialSlide: timeSet,
                    speed: 500,
                    fade: true,
                    dots: true,
                    infinite: false,
                    cssEase: 'linear',
                    //respondTo : 'window',
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                prevArrow: '<a type="button" class="slick-prev"><img src="https://hhp-site-common-resource.s3.ap-northeast-2.amazonaws.com/0212_flexweek/mobile/arrow_perv.png" alt=""><span class="s_out">이전</span></a>',
                                nextArrow: '<a type="button" class="slick-next"><img src="https://hhp-site-common-resource.s3.ap-northeast-2.amazonaws.com/0212_flexweek/mobile/arrow_next.png" alt=""><span class="s_out">다음</span></a>',
                                arrows: true,
                                initialSlide: timeSet,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                fade: true,
                                infinite: true,
                                dots: true,
                                pauseOnDotsHover: true,
                                touchMove: true,
                                centerMode: false,
                            }
                        }
                    ]
                }).each(function (i, el) {
                    if (el.slick.slideCount <= 1) {
                        $(el).slick('unslick');
                    }
                });
            }
            //if
            
        }
        //function

        //initSlick(1,2);
         // 월요일 : 0, 화요일 : 1 ...
         // 뒷자리 숫자 = 노출되는 상품 순서값 10시:0 12시:1

        /*** tab ui interaction ***/
        $('.tabmenu > ul > li').each(function(index){
            var $this = $(this);
            $this.click(function(e){
                initSlick(index,0)
            });
            
        })
    } 

    var flexslide_0312 = function flexslide_0312(){
        function initSlick(num,timeSet){
            var targetEle = $('.slider_wrap').eq(num);
            $('.tabcont > .con_box').eq(num).show().siblings().hide();
            $('.tabmenu > ul > li').eq(num).addClass('on').siblings().removeClass('on');
            
            if(!targetEle.hasClass('slick-initialized')){
                //alert("test")
                console.log('슬릭 되라고 ')
                //슬릭 되어야 할 대상자가 클래스를 보여하고 있지 않다면 = 작동하라
                targetEle.slick({
                    prevArrow: '<a type="button" class="slick-arrow prev">이전</a>',
                    nextArrow: '<a type="button" class="slick-arrow next">다음</a>',
                    autoplay: false,
                    centerMode: false,
                    initialSlide: timeSet,
                    speed: 500,
                    //fade: true,
                    dots: true,
                    infinite: false,
                    cssEase: 'linear',
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                //arrows: true,
                                prevArrow: '<a type="button" class="slick-arrow prev">이전</a>',
                                nextArrow: '<a type="button" class="slick-arrow next">다음</a>',
                                initialSlide: timeSet,
                                slidesToShow: 4,
                                slidesToScroll:4,
                                //fade: true,
                                infinite: false,
                                dots: true,
                                pauseOnDotsHover: true,
                                touchMove: true,
                                centerMode: false,
                            }
                        }
                    ]
                }).each(function (i, el) {
                    if (el.slick.slideCount <= 1) {
                        $(el).slick('unslick');
                    }
                });
            }
          
        }
        //function

         // 월요일 : 0, 화요일 : 1 ...
         // 뒷자리 숫자 = 노출되는 상품 순서값 10시:0 12시:1

        /*** tab ui interaction ***/
        $('.tabmenu > ul > li').each(function(index){
            var $this = $(this);
            $this.click(function(e){
                initSlick(index,0)
            });
        })
    } 


    var primeSaleSlide = function primeSaleSlide() {
        var idx,
            $event_view = $('.event_view'),
            $event_slider = $event_view.find('.slider_wrap');
            $event_slider.not('.slick-initialized').slick({
            prevArrow: '<a type="button" class="slick-prev pos_center_after pos_center v"><img src="https://hhp-site-common-resource.s3.ap-northeast-2.amazonaws.com/0130_prime_sale/slide_arrow_left.png" alt=""><span class="s_out">이전</span></a>',
            nextArrow: '<a type="button" class="slick-next pos_center_after pos_center v"><img src="https://hhp-site-common-resource.s3.ap-northeast-2.amazonaws.com/0130_prime_sale/slide_arrow_right.png" alt=""><span class="s_out">다음</span></a>',
            autoplay: false,
            centerMode: false,
            initialSlide: idx,
            speed: 500,
            fade: true,
            dots: true,
            infinite: true,
            cssEase: 'linear',
            //respondTo : 'window',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        arrows: false,
                        // initialSlide: idx,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        fade: true,
                        infinite: true,
                        dots: true,
                        pauseOnDotsHover: true,
                        touchMove: true,
                        centerMode: false,
                    }
                }
            ]
        }).each(function (i, el) {
            if (el.slick.slideCount <= 1) {
                $(el).slick('unslick');
            }
        });
    }
    
    var primeSaleSlide2 = function primeSaleSlide2() {
        var idx,
            $event_view = $('.event_view'),
            $event_slider = $event_view.find('.slider_wrap');
            $event_slider.not('.slick-initialized').slick({
            prevArrow: '<a type="button" class="slick-prev pos_center_after pos_center v"><img src="https://hhp-site-common-resource.s3.ap-northeast-2.amazonaws.com/0205_primesale_shoes/btn_slide_prev.png" alt=""><span class="s_out">이전</span></a>',
            nextArrow: '<a type="button" class="slick-next pos_center_after pos_center v"><img src="https://hhp-site-common-resource.s3.ap-northeast-2.amazonaws.com/0205_primesale_shoes/btn_slide_next.png" alt=""><span class="s_out">다음</span></a>',
            autoplay: false,
            centerMode: false,
            initialSlide: idx,
            speed: 500,
            fade: true,
            dots: true,
            infinite: true,
            cssEase: 'linear',
            //respondTo : 'window',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        arrows: false,
                        // initialSlide: idx,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        fade: true,
                        infinite: true,
                        dots: true,
                        pauseOnDotsHover: true,
                        touchMove: true,
                        centerMode: false,
                    }
                }
            ]
        }).each(function (i, el) {
            if (el.slick.slideCount <= 1) {
                $(el).slick('unslick');
            }
        });
    }
    var appFlexSlide = function appFlexSlide() {
        var idx,
            $event_view = $('.event_view'),
            $event_slider = $event_view.find('.slider_wrap');
        $event_slider.not('.slick-initialized').slick({
            prevArrow: '<a type="button" class="slick-prev pos_center_after pos_center v"><img src="https://hhp-site-common-resource.s3.ap-northeast-2.amazonaws.com/0128_appflex/slide_arrow_left.jpg" alt=""><span class="s_out">이전</span></a>',
            nextArrow: '<a type="button" class="slick-next pos_center_after pos_center v"><img src="https://hhp-site-common-resource.s3.ap-northeast-2.amazonaws.com/0128_appflex/slide_arrow_right.jpg" alt=""><span class="s_out">다음</span></a>',
            autoplay: false,
            centerMode: false,
            initialSlide: idx,
            speed: 500,
            fade: true,
            dots: true,
            infinite: true,
            cssEase: 'linear',
            //respondTo : 'window',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        arrows: false,
                        initialSlide: idx,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        fade: true,
                        infinite: true,
                        dots: true,
                        pauseOnDotsHover: true,
                        touchMove: true,
                        centerMode: false,
                    }
                }
            ]
        }).each(function (i, el) {
            if (el.slick.slideCount <= 1) {
                $(el).slick('unslick');
            }
        });
    }     
	var eventLookbookSlide = function eventLookbookSlide() {
		var $event_view = $('.event_view'),
		 	$event_lookbook_slide = $event_view.find('.event_lookbook_slides');
        if ($event_lookbook_slide.hasClass('_0812_')){
            console.log('case111');
            $event_lookbook_slide.slick({
                prevArrow: '<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전</span></button>',
                nextArrow: '<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음</span></button>',
                autoplay: true,
                autoplaySpeed: 5000,
                pauseOnDotsHover: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '100',
                variableWidth: true,
                speed: 250,
                //respondTo : 'window',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            prevArrow: '<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전</span></button>',
                            nextArrow: '<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음</span></button>',
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false,
                            pauseOnDotsHover: false,
                            touchMove: true,
                            centerMode: true,
                        }
                    }
                ]
            }).each(function (i, el) {
                if (el.slick.slideCount <= 1) {
                    $(el).slick('unslick');
                }
            });
        }else if ($event_lookbook_slide.hasClass('content_001')) {
            $event_lookbook_slide.slick({
                prevArrow: '<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전</span></button>',
                nextArrow: '<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음</span></button>',
                autoplay: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '100',
                variableWidth: true,
                speed: 250,
                //respondTo : 'window',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            prevArrow: '<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전</span></button>',
                            nextArrow: '<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음</span></button>',
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false,
                            pauseOnDotsHover: false,
                            touchMove: true,
                            centerMode: true,
                         }
                    }
                ]
            }).each(function (i, el) {
                if (el.slick.slideCount <= 1) {
                    $(el).slick('unslick');
                }
            });
        }else{
            console.log('case222');
            $event_lookbook_slide.slick({
                prevArrow: '<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전</span></button>',
                nextArrow: '<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음</span></button>',
                autoplay: true,
                autoplaySpeed: 5000,
                pauseOnDotsHover: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '100',
                variableWidth: true,
                speed: 250,
                //respondTo : 'window',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            prevArrow: '<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전</span></button>',
                            nextArrow: '<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음</span></button>',
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false,
                            pauseOnDotsHover: false,
                            touchMove: true,
                        }
                    }
                ]
            }).each(function (i, el) {
                if (el.slick.slideCount <= 1) {
                    $(el).slick('unslick');
                }
            });
        }


		var $a_link = $('.event_lookbook_slides').find('a');
		$a_link.on('click', function(e){
			e.stopPropagation();
		});

    }
    var event_stillcold = function event_stillcold() {
        var idx,
            $event_view = $('.event_view'),
            $event_slider = $event_view.find('.slider_wrap');
            $event_slider.not('.slick-initialized').slick({
            prevArrow: '<a href="javascript:void(0);" class="btn-prev"><img src="https://hhp-site-common-resource.s3.ap-northeast-2.amazonaws.com/0225_still_cold/pc/btn_prev.png" alt="이전"/></a>',
			nextArrow: '<a href="javascript:void(0);" class="btn-next"><img src="https://hhp-site-common-resource.s3.ap-northeast-2.amazonaws.com/0225_still_cold/pc/btn_next.png" alt="다음"/></a>',
            autoplay: false,
            centerMode: false,
            initialSlide: idx,
            speed: 500,
            dots: true,
            infinite: true,
            cssEase: 'linear',
            slidesToShow: 4,
			slidesToScroll: 4,    

            // $('.slick').slick({
			// 	//autoplay: true,
			// 	infinite: true,
			// 	slidesToShow: 4,
			// 	slidesToScroll: 4,
			// 	dots: true,
			// 	arrows: true,
			// 	prevArrow: '<a href="javascript:void(0);" class="btn-prev"><img src="https://hhp-site-common-resource.s3.ap-northeast-2.amazonaws.com/0225_still_cold/pc/btn_prev.png" alt="이전"/></a>',
			// 	nextArrow: '<a href="javascript:void(0);" class="btn-next"><img src="https://hhp-site-common-resource.s3.ap-northeast-2.amazonaws.com/0225_still_cold/pc/btn_next.png" alt="다음"/></a>'
            // });
            
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        arrows: false,
                        // initialSlide: idx,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        fade: true,
                        infinite: true,
                        dots: true,
                        pauseOnDotsHover: true,
                        touchMove: true,
                        centerMode: false,
                        
                    }
                }
            ]
        }).each(function (i, el) {
            if (el.slick.slideCount <= 1) {
                $(el).slick('unslick');
            }
        });
    }
    var primeSaleSlide3 = function primeSaleSlide3() {
        var idx,
            $event_view = $('.event_view'),
            $event_slider = $event_view.find('.wrap_slicker');
            $event_slider.not('.slick-initialized').slick({
            prevArrow: '<a type="button" class="slick-prev"><img src="https://hhp-site-common-resource.s3.ap-northeast-2.amazonaws.com/0205_primesale_shoes/btn_slide_prev.png" alt=""><span class="s_out">이전</span></a>',
            nextArrow: '<a type="button" class="slick-next"><img src="https://hhp-site-common-resource.s3.ap-northeast-2.amazonaws.com/0205_primesale_shoes/btn_slide_next.png" alt=""><span class="s_out">다음</span></a>',
            autoplay: false,
            centerMode: false,
            initialSlide: idx,
            speed: 500,
            fade: false,
            dots: true,
            infinite: true,
            cssEase: 'linear',
            //respondTo : 'window',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        arrows: false,
                        // initialSlide: idx,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        fade: true,
                        infinite: true,
                        dots: true,
                        pauseOnDotsHover: true,
                        touchMove: true,
                        centerMode: false,
                    }
                }
            ]
        }).each(function (i, el) {
            if (el.slick.slideCount <= 1) {
                $(el).slick('unslick');
            }
        });
    }

    var new_arrival = function new_arrival() {
        var idx,
            $event_view = $('.event_view'),
            $event_slider = $event_view.find('.slide_wrap');
            $event_slider.not('.slick-initialized').slick({
                prevArrow: '<a type="button" class="prev">이전</a>',
                nextArrow: '<a type="button" class="next">다음</a>',
                autoplay: false,
                centerMode: false,
                initialSlide: idx,
                speed: 500,
                dots: true,
                infinite: true,
                cssEase: 'linear',
                slidesToShow: 4,
                slidesToScroll: 4,

                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            arrows: false,
                            // initialSlide: idx,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            fade: true,
                            infinite: true,
                            dots: true,
                            pauseOnDotsHover: true,
                            touchMove: true,
                            centerMode: false,
                        }
                    }
                ]
            }).each(function (i, el) {
            if (el.slick.slideCount <= 1) {
                $(el).slick('unslick');
            }

            
        });

        var idx,
            $event_view = $('.event_view'),
            $event_slider = $event_view.find('.slide_wrap2');
            $event_slider.not('.slick-initialized').slick({
                prevArrow: '<a type="button" class="prev">이전</a>',
                nextArrow: '<a type="button" class="next">다음</a>',
                autoplay: false,
                centerMode: false,
                initialSlide: idx,
                speed: 500,
                dots: true,
                infinite: true,
                cssEase: 'linear',
                slidesToShow: 2,
                slidesToScroll: 2,    

                // responsive: [
                //     {
                //         breakpoint: 1024,
                //         settings: {
                //             arrows: false,
                //             // initialSlide: idx,
                //             slidesToShow: 1,
                //             slidesToScroll: 1,
                //             fade: true,
                //             infinite: true,
                //             dots: true,
                //             pauseOnDotsHover: true,
                //             touchMove: true,
                //             centerMode: false,
                //         }
                //     }
                // ]
            }).each(function (i, el) {
            if (el.slick.slideCount <= 1) {
                $(el).slick('unslick');
            }

            
        });

        
    }

    var appflex03 = function appflex03() {
        var idx,
            $event_view = $('.event_view'),
            $event_slider = $event_view.find('.slide_wrap');
            $event_slider.not('.slick-initialized').slick({
                prevArrow: '<a type="button" class="prev">이전</a>',
                nextArrow: '<a type="button" class="next">다음</a>',
                autoplay: false,
                centerMode: false,
                initialSlide: idx,
                speed: 500,
                dots: true,
                infinite: true,
                cssEase: 'linear',
                slidesToShow: 4,
                slidesToScroll: 4,

                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            arrows: true,
                            // initialSlide: idx,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            fade: true,
                            infinite: true,
                            dots: true,
                            pauseOnDotsHover: true,
                            touchMove: true,
                            centerMode: false,
                        }
                    }
                ]
            }).each(function (i, el) {
            if (el.slick.slideCount <= 1) {
                $(el).slick('unslick');
            }
        });
    }

    var magazineSlide = function magazineSlide() {
        var idx,
            $event_view = $('.event_view'),
            $event_slider = $event_view.find('.slide_wrap');
            $event_slider.not('.slick-initialized').slick({
                prevArrow: '<a type="button" class="prev">이전</a>',
                nextArrow: '<a type="button" class="next">다음</a>',
                autoplay: true,
                centerMode: false,
                initialSlide: idx,
                speed: 500,
                dots: true,
                infinite: true,
                cssEase: 'linear',
                slidesToShow: 1,
                slidesToScroll: 1,

                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            arrows: true,
                            // initialSlide: idx,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            fade: true,
                            infinite: true,
                            dots: true,
                            pauseOnDotsHover: true,
                            touchMove: true,
                            centerMode: false,
                        }
                    }
                ]
            }).each(function (i, el) {
            if (el.slick.slideCount <= 1) {
                $(el).slick('unslick');
            }
        });
    }

    var eventSlide = function eventSlide() {
        var idx,
            $event_view = $('.event_view'),
            $event_slider = $event_view.find('.slide_wrap');
            $event_slider.not('.slick-initialized').slick({
                prevArrow: '<a type="button" class="prev">이전</a>',
                nextArrow: '<a type="button" class="next">다음</a>',
                autoplay: true,
                centerMode: false,
                initialSlide: idx,
                speed: 500,
                dots: true,
                infinite: true,
                cssEase: 'linear',
                slidesToShow: 1,
                slidesToScroll: 1,

                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            arrows: true,
                            // initialSlide: idx,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            fade: true,
                            infinite: true,
                            dots: true,
                            pauseOnDotsHover: true,
                            touchMove: true,
                            centerMode: false,
                        }
                    }
                ]
            }).each(function (i, el) {
            if (el.slick.slideCount <= 1) {
                $(el).slick('unslick');
            }
        });
    }

    var promotion0330 = function promotion0330() {
        var idx,
            $event_view = $('.event_view'),
            $event_slider = $event_view.find('.slide_wrap');
            $event_slider.not('.slick-initialized').slick({
                prevArrow: '<a type="button" class="prev">이전</a>',
                nextArrow: '<a type="button" class="next">다음</a>',
                autoplay: false,
                centerMode: false,
                initialSlide: idx,
                speed: 500,
                dots: true,
                infinite: true,
                cssEase: 'linear',
                slidesToShow: 4,
                slidesToScroll: 4,

                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            arrows: false,
                            // initialSlide: idx,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            fade: true,
                            infinite: true,
                            dots: true,
                            pauseOnDotsHover: true,
                            touchMove: true,
                            centerMode: false,
                        }
                    }
                ]
            }).each(function (i, el) {
            if (el.slick.slideCount <= 1) {
                $(el).slick('unslick');
            }
        });
    }



    // tip toggle
    var tipToggle = function tipToggle() {
        var $btn_tip_toggle = $('.button_tip_toggle'),
            $cont_tip_toggle = $('.cont_tip_toggle');

        $btn_tip_toggle.off().on('click', function (e) {
            e.preventDefault();

            $(this).toggleClass('on');
            $(this).next().toggle();

            //console.log($(this));

        });
    }

    var videoAutoPlayChk = function videoAutoPlayChk(){
        var $video = $('._video_wrapper').find('video')[0];
        //alert($video)
        if ($video){
            $video.onProgress = _progress();
        }
        


        function _progress(e) {
            var _video = $('._video_wrapper').find('video')[0];
            var isPlaying = false;
            _video.onplaying = function(){
                isPlaying = true;
                console.log( 'playing' );
            }
            if (!isPlaying){
                _video.load();
            }else{
                isPlaying = true;
            }

            var percent = null;
            //alert(111)
            if (_video.buffered.length > 0 && _video.buffered.end && _video.duration) {
                percent = _video.buffered.end(0) / _video.duration;
            } else if (_video.bytesTotal != undefined && _video.bytesTotal > 0 && _video.bufferedBytes != undefined) {
                percent = _video.bufferedBytes / _video.bytesTotal;
            }

            if (percent !== null) {
                percent = 100 * Math.min(1, Math.max(0, percent));

                //alert(percent);
            }
        }
    }



	var openEventSlide = function openEventSlide() {
		/*
		var $open_event = $('.open_event'),
		 	$open_event_slide = $open_event.find('.slides');

		$open_event_slide.slick({
			dots:true,
			autoplay:false,
			pauseOnDotsHover:true,
			dotsClass:'slick-dots small pos_center h dis_f',
			draggable:true,
			arrows:false,
			infinite:false,
			variableWidth: true,
		}).each(function(index, el){
			if( $(el)[0].slick.slideCount == 1 ){
				$(el).slick('unslick');
			}
		});
		$('#slideRelease').slick('slickSetOption',{
			arrows:false
		},true);
		*/

		var $event_view = $('.event_view'),
		 	$event_cont_slide = $event_view.find('.pc_cont_slides');

		$event_cont_slide.slick({
			prevArrow:'<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전</span></button>',
			nextArrow:'<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음</span></button>',
			autoplay:true,
			autoplaySpeed:5000,
			pauseOnDotsHover:true,
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: false,
			centerPadding: '10',
			variableWidth: true,
			respondTo : 'window',
			infinite:false,

		}).each(function(i,el){
			if( el.slick.slideCount <= 1 ){
				$(el).slick('unslick');
			}
		});
	}

	var visualFadeInOut = function visualFadeInOut() {

		var $box = $('.visual_area ul'),
			$items = $box.find('li'),
			currentindex = 0,
			duration = 5000, // 유지시간. 밀리초,
			changingduration = 2000, // 변환시간. 밀리초
			numitems = $items.length;

		$items.each(function(i) {
			$items[i] = $(this);
		});

		if ($('.event_fadeinout').length) {
			setTimeout(next, duration);
		}

		function next() {
			var nextindex = currentindex+1 === numitems ? 0 : currentindex+1;
			$items[nextindex].css({opacity: 0}).appendTo($box)
				._animate({opacity: 1}, {duration: changingduration, easing: Quad.easeOut, onComplete: function() {
					setTimeout(next, duration);
				}});
			currentindex = nextindex;
		}


	}


	var eventLogoSlide = function eventLogoSlide() {

		var $event_view = $('.event_view'),
		 	$event_lookbook_slide = $event_view.find('.event_logo_slides');

		$event_lookbook_slide.slick({
			autoplay:true,
			autoplaySpeed:5000,
			pauseOnDotsHover:true,
			slidesToShow: 7,
			slidesToScroll: 1,
			centerMode: false,
			variableWidth: false,
			respondTo : 'window',
			arrows:false,
			responsive: [
				{breakpoint:3000,
				settings: {slidesToShow:7,slidesToScroll:1}
				},
				{breakpoint:1160,
				settings: {slidesToShow:7,slidesToScroll:1}
				},
				{breakpoint:1024,
				settings: {slidesToShow:6,slidesToScroll:2}
				}
			]
		}).each(function(i,el){
			if( el.slick.slideCount <= 1 ){
				$(el).slick('unslick');
			}
		});
	}


	var moEventSlide = function moEventSlide() {

		var $event_view = $('.event_view'),
		 	$open_event_slide = $event_view.find('.img_slides');

		$open_event_slide.slick({
			dots:false,
			autoplay:true,
			pauseOnDotsHover:true,
			draggable:true,
			arrows:false,
			infinite:true,
			variableWidth: true,
			slidesToShow: 1,
			slidesToScroll: 1,
		});
	}

	var moEventContSlide = function moEventContSlide() {

		var $event_view = $('.event_view'),
		 	$event_cont_slide = $event_view.find('.cont_slides');

			$event_cont_slide.slick({
				dots:true,
				autoplay:false,
				pauseOnDotsHover:true,
				draggable:false,
				arrows:false,
				infinite:true,
				variableWidth: true,
				slidesToShow: 1,
				slidesToScroll: 1,
			 });

	}


	var eventBannerSlide = function eventBannerSlide() {

		var $event_view = $('.event_view'),
		 	$open_event_slide = $event_view.find('.banner_slides');

		$open_event_slide.slick({
			dots:true,
			autoplay:false,
			pauseOnDotsHover:true,
			dotsClass:'slick-dots small pos_center h dis_f',
			draggable:true,
			arrows:false,
			infinite:false,
			variableWidth: true,
		}).each(function(index, el){
			if( $(el)[0].slick.slideCount == 1 ){
				$(el).slick('unslick');
			}
		});
		$('#slideRelease').slick('slickSetOption',{
			arrows:false
		},true);

	}

	var eventSlideSyncing = function eventSlideSyncing() {

		if ($('.event_0321_designerSpecial').length) {

			$('.slider-single').slick({
		      slidesToShow: 1,
		      slidesToScroll: 1,
		      arrows: true,
		      fade: false,
		      adaptiveHeight: true,
		      infinite: true,
		      useTransform: true,
		      speed: 400,
		      cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
		      prevArrow:'<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전 브랜드</span></button>',
			  nextArrow:'<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음 브랜드</span></button>',
		    });

		    $('.slider-nav').on('init', function(event, slick) {
		      $('.slider-nav .slick-slide.slick-current').addClass('is-active');
		    }).slick({
		      slidesToShow: 10,
		      slidesToScroll: 10,
		      dots: false,
		      focusOnSelect: false,
		      infinite: true,
		    });
		}

		if ($('.event_0327_springForWoman').length) {

			$('.slider-single').slick({
		      slidesToShow: 1,
		      slidesToScroll: 1,
		      arrows: true,
		      fade: false,
		      adaptiveHeight: true,
		      infinite: true,
		      useTransform: true,
		      speed: 400,
		      cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
		      prevArrow:'<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전 브랜드</span></button>',
			  nextArrow:'<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음 브랜드</span></button>',
		    });

		    $('.slider-nav').on('init', function(event, slick) {
		      $('.slider-nav .slick-slide.slick-current').addClass('is-active');
		    }).slick({
		      slidesToShow: 8,
		      slidesToScroll: 8,
		      dots: false,
		      focusOnSelect: false,
		      infinite: true,
		    });
		}

		if ($('.benefit_promotion_all').length) {

			$('.slider-single').slick({
		      slidesToShow: 1,
		      slidesToScroll: 1,
		      arrows: true,
		      fade: false,
		      adaptiveHeight: true,
		      infinite: true,
		      useTransform: true,
		      speed: 400,
		      cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
		      prevArrow:'<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전 브랜드</span></button>',
			  nextArrow:'<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음 브랜드</span></button>',
		    });

		    $('.slider-nav').on('init', function(event, slick) {
		      $('.slider-nav .slick-slide.slick-current').addClass('is-active');
		    }).slick({
		      slidesToShow: 8,
		      slidesToScroll: 8,
		      dots: false,
		      focusOnSelect: false,
		      infinite: true,
		    });
		}

		if ($('.event_0318_bestBrand').length) {

			$('.slider-single').slick({
		      slidesToShow: 1,
		      slidesToScroll: 1,
		      arrows: false,
		      fade: false,
		      adaptiveHeight: true,
		      infinite: true,
		      useTransform: true,
		      speed: 400,
		      cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
		    });

		    $('.slider-nav').on('init', function(event, slick) {
		      $('.slider-nav .slick-slide.slick-current').addClass('is-active');
		    }).slick({
		      slidesToShow: 5,
		      slidesToScroll: 5,
		      dots: false,
		      focusOnSelect: false,
		      infinite: true,
		    });
		}

	    $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
	      $('.slider-nav').slick('slickGoTo', currentSlide);
	      var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
	      $('.slider-nav .slick-slide.is-active').removeClass('is-active');
	      $(currrentNavSlideElem).addClass('is-active');
	    });

	    $('.slider-nav').on('click', '.slick-slide', function(event) {
	      event.preventDefault();
	      var goToSingleSlide = $(this).data('slick-index');
	      $('.slider-single').slick('slickGoTo', goToSingleSlide);
	    });
	}

	var buttonLink = function buttonLink() {

		if ($('.event_0315_sneakers').length) {

			var $button01 = $('.button01'),
				$button02 = $('.button02'),
				$button03 = $('.button03'),
				$button04 = $('.button04'),
				$button05 = $('.button05'),
				$button06 = $('.button06'),
				$button07 = $('.button07');

			$button01.on('click', function() { location.href = "/brand/EXCELSIOR";});
			$button02.on('click', function() { location.href = "/brand/colorcolla";});
			$button03.on('click', function() { location.href = "/brand/gram";});
			$button04.on('click', function() { location.href = "/brand/JDAUL";});
			$button05.on('click', function() { location.href = "/brand/BMSFRANCE";});
			$button06.on('click', function() { location.href = "/brand/Vans";});
			$button07.on('click', function() { location.href = "/brand/MACHENZIE";});

		}

	}

	var eventContSlide = function eventContSlide() {

		var $event_view = $('.event_view'),
		 	$event_cont_slide = $event_view.find('.pc_cont_slides');

		$event_cont_slide.slick({
			prevArrow:'<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전</span></button>',
			nextArrow:'<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음</span></button>',
			autoplay:true,
			autoplaySpeed:5000,
			pauseOnDotsHover:true,
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: false,
			centerPadding: '10',
			variableWidth: true,
			respondTo : 'window',
			infinite:false,

		}).each(function(i,el){
			if( el.slick.slideCount <= 1 ){
				$(el).slick('unslick');
			}
		});

	}

	var aprilPromotion = function aprilPromotion() {

		var $menuLinks,
        $sections,
        positionTops = [];

        if ($('.april_promotion').length) {
	        $(window).on('scroll', function() {
				var winTop = $(window).scrollTop();
				if ( winTop > 1360 ) {
				$('.button_go_wrap').addClass('top_fixed');
				} else {
				$('.button_go_wrap').removeClass('top_fixed');
				}
			});
    	}

    	if ($('.benefit_promotion').length || $('.benefit_promotion_all').length) {
			$(window).on('scroll', function() {
				var winTop = $(window).scrollTop();
				if ( winTop > 610 ) {
				$('.button_go_wrap').addClass('top_fixed');
				} else {
				$('.button_go_wrap').removeClass('top_fixed');
				}
			});
		}

		var tabConts =  function() {
			var $tab_container = $('.tab_container'),
				$tab_menus = $tab_container.find('.tab_menu li a'),
				$tab_conts = $tab_container.find('.tab_conts'),
				$tab_cont =  $tab_conts.find('.tab_cont');

			var changeCont = function(index) {
				if ( index >=0 && index <= $tab_menus.length) {

					if (!$(this).hasClass('active')) {
						$($tab_cont[index]).siblings().removeClass('active');
						$($tab_cont[index]).addClass('active');
					} else {
						$($tab_cont[index]).removeClass('active');
						$($tab_cont[index]).addClass('active');
					}
				}
			};

			var clickMenu = function(link, index) {
				link.addEventListener('click',function(e){
					e.preventDefault();

					if (!$(this).parent().hasClass('active')) {
						$(this).parent().siblings().removeClass('active');
						$(this).parent().addClass('active');
					} else {
						$(this).parent().removeClass('active');
						$(this).parent().addClass('active');
					}
					changeCont(index);
				});
			};

			for (var $tab_menu, i=0, l=$tab_menus.length;i<l;i++){
				$tab_menu = $tab_menus[i];
				clickMenu($tab_menu, i);
			}
		}
		tabConts()

		// tip toggle
		var tipToggle = function () {
			var $btn_tip_toggle = $('.button_tip_toggle'),
				$cont_tip_toggle = $('.cont_tip_toggle');

			$btn_tip_toggle.off().on('click', function(e) {
				e.preventDefault();

				$(this).toggleClass('on');
				$(this).next().toggle();

				//console.log($(this));

			});
		}
		tipToggle();


		// btnTop
		var $btn_top = $('.button_top');
		$(window).on('scroll', function() {
			var winTop = $(window).scrollTop();
			if ( winTop > 2000 ) {
			$btn_top.fadeIn();
			} else {
			$btn_top.fadeOut();
			}
		});

		$btn_top.on('click', function() {
			$('html, body').animate( { scrollTop : 0 }, 400 );
			return false;
		});

		var $btn_share = $('.button_share');
		$(window).on('scroll', function() {
			var winTop = $(window).scrollTop();
			if ( winTop > 2000 ) {
			$btn_share.fadeIn();
			} else {
			$btn_share.fadeOut();
			}
		});

		//countdown
		var countdown = function () {
			$('.countdown').countdown('2019/04/21', function(event) {
			  $(this).html(event.strftime('%H %M'));
			});
		}
		countdown();

		// txt animation
		var txtAnimation = function () {
			setTimeout(function(){
			  $('.promo_visual').addClass('show');
			}, 500);
			setTimeout(function(){
			  $('.promo_visual').addClass('show_txt1');
			}, 500);
			setTimeout(function(){
			 $('.promo_visual').addClass('show2');
			}, 4000);
			setTimeout(function(){
			  $('.promo_visual').removeClass('show_txt1');
			}, 5000);
		}
		txtAnimation();

        // button
        $(function() {

            $menuLinks = $('.button_go_wrap').find('li')
            $sections = $('.promo_event');

            // .section들의 top 위치값들
            $sections.each(function(idx, elt) {
                positionTops.push($(elt).position().top);
            });

            // lnb 메뉴의 a링크와 section과 매칭
            $('.button_go_wrap').find('li a').each(function(idx, elt) {
                $(elt).click(function() {
                	$.fn.scrollTo({target:'#'+$sections.get(idx).id, gap:0});
                });
            });

            $(window).scroll(function() {
                var sTop = Number($(this).scrollTop()),
                    sHeight = $(window).scrollTop(),
                	len = positionTops.length,
                    endPos =  positionTops[len-1],
                    targetIdx = 0;



                for(var i=0; i<len; i++ ) {
                    if( sTop > 0 && sTop > positionTops[i]) {
                        targetIdx = i
                        if( i < len -1 && sTop <= positionTops[endPos] ) {
                            break;
                        }
                    }
                }
                $.fn.menuOn(targetIdx);

            });
        });

        $.fn.menuOn = function(idx, elt) {

            var elt = elt || $menuLinks.eq(idx).children().get(0), // a link
                $sub_menu = $(elt).parent().eq(0), // li.link_event
                winTop = $(window).scrollTop();

			$sub_menu.addClass('on');

            $menuLinks.each(function() {
                if( this != $sub_menu.get(0) ) {
                    $(this).removeClass('on');
                }
            });
        }

        $.fn.scrollTo = function( obj ){

            var target = obj.target || '';
            if (!target) {
                return;
            }

            var gap = obj.gap || 0,
                speed = obj.speed || 500,
                variable = obj.variable ? obj.variable : 0,
                variableHeight = variable ? $(variable).height() - 100 : 0;

            $('body,html').animate({scrollTop: ($(target).offset().top - gap - variableHeight), duration : speed});

        }

        // sub tap slide
		var promoSlide = function () {
			var idx,
			$april_promotion = $('.april_promotion'),
		 	$promo_slides = $april_promotion.find('.promo_slides');

			$('.promo_slides .item').each(function(i){
				if ($(this).hasClass("on")) {
					idx = i;
				}
			});

			$promo_slides.slick({
				prevArrow:'<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전</span></button>',
				nextArrow:'<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음</span></button>',
				dots:false,
				autoplay:false,
				pauseOnDotsHover:true,
				draggable:true,
				centerMode:true,
				initialSlide:idx,
				arrows:true,
				infinite:true,
				variableWidth: true,
				slidesToShow: 3,
				slidesToScroll: 1,
			 });

		};
		promoSlide();

	}


	var amorSale = function amorSale() {

		// sub tap slide
		var promoSlide1 = function () {

			var idx,
			$amorSale_promotion = $('.amorsale0605'),
		 	$promo_slides1 = $amorSale_promotion.find('.promo_slides');

			$('.promo_slides .item').each(function(i){
				//console.log('아이템 ' + i)
				//console.dir($(this))
				if ($(this).hasClass("on")) {
					idx = i;
					
				}
			});
            if ($amorSale_promotion.hasClass('_1111') == false){

                $promo_slides1.not('.slick-initialized').slick({
                    prevArrow:'<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전</span></button>',
                    nextArrow:'<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음</span></button>',
                    dots:false,
                    autoplay:false,
                    pauseOnDotsHover:true,
                    draggable:true,
                    centerMode:true,
                    initialSlide:idx,
                    arrows:true,
                    infinite:false,
                    variableWidth: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    responsive: [
                        {
                            breakpoint: 480,
                            settings: {
                                prevArrow: '<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전</span></button>',
                                nextArrow: '<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음</span></button>',
                                dots: false,
                                autoplay: false,
                                pauseOnDotsHover: true,
                                draggable: true,
                                centerMode: true,
                                initialSlide: idx,
                                arrows: true,
                                infinite: true,
                                variableWidth: true,
                            }
                        },
                    ]
                }).each(function (i, el) {
                    if (el.slick.slideCount <= 1) {
                        $(el).slick('unslick');
                    }
                });
            } else {
				//console.log('센터로 가야할 슬라이드 순번*' + idx)
				if(!$promo_slides1.hasClass('.slick-initialized')){
					//console.log('슬릭 실행 ')
					$promo_slides1.slick({
						prevArrow: '<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전</span></button>',
						nextArrow: '<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음</span></button>',
						dots: false,
						autoplay: false,
						pauseOnDotsHover: true,
						draggable: true,
						centerMode: true,
						initialSlide: idx,
						arrows: true,
						infinite: false,
						variableWidth: true,
						slidesToShow: 1,
						slidesToScroll: idx,
						responsive: [
							{
								breakpoint: 480,
								settings: {
									dots: true,
									autoplay: false,
									pauseOnDotsHover: true,
									draggable: true,
									centerMode: true,
									initialSlide: idx,
									arrows: false,
									infinite: false,
									variableWidth: true,
								}
							},
						]
					}).each(function (i, el) {
						if (el.slick.slideCount <= 1) {
							$(el).slick('unslick');
						}
					});
				}
                
            }
		}
		promoSlide1();

	}

	var coolSale201906 = function coolSale() {

		var idx,
		$menuLinks,
		$sections,
		$userAgent,
		$_header,
        positionTops = [];

		$userAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

        if ($('.cool_sale').length) {
			if(!$userAgent){
				$(window).on('scroll', function() {
					var winTop = $(window).scrollTop();
						if ( winTop > 1350 ) {
							$('.button_go_wrap').addClass('top_fixed');
							$('.cool_sale').css({'padding-top' : 80});
						} else {
							$('.button_go_wrap').removeClass('top_fixed');
							$('.cool_sale').css({'padding-top' : 0});
						}
				});
			}else{
				$(window).on('scroll', function() {
					var winTop = $(window).scrollTop();
						if ( winTop > 280 ) {
							$('.button_go_wrap').addClass('top_fixed');
							$('.cool_sale').css({'padding-top' : 80});
						} else {
							$('.button_go_wrap').removeClass('top_fixed');
							$('.cool_sale').css({'padding-top' : 0});
						}
				});
			}

    	}

		var tabConts =  function() {
			var $tab_container = $('.tab_container'),
				$tab_menus = $tab_container.find('.tab_menu li a'),
				$tab_conts = $tab_container.find('.tab_conts'),
				$tab_cont =  $tab_conts.find('.tab_cont');

			var changeCont = function(index) {
				if ( index >=0 && index <= $tab_menus.length) {

					if (!$(this).hasClass('active')) {
						$($tab_cont[index]).siblings().removeClass('active');
						$($tab_cont[index]).addClass('active');
					} else {
						$($tab_cont[index]).removeClass('active');
						$($tab_cont[index]).addClass('active');
					}
				}
			};

			var clickMenu = function(link, index) {
				link.addEventListener('click',function(e){
					e.preventDefault();

					if (!$(this).parent().hasClass('active')) {
						$(this).parent().siblings().removeClass('active');
						$(this).parent().addClass('active');
					} else {
						$(this).parent().removeClass('active');
						$(this).parent().addClass('active');
					}
					changeCont(index);
				});
			};

			for (var $tab_menu, i=0, l=$tab_menus.length;i<l;i++){
				$tab_menu = $tab_menus[i];
				clickMenu($tab_menu, i);
			}
		}
		tabConts()

		// tip toggle
		var tipToggle = function () {
			var $btn_tip_toggle = $('.button_tip_toggle'),
				$cont_tip_toggle = $('.cont_tip_toggle');

			$btn_tip_toggle.off().on('click', function(e) {
				e.preventDefault();

				$(this).toggleClass('on');
				$(this).next().toggle();

				//console.log($(this));

			});
		}
		tipToggle();


		// btnTop
		var $btn_top = $('.button_top');

		$(window).on('scroll', function() {
			var winTop = $(window).scrollTop();
			if ( winTop > 2000 ) {
			$btn_top.show();
			} else {
			$btn_top.hide();
			}
		});


		$btn_top.on('click', function() {
			$('html, body').animate( { scrollTop : 0 }, 400 );
			return false;
		});

		var $btn_share = $('.button_share');

		$(window).on('scroll', function() {
			var winTop = $(window).scrollTop();
			if ( winTop > 2000 ) {
			$btn_share.show();
			} else {
			$btn_share.hide();
			}
		});


        // button
        $(function() {

            $menuLinks = $('.button_go_wrap').find('li');
			$sections = $('.promo_event');
			$_header = $('.site_header');
            // .section들의 top 위치값들
            $sections.each(function(idx, elt) {
				positionTops.push($(elt).offset().top);
				//console.log(positionTops)
            });

            // lnb 메뉴의 a링크와 section과 매칭
            $('.button_go_wrap').find('li>a').each(function(idx, elt) {
                $(elt).click(function() {
					if(!$userAgent){
						$.fn.scrollTo({target:'#'+$sections.get(idx).id, gap:0});
					} else {
						if($('.button_go_wrap').hasClass('top_fixed')){
							$.fn.scrollTo({target:'#'+$sections.get(idx).id, gap:90});
						}else{
							$.fn.scrollTo({target:'#'+$sections.get(idx).id, gap:200});
						}

					}

                });
            });

            $(window).scroll(function() {
                var sTop = Number($(this).scrollTop()+300),
                    sHeight = $(window).scrollTop(),
					len = positionTops.length,
                    endPos =  positionTops[len-1],
					targetIdx = 0;

					//console.log(endPos)
					//console.log(sTop)


                for(var i=0; i<len; i++ ) {
                    if( sTop > 2000 && sTop > positionTops[i]) {
                        targetIdx = i
                        if( i < len -1 && sTop <= positionTops[endPos] ) {
                            break;
                        }
                    }
                }
                $.fn.menuOn(targetIdx);
            });
        });

        $.fn.menuOn = function(idx, elt) {

            var elt = elt || $menuLinks.eq(idx).children().get(0), // a link
                $sub_menu = $(elt).parent().eq(0), // li.link_event
                winTop = $(window).scrollTop();

			$sub_menu.addClass('on');
			//console.log(elt)

            $menuLinks.each(function() {
                if( this != $sub_menu.get(0) ) {

                    $(this).removeClass('on');
                }
            });
        }

        $.fn.scrollTo = function( obj ){

            var target = obj.target || '';
            if (!target) {
                return;
            }

            var gap = obj.gap || 0,
                speed = obj.speed || 500,
                variable = obj.variable ? obj.variable : 0,
                variableHeight = variable ? $(variable).height() - 100 : 0;

            $('body,html').animate({scrollTop: ($(target).offset().top - gap - variableHeight), duration : speed});

        }
	}

	var newtro0710 = function newtro() {

		var idx,
		$menuLinks,
		$sections,
		$userAgent,
		$_header,
        positionTops = [];

		$userAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

        if ($('.newtro').length) {
			if(!$userAgent){
				$(window).on('scroll', function() {
                    var winTop = $(window).scrollTop();
                        console.log(winTop);
						if ( winTop > 1100 ) {
							$('.button_go_wrap').addClass('top_fixed');
							$('.newtro').css({'padding-top' : 150});
						} else {
							$('.button_go_wrap').removeClass('top_fixed');
							$('.newtro').css({'padding-top' : 0});
						}
				});
			}else{
				$(window).on('scroll', function() {
					var winTop = $(window).scrollTop();
						if ( winTop > 766 ) {
							$('.button_go_wrap').addClass('top_fixed');
							$('.newtro').css({'padding-top' : 140});
						} else {
							$('.button_go_wrap').removeClass('top_fixed');
							$('.newtro').css({'padding-top' : 0});
						}
				});
			}

    	}

		var tabConts =  function() {
			var $tab_container = $('.tab_container'),
				$tab_menus = $tab_container.find('.tab_menu li a'),
				$tab_conts = $tab_container.find('.tab_conts'),
				$tab_cont =  $tab_conts.find('.tab_cont');

			var changeCont = function(index) {
				if ( index >=0 && index <= $tab_menus.length) {

					if (!$(this).hasClass('active')) {
						$($tab_cont[index]).siblings().removeClass('active');
						$($tab_cont[index]).addClass('active');
					} else {
						$($tab_cont[index]).removeClass('active');
						$($tab_cont[index]).addClass('active');
					}
				}
			};

			var clickMenu = function(link, index) {
				link.addEventListener('click',function(e){
					e.preventDefault();

					if (!$(this).parent().hasClass('active')) {
						$(this).parent().siblings().removeClass('active');
						$(this).parent().addClass('active');
					} else {
						$(this).parent().removeClass('active');
						$(this).parent().addClass('active');
					}
					changeCont(index);
				});
			};

			for (var $tab_menu, i=0, l=$tab_menus.length;i<l;i++){
				$tab_menu = $tab_menus[i];
				clickMenu($tab_menu, i);
			}
		}
		tabConts()

		// tip toggle
		var tipToggle = function () {
			var $btn_tip_toggle = $('.button_tip_toggle'),
				$cont_tip_toggle = $('.cont_tip_toggle');

			$btn_tip_toggle.off().on('click', function(e) {
				e.preventDefault();

				$(this).toggleClass('on');
				$(this).next().toggle();

				//console.log($(this));

			});
		}
		tipToggle();


		// btnTop
		// var $btn_top = $('.button_top');

		// $(window).on('scroll', function() {
		// 	var winTop = $(window).scrollTop();
		// 	if ( winTop > 1200 ) {
		// 	$btn_top.show();
		// 	} else {
		// 	$btn_top.hide();
		// 	}
		// });


		// $btn_top.on('click', function() {
		// 	$('html, body').animate( { scrollTop : 0 }, 400 );
		// 	return false;
		// });

		// var $btn_share = $('.button_share');

		// $(window).on('scroll', function() {
		// 	var winTop = $(window).scrollTop();
		// 	if ( winTop > 1200 ) {
		// 	$btn_share.show();
		// 	} else {
		// 	$btn_share.hide();
		// 	}
		// });


        // button
        $(function() {

            $menuLinks = $('.button_go_wrap').find('li');
			$sections = $('.promo_event');
			$_header = $('.site_header');
            // .section들의 top 위치값들
            $sections.each(function(idx, elt) {
				positionTops.push($(elt).offset().top);
				//console.log(positionTops)
            });

            // lnb 메뉴의 a링크와 section과 매칭
            $('.button_go_wrap').find('li>a').each(function(idx, elt) {
                $(elt).click(function() {
					if(!$userAgent){
						$.fn.scrollTo({target:'#'+$sections.get(idx).id, gap:0});
					} else {
						if($('.button_go_wrap').hasClass('top_fixed')){
                            console.log($(window).scrollTop() + " top_fixed")

							$.fn.scrollTo({target:'#'+$sections.get(idx).id, gap: 140});
						}else{
                            console.log($(window).scrollTop() + " none_fixed")

							$.fn.scrollTo({target:'#'+$sections.get(idx).id, gap: 80});
						}

					}

                });
            });

            $(window).scroll(function() {
                var sTop = Number($(this).scrollTop()+300),
                    sHeight = $(window).scrollTop(),
					len = positionTops.length,
                    endPos =  positionTops[len-1],
					targetIdx = 0;

					console.log(endPos)
					console.log(sTop)


                for(var i=0; i<len; i++ ) {
                    if( sTop > 2000 && sTop > positionTops[i]) {
                        targetIdx = i
                        if( i < len -1 && sTop <= positionTops[endPos] ) {
                            break;
                        }
                    }
                }
                $.fn.menuOn(targetIdx);
            });
        });

        $.fn.menuOn = function(idx, elt) {

            var elt = elt || $menuLinks.eq(idx).children().get(0), // a link
                $sub_menu = $(elt).parent().eq(0), // li.link_event
                winTop = $(window).scrollTop();

			$sub_menu.addClass('on');
			//console.log(elt)

            $menuLinks.each(function() {
                if( this != $sub_menu.get(0) ) {

                    $(this).removeClass('on');
                }
            });
        }

        $.fn.scrollTo = function( obj ){

            var target = obj.target || '';
            if (!target) {
                return;
            }

            var gap = (obj.gap || 0),
                speed = (obj.speed || 300),
                variable = (obj.variable ? obj.variable : 0),
                variableHeight = (variable ? $(variable).height() - 140 : 0);

            console.log(gap)

            $('body,html').animate({scrollTop: ($(target).offset().top - gap - variableHeight), duration : speed});

        }

        // var _rouletteStart = (function(){
        //     var _btn, pArr, _roulette;
        //     function init(){
        //         _btn = $('#_rouletteBtn');
        //         pArr = ["0","1","2","3","4:꽝","5","6","7","8","9"];
        //         _roulette = $('#_roulette');
        //         eventBind();
        //     }
        //     function eventBind(){
        //         _btn.on('click', function(){
        //             _roulette.rotate({
        //                 angle:0,
        //                 animateTo:360 * 5 + randomize(0, 360),
        //                 easing: easeOutCirc,
        //                 duration:4000
        //              });
        //         })
        //     }
        //     function randomize($min, $max){
        //         return Math.floor(Math.random() * ($max - $min + 1)) + $min;
        //     }
        //     var easeOutCirc = function (x, t, b, c, d) {
        //         return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        //     };
        //     return {
        //         init:init
        //     }
        // })();
        // _rouletteStart.init();
	}

    var delimanca0726 = function delimanca0726() {
			console.log('test')

        // sub tap slide
        var promoSlide1 = function () {

            var idx,
                $_promotion = $('.delimanca0726'),
                $promo_slides1 = $_promotion.find('.promo_slides');

            $('.promo_slides .item').each(function (i) {
                if ($(this).hasClass("on")) {
                    idx = i;
                }
            });

            $promo_slides1.slick({
                prevArrow: '<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전</span></button>',
                nextArrow: '<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음</span></button>',
                dots: false,
                autoplay: false,
                pauseOnDotsHover: true,
                draggable: true,
                centerMode: true,
                initialSlide: idx,
                arrows: true,
                infinite: true,
                variableWidth: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 480,
                        settings: {
                            prevArrow: '<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전</span></button>',
                            nextArrow: '<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음</span></button>',
                            slidesToShow: 1,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: false,
                            centerMode: true,
                            centerPadding: '16px',
                        }
                    },
                ]
            });
        }
        promoSlide1();

    }

    var augustBenefit = function augustBenefit() {

        var idx,
            $menuLinks,
            $sections,
            $userAgent,
            $_header,
            positionTops = [];

        $userAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

        if ($('.august_benefit').length) {
            if ($('.flex_week').length){
                if (!$userAgent) {
                    $(window).on('scroll', function () {
                        var winTop = $(window).scrollTop();
                        if (winTop > 1100) {
                            $('.button_go_wrap').addClass('top_fixed');
                            $('.august_benefit').css({ 'padding-top': 110 });
                        } else {
                            $('.button_go_wrap').removeClass('top_fixed');
                            $('.august_benefit').css({ 'padding-top': 0 });
                        }
                    });
                } else {
                    $(window).on('scroll', function () {
                        var winTop = $(window).scrollTop();
                        if (winTop > 240) {
                            $('.button_go_wrap').addClass('top_fixed');
                            $('.august_benefit').css({ 'padding-top': $('.button_go_wrap').outerHeight() });
                        } else {
                            $('.button_go_wrap').removeClass('top_fixed');
                            $('.august_benefit').css({ 'padding-top': 0 });
                        }
                    });
                }
            } else if ($('.november_benefit').length){
                if (!$userAgent) {
                    $(window).on('scroll', function () {
                        var winTop = $(window).scrollTop();
                        if (winTop > 950) {
                            $('.button_go_wrap').addClass('top_fixed');
                            $('.august_benefit').css({ 'padding-top': 100 });
                        } else {
                            $('.button_go_wrap').removeClass('top_fixed');
                            $('.august_benefit').css({ 'padding-top': 0 });
                        }
                    });
                } else {
                    $(window).on('scroll', function () {
                        var winTop = $(window).scrollTop();
                        if (winTop > 480) {
                            $('.button_go_wrap').addClass('top_fixed');
                            $('.august_benefit').css({ 'padding-top': 60 });
                        } else {
                            $('.button_go_wrap').removeClass('top_fixed');
                            $('.august_benefit').css({ 'padding-top': 0 });
                        }
                    });
                }
            }else{
                if (!$userAgent) {
                    $(window).on('scroll', function () {
                        var winTop = $(window).scrollTop();
                        if (winTop > 1220) {
                            $('.button_go_wrap').addClass('top_fixed');
                            $('.august_benefit').css({ 'padding-top': 150 });
                        } else {
                            $('.button_go_wrap').removeClass('top_fixed');
                            $('.august_benefit').css({ 'padding-top': 0 });
                        }
                    });
                } else {
                    $(window).on('scroll', function () {
                        var winTop = $(window).scrollTop();
                        if (winTop > 480) {
                            $('.button_go_wrap').addClass('top_fixed');
                            $('.august_benefit').css({ 'padding-top': 120 });
                        } else {
                            $('.button_go_wrap').removeClass('top_fixed');
                            $('.august_benefit').css({ 'padding-top': 0 });
                        }
                    });
                }
            }

        }



        var tabConts = function () {
            var $tab_container = $('.tab_container'),
                $tab_menus = $tab_container.find('.tab_menu li a'),
                $tab_conts = $tab_container.find('.tab_conts'),
                $tab_cont = $tab_conts.find('.tab_cont');

            var changeCont = function (index) {
                if (index >= 0 && index <= $tab_menus.length) {

                    if (!$(this).hasClass('active')) {
                        $($tab_cont[index]).siblings().removeClass('active');
                        $($tab_cont[index]).addClass('active');
                    } else {
                        $($tab_cont[index]).removeClass('active');
                        $($tab_cont[index]).addClass('active');
                    }
                }
            };

            var clickMenu = function (link, index) {
                link.addEventListener('click', function (e) {
                    e.preventDefault();

                    if (!$(this).parent().hasClass('active')) {
                        $(this).parent().siblings().removeClass('active');
                        $(this).parent().addClass('active');
                    } else {
                        $(this).parent().removeClass('active');
                        $(this).parent().addClass('active');
                    }
                    changeCont(index);
                });
            };

            for (var $tab_menu, i = 0, l = $tab_menus.length; i < l; i++) {
                $tab_menu = $tab_menus[i];
                clickMenu($tab_menu, i);
            }
        }
        tabConts()
        // button
        $(function () {

            $menuLinks = $('.button_go_wrap').find('li');
            $sections = $('.promo_event');
            $_header = $('.site_header');
            // .section들의 top 위치값들
            $sections.each(function (idx, elt) {
                positionTops.push($(elt).offset().top);
                //console.log(positionTops)
            });

            // lnb 메뉴의 a링크와 section과 매칭
            $('.button_go_wrap').find('li>a').each(function (idx, elt) {
                $(elt).click(function () {
                    if (!$userAgent) {
                        $.fn.scrollTo({ target: '#' + $sections.get(idx).id, gap: 0 });
                    } else {
                        if ($('.button_go_wrap').hasClass('top_fixed')) {
                            $.fn.scrollTo({ target: '#' + $sections.get(idx).id, gap: 100 });
                        } else {
                            $.fn.scrollTo({ target: '#' + $sections.get(idx).id, gap: $('.button_go_wrap').outerHeight() });
                        }

                    }

                });
            });

            $(window).scroll(function () {
                var sTop = Number($(this).scrollTop() + 300),
                    sHeight = $(window).scrollTop(),
                    len = positionTops.length,
                    endPos = positionTops[len - 1],
                    targetIdx = 0;

                //console.log(endPos)
                //console.log(sTop)


                for (var i = 0; i < len; i++) {
                    if (sTop > 2000 && sTop > positionTops[i]) {
                        targetIdx = i
                        if (i < len - 1 && sTop <= positionTops[endPos]) {
                            break;
                        }
                    }
                }
                $.fn.menuOn(targetIdx);
            });
        });

        $.fn.menuOn = function (idx, elt) {

            var elt = elt || $menuLinks.eq(idx).children().get(0), // a link
                $sub_menu = $(elt).parent().eq(0), // li.link_event
                winTop = $(window).scrollTop();

            $sub_menu.addClass('on');
            //console.log(elt)

            $menuLinks.each(function () {
                if (this != $sub_menu.get(0)) {

                    $(this).removeClass('on');
                }
            });
        }

        $.fn.scrollTo = function (obj) {

            var target = obj.target || '';
            if (!target) {
                return;
            }

            var gap = obj.gap || 0,
                speed = obj.speed || 500,
                variable = obj.variable ? obj.variable : 0,
                variableHeight = variable ? $(variable).height() - 100 : 0;

            $('body,html').stop().animate({ scrollTop: ($(target).offset().top - gap - variableHeight), duration: speed });

        }
    }

    var february_benefit = function february_benefit() {

        var idx,
            $menuLinks,
            $sections,
            $userAgent,
            $_header,
            positionTops = [];

        $userAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

        if ($('.february_benefit').length) {
                if (!$userAgent) {
                    $(window).on('scroll', function () {
                        var winTop = $(window).scrollTop();
                        if (winTop > 271) {
                            $('.button_go_wrap').addClass('top_fixed');
                            $('.february_benefit').css({ 'padding-top': 50 });
                        } else {
                            $('.button_go_wrap').removeClass('top_fixed');
                            $('.february_benefit').css({ 'padding-top': 0 });
                        }
                    });
                } else {
                    $(window).on('scroll', function () {
                        var winTop = $(window).scrollTop();
                        if (winTop > 0) {
                            $('.button_go_wrap').addClass('top_fixed');
                            $('.february_benefit').css({ 'padding-top': 0 });
                        } else {
                            $('.button_go_wrap').removeClass('top_fixed');
                            $('.february_benefit').css({ 'padding-top': 0 });
                        }
                    });
                }
            

        }



        var tabConts = function () {
            var $tab_container = $('.tab_container'),
                $tab_menus = $tab_container.find('.tab_menu li a'),
                $tab_conts = $tab_container.find('.tab_conts'),
                $tab_cont = $tab_conts.find('.tab_cont');

            var changeCont = function (index) {
                if (index >= 0 && index <= $tab_menus.length) {

                    if (!$(this).hasClass('active')) {
                        $($tab_cont[index]).siblings().removeClass('active');
                        $($tab_cont[index]).addClass('active');
                    } else {
                        $($tab_cont[index]).removeClass('active');
                        $($tab_cont[index]).addClass('active');
                    }
                }
            };

            var clickMenu = function (link, index) {
                link.addEventListener('click', function (e) {
                    e.preventDefault();

                    if (!$(this).parent().hasClass('active')) {
                        $(this).parent().siblings().removeClass('active');
                        $(this).parent().addClass('active');
                    } else {
                        $(this).parent().removeClass('active');
                        $(this).parent().addClass('active');
                    }
                    changeCont(index);
                });
            };

            for (var $tab_menu, i = 0, l = $tab_menus.length; i < l; i++) {
                $tab_menu = $tab_menus[i];
                clickMenu($tab_menu, i);
            }
        }
        tabConts()
        // button
        $(function () {

            $menuLinks = $('.button_go_wrap').find('li');
            $sections = $('.promo_event');
            $_header = $('.site_header');
            // .section들의 top 위치값들
            $sections.each(function (idx, elt) {
                positionTops.push($(elt).offset().top);
                //console.log(positionTops)
            });

            // lnb 메뉴의 a링크와 section과 매칭
            $('.button_go_wrap').find('li>a').each(function (idx, elt) {
                $(elt).click(function () {
                    if (!$userAgent) {
                        $.fn.scrollTo({ target: '#' + $sections.get(idx).id, gap: 120 });
                    } else {
                        if ($('.button_go_wrap').hasClass('top_fixed')) {
                            $.fn.scrollTo({ target: '#' + $sections.get(idx).id, gap: 110 });
                        } else {
                            $.fn.scrollTo({ target: '#' + $sections.get(idx).id, gap: $('.button_go_wrap').outerHeight() });
                        }

                    }

                });
            });

            $(window).scroll(function () {
                var sTop = Number($(this).scrollTop() + 270),
                    sHeight = $(window).scrollTop(),
                    len = positionTops.length,
                    endPos = positionTops[len - 1],
                    targetIdx = 0;

                //console.log(endPos)
                //console.log(sTop)


                for (var i = 0; i < len; i++) {
                    if (sTop > 978 && sTop > positionTops[i]) {
                        targetIdx = i
                        if (i < len - 1 && sTop <= positionTops[endPos]) {
                            break;
                        }
                    }
                }
                $.fn.menuOn(targetIdx);
            });
        });

        $.fn.menuOn = function (idx, elt) {

            var elt = elt || $menuLinks.eq(idx).children().get(0), // a link
                $sub_menu = $(elt).parent().eq(0), // li.link_event
                winTop = $(window).scrollTop();

            $sub_menu.addClass('on');
            //console.log(elt)

            $menuLinks.each(function () {
                if (this != $sub_menu.get(0)) {

                    $(this).removeClass('on');
                }
            });
        }

        $.fn.scrollTo = function (obj) {

            var target = obj.target || '';
            if (!target) {
                return;
            }

            var gap = obj.gap || 0,
                speed = obj.speed || 500,
                variable = obj.variable ? obj.variable : 0,
                variableHeight = variable ? $(variable).height() - 100 : 0;

            $('body,html').stop().animate({ scrollTop: ($(target).offset().top - gap - variableHeight), duration: speed });

        }
    }

    var renew_benefit = function renew_benefit() {

        var idx,
            $menuLinks,
            $sections,
            $userAgent,
            $_header,
            positionTops = [];

        $userAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

        if ($('.renew_benefit').length) {
                if (!$userAgent) {
                    $(window).on('scroll', function () {
                        var winTop = $(window).scrollTop();
                        if (winTop > 271) {
                            $('.button_go_wrap').addClass('top_fixed');
                            $('.renew_benefit').css({ 'padding-top': 50 });
                        } else {
                            $('.button_go_wrap').removeClass('top_fixed');
                            $('.renew_benefit').css({ 'padding-top': 0 });
                        }
                    });
                } else {
                    $(window).on('scroll', function () {
                        var winTop = $(window).scrollTop();
                        if (winTop > 0) {
                            $('.button_go_wrap').addClass('top_fixed');
                            $('.renew_benefit').css({ 'padding-top': 0 });
                        } else {
                            $('.button_go_wrap').removeClass('top_fixed');
                            $('.renew_benefit').css({ 'padding-top': 0 });
                        }
                    });
                }
            

        }



        var tabConts = function () {
            var $tab_container = $('.tab_container'),
                $tab_menus = $tab_container.find('.tab_menu li a'),
                $tab_conts = $tab_container.find('.tab_conts'),
                $tab_cont = $tab_conts.find('.tab_cont');

            var changeCont = function (index) {
                if (index >= 0 && index <= $tab_menus.length) {

                    if (!$(this).hasClass('active')) {
                        $($tab_cont[index]).siblings().removeClass('active');
                        $($tab_cont[index]).addClass('active');
                    } else {
                        $($tab_cont[index]).removeClass('active');
                        $($tab_cont[index]).addClass('active');
                    }
                }
            };

            var clickMenu = function (link, index) {
                link.addEventListener('click', function (e) {
                    e.preventDefault();

                    if (!$(this).parent().hasClass('active')) {
                        $(this).parent().siblings().removeClass('active');
                        $(this).parent().addClass('active');
                    } else {
                        $(this).parent().removeClass('active');
                        $(this).parent().addClass('active');
                    }
                    changeCont(index);
                });
            };

            for (var $tab_menu, i = 0, l = $tab_menus.length; i < l; i++) {
                $tab_menu = $tab_menus[i];
                clickMenu($tab_menu, i);
            }
        }
        tabConts()
        // button
        $(function () {

            $menuLinks = $('.button_go_wrap').find('li');
            $sections = $('.promo_event');
            $_header = $('.site_header');
            // .section들의 top 위치값들
            $sections.each(function (idx, elt) {
                positionTops.push($(elt).offset().top);
                //console.log(positionTops)
            });

            // lnb 메뉴의 a링크와 section과 매칭
            $('.button_go_wrap').find('li>a').each(function (idx, elt) {
                $(elt).click(function () {
                    if (!$userAgent) {
                        $.fn.scrollTo({ target: '#' + $sections.get(idx).id, gap: 120 });
                    } else {
                        if ($('.button_go_wrap').hasClass('top_fixed')) {
                            $.fn.scrollTo({ target: '#' + $sections.get(idx).id, gap: 110 });
                        } else {
                            $.fn.scrollTo({ target: '#' + $sections.get(idx).id, gap: $('.button_go_wrap').outerHeight() });
                        }

                    }

                });
            });

            $(window).scroll(function () {
                var sTop = Number($(this).scrollTop() + 270),
                    sHeight = $(window).scrollTop(),
                    len = positionTops.length,
                    endPos = positionTops[len - 1],
                    targetIdx = 0;

                //console.log(endPos)
                //console.log(sTop)


                for (var i = 0; i < len; i++) {
                    if (sTop > 978 && sTop > positionTops[i]) {
                        targetIdx = i
                        if (i < len - 1 && sTop <= positionTops[endPos]) {
                            break;
                        }
                    }
                }
                $.fn.menuOn(targetIdx);
            });
        });

        $.fn.menuOn = function (idx, elt) {

            var elt = elt || $menuLinks.eq(idx).children().get(0), // a link
                $sub_menu = $(elt).parent().eq(0), // li.link_event
                winTop = $(window).scrollTop();

            $sub_menu.addClass('on');
            //console.log(elt)

            $menuLinks.each(function () {
                if (this != $sub_menu.get(0)) {

                    $(this).removeClass('on');
                }
            });
        }

        $.fn.scrollTo = function (obj) {

            var target = obj.target || '';
            if (!target) {
                return;
            }

            var gap = obj.gap || 0,
                speed = obj.speed || 500,
                variable = obj.variable ? obj.variable : 0,
                variableHeight = variable ? $(variable).height() - 100 : 0;

            $('body,html').stop().animate({ scrollTop: ($(target).offset().top - gap - variableHeight), duration: speed });

        }
    }

    $(".orange-btn").click(function(){
        //alert('test');
        $(".pf_fc-box").css("display","block");
    });
    $(".pf_box-close").click(function(){
        $(".pf_fc-box").css("display","none");
    });

	global.hiphoperEvent = {
        'appFlexSlide': appFlexSlide,
        'flexslide_0114': flexslide_0114,
        'eventSliderMultiple': eventSliderMultiple,
        'mobileTabUiAction': mobileTabUiAction,
        'prizewinnerlayerOpen': prizewinnerlayerOpen,
        'eventContentSlider': eventContentSlider,
		'eventLookbookSlide': eventLookbookSlide,
		'openEventSlide': openEventSlide,
		'visualFadeInOut': visualFadeInOut,
		'eventLogoSlide' : eventLogoSlide,
		'moEventSlide' : moEventSlide,
		'moEventContSlide' : moEventContSlide,
		'eventBannerSlide' : eventBannerSlide,
		'eventSlideSyncing' : eventSlideSyncing,
        'buttonLink' : buttonLink,
        'tipToggle': tipToggle,
        'videoAutoPlayChk': videoAutoPlayChk,
		//'eventContSlide' : eventContSlide,
		//'aprilPromotion' : aprilPromotion,
		'amorSale' : amorSale,
        //'coolSale201906' : coolSale201906,
        //'newtro0710' : newtro0710,
        'eventClearanceslide': eventClearanceslide,
        'delimanca0726': delimanca0726,
        'augustBenefit': augustBenefit,
        'february_benefit': february_benefit,
        'primeSaleSlide': primeSaleSlide,
        'primeSaleSlide2': primeSaleSlide2,
        'flexslide_0212':flexslide_0212,
        'event_stillcold': event_stillcold,
        'primeSaleSlide3':primeSaleSlide3,
        'new_arrival':new_arrival,
        'flexslide_0312':flexslide_0312,
        'appflex03':appflex03,
        'promotion0330':promotion0330,
        'renew_benefit':renew_benefit,
        'magazineSlide':magazineSlide,
        'eventSlide':eventSlide
        
	};

})(this);

// 함수 호출

//hiphoperEvent.eventLookbookSlide();
hiphoperEvent.openEventSlide();
hiphoperEvent.visualFadeInOut();
hiphoperEvent.eventLogoSlide();
hiphoperEvent.moEventSlide();
hiphoperEvent.eventBannerSlide();
hiphoperEvent.eventSlideSyncing();
hiphoperEvent.moEventContSlide();
hiphoperEvent.buttonLink();
//hiphoperEvent.eventContSlide();
hiphoperEvent.amorSale();
//hiphoperEvent.aprilPromotion();
//hiphoperEvent.coolSale201906();
// hiphoperEvent.newtro0710();
//hiphoperEvent.delimanca0726();
hiphoperEvent.augustBenefit();
hiphoperEvent.february_benefit();
hiphoperEvent.tipToggle();
//hiphoperEvent.videoAutoPlayChk();

window.addEventListener("load", function(event) {
    hiphoperEvent.eventClearanceslide();
    if ($('.amorsale0605').length){
        hiphoperEvent.amorSale();
    }
    // if (document.getElementsByClassName('event_lookbook_slides').length > 0){

    // }
    if($('.site_main').hasClass('none_cms')){
        hiphoperEvent.tipToggle();
    }
	if(document.getElementsByClassName('delimanca0726').length > 0){
		hiphoperEvent.delimanca0726();
    }
    else if (document.getElementsByClassName('august_benefit').length > 0) {
        hiphoperEvent.augustBenefit();
    }
    else if (document.getElementsByClassName('february_benefit').length > 0) {
        hiphoperEvent.february_benefit();
    }
    else if (document.getElementsByClassName('wassupb_0712').length > 0){
        hiphoperEvent.videoAutoPlayChk();
        hiphoperEvent.eventLookbookSlide();
    }
    else if (document.getElementsByClassName('exhibition_watch').length > 0) {
        hiphoperEvent.eventLookbookSlide();
    } 
    else if (document.getElementsByClassName('new_year').length > 0) {
        hiphoperEvent.eventContentSlider();
        hiphoperEvent.prizewinnerlayerOpen();
        hiphoperEvent.mobileTabUiAction();
    }
    else if (this.document.getElementsByClassName('new_year_new_cloth').length > 0){
        hiphoperEvent.eventSliderMultiple();
    }
    else if (this.document.getElementsByClassName('_0114').length > 0) {
        hiphoperEvent.flexslide_0114();
    }
    else if (this.document.getElementsByClassName('app_flex').length > 0) {
        hiphoperEvent.appFlexSlide();
    }
    else if (this.document.getElementsByClassName('prime_sale').length > 0) {
        hiphoperEvent.primeSaleSlide();
    }
    else if (this.document.getElementsByClassName('prime_sale_shoes').length > 0) {
        hiphoperEvent.primeSaleSlide2();
    }
    else if (this.document.getElementsByClassName('_0212').length > 0) {
        hiphoperEvent.flexslide_0212();
    }
    else if (this.document.getElementsByClassName('still_cold').length > 0) {
        hiphoperEvent.event_stillcold();
    }
    else if (this.document.getElementsByClassName('prime_sale0228').length > 0) {
        hiphoperEvent.primeSaleSlide3();
    }
    else if (this.document.getElementsByClassName('new_arrival').length > 0) {
        hiphoperEvent.new_arrival();
    }
    else if (this.document.getElementsByClassName('_0312').length > 0) {
        hiphoperEvent.flexslide_0312();
    }
    else if (this.document.getElementsByClassName('appflex').length > 0) {
        hiphoperEvent.appflex03();
    }
    else if (this.document.getElementsByClassName('nolnol').length > 0) {
        hiphoperEvent.promotion0330();
    }
    else if (document.getElementsByClassName('renew_benefit').length > 0) {
        hiphoperEvent.renew_benefit();
    }
    else if (document.getElementsByClassName('youknowwhat2107').length > 0) {
        hiphoperEvent.magazineSlide();
    }
    else if (document.getElementsByClassName('store_event').length > 0) {
        hiphoperEvent.eventSlide();
    }
});
