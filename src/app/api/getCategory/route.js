import { NextResponse } from "next/server";
import { connectMongodb } from "../../../../lib/mongodb";
import CategoryModel from "../../../../lib/models/CategoryModel";

export async function GET(req, res) {
  try {
    await connectMongodb();
    const result = await CategoryModel.find();
    return NextResponse.json(
      {
        message: "Category retrieved successfully.",
        success: "true",
        data: result,
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
