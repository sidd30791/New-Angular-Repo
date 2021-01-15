import { environment } from '../../environments/environment'

export const baseUrl = environment.production ? 'https://api.shoppingcart.com' : 'http://localhost:3000';
export const productsUrl = baseUrl + '/Products';
export const cartUrl = baseUrl + '/Cart';