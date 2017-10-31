var express = require('express');

var app = express();

app.use(express.static('./public'))

app.get('/', function(request, response){

	response.sendFile('./public/html/index.html', {root: './'});

	console.log('Sent a file');
});

app.get('/Boulder', function(request, response){

	response.sendFile('./public/html/boulder.html', {root: './'});

	console.log('Sent a file');
});

app.get('/NewYork', function(request, response){

	response.sendFile('./public/html/ny.html', {root: './'});

	console.log('Sent a file');
});

app.get('/SanFrancisco', function(request, response){

	response.sendFile('./public/html/san-francisco.html', {root: './'});

	console.log('Sent a file');
});

app.get('/Seattle', function(request, response){

	response.sendFile('./public/html/seattle.html', {root: './'});

	console.log('Sent a file');
});

app.get('/WashDC', function(request, response){

	response.sendFile('./public/html/wash-dc.html', {root: './'});

	console.log('Sent a file');
});

app.use(function(request, response){
	response.send('404');
})

app.listen(8080, function(){
	console.log('The app is running on post 8080.');
});