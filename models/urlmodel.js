import mongoose from "mongoose";
import { nanoid } from "nanoid";

const urlSchema = new mongoose.Schema({
	urlId: {
		type: String,
		required: true,
	},
	origUrl: {
		type: String,
		required: true,
	},
	shortUrl: {
		type: String,
		required: true,
	},
	clicks: {
		type: Number,
		required: true,
		default: 0,
	},
	date: {
		type: String,
		default: Date.now,
	},
});

const urlModel = mongoose.model("url", urlSchema);

export default urlModel;
