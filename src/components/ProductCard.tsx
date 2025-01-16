import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Product } from "../utils/types"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

type ProductCardProps = {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><SearchIcon /></Button>
                <Button size="small"><AddShoppingCartIcon /></Button>
            </CardActions>
        </Card>
    );
}
