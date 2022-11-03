class App {
  constructor() {
    // this.clearButton = document.getElementById("clear-btn");
    // this.loadButton = document.getElementById("load-btn");
    this.typeDriver = document.getElementById('type-driver');
    this.inputDate = document.getElementById('input-date');
    this.inputTime = document.getElementById('input-time');
    this.inputPassangers = document.getElementById('input-passangers');
    this.loadButton = document.getElementById('load-button');
    this.carContainerElement = document.getElementById('cars-container');
  }

  async init() {
    await this.load();

    this.loadButton.onclick = this.run;

    // Register click listener
    // this.clearButton.onclick = this.clear;
    // this.loadButton.onclick = this.run;
  }

  run = () => {
    let tipeDriver = this.typeDriver.value;
    let filterDate = this.inputDate.value;
    let filterTime = this.inputTime.value;
    let numPassengers = this.inputPassangers.value;

    Car.list.forEach((car) => {
      const node = document.createElement('div');
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };

  validateInput = () => {
    console.log(this.tipeDriver.value);
    if (!this.tipeDriver.value) {
      alert('Pilih Driver');
    }
  };
}
