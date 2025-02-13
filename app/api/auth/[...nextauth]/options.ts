import {NextAuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    pages: {
        signIn: '/login'
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "Enter your username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "Enter your password"
                }
            },
            async authorize(credentials) {
                // test user
                const testUser = {
                    id: "1",
                    name: "test",
                    password: "testtest",
                };

                if (credentials?.username === testUser.name && credentials?.password === testUser.password) {
                    return testUser
                } else {
                    return null
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
}