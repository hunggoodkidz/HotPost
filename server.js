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

//Swagger
var database;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node JS API Project HotPost for mongodb",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:5000/",
      },
    ],
  },
  apis: ["./server.js"],
};

const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /:
 *  get:
 *      sumary: This api is used to get all the users in the database
 *      description: This api is used to get all the users in the database
 *      responses:
 *            200:
 *                description: to see all the users in the database
 */

app.get('/api/users')

//Routes
app.use("/api", require("./routes/authRouter"));
