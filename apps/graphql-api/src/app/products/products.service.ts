import { Injectable, NotFoundException } from "@nestjs/common";

import { Product } from "./product.model";

@Injectable()
export class ProductsService {
    products: Product[] = []

    insertProduct(title: string, desc: string, price: number) {
        const id = Math.random().toString();
        const newProduct = new Product(id, title, desc, price);

        this.products.push(newProduct);

        return id;
    }

    getProducts() {
        return [...this.products];
    }

    getSingleProduct(id: string) {
        const product = this.findProduct(id)[0];

        return { ...product };
    }

    updateProduct(id: string, title: string, desc: string, price: number) {
        const [product, index] = this.findProduct(id);

        const updatedProduct = {
            title,
            desc,
            price
        }

        const cleanProduct = Object.fromEntries(Object.entries(updatedProduct).filter(([_, v]) => v != null));

        this.products[index] = { ...product,  ...cleanProduct};
    }

    deleteProduct(id: string) {
        const product = this.findProduct(id)[0];

        const updatedProducts = this.products.filter(p => p.id !== product.id);

        this.products = updatedProducts;
    }

    private findProduct(id: string): [Product, number] {
        const productIndex = this.products.findIndex((prod) => prod.id === id);

        if(productIndex <= -1) {
            throw new NotFoundException('No products found with provided id.')
        }

        const product = this.products[productIndex];

        return [product, productIndex];
    }
}