let images = document.querySelectorAll('.gallery-photo');
lazyload(images);

document
	.querySelectorAll('.little-post')
	.forEach( item => {
		item.addEventListener('mouseover', () => {
			item.style.backgroundImage = `url(${item.dataset.img})`
		});
		item.addEventListener('mouseout', () => {
			item.style.backgroundImage = `url()`
		});
	});

let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.modal-content-close');
let modalImg = document.querySelector('.modal-content');

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

const toTop = document.querySelector('.top-btn');
	
toTop.addEventListener('click', () => {
	scrollTo(0, 0);
});