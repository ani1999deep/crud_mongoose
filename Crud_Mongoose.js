const mongoose = require('mongoose');
const main = async () => {
    await mongoose.connect("mongodb://0.0.0.0:27017/e-comm");
    //Schema
    const ProductSchema = new mongoose.Schema({

        name: String,
        price:Number,
        brand:String,
        category:String

    });

    const ProductModel = mongoose.model('products', ProductSchema);

    let data = new ProductModel({ 
    name: "Nde pro",
    price:500,
    brand:"text",
    category:"Mobile"
})
    let result = await data.save();
    console.log(result)
}
main()