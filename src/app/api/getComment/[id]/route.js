import { NextResponse } from "next/server";
import CommentModel from "../../../../../lib/models/CommentModel";
import { connectMongodb } from "../../../../../lib/mongodb";

export async function GET(req, { params }) {
  const { id } = params;
  // console.log("id:", id);
  try {
    await connectMongodb();
    const comment = await CommentModel.find({ blogId: id });
    // console.log(" data :", comment);
    return NextResponse.json(
      {
        message: "Comment retrieved successfully.",
        success: "true",
        data: comment,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Data retrive failed.", success: "false" },
      { status: 500 }
    );
  }
}
