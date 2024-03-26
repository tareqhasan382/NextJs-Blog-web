import { NextResponse } from "next/server";
import BlogModel from "../../../../lib/models/BlogModel";
import { connectMongodb } from "../../../../lib/mongodb";

export async function POST(req, res) {
  // console.log("post data:", req.json());
  connectMongodb();
  try {
    const { userId, title, content, img, category } = await req.json();

    if (!userId || !title || !content || !img || !category) {
      return NextResponse.json(
        {
          message: "Blog creation failed. Please provide all required fields.",
          success: false,
        },
        { status: 400 }
      );
    }

    await BlogModel.create({ userId, title, content, img, category });
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
