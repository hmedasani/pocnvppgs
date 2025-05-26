import ProductList from '@/components/shared/products/ProductList'
import { getLatestProducts } from '@/lib/actions/product.actions'

import React from 'react'

async function ProductsPage() {

    const gotProducts = await getLatestProducts()

    return (
        <>
            <ProductList
                data={gotProducts}
                title='Product List'
                limit={4} />
        </>
    )
}

export default ProductsPage
