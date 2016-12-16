namespace myapp.Services {

    export class CarService {
        private CarResource;

        public listCars() {
            return this.CarResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.CarResource = $resource('/api/cars');
        }
    }
    angular.module('myapp').service('carService', CarService);
    export class MyService {

    }

    export class MakeService {
      private MakeResource;

      public listMakes() {
        return this.MakeResource.query();
      }

      constructor($resource: ng.resource.IResourceService) {
        this.MakeResource = $resource('/api/makes');
      }
      }
    angular.module('myapp').service('makeService', MakeService);

    }
