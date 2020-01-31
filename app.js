const express = require('express')();

express.get('/', (request, response) => {
	response.send('<html><body>PAGIA INICIAL</body></html>');
});

express.listen(3000, () => {
	console.log('SUCCESS');
});
