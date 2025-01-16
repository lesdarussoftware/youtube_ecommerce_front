import { useMemo, useState } from "react";
import { STATUS_CODES } from "../utils/constants";
import { CATEGORY_URL } from "../utils/urls";
import { Category } from "../utils/types";

export function useCategories() {

    const [categories, setCategories] = useState<Category[]>([]);

    async function getCategories() {
        const res = await fetch(CATEGORY_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        if (res.status === STATUS_CODES.OK) {
            setCategories(data);
        }
    }

    const columns = useMemo(() => [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'name',
            headerName: 'Nombre',
            width: 150,
            editable: true,
        }
    ], []);

    return {
        categories,
        getCategories,
        columns
    };

}