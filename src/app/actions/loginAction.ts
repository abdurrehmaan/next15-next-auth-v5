import { getServerSession } from "next-auth";
import { authOptions } from "../api/(auth)/auth/[...nextauth]/route";

export const loginAction = async () => {
    const session = await getServerSession(authOptions);
    if (session) {
      return { user: session.user };
    } else {
      throw new Error("Authentication failed");
    }

}