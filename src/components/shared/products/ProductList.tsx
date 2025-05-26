
import { Product } from "@/types/products";
import ProductCard from "./ProductCard";

interface ProductListProps {
    data: Product[],
    title?: string;
    limit?: number;
}
const ProductList = ({ data, title, limit }: ProductListProps) => {

    if (!data) return <div>
        Products not found!
    </div>

    const limitedData = limit ? data.slice(0, limit) : data

    const productsUi = <div className="grid gap-6 grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {limitedData.map((product) =>
            <ProductCard key={product.slug} product={product} />
        )}
    </div>

    return (
        <div className="my-10">
            <h2 className="h2-bold mb-4">
                {title}
            </h2>
            {productsUi}
        </div >
    );
}

export default ProductList;