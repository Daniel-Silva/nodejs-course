const express = require('express')();

express.set('view engine', 'ejs');

express.get('/', (req, resp) => {
	let name = 'Daniel Silva';
	let lang = 'Javascript';
	let bool = false;

	resp.render('index', {
		name,
		lang,
		bool
	});
});

express.listen(3000, () => {
	console.log('Conectado');
});
