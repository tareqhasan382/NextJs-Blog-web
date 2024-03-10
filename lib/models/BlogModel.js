import { Schema, mongoose } from "mongoose";
const BlogSchema = new mongoose.Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    title: {
      type: String,
      required: true,
    },
    content: {
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

const BlogModel = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
export default BlogModel;
