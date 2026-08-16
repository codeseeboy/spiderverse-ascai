import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body.name !== "string" || typeof body.email !== "string") {
    return NextResponse.json({ error: "Name and email required." }, { status: 400 });
  }
  if (!body.email.includes("@")) {
    return NextResponse.json({ error: "Valid email required." }, { status: 400 });
  }
  const missionId = `SV-${Date.now().toString(36).toUpperCase()}`;
  return NextResponse.json({ ok: true, missionId });
}
