import { Product } from "../utils/types"

type ProductCardProps = {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
        </div>
    )
}