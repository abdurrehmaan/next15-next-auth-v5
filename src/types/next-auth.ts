interface User { 
    id: string
}

interface Session { 
    user: User
}

declare module "next-auth/jwt" { 
    interface JWT {
        id: string
    }
}