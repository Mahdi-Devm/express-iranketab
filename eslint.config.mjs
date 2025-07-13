import js from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["**/*.js"],
    ignores: ["prisma/**", "node_modules/**"],
    languageOptions: {
      globals: {
        ...globals.node, // جایگزین env برای متغیرهای گلوبال Node
        ...globals.commonjs, // برای پشتیبانی از require
      },
      sourceType: "commonjs", // برای پروژه‌های CommonJS
    },
    rules: {
      ...js.configs.recommended.rules,
      indent: ["error", 2],
      quotes: ["error", "single"],
      semi: ["error", "always"],
      "no-console": "warn",
      "no-unused-vars": "warn",
    },
  },
];
