const express = require('express')();

express.listen(3000, (error) => {
	if (error) {
		console.log(error);
	} else {
		console.log('Conectado');
	}
});
