const mongoose = require("mongoose");

// const mongoURI = process.env.mongoURI;
const mongoURI =
  "mongodb+srv://BiggaHD:Test_321@cluster0.em5kn.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
