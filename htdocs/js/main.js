'use strict'

const cards = document.querySelectorAll('.lobby__item');

const videoPlay = function() {
	const vItem = this.querySelector('video')
	const image = this.querySelector('img')
	

	image.style.opacity = 0;

	console.log(vItem, this.dataset.src)
	if (vItem === null) {
		console.log('addVideo')
		const newVideo = document.createElement('video')
		newVideo.src = this.dataset.src;
		newVideo.muted = true;
		// newVideo.setAttribute('mute')

		var parentDiv = image.parentNode;

		parentDiv.insertBefore(newVideo, image)
		newVideo.play();
	} else {
		console.log('video is searched')
		vItem.play();
	}
	

}

const videoStop = function() {
	const vItem = this.querySelector('video')
	const image = this.querySelector('img')

	vItem.pause();
	image.style.opacity = 1;
	console.log('leave')
}

for (let item of cards) {
	item.addEventListener('touchstart', videoPlay)
	item.addEventListener('touchend', videoStop)
}