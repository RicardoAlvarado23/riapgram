var express = require('express');
var app = express();

app.use(express.static('public'));

app.set('view engine', 'pug');

app.get('/', function(req, res){
	res.render('index');
});

app.get('/singup', function(req, res){
	res.render('index');
});

app.get('/singin', function(req, res){
	res.render('index');
});

app.listen(3000,function(err){
	if(err) return console.log('hubo un error'), process.exit(1);

	console.log('riapgram escuchando en el puerto 3000');
})
