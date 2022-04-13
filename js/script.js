$(window).resize(function(){
	adaptive_function()
})

function adaptive_function(){
	var w=$(window).outerWidth();
	var h=$(window).outerHeight();
	adaptive_header(w,h);
}

function adaptive_header(w,h){
	var headerMenu = $('.header-menu');
	var headerLang = $('.header-top__lang');
	var menuBottom = $('.header-bottom-menu');

	var menuLink = $('.header-top__link');
	var headerLogo = $('.header-logo')
	var headerTop = $('.header-top');


	if(w<767){
		if(!headerLang.hasClass('done')){
			headerLang.addClass('done').appendTo(headerMenu);
		}
	} else{
		if(headerLang.hasClass('done')){
			headerLang.removeClass('done').prependTo($('.header-top'));
		}
	}

	if(w<767){
		if(!menuBottom.hasClass('done')){
			menuBottom.addClass('done').appendTo(headerMenu);
		}
	} else{
		$.each(menuBottom, function(){
			if($(this).hasClass('header-bottom-menu--right')){
				if($(this).hasClass('done')){
					$(this).removeClass('done').prependTo($('.header-bottom__column').eq(2));
				}
			} else{
				if($(this).hasClass('done')){
					$(this).removeClass('done').prependTo($('.header-bottom__column').eq(0));
				}
			}
		})
	}

	if(w<372){
		if(!menuLink.hasClass('done')){
			menuLink.addClass('done').appendTo(headerLogo);
		}
	} else{
		if(menuLink.hasClass('done')){
			menuLink.removeClass('done').appendTo(headerTop);
		}
	}
}

$('.menu-icon').click(function(){
	$('.header-menu').toggleClass('active');
	$('body').toggleClass('lock');
})
