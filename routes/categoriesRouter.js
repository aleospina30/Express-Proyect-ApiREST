const express = require('express');

const router = express.Router();

router.get('/:categoryId/products/:productId/orden-compra/:compraId', (req,res) =>{
  const { categoryId, productId, compraId } = req.params;
  res.json({
  categoryId,
  productId,
  compraId
    });
  });

  module.exports = router
