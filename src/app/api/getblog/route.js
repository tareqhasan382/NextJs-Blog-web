import { NextResponse } from "next/server";
import BlogModel from "../../../../lib/models/BlogModel";
import { connectMongodb } from "../../../../lib/mongodb";

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || 1;
  const limit = 3;
  try {
    await connectMongodb();
    // const page = parseInt(req.query.page) || 1;
    // console.log("route page:", page);
    // const limit = 3;
    // const skip = (page - 1) * limit;
    //   .sort({ createdAt: -1 })
    const count = await BlogModel.countDocuments();
    const blogs = await BlogModel.find()
      .skip((page - 1) * limit)
      .limit(limit)
      .populate("userId");
    return NextResponse.json(
      {
        message: "Blogs retrieved successfully.",
        success: "true",
        data: blogs,
        total: count,
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
