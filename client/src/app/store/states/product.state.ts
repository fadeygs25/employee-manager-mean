import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs";
import { CookieService } from 'ngx-cookie-service';
import { ProductService } from "src/app/services/product.service";
import { AddProduct, GetProducts, GetProduct, DeleteProduct } from "../actions/product.action";
import { patch, removeItem, updateItem } from '@ngxs/store/operators';

export class ProductStateModel {
    product: any;
    products: any;
}

@State<ProductStateModel>({

    name: 'productsstate',
    defaults: {
        product: [],
        products: [],
    }
})

@Injectable()
export class ProductState {
    constructor(
        private productService: ProductService,
        private cookieService: CookieService
    ) { }


    @Selector()
    static selectProduct(state: ProductStateModel) {
        return state.product;
    }

    @Selector()
    static selectProducts(state: ProductStateModel) {
        return state.products;
    }

    @Action(GetProduct)
    getProduct(con: StateContext<ProductStateModel>, { payload }) {
        return this.productService.fetchProduct(payload).pipe(tap(returnData => {
            const state = con.getState();
            con.setState({
                ...state,
                product: returnData
            })
        }))
    }

    @Action(GetProducts)
    getProducts(con: StateContext<ProductStateModel>) {
        return this.productService.fetchProducts(this.getCookie()).pipe(tap(returnData => {
            const state = con.getState();
            con.setState({
                ...state,
                products: returnData
            })
        }))
    }

    @Action(AddProduct)
    addProduct(con: StateContext<ProductStateModel>, { payload }: AddProduct) {
        return this.productService.addProduct(this.getCookie(), payload).pipe(tap(returnData => {
            const state = con.getState();
            con.patchState({
                product: [...state.product, returnData]
            })
        }))
    }

    @Action(DeleteProduct)
    deleteProduct(con: StateContext<ProductStateModel>, { id }: DeleteProduct) {
        return this.productService.deleteProduct(id).pipe(tap(() => {
            const state = con.getState();
            const filteredArray = state.products.filter((contents: { _id: string; }) => contents._id !== id)

            con.setState({
                ...state,
                products: filteredArray
            })
        }))
    }

    private setCookie(returnData) {
        this.cookieService.set('token', returnData.token);
    }

    private getCookie() {
        return this.cookieService.get('token');
    }

    private deleteCookie() {
        this.cookieService.delete('token');
    }

}