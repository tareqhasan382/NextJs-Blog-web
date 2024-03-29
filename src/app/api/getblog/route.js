import { NextResponse } from "next/server";
import BlogModel from "../../../../lib/models/BlogModel";
import { connectMongodb } from "../../../../lib/mongodb";

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("limit") || 3;
  const category = searchParams.get("category");
  // console.log("limit route:", lmt);
  // const limit = 3;
  //=====filter
  const query = {};
  if (category) {
    query.category = category;
    // Add more fields to filter as needed
  }
  try {
    await connectMongodb();

    const count = await BlogModel.countDocuments(query);
    const blogs = await BlogModel.find(query)
      .skip((page - 1) * limit)
      .limit(limit)
      .populate("userId");

    // console.log("count:", count);
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

// const page = parseInt(req.query.page) || 1;
// console.log("route page:", page);
// const limit = 3;
// const skip = (page - 1) * limit;
//   .sort({ createdAt: -1 })
