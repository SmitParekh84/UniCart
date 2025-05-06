import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import env from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
env.config();

// Get current directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;
const apiUrl = process.env.API_URL;

// Set up EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files - use absolute path
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));

// Function to generate a random index within a specified range
function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

// Function to generate a random discount price under $50
function getRandomDiscount() {
  return (Math.random() * 50).toFixed(2);
}
// Route to render the main page
app.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${apiUrl}/products`);
    const newProducts = response.data;
    const randomIndex = getRandomIndex(newProducts.length);
    const randomDiscount = getRandomDiscount();
    res.render("pages/home.ejs", {
      newProducts,
      route: "home",
      randomIndex,
      randomDiscount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching products");
  }
});

app.get("/clothes", async (req, res) => {
  try {
    const response = await axios.get(`${apiUrl}/products/?categoryId=1`);
    const clothesProducts = response.data;

    const clothesCount = clothesProducts.length;
    const randomIndex = getRandomIndex(clothesCount);
    const randomDiscount = getRandomDiscount();
    res.render("pages/filterCategory.ejs", {
      clothesProducts,
      route: "clothes",
      randomIndex,
      randomDiscount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching products");
  }
});

app.get("/electronics", async (req, res) => {
  try {
    const response = await axios.get(`${apiUrl}/products/?categoryId=2`);
    const electronicProducts = response.data;
    const randomIndex = getRandomIndex(electronicProducts.length);
    const randomDiscount = getRandomDiscount();
    res.render("pages/filterCategory.ejs", {
      electronicProducts,
      route: "electronics",
      randomIndex,
      randomDiscount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching products");
  }
});

app.get("/furniture", async (req, res) => {
  try {
    const response = await axios.get(`${apiUrl}/products/?categoryId=3`);
    const furnitureProducts = response.data;
    const randomIndex = getRandomIndex(furnitureProducts.length);
    const randomDiscount = getRandomDiscount();
    res.render("pages/filterCategory.ejs", {
      furnitureProducts,
      route: "furniture",
      randomIndex,
      randomDiscount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching products");
  }
});
app.get("/footwear", async (req, res) => {
  try {
    const response = await axios.get(`${apiUrl}/products/?categoryId=4`);
    const footwearProducts = response.data;
    const randomIndex = getRandomIndex(footwearProducts.length);
    const randomDiscount = getRandomDiscount();
    res.render("pages/filterCategory.ejs", {
      footwearProducts,
      route: "footwear",
      randomIndex,
      randomDiscount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching products");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
