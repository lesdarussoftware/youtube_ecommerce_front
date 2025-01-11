import { useState } from "react";
import { STATUS_CODES } from "../utils/constants";
import { PRODUCT_URL } from "../utils/urls";
import { Product } from "../utils/types";

export function useProducts() {

    const [products, setProducts] = useState<Product[]>([]);

    async function getProducts() {
        const res = await fetch(PRODUCT_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        if (res.status === STATUS_CODES.OK) {
            setProducts(data);
        }
    }

    return {
        products,
        getProducts
    };

}