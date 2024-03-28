import { NextResponse } from "next/server";
import { connectMongodb } from "../../../../lib/mongodb";
import CategoryModel from "../../../../lib/models/CategoryModel";

export async function POST(req, res) {
  // console.log("post data:", req.json());
  connectMongodb();
  try {
    const { name, img } = await req.json();

    if (!name || !img) {
      return NextResponse.json(
        {
          message:
            "Ctegory creation failed. Please provide all required fields.",
          success: false,
        },
        { status: 400 }
      );
    }

    await CategoryModel.create({ name, img });
    // res.setHeader("Cache-Control", "no-cache, must-revalidate");
    return NextResponse.json(
      { message: "Category created successfully.", success: true },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Category created failed.", success: false },
      { status: 500 }
    );
  }
}
