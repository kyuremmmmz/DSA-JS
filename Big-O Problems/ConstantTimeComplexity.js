//Problem: You are given a dictionary (hash map) of products and their prices. Write a function that checks if a product exists in the dictionary and returns its price if found. 
// If the product is not found, return "Product not found".

const findProductPricesIfExist = (products, productName) => {
    if (!products[productName]) {
        console.log("No products found");
    }
    if (products[productName]) {
        console.log(products[productName]);
    }
}


const productPrices = {
    "apple": 1.5,
    "banana": 0.9,
    "cherry": 2.0
};

findProductPricesIfExist(productPrices, "banana")
findProductPricesIfExist(productPrices, "orange")