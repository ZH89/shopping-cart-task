/**
 * Module: Quantity
 */

import { Calculate } from '../modules/calculate';

export class Quantity {

     constructor(opts) {

         // initialise
         this.init();

     }

     /**
      * initialise
      */
     init() {

         // Quantity increment/decrement initialised on pageload
         $(function() {

             $(".m-basket .m-basket__quantity").append('<div class="m-basket__quantity__btns"><div class="inc qty-button">+</div><div class="dec qty-button">-</div></div>');

         });


         // Quantity toggle
         $(document).on('click', '.m-basket__quantity .qty-button', function(){

             let $button = $(this);
             let oldValue = $button.parents('.m-basket__quantity').find("input").val();
             let newVal;

             if ($button.text() == "+") {
               newVal = parseFloat(oldValue) + 1;
             } else {
               if (oldValue > 0) {
                 newVal = parseFloat(oldValue) - 1;
               } else {
                 newVal = 0;
               }
             }

             $button.parents('.m-basket__quantity').find("input").val(newVal);

             this.newCalculate = new Calculate();
             this.newCalculate.calculateCost(this);
             this.newCalculate.calculateSubTotal();
             this.newCalculate.calculateVAT();
             this.newCalculate.calculateTotal();

         });

     }

 };
