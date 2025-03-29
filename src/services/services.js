import {getRequest} from './client';

const USER_URL = '/users';
const ORDER_URL = '/orders';
const PLAT_URL = '/plats';
const APIS_URL = 'http://localhost:8080';

export  const getAllPlats = async () => {
  return await getRequest(APIS_URL+PLAT_URL).then((response) => response.plats);
}

