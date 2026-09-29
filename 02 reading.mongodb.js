use ("ecommerce");
 //db.products.find()
// db.products.find().pretty()
//db.products.find({ category: "Electronics" })
db.products.find({ price: { $gt: 1000 } })