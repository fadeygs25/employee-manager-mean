import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  PRODUCT_CREATE_URL, PRODUCTS_FETCH_URL,
  PRODUCT_BY_ID_URL, PRODUCT_DELETE_URL
} from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  fetchProduct(productId: string) {
    return this.http.get(PRODUCT_BY_ID_URL + productId);
  }

  fetchProducts(token: string) {
    return this.http.get(PRODUCTS_FETCH_URL);
  }

  addProduct(token: string, userData: any) {
    return this.http.post(PRODUCT_CREATE_URL + token, userData);
  }

  deleteProduct(idUser: string) {
    return this.http.delete(PRODUCT_DELETE_URL + idUser);
  }
}
