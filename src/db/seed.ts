import { PrismaClient } from "@/generated/prisma"
import sampleData from "./sample-data"

async function seedDb() {
    const prisma = new PrismaClient()
    //delete previous unnecessary
    await prisma.product.deleteMany()
    //add product fields into the dab as per our sample data
    //give data source as an array
    // await prisma.product.createMany({ data: sampleDataArray })
    await prisma.product.createMany({ data: sampleData.products })
    console.log("Database seeded successfully!")
}
seedDb()