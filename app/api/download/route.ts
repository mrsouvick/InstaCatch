import { NextRequest, NextResponse } from "next/server";
import { extractInstagramMedia } from "@/lib/instagram";
import { isValidInstagramUrl, sanitizeInstagramUrl } from "@/lib/url";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { url?: string };
    const rawUrl = body?.url ?? "";
    const url = sanitizeInstagramUrl(rawUrl);

    if (!url || !isValidInstagramUrl(url)) {
      return NextResponse.json(
        {
          success: false,
          media: [],
          message: "Please provide a valid Instagram URL.",
        },
        { status: 400 },
      );
    }

    const result = await extractInstagramMedia(url);
    const status = result.success ? 200 : 422;
    return NextResponse.json(result, { status });
  } catch {
    return NextResponse.json(
      {
        success: false,
        media: [],
        message: "Unexpected server error. Please try again.",
      },
      { status: 500 },
    );
  }
}
