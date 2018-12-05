const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const path = require('path');
const app = express();
const favicon = require('express-favicon');

app.use(cors());

app.listen(process.env.PORT || 4000, () => {
	console.log('Server Works !!! At port 4000');
});

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/'));
app.use(favicon(__dirname + '/favicon.png'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/download', (req,res) => {
  console.log(req.query.URL);

	var URL = req.query.URL;
	res.header('Content-Disposition', 'attachment; filename="video.mp4"');
	ytdl(URL, {
		format: 'mp4'
	}).pipe(res);
});
