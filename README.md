# UniCart

![New Collection With Laptop Mockup](https://github.com/SmitParekh84/Images/blob/main/UniCart/New%20Collection%20With%20Laptop%20Mockup%20Instagram%20Post.png?raw=true)


UniCart is an e-commerce web application designed to provide a seamless online shopping experience. This project leverages Express.js for the backend, EJS for templating, and Axios for making API requests. The application supports browsing products across various categories, featuring new and discounted items, and more.

## Features

- **Dynamic Rendering:** Products and categories are dynamically fetched from an external API.
- **Random Discounts:** Each category page features a randomly selected discounted product.
- **Responsive Design:** The application is fully responsive, with a mobile-friendly layout.
- **Multi-language Support:** Users can select their preferred language and currency.
- **Customizable UI:** Easy to modify and extend the front-end design.


## Future Features

### Add to Cart

Currently, there is no "Add to Cart" feature implemented. This functionality will be added in a future update.

### Login and Signup

A login and signup feature will be implemented in the future to allow users to create accounts and manage their purchases more efficiently.


## Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- npm (version 6 or higher)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/unicart.git
   cd unicart
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   API_URL="https://api.escuelajs.co/api/v1"
   PORT=3000
   ```

4. **Run the application:**
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Fetching Data from Fake Store API

UniCart uses the [EscuelaJS Fake Store API](https://api.escuelajs.co/api/v1) to fetch product data. Below are examples of how to fetch data using this API.

### Get All Products

To fetch all products, you can use the following code snippet:

```javascript
fetch('https://api.escuelajs.co/api/v1/products')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching products:', error));
```

### Get a Single Product by ID

To fetch a specific product by its ID, use the following code:

```javascript
const productId = 1; // Replace with the actual product ID
fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(`Error fetching product with ID ${productId}:`, error));
```

### Get All Categories

To fetch all categories, you can use this code snippet:

```javascript
fetch('https://api.escuelajs.co/api/v1/categories')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching categories:', error));
```


## Project Structure

```plaintext
unicart/
│
├── public/                  # Static assets (CSS, images, etc.)
│   ├── css/
│   ├── images/
│   └── ...
│
├── views/                   # EJS templates
│   ├── partials/
│   ├── category/
│   ├── pages/
│   └── product/
│
├── .env                     # Environment variables
├── app.js                   # Express application
├── package.json             # NPM package file
└── ...
```

### Key Files

- **`app.js`:** The main server file, where routes and middleware are defined.
- **`views/`:** Contains EJS templates for rendering the front end.
  - **`partials/`:** Reusable partial templates (header, footer, etc.).
  - **`category/`:** Templates for different product categories.
  - **`pages/`:** Main pages (home, filtered categories).
  - **`product/`:** Templates for individual product components.

### Routes

- **`/`:** Home page displaying featured products, new products, and various sections.
- **`/clothes`:** Category page for clothes.
- **`/electronics`:** Category page for electronics.
- **`/furniture`:** Category page for furniture.
- **`/footwear`:** Category page for footwear.

## Customization

### Adding New Categories

1. Create a new template in the `views/category` directory.
2. Add a new route in `app.js` similar to the existing category routes.
3. Update the navigation in `views/partials/header.ejs` to include the new category.

### Modifying the Design

- **CSS:** Modify the CSS files in `public/css/`.
- **Templates:** Edit the EJS templates in the `views/` directory.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the existing code style and include appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
