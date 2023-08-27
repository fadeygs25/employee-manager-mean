import { environment } from "src/environments/environment";

const BASE_URL = environment.production ? '' : 'https://www.pichainmall.pro';

export const FOODS_URL = BASE_URL + '/api/foods';
export const FOODS_TAGS_URL = FOODS_URL + '/tags';
export const FOODS_BY_SEARCH_URL = FOODS_URL + '/search/';
export const FOODS_BY_TAG_URL = FOODS_URL + '/tag/';
export const FOOD_BY_ID_URL = FOODS_URL + '/';


export const USER_FETCH_URL = BASE_URL + '/api/userReqToken/';
export const USERS_FETCH_URL = BASE_URL + '/api/users/all/';
export const USER_LOGIN_URL = BASE_URL + '/api/signin';
export const USER_REGISTER_URL = BASE_URL + '/api/signup';
export const USER_BY_ID_URL = BASE_URL + '/api/user/';


export const PRODUCTS_URL = BASE_URL + '/api/product';
export const PRODUCTS_FETCH_URL = PRODUCTS_URL + '/all';
export const PRODUCT_CREATE_URL = PRODUCTS_URL + '/create/';
export const PRODUCT_BY_ID_URL = PRODUCTS_URL + '/find/';
export const PRODUCT_DELETE_URL = PRODUCTS_URL + '/delete/';


export const TASKS_URL = BASE_URL + '/api/task';
export const TASKS_FETCH_URL = TASKS_URL + '/all';
export const TASK_CREATE_URL = TASKS_URL + '/create/';
export const TASK_UPDATE_URL = TASKS_URL + '/update/';
export const TASK_BY_ID_URL = TASKS_URL + '/find/';
export const TASK_BY_PRODUCT_URL = TASKS_URL + '/byProduct/';
export const TASK_DELETE_URL = TASKS_URL + '/delete/';


export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const ORDER_NEW_FOR_CURRENT_USER_URL = ORDERS_URL + '/newOrderForCurrentUser';
export const ORDER_PAY_URL = ORDERS_URL + '/pay';
export const ORDER_TRACK_URL = ORDERS_URL + '/track/';
