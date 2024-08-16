import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  callbacks: {
    // Puedes añadir tus callbacks personalizados aquí si es necesario
  },
};

// Exporta los manejadores de NextAuth (signIn, signOut, auth)
export const { handlers, signIn, signOut, auth } = NextAuth(options);

export default NextAuth(options);
