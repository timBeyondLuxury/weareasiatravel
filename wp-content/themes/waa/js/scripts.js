(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';
		
		// DOM ready, take it away
		
	});
	// Selection of HTML objects
	const burger = document.querySelector('.burger i');
	const nav = document.querySelector('.main-nav ul');
	// Defining a function
	function toggleNav() {
	burger.classList.toggle('fa-bars');
	burger.classList.toggle('fa-times');
	nav.classList.toggle('nav-active');
	}
	// Calling the function after click event occurs
	burger.addEventListener('click', function() {
	toggleNav();
	});
	
})(jQuery, this);
