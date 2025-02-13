import "next-auth";

declare module "next-auth" {
  interface User {
    username: string;
    id: string;
  }

  interface Session {
    user: {
      id: string;
      username: string;
    } & DefaultSession["user"];
  }
}
