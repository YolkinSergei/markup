function onPlayerTimeUpdate(event) {
	console.log(event);
}

function onPlayerClickPlay(event) {
	let videoPlayer = document.querySelector('video'),
		btnPlay = document.querySelector('#btnPlay'),
		iconEl = btnPlay.querySelector('i');

	if (videoPlayer.timerId) {
		videoPlayer.pause();

		clearInterval(videoPlayer.timerId);
		videoPlayer.timerId = null;

		iconEl.classList.add('glyphicon-play');
		iconEl.classList.remove('glyphicon-pause');
	} else {
		videoPlayer.play();

		videoPlayer.timerId = setInterval(setPlayedTime, 100, videoPlayer);

		iconEl.classList.add('glyphicon-pause');
		iconEl.classList.remove('glyphicon-play');
	}	

	btnPlay.blur();
}

function setPlayedTime(videoPlayer) {
	let progress = (videoPlayer.currentTime / videoPlayer.duration * 100);
		durBar = document.querySelector('#durationBar'),
		posBar = document.querySelector('#positionBar'),
		btnPlay = document.querySelector('#btnPlay'),
		iconEl = btnPlay.querySelector('i');;

	durBar.style.width = progress  + "%";
	posBar.style.marginLeft = progress  + "%";

	if (progress >= 100) {
		clearInterval(videoPlayer.timerId);
		videoPlayer.timerId = null;
		iconEl.classList.add('glyphicon-play');
		iconEl.classList.remove('glyphicon-pause');
	}
}