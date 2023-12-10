import NextAuth, { Account, AuthOptions, Profile, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),

    CredentialsProvider({
      name: "credentials",

      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "your@email.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        if (!credentials) return null;
        const { email, password } = credentials;
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        }); //Get user from database
        if (!user) return null;
        const userPassword = user.password;
        const isValidPassword = bcrypt.compareSync(password, userPassword!);
        if (!isValidPassword) {
          return null; //Compare password
        }
        return user;
      },
    }),
  ],

  pages: {
    signIn: "/auth/login",
    signOut: "/auth/signout",
  },

  secret: process.env.NEXTAUTH_URL,

  jwt: {
    async encode({ secret, token }) {
      if (!token) throw new Error("No token to encode!");
      return jwt.sign(token, secret);
    },
    async decode({ secret, token }) {
      if (!token) throw new Error("No token to decode!");
      const decodeToken = jwt.verify(token, secret);
      if (typeof decodeToken === "string") {
        return JSON.parse(decodeToken);
      } else return decodeToken;
    },
  },

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },

  callbacks: {
    async session(params: { session: Session; token: JWT; user: User }) {
      if (params.session.user) {
        params.session.user.email = params.token.email;
      }
      return params.session;
    },

    async jwt(params: {
      token: JWT;
      user?: User | undefined;
      account?: Account | null | undefined;
      profile?: Profile | undefined;
      isNewUser?: boolean | undefined;
    }) {
      if (params.user) {
        params.token.email = params.user.email;
      }
      return params.token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
