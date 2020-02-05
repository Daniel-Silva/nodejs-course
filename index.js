const express = require('express')();

express.set('view engine', 'ejs');

express.get('/', (req, resp) => {
	resp.render('index');
});

express.listen(3000, (erro) => {
	if (erro) {
		console.log(erro);
	} else {
		console.log('Conectado');
	}
});
