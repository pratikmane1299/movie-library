import { NextResponse } from "next/server";

import { getAllMoviesOnServer } from "@/services/movies";

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get('page')) || 1;
	const query = (searchParams.get("query") || 1) as string;
	
	const data = await getAllMoviesOnServer(page, query);
	
	return NextResponse.json({ ...data });
}
