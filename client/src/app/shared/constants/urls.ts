import { environment } from "src/environments/environment";

const BASE_URL = environment.production ? '' : 'http://localhost:5000';

export const FOODS_URL = BASE_URL + '/api/foods';
export const FOODS_TAGS_URL = FOODS_URL + '/tags';
export const FOODS_BY_SEARCH_URL = FOODS_URL + '/search/';
export const FOODS_BY_TAG_URL = FOODS_URL + '/tag/';
export const FOOD_BY_ID_URL = FOODS_URL + '/';


export const USER_FETCH_URL = BASE_URL + '/api/userReqToken/';
export const USERS_FETCH_URL = BASE_URL + '/api/users/all/';
export const USER_LOGIN_URL = BASE_URL + '/api/signin';
export const USER_REGISTER_URL = BASE_URL + '/api/signup';

export const PRODUCTS_URL = BASE_URL + '/api/product';
export const PRODUCTS_FETCH_URL = PRODUCTS_URL + '/all/';
export const PRODUCT_CREATE_URL = PRODUCTS_URL + '/create/';


export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const ORDER_NEW_FOR_CURRENT_USER_URL = ORDERS_URL + '/newOrderForCurrentUser';
export const ORDER_PAY_URL = ORDERS_URL + '/pay';
export const ORDER_TRACK_URL = ORDERS_URL + '/track/';
