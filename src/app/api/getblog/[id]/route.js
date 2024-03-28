import { NextResponse } from "next/server";
import { connectMongodb } from "../../../../../lib/mongodb";
import BlogModel from "../../../../../lib/models/BlogModel";

export async function GET(req, { params }) {
  const { id } = params;
  // console.log("id:", id);
  try {
    await connectMongodb();
    const blog = await BlogModel.findById(id);
    // console.log("blog:", blog);
    return NextResponse.json(
      {
        message: "Blog retrieved successfully.",
        success: "true",
        data: blog,
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
