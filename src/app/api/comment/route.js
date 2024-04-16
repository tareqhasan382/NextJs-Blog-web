import { NextResponse } from "next/server";
import { connectMongodb } from "../../../../lib/mongodb";
import CommentModel from "../../../../lib/models/CommentModel";

export async function POST(req, res) {
  connectMongodb();
  try {
    const { blogId, userId, comment } = await req.json();
    // console.log("data:", comment);
    if (!blogId || !userId || !comment) {
      return NextResponse.json(
        {
          message: "Comment failed. Please provide all required fields.",
          success: false,
        },
        { status: 400 }
      );
    }

    await CommentModel.create({ blogId, userId, comment });

    return NextResponse.json(
      { message: "Comment successfully.", success: true },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Comment failed.", success: false },
      { status: 500 }
    );
  }
}
