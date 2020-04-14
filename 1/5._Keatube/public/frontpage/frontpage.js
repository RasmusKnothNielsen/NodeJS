$.get('videos?page=1', (response) => {
	response.response.map((video) => {
		$('#video-gallery').append(
			`<a href="/player/${video.fileName}">${video.title}</a><br>` +
			`<img src="/${video.thumbnail}"><br>`);
	});
});
