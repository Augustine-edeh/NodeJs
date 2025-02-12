const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "Your Cart",
    path: "/cart",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};

// exports.getProductDetails = (req, res, next) => {
//   res.render("shop/product-details", {
//     prods: products,
//     pageTitle: "Product Details",
//     path: "shop/product-details",
//   });
// };

// exports.getProductList = (req, res, next) => {
//   res.render("shop/product-list", {
//     prods: products,
//     pageTitle: "Product List",
//     path: "shop/product-list",
//   });
// };
