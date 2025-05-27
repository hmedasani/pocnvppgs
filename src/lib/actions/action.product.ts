import { PrismaClient } from "@/generated/prisma";
import { PRODUCTS_LIMIT } from "../constants";
import { Decimal } from "@/generated/prisma/runtime/library";

export async function actionGetProductsFromDB() {
    const prisma = new PrismaClient();
    const data = await prisma.product.findMany({
        take: PRODUCTS_LIMIT,
        orderBy: { createdAt: "desc" }
    })
    // const d = utilDbObjToJSObj(data);
    const d = data.map((p) => ({
        id: p.id.toString(),
        name: p.name,
        slug: p.slug,
        category: p.category,
        images: p.images,
        brand: p.brand,
        description: p.description,
        stock: p.stock,
        price: (p.price as Decimal).toNumber(),     // <-- convert Decimal→number
        rating: (p.rating as Decimal).toNumber(),    // <-- convert Decimal→number
        numReviews: p.numReviews,
        isFeatured: p.isFeatured,
        banner: p.banner,
        createdAt: p.createdAt.toISOString(),           // <-- ensure correct field name
    }));
    return d;
}