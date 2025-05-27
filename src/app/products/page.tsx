import ProductList from '@/components/shared/products/ProductList'
import { actionGetProductsFromDB } from '@/lib/actions/action.product'

import React from 'react'

async function ProductsPage() {
    const latestProducts = await actionGetProductsFromDB()
    return (
        <div>
            <ProductList data={latestProducts} title='Product List' />
        </div>
    )
}

export default ProductsPage
