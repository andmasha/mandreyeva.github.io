$(document).ready(function(){

	// $('#aboutimg').click(function(){
	// 	alert('hi');
	// 	});
	// $('#image').click(function(){
	// 	alert('hi');
	// });

	$('.fadein').hide().load(function () {
		$(this).fadeIn(2000);
	});

	$('.galleryimg').hide().load(function () {
		$(this).fadeIn(4000);
	});


	$('.galleryimage').hover(function(){
		$(this).find('.overlay').stop().fadeIn(100);
		$('.view').show();


		}, function(){
		$(this).find('.overlay').stop().fadeOut(400);
		$('.view').hide();
	});

	$('.galleryimage').click(function(){
		var src = $(this).find('.galleryimg').attr('src');
		$('#white').find('img').attr('src', src);
		$('#white').fadeIn(400);
		
	});

	$('#white').click(function(){
		$('#white').fadeOut(400);
		
	});

 	$('#design').hover(function(){
 		$(this).css('color','#8f8f8f');
 	}, function(){
 		$(this).css('color', 'white');
 	});

 	$('#photography').hover(function(){
 		$(this).css('color','#8f8f8f');
 	}, function(){
 		$(this).css('color', 'white');
 	});

$('#about').hover(function(){
 		$(this).css('color','#8f8f8f');
 	}, function(){
 		$(this).css('color', 'white');
 	});
});

