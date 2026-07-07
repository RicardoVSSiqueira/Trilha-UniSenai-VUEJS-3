require('dotenv').config();

const axios = require('axios');

console.log(process.env.API_KEY);


class WeatherController {

    async buscar(req, res) {

        try {

            const resposta = await axios.get(
                'https://api.openweathermap.org/data/2.5/weather',
                {
                    params: {
                        q: req.params.cidade,
                        appid: process.env.API_KEY,
                        units: 'metric',
                        lang: 'pt_br'
                    }
                }
            );

            return res.json(resposta.data);

        } catch (error) {
            console.log(error.response?.data || error.message);

            return res.status(500).json({
                erro: 'Erro ao consultar o clima.',
                detalhe: error.response?.data || error.message
            });
        }

    }


}

module.exports = new WeatherController();