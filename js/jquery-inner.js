$(function(){
	$('#hoge').css({display:'none'});
	$('#hoge').slideDown('650');
	$('#hoge').css({display:'block',opacity:'0'});
	$('#hoge').animate({opacity:'1'},900);
});

$(document).ready(
	function(){
	$(".hoverfade a").hover(function(){
		$(this).fadeTo("normal", 0.7);
		},function(){
		$(this).fadeTo("normal", 1.0);
	});
});

$(document).ready(function(){
	$('#navLst li:even').addClass('styleA');
	$('#navLst li:odd').addClass('styleB');
});

$(document).ready(function(){
	$('p.hoge:first').addClass('lastNew');
});
