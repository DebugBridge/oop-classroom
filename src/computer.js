class Computer {
  constructor(computerInfo, osInfo, processorInfo, memoryInfo, graphicsInfo){
    this.name = computerInfo;
    this.operatingSystem = osInfo;
    this.processor = processorInfo;
    this.memory = memoryInfo;
    this.graphics = graphicsInfo;
    this.on = false
  }

  power() {
    this.on = !(this.on)
  }
}

module.exports = Computer
