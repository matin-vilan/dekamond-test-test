import { NextRequest, NextResponse } from "next/server";
import usersData from "@/shared/utils/api/database/users.json";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password, userName } = body;

    if (!password || !userName) {
      return NextResponse.json(
        {
          success: false,
          message: "Username and password are required",
        },
        { status: 400 }
      );
    }

    const user = usersData.results.find(
      (user) => user.login.username === userName
    );

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid username or password",
        },
        { status: 401 }
      );
    }

    const passwordMatches = user.login.password === password;

    if (passwordMatches) {
      const accessToken = Math.random().toString(36).substring(2, 15);
      return NextResponse.json({
        success: true,
        message: "Login successful",
        user: {
          id: user.login.uuid,
          email: user.email,
          name: `${user.name.first} ${user.name.last}`,
          picture: user.picture.medium,
          username: user.login.username,
          accessToken,
        },
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid username or password",
        },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Login route error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
