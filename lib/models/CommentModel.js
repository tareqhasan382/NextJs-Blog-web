// CommentModel;
import { Schema, mongoose } from "mongoose";
const CommentSchema = new mongoose.Schema(
  {
    blogId: { type: Schema.Types.ObjectId, ref: "Blog", required: true },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const CommentModel =
  mongoose.models.Comment || mongoose.model("Comment", CommentSchema);
export default CommentModel;
