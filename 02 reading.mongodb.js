use("ecommerce");
//db.products.find()
// db.products.find().pretty()
//db.products.find({ category: "Electronics" })
//db.products.find({ price: { $gt: 1000 } })
// db.products.updateOne(
// { name: "Wireless Mouse" },
// { $set: { price: 1899 } }
// )
db.products.updateMany(
    { category: "Electronics" },
    { $inc: { stock: 10 } }
)
db.products.updateOne(
    { name: "Wireless Mouse" },
    { $push: { tags: "new" } }
)
