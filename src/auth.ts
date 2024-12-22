import NextAuth from "next-auth";
import Credentials from 'next-auth/providers/credentials';
import { signInSchema } from "./lib/zod";

export const {handlers, signIn, signOut, auth} = NextAuth({
    providers: [Credentials({
        credentials: {
            username: { label: "Username", type: "text", placeholder:"Email" },
            password: { label: "Password", type: "password", placeholder:"Password" }, 
        },
        async authorize(credentials, request) {
            let user = null
            // validate credentials
            const parsedCredentials = signInSchema.safeParse(credentials)
            if(!parsedCredentials.success) { 
                console.log('invalid Credentials:', parsedCredentials.error.errors)
                return null
            }

            user = { 
                id: '1',  // changed to string to match User type
                name: 'Abdur Rehman',
                email: 'abdur@gmail.com',
                password: '11223344'
            }

            if(!user) {
                console.log('invalid credentials')
                return null
            }

            return user
        }
    })],
    callbacks: {
        authorized({request: {nextUrl}, auth}) {
            const isLoggedIn = !! auth?.user;
            const isOnHomePage = nextUrl.pathname === '/';
            
            if (isOnHomePage && isLoggedIn) {
                return Response.redirect(new URL('/dashboard', nextUrl));
            }
            
            return isLoggedIn;
        },
        jwt({token, user}) {
            if (user) {
                token.id = user.id as string
            }
            return token
        },
        session({session, token}: {session: any, token: any}) {
            session.user.id = token.id
            return session
        }
    },
    pages: {
        signIn: '/'
    }
})