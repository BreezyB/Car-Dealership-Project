namespace myapp.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';


      //  constructor(movieService:myapp.Services.movieService) {

      //  }
    }

    export class CarController {
        public cars;

        //public goToDetails(id) {
      //    this.$state.go("carDetails", {id: this.cars.id});
//}

        constructor(private $state: ng.ui.IStateService, carService:myapp.Services.CarService) {
            this.cars = carService.listCars();
        }
    }

    export class DetailsController {
      public car;
      public id;

      public carList;
      public make;
      public carMarkId;


      constructor(private makeService:myapp.Services.MakeService, private carService:myapp.Services.CarService, $stateParams: ng.ui.IStateParamsService) {
        this.id = $stateParams['id'];
        this.carList = carService.listCars();
        this.make = makeService.listMakes();
        this.car = this.carList.id;


      //  this.make.id = this.carList.filter((p) => p.CarMakeId);

      }
    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }


}
