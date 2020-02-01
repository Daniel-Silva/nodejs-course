const express = require('express')();

express.get('/', (request, response) => {
	response.send('<html><body>PAGIA INICIAL</body></html>');
});

express.get('/contato', (request, response) => {
	response.send('<html><body>PAGIA CONTATO</body></html>');
});

express.get('/blog/modulo', (request, response) => {
	const blog = request.query['assunto'] || '';
	response.send(`<html><body>PAGIA BLOG ${blog}</body></html>`);
});

express.get('/welcome/:nome?', (request, response) => {
	const nome = request.params.nome || '';
	response.send(`<html><body>BEM-VINDO ${nome}!!!</body></html>`);
});

express.listen(3000, (error) => {
	if (error) {
		console.log(error);
	} else {
		console.log('Conectado');
	}
});
