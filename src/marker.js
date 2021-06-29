class Marker {
  constructor(size, color, remainingInk){
    this.size = size;
    this.color = color;
    this.remainingInk = remainingInk;
  }
  write(input){
    for (let i = 0; i < input.length; i++){
      if (this.remainingInk === 0){
        return input.slice(0, i);
      } else {
        if (input[i] === ' '){
          continue;
        } else {
          this.remainingInk--;
        }
      }
    }
    return input;
  }

}

module.exports = Marker