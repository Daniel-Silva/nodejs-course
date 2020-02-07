const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, resp) => {
	let name = 'Daniel Silva';
	let lang = 'Javascript';
	let bool = true;

	const products = [
		{ name: 'Doritos', value: 3.14 },
		{ name: 'Coca-cola', value: 5.45 },
		{ name: 'Leite', value: 2.45 }
	];

	resp.render('index', {
		name,
		lang,
		bool,
		products
	});
});

app.listen(3000, () => {
	console.log('Conectado');
});
