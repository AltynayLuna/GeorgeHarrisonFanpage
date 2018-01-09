var myVideo = document.getElementById("video1");

function playPause(button) {
	console.log(myVideo);
	if (myVideo.paused) {
		myVideo.play();
		button.innerText = "Pause ❚❚"
	} else {
		myVideo.pause();
		button.innerText = "Play ›"
	}
}

	$("#factButton").on("click", function() {
	var number = Math.floor((Math.random() * trivia.length));
	$("#factText").text(trivia[number])
})
	var trivia = ["He was only 27 when the Beatles broke up", "He loved hanging out with Bob Dylan and the Band", "The quiet Beatle was not so quiet", "He was the first ex-Beatle to simultaneously top both the singles and albums charts", "The first song he wrote was inspired by a desire to tell people to get lost"]


