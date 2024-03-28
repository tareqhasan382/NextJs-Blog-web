import { mongoose } from "mongoose";
const CategorySchema = new mongoose.Schema(
  {
    // userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const CategoryModel =
  mongoose.models.Category || mongoose.model("Category", CategorySchema);
export default CategoryModel;
