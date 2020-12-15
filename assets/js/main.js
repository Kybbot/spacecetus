let images = document.querySelectorAll('.gallery-photo');
lazyload(images);

let images2 = document.querySelectorAll('.lazy');
lazyload(images2);

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