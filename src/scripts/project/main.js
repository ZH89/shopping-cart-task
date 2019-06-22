/**
 * Project controller
 */

import { RemoveButton } from './modules/remove-button';
import { BuyNowButton } from './modules/buy-now-button';
import { Quantity } from './modules/quantity';
import { Calculate } from './modules/calculate';

export class Main {

    constructor() {

        // initialise all modules
        this.initModules();

    }

    initModules() {

        this.moduleRemoveButton = new RemoveButton();
        this.moduleBuyNowButton = new BuyNowButton();
        this.moduleQuantity = new Quantity();
        this.moduleCalculate = new Calculate();

    }

};
