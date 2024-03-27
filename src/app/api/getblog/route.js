import { NextResponse } from "next/server";
import BlogModel from "../../../../lib/models/BlogModel";
import { connectMongodb } from "../../../../lib/mongodb";

export async function GET(req, res) {
  try {
    await connectMongodb();
    const blogs = await BlogModel.find();
    // console.log("get blog data:", blogs);
    res.setHeader("Cache-Control", "no-cache, must-revalidate");
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
