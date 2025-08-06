import { NextRequest, NextResponse } from "next/server";
import usersData from "@/shared/utils/api/database/users.json";

export async function GET(request: NextRequest) {
  const users = usersData.results;
  return NextResponse.json({ success: true, results: users });
}
