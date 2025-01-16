import { Typography } from "@mui/material";
import { Layout } from "../components/Layout";
import { useCategories } from "../hooks/useCategories";
import { useEffect } from "react";
import { DataGridComponent } from "../components/DataGridComponent";

export function Categories() {

    const { categories, getCategories, columns } = useCategories();

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <Layout>
            <Typography variant="h4" mt={1}>
                Categorías
            </Typography>
            <DataGridComponent
                columns={columns}
                rows={categories}
            />
        </Layout>
    )
}