// use college;

db.products.insertMany([
  { _id: 1, name: "laptop", price: 500, quantity: 100 },
  { _id: 2, name: "mouse", price: 150, quantity: 200 },
  { _id: 3, name: "keyboard", price: 250, quantity: 300 },
  { _id: 4, name: "monitor", price: 400, quantity: 60 },
  { _id: 5, name: "printer", price: 200, quantity: 60 },
  { _id: 6, name: "scanner", price: 300, quantity: 30 },
  { _id: 7, name: "cpu", price: 100, quantity: 50 }
]);




// Price >= 200
db.products.find({ price: { $gte: 200 } });

// Price < 200
db.products.find({ price: { $lt: 200 } });

// Quantity != 300
db.products.find({ quantity: { $ne: 300 } });

// Price = 200 and quantity = 60
db.products.find({ price: 200, quantity: 60 });

// Price = 500 or quantity = 60
db.products.find({ $or: [ { price: 500 }, { quantity: 60 } ] });

// Price != 400 or quantity != 40
db.products.find({ $or: [ { price: { $ne: 400 } }, { quantity: { $ne: 40 } } ] });

// Price either 200 or 400
db.products.find({ price: { $in: [200, 400] } });

// Price not 100 or 500
db.products.find({ price: { $nin: [100, 500] } });

// Update price of laptop to 700
db.products.updateOne({ name: "laptop" }, { $set: { price: 700 } });

// _id = 5 show name and price only
db.products.find({ _id: 5 }, { name: 1, price: 1, _id: 0 });

// Sort name ascending
db.products.find().sort({ name: 1 });

// Sort price descending, limit to 2
db.products.find().sort({ price: -1 }).limit(2);

// Product with lowest price
db.products.find().sort({ price: 1 }).limit(1).project({ name: 1, price: 1 });

// 3rd lowest priced product
db.products.find().sort({ price: 1 }).skip(2).limit(1).project({ name: 1, price: 1 });

// Delete _id = 7
db.products.deleteOne({ _id: 7 });
