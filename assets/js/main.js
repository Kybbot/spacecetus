let images = document.querySelectorAll('.gallery-photo');
lazyload(images);

let images2 = document.querySelectorAll('.lazy');
lazyload(images2);

const scrollToTop = () => {
	// Let's set a variable for the number of pixels we are from the top of the document.
	const c = document.documentElement.scrollTop || document.body.scrollTop;

	if (c > 0) {
		window.requestAnimationFrame(scrollToTop);
		// ScrollTo takes an x and a y coordinate.
		// Increase the '20' value to get a smoother/slower scroll!
		window.scrollTo(0, c - c / 20);
	}
};

document
	.querySelector('#top-btn')
	.addEventListener('click', function(event) {
		event.preventDefault();
		scrollToTop()
	});

let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.modal-content-close');
let modalImg = document.querySelector('.modal-content-img');

document
	.querySelectorAll('.gallery-photo')
	.forEach( item => {
		item.addEventListener('click', () => {
			modalImg.src = item.src;
			modal.style.display = 'block'
		})
	})

window.addEventListener('click', event => {
	if(event.target == modal) {
		modal.style.display = 'none'
	}
});
	
closeBtn.addEventListener('click', () => {
	modal.style.display = 'none';
});