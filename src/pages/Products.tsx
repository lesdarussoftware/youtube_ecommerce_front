import { Box, Typography } from "@mui/material";
import { Layout } from "../components/Layout";
import { useProducts } from "../hooks/useProducts";
import { useEffect } from "react";
import { DataGridComponent } from "../components/DataGridComponent";

export function Products() {

    const { products, getProducts, columns } = useProducts();

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <Layout>
            <Typography variant="h4" mt={1}>
                Productos
            </Typography>
            <DataGridComponent
                columns={columns}
                rows={products}
            />
        </Layout>
    )
}