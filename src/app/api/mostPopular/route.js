import { NextResponse } from "next/server";
import { connectMongodb } from "../../../../lib/mongodb";
import BlogModel from "../../../../lib/models/BlogModel";

export async function GET(req, res) {
  const limit = 4;
  try {
    await connectMongodb();

    const blogs = await BlogModel.find()
      .sort({ createdAt: -1 })
      .limit(limit)
      .populate("userId");
    return NextResponse.json(
      {
        message: "Blogs retrieved successfully.",
        success: "true",
        data: blogs,
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
