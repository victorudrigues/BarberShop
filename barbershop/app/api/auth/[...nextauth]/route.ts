import { db } from "@/app/_lib/prisma";
import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google';
import { Adapter } from 'next-auth/adapters';
import { PrismaAdapter } from "@auth/prisma-adapter";

//Autentication
const handler = NextAuth({
    adapter: PrismaAdapter(db) as Adapter,
    providers: [
        GoogleProvider({
        clientId: "",
        clientSecret:"",
    }),
    ],
    
})

export { handler as GET, handler as POST }