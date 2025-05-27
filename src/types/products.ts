
import { validProductSchema } from "@/lib/validators";
import { z } from "zod"
export type Product = z.infer<typeof validProductSchema> & {
    id: string;
}

// export type Product = {
//     name: string;
//     slug: string;
//     category: string;
//     description: string;
//     images: string[];
//     price: number;
//     brand: string;
//     rating: number;
//     numReviews: number;
//     stock: number;
//     isFeatured: boolean;
//     banner: string | null;
//     createdAt: string;
// };

export type ProductListProps = {
    products: Product[];
};

