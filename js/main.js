$('.burger-button, .item .link').on('click', function(){
	$('.navigation, .burger-button').toggleClass('active');
	$('body').toggleClass('lock');
});


//border under the links in the header
let activeLinks = document.querySelectorAll('.navigation .link');
for ( let activeLink of activeLinks ) {
	activeLink.addEventListener('click', function(){
		deleteActiveClass();
		activeLink.classList.add('active');
	});
}

function deleteActiveClass(){
	for (let deleteActive of activeLinks){
		deleteActive.classList.remove('active');
	}
}


//slider
$(".carousel").slick({
	autoplay: true,
	dots: false,
	arrows: true,
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
	infinite: false
	
});