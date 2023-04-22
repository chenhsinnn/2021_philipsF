/*
 ** �^���Y
*/
jQuery(function(){
	jQuery("#gotop").click(function(){
		jQuery("html,body").stop(true,false).animate({scrollTop:0},700); //�]�w�^��������
		return false;
	});
  jQuery(window).scroll(function() {
      if ( jQuery(this).scrollTop() > 300){ //�]�w�j��300px�~��ܯB�h
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
	//  ** ���m��
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
    boxClass:     'wow',      // �n�M��WOW.js�Y�ݭn���ʵeclass(�w�]�Owow)
    animateClass: 'animated', // �n"�ʰ_��"���ʵe(�w�]�Oanimated, �]���p�G�A����L�ʵelibrary�n�ϥΤ]�i�H�b�o�̽վ�)
    mobile:       true,       // ����W�O�_�n�M�ΰʵe (�w�]�Otrue)
    live:         true,       // �D�P�B���ͪ����e�O�_�]�n�M�� (�w�]�Otrue, �D�`�A�X�f�tSPA)
    callback:     function(box) {
      // ��C�ӭn�}�l��, �I�s�o�̭������e, �ѼƬO�n�}�l�i��ʵe�S�Ī�element DOM
    },
    scrollContainer: null // �i�H�]�w���u�M�Φb�Y��container�����ʤ~�e�{, ���]�w�N�O��ӵ���
  });
	wow.init();


	/*
	 ** ��l���hover�A��l���ܦ�m
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
	 ** ��l����
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

		// // display:none --> block�A���s�ե�slick
		// $('.area03_slider').slick('setPosition');
		// $('.dishes_slider').slick('setPosition');

		var wow = new WOW({
			boxClass:     'wow',      // �n�M��WOW.js�Y�ݭn���ʵeclass(�w�]�Owow)
			animateClass: 'animated', // �n"�ʰ_��"���ʵe(�w�]�Oanimated, �]���p�G�A����L�ʵelibrary�n�ϥΤ]�i�H�b�o�̽վ�)
			mobile:       true,       // ����W�O�_�n�M�ΰʵe (�w�]�Otrue)
			live:         true,       // �D�P�B���ͪ����e�O�_�]�n�M�� (�w�]�Otrue, �D�`�A�X�f�tSPA)
			callback:     function(box) {
				// ��C�ӭn�}�l��, �I�s�o�̭������e, �ѼƬO�n�}�l�i��ʵe�S�Ī�element DOM
			},
			scrollContainer: null // �i�H�]�w���u�M�Φb�Y��container�����ʤ~�e�{, ���]�w�N�O��ӵ���
		});
		wow.init();
	});


	// /*
	//  ** ���~����
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
	//  ** �U����ϥΫ��n����
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

	// 	// display:none --> block�A���s�ե�slick
	// 	$('.innerArea-0 .area03_slider').slick('setPosition');
	// });

	// /*
	//  ** �ϥΫ��n
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
	 ** ���˭���
	*/
	$('.innerArea-0 .dishes_tab_item').eq(0).addClass('active');
	$('.innerArea-1 .dishes_tab_item').eq(0).addClass('active');

	$('.innerArea-0 .dishes_slider').eq(0).addClass('active');
	$('.innerArea-1 .dishes_slider').eq(0).addClass('active');

	// // �U���筹�к�������
	// $('.innerArea-0 .dishes_tab_item').click(function(e) {
	// 	e.preventDefault();
	// 	var $this = $(this);
	// 	var i = $(this).index();

	// 	$('.innerArea-0 .dishes_tab_item').removeClass('active');
	// 	$('.innerArea-0 .dishes_tab_item').eq(i).addClass('active');

	// 	$('.innerArea-0 .dishes_slider').removeClass('active');
	// 	$('.innerArea-0 .dishes_slider').eq(i).addClass('active');

	// 	// display:none --> block�A���s�ե�slick
	// 	$('.innerArea-0 .dishes_slider').slick('setPosition');
	// });

	// // ���筹�к�������
	// $('.innerArea-1 .dishes_tab_item').click(function(e) {
	// 	e.preventDefault();
	// 	var $this = $(this);
	// 	var i = $(this).index();

	// 	$('.innerArea-1 .dishes_tab_item').removeClass('active');
	// 	$('.innerArea-1 .dishes_tab_item').eq(i).addClass('active');

	// 	$('.innerArea-1 .dishes_slider').removeClass('active');
	// 	$('.innerArea-1 .dishes_slider').eq(i).addClass('active');

	// 	// display:none --> block�A���s�ե�slick
	// 	$('.innerArea-1 .dishes_slider').slick('setPosition');
	// });

	// �Ϥ��I��
	$('.innerArea-0 .dishes_slider_item').each(function(index) {
		var $dishesImg = $(this).find($('.dishes_slider_img'));
		$dishesImg.css('background-image', 'url(images/area05_img-1-' + (index + 1) + '.jpg)');

		var $videoMask = $('.recipe_box').eq(index).find($('.recipe_video_mask'));
		$videoMask.css('background-image', 'url(images/yt_mask-0-' + (index + 1) + '.png)');

		// �I�����}����
		// $(this).addClass('dishes_slider_item-' + (index + 1));
		$(this).click(function(e) {
			e.preventDefault();

			// �����u��
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

		// �I�����}����
		// $(this).addClass('dishes_slider_item-' + (index + 1));
		$(this).click(function(e) {
			e.preventDefault();

			// �����u��
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


	// // ����
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
	 ** ���� popup
	*/
	// ����
  $('.recipe_close').click(function(e) {
    e.preventDefault();
		$('.white').fadeOut();

		// ����youtube����
		// $('.recipe_yt').each(function() {
		// 	this.contentWindow.postMessage('{"event": "command", "func": "stopVideo", "args": ""}', '*');
		// });
		$('.recipe_video_mask').fadeIn();
		$('.recipe_yt').remove();


		// ����
		$('.mask').fadeOut();
		$('.recipe_box').fadeOut();

		$('body').removeAttr('style');
  });

	$('.white').click(function(e) {
		e.preventDefault();

		$(this).fadeOut();
		$('.recipe_video_mask').fadeIn();


		// ����
		$('.mask').fadeOut();
		$('.recipe_box').fadeOut();
		$('body').removeAttr('style');
	});


	/*
	 ** �I�����w�椸
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
