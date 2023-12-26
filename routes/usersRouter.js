const express = require('express');
const usersService = require('./../services/userServices');

const router = express.Router();
const service = new usersService();

router.get('/',(req,res)=> {
  const products = service.find();
  res.json(products);
});

// FIND ONE
router.get('/:id', (req,res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
});



module.exports = router;
