import { connectMongoDB } from "@/config/db";
import User from "@/backend/models/User/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { name, email, password, role } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    const userExist = await User.findOne({ email: email, role: 'admin' });

    if (userExist) {
      return NextResponse.json(
        { message: "Admin Already Exist" },
        { status: 400 }
      );
    }

    const res = await User.create({ name, email, password: hashedPassword, role });
    console.log(res)
    return NextResponse.json({ message: "Admin Registered" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error accurred while registering the user : " + error,  },
      { status: 500 }
    );
  }
}
