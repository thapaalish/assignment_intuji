import express from "express";
import dotenv from "dotenv";

dotenv.config();
import blogRoutes from "./blog.routes.js";
// import userRoutes from "./user.routes.js";

const app = express();

// to make app understand json
app.use(express.json());

// register routes
app.use(blogRoutes);
// app.use(userRoutes);

// port
const PORT = process.env.APP_PORT ?? 5000;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
