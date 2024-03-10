import { NextResponse } from "next/server";
import BlogModel from "../../../../lib/models/BlogModel";

export async function POST(req, res) {
  try {
    const { userId, title, content, img } = await req.json();
    if (!userId || !title || !content || !img) {
      return NextResponse.json(
        {
          message: "Blog creation failed. Please provide all required fields.",
          success: false,
        },
        { status: 400 }
      );
    }

    await BlogModel.create({ userId, title, content, img });
    return NextResponse.json(
      { message: "Blog created successfully.", success: "true" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Blog created failed.", success: "false" },
      { status: 500 }
    );
  }
}
