const  { faker } = require('@faker-js/faker');

class categoriesService{

  constructor(){
    this.categories = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for(let index = 0; index < limit; index++){
      this.categories.push({
        name: faker.commerce.productName(),
      });
    }
  }

  create(){

  }
  find(){
    return this.categories;
  }
  findOne(id){
    return this.categories.find(item => item.id === id);
  }
  update(){

  }
  delete(){

  }

}

module.exports = categoriesService;
