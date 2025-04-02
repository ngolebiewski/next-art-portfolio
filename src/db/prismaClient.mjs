import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();  // Initialize Prisma Client

export default prisma;  // Export the instance so it can be used elsewhere
