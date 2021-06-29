class Room {
  constructor(name, description){
    this.name = name;
    this.description = description;
    this.contents = [];
  }

  add(item){
    this.contents.push(item);
    return this;
  }

  has(input){
    return this.contents.includes(input);
  }
}

module.exports = Room
