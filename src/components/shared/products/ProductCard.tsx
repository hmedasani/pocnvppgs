
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Product } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import ProductTag from "./ProductTag";


interface ProductProps {
    product: Product
}

const ProductCard = ({ product }: ProductProps) => {
    return (<Card className="w-full max-w-sm">
        <CardHeader className="p-0 items-center">
            <Link href={`/product/${product.slug}`}>
                <Image src={product.images[0]}
                    alt={product.name}
                    width={300}
                    height={300}
                    priority={true}
                    title={product.name}
                />
            </Link>
        </CardHeader>
        <CardContent className="p-4 grid gap-4">
            <div className="text-xs">{product.brand}</div>
            <Link href={`/product/${product.slug}`}>
                <h2 className="text-sm font-bold">
                    {product.name}
                </h2>
            </Link>
            <div className="flex justify-between gap-4">
                <p>{product.rating} stars</p>
                {
                    product.stock > 0 ? (
                        <ProductTag price={product.price} currency="$" />
                    ) : (
                        <p className="text-red-800">
                            Out of stock!
                        </p>
                    )
                }
            </div>
        </CardContent>
    </Card>);
}

export default ProductCard;