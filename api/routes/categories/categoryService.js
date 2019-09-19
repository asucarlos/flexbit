"use strict";

const Category = require("./categoryModel");

exports.listCategory = async () => {
  try {
    const category = Category.find({});
    return category;
  } catch (e) {
    console.error("unable to list categories");
    throw e;
  }
};

exports.createCategory = async categoryData => {
  const category = new Category(categoryData);
  try {
    return await category.save();
  } catch (e) {
    console.error("unable to create a category");
    throw e;
  }
};
