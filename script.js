// var bar = document.getElementById('bar');
// var close= document.getElementById('close');
// var nav=document.getElementById('navbar');
    
// if (bar) {
//     bar.addEventListener('click',()=>{ nav.classList.add('active');})
    
// } 
// if (close) {
//     bar.addEventListener('click',()=>{ nav.classList.remove('active');})
    
// }

window.onload = function () {
	window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 100) {
			document.querySelector("header").classList.add('is-scrolling');
		} else {
			document.querySelector("header").classList.remove('is-scrolling');
		}
	});

	const bar= document.querySelector('.hamburger');
	const nav = document.querySelector('.mobile-nav');

	navbar.addEventListener('click', function () {
		bar.classList.toggle('is-active');
		nav.classList.toggle('is-active');
	});
}

