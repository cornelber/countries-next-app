import { prisma } from "./prisma-client";
import { hashSync } from 'bcrypt';


// generate data
async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: 'Default User',
                username: 'user',
                password: hashSync('user', 10),
                provider: 'credentials',
                verified: new Date(),
                role: 'USER'
            },
            {
                fullName: 'Admin',
                username: 'admin',
                password: hashSync('admin', 10),
                provider: 'credentials',
                verified: new Date(),
                role: 'ADMIN'
            },
        ]
    })
}

// remove data
async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
}

async function main() {
    try {
        await down();
        await up();
    } catch (e) {
        console.error(e);
    }
}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})