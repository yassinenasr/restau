import {getRequest ,deleteRequest} from './client';

const USER_URL = '/users';
const ORDER_URL = '/orders';
const PLAT_URL = '/plats';
const APIS_URL = 'http://localhost:8080';
//Dishes
export  const getAllPlats = async () => {
  return await getRequest(APIS_URL+PLAT_URL).then((response) => response.plats);
}
export const getplatbyid = async (platid) => {
  return await getRequest(APIS_URL+PLAT_URL+'/'+platid).then((response) => response.plat);
}
export const deleteAllPlats = async () => {
  return await deleteRequest(APIS_URL+PLAT_URL).then((response) => response.plats);
}
export const deleteplatbyid = async(platid) => {
  return await deleteRequest(APIS_URL+PLAT_URL+'/'+platid).then((response) => response.plat);
}
export const modifyplatbyid = async(platid,plat) => {
  return await deleteRequest(APIS_URL+PLAT_URL+'/'+platid,plat).then((response) => response.plat);
}
//Users 
export const getAllUsers = async () => {
  return await getRequest(APIS_URL+USER_URL).then((response) => response.users);
}
export const getuserbyid = async (userid) => {  
  return await getRequest(APIS_URL+USER_URL+'/'+userid).then((response) => response.user);
}
export const deleteAllUsers = async () => {
  return await deleteRequest(APIS_URL+USER_URL).then((response) => response.users);
}
export const deleteuserbyid = async(userid) => {
  return await deleteRequest(APIS_URL+USER_URL+'/'+userid).then((response) => response.user);
}
export const modifyuserbyid = async(userid,user) => {
  return await deleteRequest(APIS_URL+USER_URL+'/'+userid,user).then((response) => response.user);
}
//Orders
export const getAllOrders = async () => {
  return await getRequest(APIS_URL+ORDER_URL).then((response) => response.orders);
}
export const getorderbyid = async (orderid) => {  
  return await getRequest(APIS_URL+ORDER_URL+'/'+orderid).then((response) => response.order);
}
export const deleteAllOrders = async () => {
  return await deleteRequest(APIS_URL+ORDER_URL).then((response) => response.orders);
}
export const deleteorderbyid = async(orderid) => {
  return await deleteRequest(APIS_URL+ORDER_URL+'/'+orderid).then((response) => response.order);
}
export const modifyorderbyid = async(orderid,order) => {
  return await deleteRequest(APIS_URL+ORDER_URL+'/'+orderid,order).then((response) => response.order);
}
//Chefs
export const getAllChefs = async () => {
  return await getRequest(APIS_URL+USER_URL).then((response) => response.chefs);
}
export const getchefbyid = async (chefid) => {  
  return await getRequest(APIS_URL+USER_URL+'/'+chefid).then((response) => response.chef);
}
export const deleteAllChefs = async () => {
  return await deleteRequest(APIS_URL+USER_URL).then((response) => response.chefs);
}
export const deletechefbyid = async(chefid) => {
  return await deleteRequest(APIS_URL+USER_URL+'/'+chefid).then((response) => response.chef);
}
export const modifychefbyid = async(chefid,chef) => {
  return await deleteRequest(APIS_URL+USER_URL+'/'+chefid,chef).then((response) => response.chef);
}