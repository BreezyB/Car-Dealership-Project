namespace myapp.Controllers {
const apiURL = '/api/cars/search/';

    export class HomeController {


    }

    export class CarController {
        public cars;
        public makes;
        carsList:any[];
        search:string;


        public showModal(animalName: string) {
            this.$uibModal.open({

                templateUrl: '/ngApp/views/dDialog.html',
                controller: 'DialogController',
                controllerAs: 'modal',
                resolve: {
                    animalName: () => animalName
                },
                size: 'sm'
            });
        }

        public carSearch;
        public cars2

        fetch() {
            if (this.carSearch) {
                console.log('searching');
                this.$http.get(apiURL + this.carSearch)
                    .then((results) => {
                        this.cars2 = results.data;
                    });
            }
        }




        constructor(public $http: ng.IHttpService, private $state: ng.ui.IStateService, carService:myapp.Services.CarService, makeService:myapp.Services.MakeService,
         private $uibModal: angular.ui.bootstrap.IModalService) {
            this.carsList = carService.listCars();
            this.makes = makeService.listMakes();
            this.cars = carService.listCars();
            console.log(this.makes);
        }
    }

    export class DetailsController {
      public car;
      public id;

      constructor(private carService:myapp.Services.CarService, private $state: ng.ui.IStateService, $stateParams: ng.ui.IStateParamsService) {
        this.car = carService.getCar($stateParams['id']);

    }

}

class DialogController {
        public id;
        public cars;
        public ok() {
            this.$uibModalInstance.close();
        }

        constructor(private carService:myapp.Services.CarService, public animalName: number, private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) {
          this.cars = carService.listCars();

        }
    }


    export class MakeController {
      public make;
      constructor(private $state: ng.ui.IStateService, makeService:myapp.Services.MakeService) {
          this.make = makeService.listMakes();
      }
    }

}
