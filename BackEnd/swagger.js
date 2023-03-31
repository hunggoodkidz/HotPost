import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import express from "express";
import path from "path";
import YAML from "yamljs";

const app = express();

// Set up swagger-jsdoc
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Your App Name",
    version: "1.0.0",
    description: "API Documentation for Your App",
  },
  servers: [
    {
      url: "http://localhost:3001",
      description: "Development server",
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ["./routes/*.js"],
};

//const swaggerSpec = swaggerJSDoc(options);

// Set up swagger-ui-express
//app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Serve SwaggerUI documentation
const swaggerDocument = YAML.load("./swagger.yaml");
app.use("/api-docs", swaggerUi.serve);
app.get("/api-docs", swaggerUi.setup(swaggerDocument));

export default app;
