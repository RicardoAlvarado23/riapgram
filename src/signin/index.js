var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/singin',function(context,next){
	title('Riapgram - singin');
	var main = document.getElementById('main-container');
	empty(main).appendChild(template);
})