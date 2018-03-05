const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));
app.all('*', (req, res) => {
	res.status(200).sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
	console.log("app running on " + port);
});