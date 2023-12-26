const express = require('express');
const categoriesService = require('./../services/categoriesServices')

const router = express.Router();
const service = new categoriesService();

router.get('/',(req,res)=> {
  const categories = service.find();
  res.json(categories);
});


//FIND ONE
router.get('/:id', (req,res) => {
  const { id } = req.params;
  const categories = service.findOne(id);
  res.json(categories);
});

  module.exports = router
