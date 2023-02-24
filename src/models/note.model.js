import mongoose from "mongoose";
const { Schema, model } = mongoose;

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "El campo title es obligatorio"],
    },

    description: {
      type: String,
      required: [true, "El campo description es obligatorio"],
    },
    category: {
      type: String,
      required: [true, "El campo category es obligatorio"],
    },
  },
  { timestamps: true }
);

export const noteModel = model("note", noteSchema);
