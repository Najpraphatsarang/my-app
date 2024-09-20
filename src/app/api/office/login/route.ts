import { type NextRequest, NextResponse } from "next/server";
import { post } from "../../const";
import { headers } from "next/headers";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const res = await post("http://localhost:3000/api/office/login", body);

  const data = await res.json();

  if (res.status !== 200) {
    return new NextResponse(JSON.stringify(data), {
      status: res.status,
    });
  }

  const response = new NextResponse(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const options: any = {
    httpOnly: true,
    path:"/",
    sameSite:"lax",
  };

  response.cookies.set("token", data.token, options);
  return response;
}
