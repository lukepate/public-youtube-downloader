
const convertBtn = document.querySelector('.convert-button');
const URLinput = document.querySelector('.URL-input');

convertBtn.addEventListener('click', () => {
	console.log(`URL: ${URLinput.value}`);
	sendURL(URLinput.value);
});

function sendURL(URL) {
	console.log('this worked')
	window.location.href = `https://public-youtube-downloader.herokuapp.com/download?URL=${URL}`;
}
