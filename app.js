const express = require('express')();
express.set('view engine', 'ejs');

express.get('/', (request, response) => {
	response.render('');
});

express.listen(3000, () => {
	console.log('SUCCESS');
});
