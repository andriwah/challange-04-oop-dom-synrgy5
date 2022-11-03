class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({ id, plate, manufacture, model, image, rentPerDay, capacity, description, transmission, available, type, year, options, specs, availableAt }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class="col mt-3">
        <div class="card w-75 h-100">
          <img src="${this.image}" class="card-img-top" alt="${this.manufacture}";/>
          <div class="card-body">
            <h6 class="card-title fw-bold">${this.manufacture} ${this.model}</h6>
            <p class="card-text fw-bold">Rp. ${this.rentPerDay}/hari</p>
            <p class="card-text">${this.description}</p>
            <div class="mt-1"><i class="mt-1 me-2 fa-solid bi-people"> ${this.capacity} People</i></div>
            <div class="tentang mt-1"><i class="mt-1 me-2 icon-mobil fa-solid bi-gear">  ${this.transmission}</i></div>
            <div class="tentang mt-1 mb-2"><i class="mt-1 me-2 icon-mobil fa-solid bi-calendar"> ${this.year}</i></div>
            <a href="#" class="btn btn-success d-flex justify-content-center">Pilih Mobil</a>
          </div>
        </div>
      </div>
    `;
  }
}

// <p>id: <b>${this.id}</b></p>
// <p>plate: <b>${this.plate}</b></p>
// <p>manufacture: <b>${this.manufacture}</b></p>
// <p>model: <b>${this.model}</b></p>
// <p>available at: <b>${this.availableAt}</b></p>
// <img src="${this.image}" alt="${this.manufacture}" width="64px">
