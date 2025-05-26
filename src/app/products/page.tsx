import ProductList from '@/components/shared/products/ProductList'
import sampleData from '@/db/sample-data'
import React from 'react'

function ProductsPage() {
    return (
        <div>
            <ProductList data={sampleData.products} title='Product List' />
        </div>
    )
}

export default ProductsPage
