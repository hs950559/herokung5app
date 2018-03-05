# Heroku Deployment ( Angular Project )

## Step 1 - login to heroku & create app
https://id.heroku.com/login

## Step 2 - Create `Procfile`
web: node server.js

```javascript
// server.js
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
```

## Step 3 - Install heroku cli than

```
heroku login // from dist folder
git init
heroku git:remote -a ng5demo
git add -A
git commit -m "ur message"
git push heroku master
```

Demo - https://ng5demo.herokuapp.com/


## Futureproofing your heroku app

```
// add `engines` to package.json
node -v
npm -v

"engines": {
	"node": "9.5.0",
	"npm": "5.6.0"
}
```