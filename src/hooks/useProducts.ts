import { useMemo, useState } from "react";
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

    const columns = useMemo(() => [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'name',
            headerName: 'Nombre',
            width: 150,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'Descripción',
            width: 150,
            editable: true,
        },
        {
            field: 'price',
            headerName: 'Precio',
            width: 150,
            editable: true,
            valueGetter: (value, row) => `$${row.price.toFixed(2)}`
        },
    ], []);

    return {
        products,
        getProducts,
        columns
    };

}