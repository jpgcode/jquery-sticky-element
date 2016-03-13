var sticky = (function(){

	var $window 	           = $(window),
		$stickyNav             = $('nav'),
		$stickyParent          = $stickyNav.parent(),
		stickyPos              = $stickyNav.offset().top,
		stickyHeight           = $stickyNav.height(),
		$stickyParent          = $stickyNav.parent(),
		stickyParentPaddingTop = $stickyParent.css('padding-top');


	var init = function(){
		eventHandlers();
	}

	var stickyValidation = function(){

		var scrollPos = $window.scrollTop();
			
		if(scrollPos >= stickyPos){
			$stickyNav.addClass('sticky');
			//Add space previously occupied by nav
			$stickyParent.css('padding-top', stickyHeight);
		}else{
			$stickyNav.removeClass('sticky');
			//Go back to normal
			$stickyParent.css('padding-top', stickyParentPaddingTop);
		}
	}

	var eventHandlers = function(){
		$window.scroll(function () {
			stickyValidation();
		});
	}

	return {
		init: init
	}

}());