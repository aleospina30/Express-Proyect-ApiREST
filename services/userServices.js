const  { faker } = require('@faker-js/faker');

class usersService{

  constructor(){
    this.users = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for(let index = 0; index < limit; index++){
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.person.fullName(),
        age: faker.number.int({ min: 1, max: 99}),
        gender: faker.person.sex()
      });
    }
  }

  create(){

  }
  find(){
    return this.users;
  }
  findOne(id){
    return this.users.find(item => item.id === id);
  }
  update(){

  }
  delete(){

  }

}

module.exports = usersService;
