import { AuthOptions, DefaultSession } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  interface User {
    username: string;
    id: string;
    verified?: boolean
  }

  interface Session {
    user: {
      id: string;
      username: string;
      verified?: boolean;
    } & DefaultSession["user"];
  }
}
 
export const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
      profile(profile) {
        return {
          id: profile.id,
          username: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
        };
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter your username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        // initial approach will use test user due of lack of database connection
        const testUser = {
          id: "1",
          username: "test",
          password: "test",
        };

        if (
          credentials.username === testUser.username &&
          credentials.password === testUser.password
        ) {
          return {
            ...testUser,
            verified: true,
          };
        }

        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.verified = user.verified;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id as string;
        session.user.name = token.username as string;
        session.user.verified = token.verified as boolean;
      }
      return session;
    },
  },
};
