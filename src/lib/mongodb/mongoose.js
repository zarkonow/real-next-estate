import mongoose from "mongoose";

let initialize = false;

export const connect = async () => {
  mongoose.set("strictQuery", true);

  if (initialize) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "real-next-estate",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    initialize = true;
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
    throw new Error("Error connecting to MongoDB");
  }
};
