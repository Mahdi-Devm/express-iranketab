const prisma = require("./src/utils/prismaconfig");
async function testConnection() {
    try {
        await prisma.$connect();
        console.log("✅ Connected to database successfully!");
    }
    catch (error) {
        console.error("❌ Connection error:", error);
    }
    finally {
        await prisma.$disconnect();
    }
}
testConnection();
//# sourceMappingURL=test.js.map