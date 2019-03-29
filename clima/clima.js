const axios = require('axios');

const getClima = async (lat, lng) => {

	const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5c3e25141da5341f3051cec2e216b020&units=metric`)

	return resp.data.main.temp;
}

module.exports = {
	getClima
}