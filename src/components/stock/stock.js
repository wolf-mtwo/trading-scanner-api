import { Populate } from './populate';

let populate = new Populate();

export class Stock {

  static populate() {
    return populate.start();
  }
}
