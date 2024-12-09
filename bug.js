```javascript
//Incorrect usage of $inc operator in MongoDB aggregation pipeline
db.collection('products').aggregate([
  { $match: { category: 'Electronics' } },
  { $group: { _id: '$category', totalQuantity: { $sum: '$quantity' } } },
  { $project: { _id: 0, category: '$_id', totalQuantity: 1 } },
  { $inc: { totalQuantity: 10 } } // Incorrect: Modifies the existing totalQuantity
]);
```