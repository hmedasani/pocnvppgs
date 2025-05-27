// .eslintrc.js (ESM)
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

export default [
    // 1. Declare global ignore patterns
    {
        ignores: [
            "src/generated/**",           // skip everything in generated
            "src/generated/prisma/**",    // (redundant but explicit)
        ],
    },

    // 2. Pull in Next.js / TypeScript base rules
    ...compat.extends("next/core-web-vitals", "next/typescript"),

    // 3. Add overrides for Prisma-generated code
    {
        files: ["src/generated/prisma/**/*.js", "src/generated/prisma/**/*.ts"],
        rules: {
            // turn these off just for that folder
            "@typescript-eslint/no-require-imports": "off",
            "@typescript-eslint/no-unused-vars": "off",
        },
    },
];
