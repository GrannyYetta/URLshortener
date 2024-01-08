import mongoose from "mongoose";
import { nanoid } from "nanoid";

const urlSchema = new mongoose.Schema({
	fullUrl: { type: String, required: true },
	shortUrl: { type: String, required: true, default: nanoid.generate },
	date: { type: String, default: Date.now },
});

const urlModel = mongoose.model("url", urlSchema);

export default urlModel;
