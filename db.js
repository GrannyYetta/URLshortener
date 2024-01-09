import mongoose from "mongoose";
import "dotenv/config";

export const connection = async () => {
	try {
		const connection = await mongoose.connect(process.env.DB_URI); // connecting to mongoDB
		console.log(connection);
	} catch (error) {
		console.log(error);
	}
};
