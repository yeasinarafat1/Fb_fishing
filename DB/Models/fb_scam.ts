import { Document, Schema, model, models } from "mongoose";

export interface IImage extends Document {
  email: string;
  fb_vedio_link: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const fb_vedio_link_scheama = new Schema({
  email: { type: String, required: true },
  fb_vedio_link: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const fb_vedio_link =
  models?.fb_vedio_link || model("fb_vedio_link", fb_vedio_link_scheama);

export default fb_vedio_link;
