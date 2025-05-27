import { z } from "zod";
import { formatNumberWithDecimal } from "../utils";

const currency = z
    .string()
    .refine((val) => (
        /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(val)))
    ), 'Price must have exactly two decimal places.')

export const validProductSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    slug: z.string().min(3, 'Name must be at least 3 characters'),
    category: z.string().min(3, 'Name must be at least 3 characters'),
    description: z.string().min(3, 'Name must be at least 3 characters'),
    images: z.array(z.string()).min(1, 'Product must have at least one image'),
    brand: z.string().min(3, 'Name must be at least 3 characters'),
    numReviews: z.coerce.number(),
    stock: z.coerce.number(),
    isFeatured: z.boolean(),
    banner: z.string().nullable(),
    price: z.coerce.number(), //TODO: replace with currency
    rating: z.coerce.number() //TODO: replace with currency
})