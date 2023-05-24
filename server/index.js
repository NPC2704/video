require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// mgdb alat: congdeptrai
const authRouter = require("./routes/auth");
const postRouter = require("./routes/post");
const PORT = process.env.PORT || 5000;
mongoose.set('strict',false)
const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );
      // neu loi address thi vao MongoDB Atlas -> NetworkAccess -> xoa 1 address va them 1 address khac
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.get('/', (req,res) => {
  res.send({ title: 'Books' });
})
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);



app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
