import axios from 'axios';

const ldap = axios.create({
  baseURL: 'http://ldap.gruporisotolandia.com.br',
  timeout: 3000,
  headers: {
    token: 'ebc61675b2f5a553d340dacad99f35c6c3d188c7',
  },
});

export default ldap;
