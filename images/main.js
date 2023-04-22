/*
 ** 回版頭
*/
jQuery(function(){
	jQuery("#gotop").click(function(){
		jQuery("html,body").stop(true,false).animate({scrollTop:0},700); //設定回頁面頂端
		return false;
	});
  jQuery(window).scroll(function() {
      if ( jQuery(this).scrollTop() > 300){ //設定大於300px才顯示浮層
          jQuery('#gotop').fadeIn("fast");
      } else {
          jQuery('#gotop').stop().fadeOut("fast");
      }
  });
});

$(function() {
	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


	// /*
	//  ** 選單置頂
	// */
	// $(window).scroll(function() {
	// 	var top = $('.containArea').offset().top;

	// 	if ($(this).scrollTop() > top){
	// 		var height = $('.nav').eq(0).height();
	// 		var paddingTop = parseInt($('.nav').eq(0).css('padding-top'), 10) || 0;
	// 		var paddingBottom = parseInt($('.nav').eq(0).css('padding-bottom'), 10) || 0;

	// 		$('.nav').addClass('fixed');
	// 		$('.innerArea').eq(0).css('padding-top', height + paddingTop + paddingBottom);

	// 	} else {
	// 		$('.nav').removeClass('fixed');
	// 		$('.innerArea').removeAttr('style');
	// 	}
	// });
	// $(window).scroll();

	$('.type').find($('.type_item')).click(function(e) {
		e.preventDefault();
		if ($(this).index() == 1){
			$(window).scroll(function() {
				var top = $('.containArea').offset().top;

				if ($(this).scrollTop() > top){
					var height = $('.nav').eq(1).height();
					var paddingTop = parseInt($('.nav').eq(1).css('padding-top'), 10) || 0;
					var paddingBottom = parseInt($('.nav').eq(1).css('padding-bottom'), 10) || 0;

					$('.nav').addClass('fixed');
					$('.innerArea').eq(1).css('padding-top', height + paddingTop + paddingBottom);

				} else {
					$('.nav').removeClass('fixed');
					$('.innerArea').removeAttr('style');
				}
			});
			$(window).scroll();
		}
	});


	/*
	 ** wow.js
	*/
  var wow = new WOW({
    boxClass:     'wow',      // 要套用WOW.js縮需要的動畫class(預設是wow)
    animateClass: 'animated', // 要"動起來"的動畫(預設是animated, 因此如果你有其他動畫library要使用也可以在這裡調整)
    mobile:       true,       // 手機上是否要套用動畫 (預設是true)
    live:         true,       // 非同步產生的內容是否也要套用 (預設是true, 非常適合搭配SPA)
    callback:     function(box) {
      // 當每個要開始時, 呼叫這裡面的內容, 參數是要開始進行動畫特效的element DOM
    },
    scrollContainer: null // 可以設定成只套用在某個container中捲動才呈現, 不設定就是整個視窗
  });
	wow.init();


	/*
	 ** 鍋子選單hover，鍋子改變位置
	*/
	$('.type_item').hover(function(){
		var i = $(this).index();

		$('.pot').eq(i).css({
			'transform': 'translate(0, -20px)',
			'transition': 'transform 0.2s linear'
		});
	},function(){
		var i = $(this).index();
		$('.pot').eq(i).css({
			'transform': 'translate(0, 0)',
			'transition': 'transform 0.2s linear'
		});
	});


	/*
	 ** 鍋子切換
	*/
	$('.innerArea').each(function(index) {
		$(this).addClass('innerArea-' + index);
	});

	$('.innerArea').eq(0).addClass('active');
	$('.type_item').eq(0).addClass('active');

	$('.type_item').click(function(e) {
		e.preventDefault();

		var $this = $(this);
		var i = $(this).index();

		var $current = $('.type_item').filter('.active');
		var currentI = $('.type_item').index($current);
		if (!currentI == i){
			var typeHeight = $('.type').offset().top;

			$('html, body').stop().animate({
				scrollTop: typeHeight
			}, {
				duration: 300
			});
		}

		$('.type_item').removeClass('active');
		$('.type_item').eq(i).addClass('active');




		$('.innerArea').removeClass('active');
		$('.innerArea').eq(i).addClass('active');

		// // display:none --> block，重新調用slick
		// $('.area03_slider').slick('setPosition');
		// $('.dishes_slider').slick('setPosition');

		var wow = new WOW({
			boxClass:     'wow',      // 要套用WOW.js縮需要的動畫class(預設是wow)
			animateClass: 'animated', // 要"動起來"的動畫(預設是animated, 因此如果你有其他動畫library要使用也可以在這裡調整)
			mobile:       true,       // 手機上是否要套用動畫 (預設是true)
			live:         true,       // 非同步產生的內容是否也要套用 (預設是true, 非常適合搭配SPA)
			callback:     function(box) {
				// 當每個要開始時, 呼叫這裡面的內容, 參數是要開始進行動畫特效的element DOM
			},
			scrollContainer: null // 可以設定成只套用在某個container中捲動才呈現, 不設定就是整個視窗
		});
		wow.init();
	});


	// /*
	//  ** 產品輪播
	// */
	// var productSlide1 = new Slide({
	// 	indicatorSelectors: '.innerArea-0 .Area02 .product_tag .product_tag_item',
	// 	itemSelectors: '.innerArea-0 .Area02 .product .product_item',
	// 	// prevSelectors: '.diyarea .diyarrow .arrowl',
	// 	// nextSelectors: '.diyarea .diyarrow .arrowr',
	// 	// mode: 'opacity',
	// 	// duration: 5000,
	// 	isAutoPlay: false
	// });

	// var productSlide2 = new Slide({
	// 	indicatorSelectors: '.innerArea-1 .Area02 .product_tag .product_tag_item',
	// 	itemSelectors: '.innerArea-1 .Area02 .product .product_item',
	// 	isAutoPlay: false
	// });

	// /*
	//  ** 萬用鍋使用指南切換
	// */
	// $('.guild_tab_item').eq(0).addClass('active');
	// $('.innerArea-0 .area03_slider').eq(0).addClass('active');

	// $('.guild_tab_item').click(function(e) {
	// 	e.preventDefault();
	// 	var $this = $(this);
	// 	var i = $(this).index();

	// 	$('.guild_tab_item').removeClass('active');
	// 	$('.guild_tab_item').eq(i).addClass('active');

	// 	$('.innerArea-0 .area03_slider').removeClass('active');
	// 	$('.innerArea-0 .area03_slider').eq(i).addClass('active');

	// 	// display:none --> block，重新調用slick
	// 	$('.innerArea-0 .area03_slider').slick('setPosition');
	// });

	// /*
	//  ** 使用指南
	// */
  // $('.innerArea-0 .area03_slider').slick({
  //   // dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1220,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });

	// $('.innerArea-1 .area03_slider').slick({
	// 	infinite: true,
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	responsive: [
	// 		{
	// 			breakpoint: 1220,
	// 			settings: {
	// 				slidesToShow: 2,
	// 				slidesToScroll: 1,
	// 				infinite: true
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 600,
	// 			settings: {
	// 				slidesToShow: 2,
	// 				slidesToScroll: 1
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 480,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1
	// 			}
	// 		}
	// 	]
	// });


	/*
	 ** 推薦食譜
	*/
	$('.innerArea-0 .dishes_tab_item').eq(0).addClass('active');
	$('.innerArea-1 .dishes_tab_item').eq(0).addClass('active');

	$('.innerArea-0 .dishes_slider').eq(0).addClass('active');
	$('.innerArea-1 .dishes_slider').eq(0).addClass('active');

	// // 萬用鍋食譜種類切換
	// $('.innerArea-0 .dishes_tab_item').click(function(e) {
	// 	e.preventDefault();
	// 	var $this = $(this);
	// 	var i = $(this).index();

	// 	$('.innerArea-0 .dishes_tab_item').removeClass('active');
	// 	$('.innerArea-0 .dishes_tab_item').eq(i).addClass('active');

	// 	$('.innerArea-0 .dishes_slider').removeClass('active');
	// 	$('.innerArea-0 .dishes_slider').eq(i).addClass('active');

	// 	// display:none --> block，重新調用slick
	// 	$('.innerArea-0 .dishes_slider').slick('setPosition');
	// });

	// // 氣炸鍋食譜種類切換
	// $('.innerArea-1 .dishes_tab_item').click(function(e) {
	// 	e.preventDefault();
	// 	var $this = $(this);
	// 	var i = $(this).index();

	// 	$('.innerArea-1 .dishes_tab_item').removeClass('active');
	// 	$('.innerArea-1 .dishes_tab_item').eq(i).addClass('active');

	// 	$('.innerArea-1 .dishes_slider').removeClass('active');
	// 	$('.innerArea-1 .dishes_slider').eq(i).addClass('active');

	// 	// display:none --> block，重新調用slick
	// 	$('.innerArea-1 .dishes_slider').slick('setPosition');
	// });

	// 圖片背景
	$('.innerArea-0 .dishes_slider_item').each(function(index) {
		var $dishesImg = $(this).find($('.dishes_slider_img'));
		$dishesImg.css('background-image', 'url(images/area05_img-1-' + (index + 1) + '.jpg)');

		var $videoMask = $('.recipe_box').eq(index).find($('.recipe_video_mask'));
		$videoMask.css('background-image', 'url(images/yt_mask-0-' + (index + 1) + '.png)');

		// 點擊打開食譜
		// $(this).addClass('dishes_slider_item-' + (index + 1));
		$(this).click(function(e) {
			e.preventDefault();

			// 關閉滾動
			$('body').css({
				'overflow': 'hidden'
				// 'height' : '100vh'
			});

			$('.white').eq(0).fadeIn();
			$('.mask0').fadeIn();
			$('.mask0 .recipe_box').eq(index).fadeIn();

			var $html = $(
        '<div class="recipe_yt"></div>'
      );

			if(!$('.mask0 .recipe_box').eq(index).find($('.recipe_yt')).length){
				$('.recipe_video_inner').append($html);
			}

			$('.mask0 .recipe_box').eq(index).find($('.recipe_video_mask')).fadeIn();

			$('.recipe_video_mask').click(function(e){
				$(this).fadeOut();
			});

			$('.mask0 .recipe_box').each(function(index) {
				var $video = $(this).find($('.recipe_yt'));
				$video.attr('id','recipe_yt-'+ index);

				var player1;
				var player2;
				var player3;
				var player4;
				var player5;
				var player6;
				var player7;
				var player8;
				var player9;
				var player10;
				var player11;
				var player12;
				function onYouTubeIframeAPIReady() {
					player1 = new YT.Player('recipe_yt-0', {
			      height: '315',
			      width: '560',
			      videoId: 'unD9tRu_B4s',
						events: {
			        'onReady': onPlayerReady,
			        'onStateChange': onPlayerStateChange
			      }
			    });
			    player2 = new YT.Player('recipe_yt-1', {
			      height: '100%',
			      width: '100%',
			      videoId: 'Uwwb80Ipqx0',
						events: {
			        'onReady': onPlayerReady,
			        'onStateChange': onPlayerStateChange
			      }
			    });

					player3 = new YT.Player('recipe_yt-2', {
			      height: '100%',
			      width: '100%',
			      videoId: 'Cp1TXQH5agI',
						events: {
			        'onReady': onPlayerReady,
			        'onStateChange': onPlayerStateChange
			      }
			    });
					player4 = new YT.Player('recipe_yt-3', {
			      height: '315',
			      width: '560',
			      videoId: 'aKHcf5NWuHM',
						events: {
			        'onReady': onPlayerReady,
			        'onStateChange': onPlayerStateChange
			      }
			    });
			    player5 = new YT.Player('recipe_yt-4', {
			      height: '100%',
			      width: '100%',
			      videoId: 'UXffIZarz34',
						events: {
			        'onReady': onPlayerReady,
			        'onStateChange': onPlayerStateChange
			      }
			    });

					player6 = new YT.Player('recipe_yt-5', {
			      height: '100%',
			      width: '100%',
			      videoId: '4ZNUwvSZXnc',
						events: {
			        'onReady': onPlayerReady,
			        'onStateChange': onPlayerStateChange
			      }
			    });
					player7 = new YT.Player('recipe_yt-6', {
			      height: '315',
			      width: '560',
			      videoId: 'izcff6zqttg',
						events: {
			        'onReady': onPlayerReady,
			        'onStateChange': onPlayerStateChange
			      }
			    });
			    player8 = new YT.Player('recipe_yt-7', {
			      height: '100%',
			      width: '100%',
			      videoId: 'zlWVpvlcxj8',
						events: {
			        'onReady': onPlayerReady,
			        'onStateChange': onPlayerStateChange
			      }
			    });

					player9 = new YT.Player('recipe_yt-8', {
			      height: '100%',
			      width: '100%',
			      videoId: 'MWzSYWWo89U',
						events: {
			        'onReady': onPlayerReady,
			        'onStateChange': onPlayerStateChange
			      }
			    });
					player10 = new YT.Player('recipe_yt-9', {
			      height: '315',
			      width: '560',
			      videoId: 'W2AJ7nRnHK0',
						events: {
			        'onReady': onPlayerReady,
			        'onStateChange': onPlayerStateChange
			      }
			    });
			    player11 = new YT.Player('recipe_yt-10', {
			      height: '100%',
			      width: '100%',
			      videoId: 'hJ_GiLGDefA',
						events: {
			        'onReady': onPlayerReady,
			        'onStateChange': onPlayerStateChange
			      }
			    });

					player12 = new YT.Player('recipe_yt-11', {
			      height: '100%',
			      width: '100%',
			      videoId: 'sprZ0fKMteQ',
						events: {
			        'onReady': onPlayerReady,
			        'onStateChange': onPlayerStateChange
			      }
			    });

			    // player = new YT.Player('recipe_yt', {
			    //   events: {
			    //     'onReady': onPlayerReady
			    //     // 'onStateChange': onPlayerStateChange
			    //   }
			    // });
				}

				function onPlayerStateChange(event){
		    	playerSatus = event.data;
				}

				function onPlayerReady(event) {
					event.target.playVideo();
				}

				$('.recipe_video_mask').click(function(e){
					$(this).fadeOut();
					onYouTubeIframeAPIReady();
					// onPlayerReady();
				});
			});
		});
	});

	$('.innerArea-1 .dishes_slider_item').each(function(index) {
		var $dishesImg = $(this).find($('.dishes_slider_img'));
		$dishesImg.css('background-image', 'url(images/area05_img-2-' + (index + 1) + '.jpg)');

		// 點擊打開食譜
		// $(this).addClass('dishes_slider_item-' + (index + 1));
		$(this).click(function(e) {
			e.preventDefault();

			// 關閉滾動
			$('body').css({
				'overflow': 'hidden'
				// 'height' : '100vh'
			});

			$('.white').eq(1).fadeIn();
			$('.mask1').fadeIn();
			$('.mask1 .recipe_box').eq(index).fadeIn();

			var $html = $(
        '<div class="recipe_yt"></div>'
      );

			if(!$('.mask1 .recipe_box').eq(index).find($('.recipe_yt')).length){
				$('.recipe_video_inner').append($html);
			}

			$('.mask1 .recipe_box').eq(index).find($('.recipe_video_mask')).fadeIn();

			$('.recipe_video_mask').click(function(e){
				$(this).fadeOut();
			});

			$('.mask1 .recipe_box').each(function(index) {
				var $video = $(this).find($('.recipe_yt'));
				$video.attr('id','recipe_yt-1-'+ index);

				var player1;
				var player2;
				var player3;
				var player4;
				var player5;
				var player6;
				var player7;
				var player8;
				var player9;
				function onYouTubeIframeAPIReady() {
					player1 = new YT.Player('recipe_yt-1-0', {
			      height: '315',
			      width: '560',
			      videoId: 'tIfAKO2l89s',
						events: {
			        'onReady': onPlayerReady,
			        'onStateChange': onPlayerStateChange
			      }
			    });
			    player2 = new YT.Player('recipe_yt-1-1', {
			      height: '100%',
			      width: '100%',
			      videoId: 'CQ9w3tuhQLI',
						events: {
			        'onReady': onPlayerReady,
			        'onStateChange': onPlayerStateChange
			      }
			    });

					player3 = new YT.Player('recipe_yt-1-2', {
			      height: '100%',
			      width: '100%',
			      videoId: 'wqjFGxddiOw',
						events: {
			        'onReady': onPlayerReady,
			        'onStateChange': onPlayerStateChange
			      }
			    });
					player4 = new YT.Player('recipe_yt-1-3', {
			      height: '315',
			      width: '560',
			      videoId: 'SzmUOaO5YAk',
						events: {
			        'onReady': onPlayerReady,
			        'onStateChange': onPlayerStateChange
			      }
			    });
			    player5 = new YT.Player('recipe_yt-1-4', {
			      height: '100%',
			      width: '100%',
			      videoId: 'AHbjHAH0VeI',
						events: {
			        'onReady': onPlayerReady,
			        'onStateChange': onPlayerStateChange
			      }
			    });

					player6 = new YT.Player('recipe_yt-1-5', {
			      height: '100%',
			      width: '100%',
			      videoId: '-D54h9bz0MQ',
						events: {
			        'onReady': onPlayerReady,
			        'onStateChange': onPlayerStateChange
			      }
			    });
					player7 = new YT.Player('recipe_yt-1-6', {
			      height: '315',
			      width: '560',
			      videoId: 'lr4UbMggKSo',
						events: {
			        'onReady': onPlayerReady,
			        'onStateChange': onPlayerStateChange
			      }
			    });
			    player8 = new YT.Player('recipe_yt-1-7', {
			      height: '100%',
			      width: '100%',
			      videoId: 'IymponbxaV8',
						events: {
			        'onReady': onPlayerReady,
			        'onStateChange': onPlayerStateChange
			      }
			    });

					player9 = new YT.Player('recipe_yt-1-8', {
			      height: '100%',
			      width: '100%',
			      videoId: 'WNqf15FW3ew',
						events: {
			        'onReady': onPlayerReady,
			        'onStateChange': onPlayerStateChange
			      }
			    });
				}

				function onPlayerStateChange(event){
		    	playerSatus = event.data;
				}

				function onPlayerReady(event) {
					event.target.playVideo();
				}

				$('.recipe_video_mask').click(function(e){
					$(this).fadeOut();
					onYouTubeIframeAPIReady();
					// onPlayerReady();
				});
			});
		});
	});


	// // 輪播
  // $('.dishes_slider').slick({
  //   // dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1220,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });


	/*
	 ** 食譜 popup
	*/
	// 關閉
  $('.recipe_close').click(function(e) {
    e.preventDefault();
		$('.white').fadeOut();

		// 停止youtube播放
		// $('.recipe_yt').each(function() {
		// 	this.contentWindow.postMessage('{"event": "command", "func": "stopVideo", "args": ""}', '*');
		// });
		$('.recipe_video_mask').fadeIn();
		$('.recipe_yt').remove();


		// 隱藏
		$('.mask').fadeOut();
		$('.recipe_box').fadeOut();

		$('body').removeAttr('style');
  });

	$('.white').click(function(e) {
		e.preventDefault();

		$(this).fadeOut();
		$('.recipe_video_mask').fadeIn();


		// 隱藏
		$('.mask').fadeOut();
		$('.recipe_box').fadeOut();
		$('body').removeAttr('style');
	});


	/*
	 ** 點擊指定單元
	*/
	$('.type').find($('.type_item')).click(function(e) {
		e.preventDefault();
		if ($(this).index() == 0){
			$(window).scroll(function() {
				// $('.type_item').click(function(e) {
				var height = $('.nav').eq(0).height();
				var paddingTop = parseInt($('.nav').eq(0).css('padding-top'), 10) || 0;
				var paddingBottom = parseInt($('.nav').eq(0).css('padding-bottom'), 10) || 0;

				// console.log(height + paddingTop + paddingBottom);

				// var $menu = $(".menu_box");
				var $tag = $('.nav').find('a');
				// console.log($tag);
				$tag.on('click', function (e) {
					e.preventDefault();
					var $this = $(this);

					var tag = $this.prop('href').substring($this.prop('href').indexOf('#'));
					var $content = $(tag);
					// console.log($content)
					// var height = $('.nav').height();
					// var margin = parseInt($('.wrap').css('margin-top'), 10) || 0;
					// var padding = parseInt($content.css('padding-top'), 10) || 0;
					var top = ($content.offset() || {}).top;
					var top2 = $('.mainArea').offset().top;

					var diduration = Math.max(top / 2, 800);
					diduration = Math.min(diduration, 1000);

					$('html, body').stop().animate({
						scrollTop: top - top2 - (height + paddingTop + paddingBottom)
					}, {
						duration: diduration
					});

					var $content1 = $('#tag-1');
					var $dmTop = ($content1.offset() || {}).top;
					// console.log(top - top2);
				});
				// });
			});
			$(window).scroll();
		} else if ($(this).index() == 1){
			$(window).scroll(function() {
				// $('.type_item').click(function(e) {
				var height = $('.nav').eq(1).height();
				var paddingTop = parseInt($('.nav').eq(1).css('padding-top'), 10) || 0;
				var paddingBottom = parseInt($('.nav').eq(1).css('padding-bottom'), 10) || 0;

				// console.log(height + paddingTop + paddingBottom);

				// var $menu = $(".menu_box");
				var $tag = $('.nav').find('a');
				// console.log($tag);
				$tag.on('click', function (e) {
					e.preventDefault();
					var $this = $(this);

					var tag = $this.prop('href').substring($this.prop('href').indexOf('#'));
					var $content = $(tag);
					// console.log($content)
					// var height = $('.nav').eq(1).height();
					// var margin = parseInt($('.wrap').css('margin-top'), 10) || 0;
					// var padding = parseInt($content.css('padding-top'), 10) || 0;
					var top = ($content.offset() || {}).top;
					var top2 = $('.mainArea').offset().top;

					var diduration = Math.max(top / 2, 800);
					diduration = Math.min(diduration, 1000);

					$('html, body').stop().animate({
						scrollTop: top - top2 - (height + paddingTop + paddingBottom)
					}, {
						duration: diduration
					});

					var $content1 = $('#tag-1');
					var $dmTop = ($content1.offset() || {}).top;
					// console.log(top - top2);
				});
				// });
			});
			$(window).scroll();
		}
	});
	$('.type_item').eq(0).trigger("click");
});
