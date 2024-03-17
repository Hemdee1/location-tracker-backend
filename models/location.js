import { Schema, model } from "mongoose";

const locationSchema = new Schema({
  longitude: {
    type: Number,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

const locationModel = model("Location", locationSchema);

export default locationModel;
