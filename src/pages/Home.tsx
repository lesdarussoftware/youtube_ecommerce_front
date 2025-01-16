import { Box, Typography } from "@mui/material";
import { Layout } from "../components/Layout";
import { useProducts } from "../hooks/useProducts";
import { useEffect } from "react";
import { ProductCard } from "../components/ProductCard";

export function Home() {

    const { products, getProducts } = useProducts();

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <Layout>
            <Box sx={{ display: 'flex', gap: 3, p: 2 }}>
                {products.map(product => <ProductCard key={product.id} product={product} />)}
            </Box>
        </Layout>
    )
}