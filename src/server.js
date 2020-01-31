// Criando server http
const http = require('http');
http
	.createServer((request, response) => {
		const category = request.url;
		if (category == '/tecnologia') {
			response.end('<html><body>TECNOLOGIA</body></html>');
		} else if (category == '/moda') {
			response.end('<html><body>MODA</body></html>');
		} else if (category == '/beleza') {
			response.end('<html><body>BELEZA</body></html>');
		} else {
			response.end('<html><body>PAGIA INICIAL</body></html>');
		}
	})
	.listen(3000);
