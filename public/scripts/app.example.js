class App {
  constructor() {
    // this.clearButton = document.getElementById("clear-btn");
    // this.loadButton = document.getElementById("load-btn");
    this.typeDriver = document.getElementById("type-driver");
    this.inputDate = document.getElementById("input-date");
    this.inputTime = document.getElementById("input-time");
    this.inputPassangers = document.getElementById("input-passangers");
    this.loadButton = document.getElementById("load-button");
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init() {
    await this.load();

    this.loadButton.onclick = this.run;
    // Register click listener
    // this.clearButton.onclick = this.clear;
    // this.loadButton.onclick = this.run;
  }

  run = () => {
    let typeDriver = this.typeDriver.value === "true" ? true : false;
    let filterDate = this.inputDate.value;
    let filterTime = this.inputTime.value;
    let numPassengers = this.inputPassangers.value;

    let filterDateTime = new Date(`${filterDate} ${filterTime}`);
    
    this.carContainerElement.innerHTML = ''

    Car.list
      .filter((car) => {
        let avail = new Date(car.availableAt);
        if (
          parseInt(numPassengers) === car.capacity
          && typeDriver === car.available
          && filterDateTime.getDate() === avail.getDate()
          && filterDateTime.getMonth() === avail.getMonth()
          && filterDateTime.getFullYear() === avail.getFullYear()
          && avail.getTime() > filterDateTime.getTime()
        ) {
          console.log(car);
          return car;
        }
      })
      .map((car) => {
        let col = document.createElement("div");
        col.className = "col-md-4";
        col.innerHTML = car.render();
        this.carContainerElement.appendChild(col);
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
}
