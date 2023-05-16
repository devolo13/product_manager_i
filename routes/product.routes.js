const ProductController = require('../controllers/product.controller');
module.exports = function (app) {
  app.get('/api', ProductController.index);
  app.post('/api/product', ProductController.createProduct);
  // app.post('/api/product/:title/:price/:description');
};
