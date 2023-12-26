const express = require('express');
const ProductsService = require('./../services/productServices');

const router = express.Router();
const service = new ProductsService();


router.get('/',(req,res)=> {
  const products = service.find();
  res.json(products);
});

//Find ONE
router.get('/:id', (req,res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
});

router.post('/', (req,res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', (req,res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id,body)
  res.status().json(product);
});

router.delete('/:id', (req,res) => {
  const { id } = req.params;
  const rta = service.update(id);
  res.json(rta);
});

module.exports = router;
