$('.box').click(function(){
    $('.box').removeAttr( 'style' );
	$(this).css('margin-left','auto');
	$(this).css('margin-right','auto');
	$(this).width(800);
	$(this).height(600);
	$(this).css('z-index','2');
});

