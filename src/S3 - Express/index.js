const express = require('express')();

express.get('/', (request, response) => {
	response.send('<html><body>PAGIA INICIAL</body></html>');
});

express.get('/contato', (request, response) => {
	response.send('CONTATO');
});

express.get('/blog', (request, response) => {
	response.send('BLOG');
});

express.listen(3000, (error) => {
	if (error) {
		console.log(error);
	} else {
		console.log('Conectado');
	}
});
