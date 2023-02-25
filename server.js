const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./mongodb/connect");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

dotenv.config();
const app = express();

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);

    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log("Server running on port ", port);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

//Routes
app.use("/api", require("./routes/authRouter"));

const URI = process.env.MONGODB_URL;
mongoose.connect(
  URI,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected tomongodb");
  }
);
