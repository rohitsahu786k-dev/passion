import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize(credentials) {
        const adminUsername = process.env.ADMIN_USERNAME || 'admin';
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!adminPassword) return null;

        if (
          credentials?.username === adminUsername &&
          credentials?.password === adminPassword
        ) {
          return {
            id: '1',
            name: 'Admin',
            email: process.env.ADMIN_EMAIL || 'admin@girlsofpassion.in',
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/admin/login',
  },
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET,
  trustHost: true,
});
