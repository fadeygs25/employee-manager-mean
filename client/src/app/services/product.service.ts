import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PRODUCT_CREATE_URL, PRODUCTS_FETCH_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  fetchProduct(token: string) {
    return this.http.get(PRODUCT_CREATE_URL);
  }

  fetchProducts(token: string) {
    return this.http.get(PRODUCTS_FETCH_URL);
  }

  addProduct(token: string, userData: any) {
    return this.http.post(PRODUCT_CREATE_URL + token, userData);
  }

}
