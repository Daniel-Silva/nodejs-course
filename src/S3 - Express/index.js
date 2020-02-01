const express = require('express')();

express.get('/', (request, response) => {
	response.send('<html><body>PAGIA INICIAL</body></html>');
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
