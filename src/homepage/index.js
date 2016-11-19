var page = require('page');
var title = require('title');
var empty = require('empty-element');
var template = require('./template');

page('/',function(context,next){
	var main = document.getElementById('main-container');
	title('Riapgram');
	var pictures = [
		{
			user: {
				username: 'zavalin',
				avatar: 'https://scontent.ftru1-1.fna.fbcdn.net/v/t1.0-9/12011228_10207747751755023_5166319999785791200_n.jpg?oh=f81ec309cb2add92bc0e2d6f57779ba1&oe=58C0973D'
			},
			url: 'office.jpg',
			likes: 0,
			liked: false,
			createAt : new Date()
		},
		{
			user: {
				username: 'zavalin',
				avatar: 'https://scontent.ftru1-1.fna.fbcdn.net/v/t1.0-9/12011228_10207747751755023_5166319999785791200_n.jpg?oh=f81ec309cb2add92bc0e2d6f57779ba1&oe=58C0973D'
			},
			url: 'jhon.png',
			likes: 2,
			liked: true,
			createAt : new Date().setDate(new Date().getDate() - 10)
		}
	];
	empty(main).appendChild(template(pictures));
})
