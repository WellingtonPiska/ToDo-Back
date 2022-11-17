import axios from 'axios';

const ibge = axios.create({
  baseURL: 'http://servicodados.ibge.gov.br/api/v1/localidades',
  timeout: 3000,
});

export default ibge;
