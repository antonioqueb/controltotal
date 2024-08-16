import { PrismaClient } from '@prisma/client';

declare global {
  // Esto es para evitar errores de duplicación de prisma en el entorno de desarrollo
  var prismaGlobal: PrismaClient | undefined;
}

const prismaClientSingleton = () => {
  return new PrismaClient();
};

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prismaGlobal = prisma;
}

export default prisma;
