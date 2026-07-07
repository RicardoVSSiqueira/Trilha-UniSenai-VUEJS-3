import api from './api';

export async function buscarClima(cidade) {
    return api.get(`/weather/${cidade}`);
}